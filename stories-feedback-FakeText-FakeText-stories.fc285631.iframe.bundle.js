"use strict";(self.webpackChunk_totalsoft_rocket_ui=self.webpackChunk_totalsoft_rocket_ui||[]).push([[180],{"./src/stories/feedback/FakeText/FakeText.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Animations:()=>Animations,Default:()=>Default,Variants:()=>Variants,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FakeText_stories});var react=__webpack_require__("../../../.yarn/berry/cache/react-npm-18.3.1-af38f3c1ae-10c0.zip/node_modules/react/index.js"),components=__webpack_require__("./src/components/index.ts"),Grid=__webpack_require__("./.yarn/__virtual__/@mui-material-virtual-50bcb6f5bc/4/.yarn/berry/cache/@mui-material-npm-5.16.7-7070122752-10c0.zip/node_modules/@mui/material/Grid/Grid.js"),Typography=__webpack_require__("./.yarn/__virtual__/@mui-material-virtual-50bcb6f5bc/4/.yarn/berry/cache/@mui-material-npm-5.16.7-7070122752-10c0.zip/node_modules/@mui/material/Typography/Typography.js");const AnimationsPreview=()=>react.createElement(Grid.Ay,{container:!0,rowSpacing:2,columnSpacing:4},react.createElement(Grid.Ay,{item:!0,sm:4},react.createElement(Typography.A,{textAlign:"center"},"wave"),react.createElement(components.nA,{variant:"text",animation:"wave",lines:6})),react.createElement(Grid.Ay,{item:!0,sm:4},react.createElement(Typography.A,{textAlign:"center"},"pulse"),react.createElement(components.nA,{variant:"text",animation:"pulse",lines:6})),react.createElement(Grid.Ay,{item:!0,sm:4},react.createElement(Typography.A,{textAlign:"center"},"false"),react.createElement(components.nA,{variant:"text",animation:!1,lines:6})),react.createElement(Grid.Ay,{item:!0,sm:4},react.createElement(Typography.A,{textAlign:"center"},"wave"),react.createElement(components.nA,{variant:"rectangular",animation:"wave",height:100})),react.createElement(Grid.Ay,{item:!0,sm:4},react.createElement(Typography.A,{textAlign:"center"},"pulse"),react.createElement(components.nA,{variant:"rectangular",animation:"pulse",height:100})),react.createElement(Grid.Ay,{item:!0,sm:4},react.createElement(Typography.A,{textAlign:"center"},"false"),react.createElement(components.nA,{variant:"rectangular",animation:!1,height:100}))),FakeText_AnimationsPreview=AnimationsPreview;AnimationsPreview.__docgenInfo={description:"",methods:[],displayName:"AnimationsPreview"};const VariantsPreview=()=>react.createElement(Grid.Ay,{container:!0,rowSpacing:2,columnSpacing:4},react.createElement(Grid.Ay,{item:!0,sm:3},react.createElement(Typography.A,{textAlign:"center"},"text"),react.createElement(components.nA,{lines:4})),react.createElement(Grid.Ay,{item:!0,sm:3},react.createElement(Typography.A,{textAlign:"center"},"circular "),react.createElement(components.nA,{variant:"circular",width:80,height:80})),react.createElement(Grid.Ay,{item:!0,sm:3},react.createElement(Typography.A,{textAlign:"center"},"rectangular "),react.createElement(components.nA,{variant:"rectangular",height:80})),react.createElement(Grid.Ay,{item:!0,sm:3},react.createElement(Typography.A,{textAlign:"center"},"rounded "),react.createElement(components.nA,{variant:"rounded",height:80}))),FakeText_VariantsPreview=VariantsPreview;VariantsPreview.__docgenInfo={description:"",methods:[],displayName:"VariantsPreview"};const FakeText_stories={title:"Components/Feedback/FakeText",component:components.nA},Default={args:{lines:4,onPaper:!1,width:"400px"}},Variants={parameters:{docs:{source:{code:"<FakeText lines={4} variant={one of the above options}/>"}}},render:()=>react.createElement(FakeText_VariantsPreview,null)},Animations={parameters:{docs:{source:{code:"<FakeText lines={4} variant={text} animation={your choice}/>"}}},render:()=>react.createElement(FakeText_AnimationsPreview,null)},__namedExportsOrder=["Default","Variants","Animations"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    lines: 4,\n    onPaper: false,\n    width: '400px'\n  }\n}",...Default.parameters?.docs?.source}}},Variants.parameters={...Variants.parameters,docs:{...Variants.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      source: {\n        code: '<FakeText lines={4} variant={one of the above options}/>'\n      }\n    }\n  },\n  render: () => <VariantsPreview />\n}",...Variants.parameters?.docs?.source},description:{story:"The component supports 4 shape variants:\n- `text` (default): represents a single line of text (you can adjust the height via font size).\n- `circular`, `rectangular`, and `rounded`: come with different border radius to let you take control of the size.",...Variants.parameters?.docs?.description}}},Animations.parameters={...Animations.parameters,docs:{...Animations.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      source: {\n        code: '<FakeText lines={4} variant={text} animation={your choice}/>'\n      }\n    }\n  },\n  render: () => <AnimationsPreview />\n}",...Animations.parameters?.docs?.source},description:{story:"By default, `animation` is set to `wave`, but you can change the animation to a `pulse` or disable it entirely.",...Animations.parameters?.docs?.description}}}}}]);