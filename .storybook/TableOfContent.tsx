// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.
import React, { useEffect, useRef } from 'react'
import { Subheading } from '@storybook/blocks'
import { makeStyles } from 'tss-react/mui'
import { addons } from '@storybook/addons'
import { NAVIGATE_URL } from '@storybook/core-events'

export const nameToHash = (id: string): string => id.toLowerCase().replace(/[^a-z0-9]/gi, '-')

const useTocStyles = makeStyles()({
  root: {
    top: '64px',
    position: 'sticky',
    marginLeft: '40px',
    flexBasis: '200px',
    flexShrink: 0,
    [`@media screen and (max-width: 1300px)`]: {
      display: 'none'
    }
  },
  ol: {
    position: 'relative',
    listStyleType: 'none',
    padding: 0,
    marginLeft: 0,
    marginTop: 0,
    paddingInlineStart: '30px',
    '& li': {
      marginBottom: '15px',
      lineHeight: '16px'
    },
    '& a': {
      textDecorationLine: 'none',
      color: '#201F1E',
      fontSize: '14px'
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      height: '100%',
      width: '3px',
      backgroundColor: '#EDEBE9'
    }
  },
  selected: {
    fontWeight: 'bold',
    position: 'relative',
    '& a': {
      color: '#029CFD'
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      left: '-30px',
      top: 0,
      bottom: 0,
      width: '3px',
      backgroundColor: '#029CFD'
    }
  }
})

export function TableOfContent({ stories }) {
  const [selected, setSelected] = React.useState('')
  const isNavigating = useRef<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        if (isNavigating.current) {
          isNavigating.current = false
          return
        }
        for (const entry of entries) {
          const { intersectionRatio, target } = entry
          if (intersectionRatio > 0.5) {
            setSelected(target.id)
            return
          }
        }
      },
      {
        threshold: [0.5]
      }
    )

    stories.forEach(link => {
      const element = document.getElementById(nameToHash(link.name))
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [stories])

  const tocItems = stories.map(item => {
    return { ...item, selected: nameToHash(item.name) === selected }
  })
  const { classes } = useTocStyles()
  return (
    <nav className={classes.root}>
      <Subheading>Content</Subheading>
      <ol className={classes.ol}>
        {tocItems?.map(s => {
          const name = nameToHash(s.name)
          return (
            <li key={s.id} className={s.selected ? classes.selected : ''}>
              <a
                href={`#${name}`}
                target="_self"
                onClick={e => {
                  isNavigating.current = true
                  addons.getChannel().emit(NAVIGATE_URL, `#${name}`)
                  setSelected(name)
                }}
              >
                {s.name}
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
