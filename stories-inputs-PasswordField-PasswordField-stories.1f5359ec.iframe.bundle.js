"use strict";(self.webpackChunk_totalsoft_rocket_ui=self.webpackChunk_totalsoft_rocket_ui||[]).push([[716],{"./src/stories/inputs/PasswordField/PasswordField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,States:()=>States,Variants:()=>Variants,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PasswordField_stories});var react=__webpack_require__("../../../.yarn/berry/cache/react-npm-18.3.1-af38f3c1ae-10c0.zip/node_modules/react/index.js"),components=__webpack_require__("./src/components/index.ts"),Grid2=__webpack_require__("./.yarn/__virtual__/@mui-material-virtual-2baa73ee9f/4/.yarn/berry/cache/@mui-material-npm-6.1.6-6fe62c1d46-10c0.zip/node_modules/@mui/material/Grid2/Grid2.js");const VariantsPreview=()=>react.createElement(Grid2.A,{container:!0},react.createElement(Grid2.A,{container:!0,spacing:3,size:12},react.createElement(Grid2.A,null,react.createElement(components.s3,{label:"Standard (default)",value:""})),react.createElement(Grid2.A,null,react.createElement(components.s3,{label:"Outlined",variant:"outlined",value:""})),react.createElement(Grid2.A,null,react.createElement(components.s3,{label:"Filled",variant:"filled",value:""})))),PasswordField_VariantsPreview=VariantsPreview;VariantsPreview.__docgenInfo={description:"",methods:[],displayName:"VariantsPreview"};const StatesPreview=()=>react.createElement(Grid2.A,{container:!0},react.createElement(Grid2.A,{container:!0,spacing:3,size:12},react.createElement(Grid2.A,null,react.createElement(components.s3,{label:"Read-only",readOnly:!0,value:"password"})),react.createElement(Grid2.A,null,react.createElement(components.s3,{label:"Disabled",disabled:!0})),react.createElement(Grid2.A,null,react.createElement(components.s3,{label:"Error",error:!0,value:"",helperText:"Incorrect password"})))),PasswordField_StatesPreview=StatesPreview;StatesPreview.__docgenInfo={description:"",methods:[],displayName:"StatesPreview"};const PasswordField_stories={title:"Components/Inputs/PasswordField",component:components.s3},Default={args:{label:"Standard (default)",value:"",onChange:void 0}},Variants={parameters:{controls:{hideNoControlsWarning:!0},docs:{source:{code:'\n              <PasswordField \n                label="Outlined" \n                variant="outlined" \n                value={\'\'}\n              />\n              ',format:!0}}},render:()=>react.createElement(PasswordField_VariantsPreview,null)},States={parameters:{controls:{hideNoControlsWarning:!0},docs:{source:{code:'\n              <PasswordField \n                label="Error" \n                error \n                value={\'\'}\n                helperText="Incorrect password"\n              />\n              ',format:!0}}},render:()=>react.createElement(PasswordField_StatesPreview,null)},__namedExportsOrder=["Default","Variants","States"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Standard (default)',\n    value: '',\n    onChange: undefined\n  }\n}",...Default.parameters?.docs?.source},description:{story:"The PasswordFieldComponent wrapper component is a complete form control including a label, input, and help text.",...Default.parameters?.docs?.description}}},Variants.parameters={...Variants.parameters,docs:{...Variants.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    controls: {\n      hideNoControlsWarning: true\n    },\n    docs: {\n      source: {\n        code: `\n              <PasswordField \n                label="Outlined" \n                variant="outlined" \n                value={\'\'}\n              />\n              `,\n        format: true\n      }\n    }\n  },\n  render: () => <VariantsPreview />\n}',...Variants.parameters?.docs?.source},description:{story:"It comes with three variants: `standard` (default), `outlined` and `filled`.",...Variants.parameters?.docs?.description}}},States.parameters={...States.parameters,docs:{...States.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    controls: {\n      hideNoControlsWarning: true\n    },\n    docs: {\n      source: {\n        code: `\n              <PasswordField \n                label="Error" \n                error \n                value={\'\'}\n                helperText="Incorrect password"\n              />\n              `,\n        format: true\n      }\n    }\n  },\n  render: () => <StatesPreview />\n}',...States.parameters?.docs?.source},description:{story:"The `error` prop toggles the error state. The `helperText` prop can then be used to provide feedback to the user about the error.",...States.parameters?.docs?.description}}}}}]);