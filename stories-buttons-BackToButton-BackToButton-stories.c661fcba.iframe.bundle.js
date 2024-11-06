"use strict";(self.webpackChunk_totalsoft_rocket_ui=self.webpackChunk_totalsoft_rocket_ui||[]).push([[676],{"./src/stories/buttons/BackToButton/BackToButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BackToButton:()=>BackToButton,FontSizes:()=>FontSizes,Sizes:()=>Sizes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../.yarn/berry/cache/react-npm-18.3.1-af38f3c1ae-10c0.zip/node_modules/react/index.js"),components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/index.ts"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.yarn/__virtual__/@mui-material-virtual-50bcb6f5bc/4/.yarn/berry/cache/@mui-material-npm-5.16.7-7070122752-10c0.zip/node_modules/@mui/material/Box/Box.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./.yarn/__virtual__/react-router-dom-virtual-6a4d44dc8e/4/.yarn/berry/cache/react-router-dom-npm-6.27.0-de32a53fc4-10c0.zip/node_modules/react-router-dom/dist/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Buttons/BackToButton",component:components__WEBPACK_IMPORTED_MODULE_1__.zA},BackToButton={parameters:{docs:{source:{code:"\n        <BackToButton path={path}/>\n        ",format:!0}}},render:args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Kd,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(components__WEBPACK_IMPORTED_MODULE_1__.zA,{tooltip:"redirect to provided path",path:"/buttons/icon-button",...args}))},Sizes={parameters:{controls:{hideNoControlsWarning:!0},docs:{source:{code:'\n        <BackToButton size="size-code-here"/>\n        ',format:!0}}},render:()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{columnGap:"15px",display:"flex"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Kd,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(components__WEBPACK_IMPORTED_MODULE_1__.zA,{size:"small",tooltip:"small",path:"/buttons/icon-button"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(components__WEBPACK_IMPORTED_MODULE_1__.zA,{size:"medium",tooltip:"medium (default)",path:"/buttons/icon-button"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(components__WEBPACK_IMPORTED_MODULE_1__.zA,{size:"large",tooltip:"large",path:"/buttons/icon-button"})))},FontSizes={parameters:{controls:{hideNoControlsWarning:!0},docs:{source:{code:'\n        <BackToButton fontSize="size-code-here"/>\n        ',format:!0}}},render:()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{columnGap:"15px",display:"flex"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Kd,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(components__WEBPACK_IMPORTED_MODULE_1__.zA,{tooltip:"small (default)",path:"/buttons/icon-button"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(components__WEBPACK_IMPORTED_MODULE_1__.zA,{tooltip:"medium",fontSize:"medium",path:"/buttons/icon-button"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(components__WEBPACK_IMPORTED_MODULE_1__.zA,{tooltip:"large",fontSize:"large",path:"/buttons/icon-button"})))},__namedExportsOrder=["BackToButton","Sizes","FontSizes"];BackToButton.parameters={...BackToButton.parameters,docs:{...BackToButton.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      source: {\n        code: `\n        <BackToButton path={path}/>\n        `,\n        format: true\n      }\n    }\n  },\n  render: args => <BrowserRouter>\n      <BackToButtonComponent tooltip="redirect to provided path" path="/buttons/icon-button" {...args} />\n    </BrowserRouter>\n}',...BackToButton.parameters?.docs?.source},description:{story:"The BackToButton component.",...BackToButton.parameters?.docs?.description}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    controls: {\n      hideNoControlsWarning: true\n    },\n    docs: {\n      source: {\n        code: `\n        <BackToButton size="size-code-here"/>\n        `,\n        format: true\n      }\n    }\n  },\n  render: () => <Box columnGap="15px" display="flex">\n      <BrowserRouter>\n        <BackToButtonComponent size="small" tooltip="small" path="/buttons/icon-button" />\n        <BackToButtonComponent size="medium" tooltip="medium (default)" path="/buttons/icon-button" />\n        <BackToButtonComponent size="large" tooltip="large" path="/buttons/icon-button" />\n      </BrowserRouter>\n    </Box>\n}',...Sizes.parameters?.docs?.source},description:{story:"A BackToButton supports `tiny`, `small`, `medium` and `large` size. Default size is `medium`.",...Sizes.parameters?.docs?.description}}},FontSizes.parameters={...FontSizes.parameters,docs:{...FontSizes.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    controls: {\n      hideNoControlsWarning: true\n    },\n    docs: {\n      source: {\n        code: `\n        <BackToButton fontSize="size-code-here"/>\n        `,\n        format: true\n      }\n    }\n  },\n  render: () => <Box columnGap="15px" display="flex">\n      <BrowserRouter>\n        <BackToButtonComponent tooltip="small (default)" path="/buttons/icon-button" />\n        <BackToButtonComponent tooltip="medium" fontSize="medium" path="/buttons/icon-button" />\n        <BackToButtonComponent tooltip="large" fontSize="large" path="/buttons/icon-button" />\n      </BrowserRouter>\n    </Box>\n}',...FontSizes.parameters?.docs?.source},description:{story:"A BackToButton supports `inherit`, `small`, `medium`, `large` size. Default size is `small`.",...FontSizes.parameters?.docs?.description}}}}}]);