"""
Build a component dependency graph from a React/TypeScript codebase and emit a
topologically-sorted task list, leaves first.

A "component" is identified by an exporting file (.tsx) under the given root.
A dependency A -> B exists when A's file (or A's directory) imports from B's
directory via a relative import path.

Output is a JSON list:

  [
    {
      "name": "IconButton",
      "path": "src/components/buttons/IconButton/IconButton.tsx",
      "depends_on": [],
      "test_file": "src/components/buttons/IconButton/IconButton.test.tsx",
      "story_file": "src/stories/buttons/IconButton/IconButton.stories.tsx"
    },
    ...
  ]

Components are emitted in topological order such that a component is only
listed after every component it depends on. This is the order the skill uses
to migrate components one-by-one: children before parents.

Usage:
  python build_dep_graph.py --root src/components --out tasks.json
  python build_dep_graph.py --root src/components --stories-root src/stories
"""

import argparse
import json
import os
import re
import sys
from collections import defaultdict, deque
from pathlib import Path

IMPORT_RE = re.compile(
    r"""^\s*import\s+(?:[^'"]*?\s+from\s+)?['"]([^'"]+)['"]""",
    re.MULTILINE,
)
COMPONENT_FILE_RE = re.compile(r"^[A-Z][A-Za-z0-9]*\.tsx$")


def find_components(root: Path):
    """Return a dict name -> Path for each component file under root.

    A component file is a .tsx file whose stem starts with a capital letter,
    is not a test (.test.tsx), and is not a stories file (.stories.tsx).
    """
    components = {}
    for path in root.rglob("*.tsx"):
        name = path.name
        if name.endswith(".test.tsx") or name.endswith(".stories.tsx"):
            continue
        if not COMPONENT_FILE_RE.match(name):
            continue
        stem = path.stem
        if stem in components:
            # Disambiguate by preferring shorter paths (component in its own dir)
            existing = components[stem]
            if len(path.parts) < len(existing.parts):
                components[stem] = path
        else:
            components[stem] = path
    return components


def extract_imports(file_path: Path):
    try:
        text = file_path.read_text(encoding="utf-8")
    except (OSError, UnicodeDecodeError):
        return []
    return IMPORT_RE.findall(text)


def resolve_relative(importer: Path, spec: str, root: Path):
    """Resolve a relative import spec to a path. Returns None for non-relative.

    Handles `./Foo`, `../Foo`, and directory imports (`./Foo` -> `./Foo/index.ts`
    or `./Foo/Foo.tsx`).
    """
    if not spec.startswith("."):
        return None
    target = (importer.parent / spec).resolve()
    candidates = [
        target,
        target.with_suffix(".tsx"),
        target.with_suffix(".ts"),
        target / "index.tsx",
        target / "index.ts",
        target / f"{target.name}.tsx",
    ]
    for c in candidates:
        try:
            if c.is_file():
                return c.resolve()
        except OSError:
            continue
    return None


def build_graph(components: dict, root: Path):
    """Build an adjacency list: component -> set of components it depends on."""
    by_resolved = {p.resolve(): name for name, p in components.items()}
    # Many libraries re-export each component through `<Dir>/index.ts(x)`. A relative
    # import like `../../buttons/IconButton` will resolve to that index file, not to
    # the component .tsx. Alias both index files to the component name so the
    # dependency edge isn't lost.
    for name, p in list(components.items()):
        comp_dir = p.parent
        if p.stem == comp_dir.name:
            for index_name in ("index.tsx", "index.ts"):
                idx = comp_dir / index_name
                if idx.is_file():
                    by_resolved.setdefault(idx.resolve(), name)
    graph = defaultdict(set)
    for name, path in components.items():
        for spec in extract_imports(path):
            resolved = resolve_relative(path, spec, root)
            if resolved is None:
                continue
            dep_name = by_resolved.get(resolved)
            if dep_name and dep_name != name:
                graph[name].add(dep_name)
        graph.setdefault(name, set())
    return graph


def topological_sort(graph):
    """Return components in dependency-first (leaves-first) order.

    A node with no outgoing edges (depends on nothing) comes first.
    Tied nodes are sorted alphabetically for determinism.
    Cycles (rare in well-structured React) are broken by emitting the
    lowest-name node in the cycle and continuing.
    """
    indegree = {n: 0 for n in graph}
    reverse = defaultdict(set)
    for node, deps in graph.items():
        for dep in deps:
            reverse[dep].add(node)
            indegree[node] = indegree.get(node, 0)
    for dep in graph:
        for node in reverse[dep]:
            pass

    # Outgoing-edge count: a leaf has zero deps.
    ready = sorted([n for n, deps in graph.items() if not deps])
    visited = set(ready)
    order = list(ready)
    remaining = {n: set(deps) for n, deps in graph.items() if deps}

    while remaining:
        progressed = False
        for parent in sorted(list(remaining.keys())):
            deps = remaining[parent]
            if deps.issubset(visited):
                order.append(parent)
                visited.add(parent)
                del remaining[parent]
                progressed = True
        if not progressed:
            # Cycle: break by picking the lexicographically smallest remaining
            stuck = sorted(remaining.keys())[0]
            order.append(stuck)
            visited.add(stuck)
            del remaining[stuck]

    return order


def find_companion(component_path: Path, suffix: str, stories_root: Path = None):
    """Find a sibling test/story file. Looks in the component's directory,
    then optionally under stories_root mirroring the relative path."""
    name = component_path.stem
    candidates = [
        component_path.with_name(f"{name}{suffix}"),
        component_path.parent / f"{name}{suffix}",
    ]
    for c in candidates:
        if c.is_file():
            return c

    if stories_root and suffix.startswith(".stories"):
        # Many libraries mirror src/components/foo -> src/stories/foo
        # Walk stories_root for a matching name.
        for path in stories_root.rglob(f"{name}{suffix}"):
            return path

    return None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", required=True, help="Component root, e.g. src/components")
    ap.add_argument("--stories-root", help="Optional separate stories root, e.g. src/stories")
    ap.add_argument("--out", help="Output JSON path; default: stdout")
    args = ap.parse_args()

    root = Path(args.root).resolve()
    stories_root = Path(args.stories_root).resolve() if args.stories_root else None
    if not root.is_dir():
        print(f"error: {root} is not a directory", file=sys.stderr)
        return 2

    components = find_components(root)
    if not components:
        print(f"error: no components found under {root}", file=sys.stderr)
        return 1

    graph = build_graph(components, root)
    order = topological_sort(graph)

    result = []
    repo_root = root.parent if root.name == "components" else root
    for name in order:
        path = components[name]
        test_file = find_companion(path, ".test.tsx")
        story_file = find_companion(path, ".stories.tsx", stories_root)
        result.append({
            "name": name,
            "path": str(path.relative_to(root.parent.parent if root.parent.parent.exists() else root.parent)),
            "depends_on": sorted(graph[name]),
            "test_file": str(test_file.relative_to(root.parent.parent)) if test_file else None,
            "story_file": str(story_file.relative_to(root.parent.parent)) if story_file else None,
        })

    output = json.dumps(result, indent=2)
    if args.out:
        Path(args.out).write_text(output, encoding="utf-8")
    else:
        print(output)
    return 0


if __name__ == "__main__":
    sys.exit(main())
