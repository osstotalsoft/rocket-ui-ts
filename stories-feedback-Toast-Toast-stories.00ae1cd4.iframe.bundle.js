"use strict";(self.webpackChunk_totalsoft_rocket_ui=self.webpackChunk_totalsoft_rocket_ui||[]).push([[322],{"./src/stories/feedback/Toast/Toast.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Positions:function(){return Positions},Transitions:function(){return Transitions},Variants:function(){return Variants},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Toast_stories}});var react=__webpack_require__("../../../.yarn/berry/cache/react-npm-18.2.0-1eae08fee2-10c0.zip/node_modules/react/index.js"),components=__webpack_require__("./src/components/index.ts"),Grid=__webpack_require__("./.yarn/__virtual__/@mui-material-virtual-6eb82f048f/4/.yarn/berry/cache/@mui-material-npm-5.16.0-a68e3c876b-10c0.zip/node_modules/@mui/material/Grid/Grid.js");const VariantsPreview=()=>{const addToast=(0,components.pm)(),addPromiseToast=(0,components.C4)();return react.createElement(Grid.ZP,{container:!0,spacing:2,justifyItems:"flex-start"},react.createElement(Grid.ZP,{item:!0,xs:2},react.createElement(components.zx,{size:"small",color:"primary",onClick:()=>addToast('Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',"success")},"Success toast")),react.createElement(Grid.ZP,{item:!0,xs:2},react.createElement(components.zx,{size:"small",color:"primary",onClick:()=>addToast("This is an info message!","info")},"Info toast")),react.createElement(Grid.ZP,{item:!0,xs:2},react.createElement(components.zx,{size:"small",color:"primary",onClick:()=>addToast("This is a warning message!","warning")},"Warning toast")),react.createElement(Grid.ZP,{item:!0,xs:2},react.createElement(components.zx,{size:"small",color:"primary",onClick:()=>addToast("This is an error message!","error")},"Error toast")),react.createElement(Grid.ZP,{item:!0,xs:2},react.createElement(components.zx,{size:"small",color:"primary",onClick:()=>addToast("This is a default message!")},"Default toast")),react.createElement(Grid.ZP,{item:!0,xs:2},react.createElement(components.zx,{size:"small",color:"primary",onClick:()=>addPromiseToast(new Promise((resolve=>setTimeout(resolve,3e3))),"Promise is pending","Promise resolved 👌","Promise rejected 🤯")},"Promise toast")))};var Toast_VariantsPreview=VariantsPreview;VariantsPreview.__docgenInfo={description:"",methods:[],displayName:"VariantsPreview"};var react_toastify_esm=__webpack_require__("./.yarn/__virtual__/react-toastify-virtual-f2ae85aa8a/4/.yarn/berry/cache/react-toastify-npm-8.2.0-3f638b6659-10c0.zip/node_modules/react-toastify/dist/react-toastify.esm.js");const PositionsPreview=()=>{const addToast=(0,components.pm)();return react.createElement(Grid.ZP,{container:!0,spacing:2,justifyItems:"flex-start"},react.createElement(Grid.ZP,{item:!0,xs:2},react.createElement(components.zx,{size:"small",color:"primary",onClick:()=>addToast("This is a success message!",react_toastify_esm.Am.TYPE.SUCCESS,{position:"top-left"})},"Top Left Position")),react.createElement(Grid.ZP,{item:!0,xs:2},react.createElement(components.zx,{size:"small",color:"primary",onClick:()=>addToast("This the default position!",react_toastify_esm.Am.TYPE.INFO,{position:"top-center"})},"Top Center Position")),react.createElement(Grid.ZP,{item:!0,xs:2},react.createElement(components.zx,{size:"small",color:"primary",onClick:()=>addToast("This is a warning message!",react_toastify_esm.Am.TYPE.WARNING,{position:"top-right"})},"Top Right Position")),react.createElement(Grid.ZP,{item:!0,xs:2},react.createElement(components.zx,{size:"small",color:"primary",onClick:()=>addToast("This is an error message!",react_toastify_esm.Am.TYPE.ERROR,{position:"bottom-right"})},"Bottom Right Position")),react.createElement(Grid.ZP,{item:!0,xs:2},react.createElement(components.zx,{size:"small",color:"primary",onClick:()=>addToast("This is a default message!",react_toastify_esm.Am.TYPE.SUCCESS,{position:"bottom-center"})},"Bottom Center Position")),react.createElement(Grid.ZP,{item:!0,xs:2},react.createElement(components.zx,{size:"small",color:"primary",onClick:()=>addToast("This is a default message!",react_toastify_esm.Am.TYPE.WARNING,{position:"bottom-left"})},"Bottom Left Position")))};var Toast_PositionsPreview=PositionsPreview;PositionsPreview.__docgenInfo={description:"",methods:[],displayName:"PositionsPreview"};const TransitionsPreview=()=>{const addToast=(0,components.pm)();return react.createElement(Grid.ZP,{container:!0,spacing:2,justifyItems:"flex-start"},react.createElement(Grid.ZP,{item:!0,xs:2},react.createElement(components.zx,{size:"small",color:"primary",onClick:()=>addToast("This is a success message!","success",{transitionType:"Slide"})},"Slide transition")),react.createElement(Grid.ZP,{item:!0,xs:2},react.createElement(components.zx,{size:"small",color:"primary",onClick:()=>addToast("This is an info message!","info",{transitionType:"Zoom"})},"Zoom transition")),react.createElement(Grid.ZP,{item:!0,xs:2},react.createElement(components.zx,{size:"small",color:"primary",onClick:()=>addToast("This is a warning message!","warning",{transitionType:"Bounce"})},"Bounce transition")),react.createElement(Grid.ZP,{item:!0,xs:2},react.createElement(components.zx,{size:"small",color:"primary",onClick:()=>addToast("This is an error message!","error",{transitionType:"Flip"})},"Flip transition")))};var Toast_TransitionsPreview=TransitionsPreview;TransitionsPreview.__docgenInfo={description:"",methods:[],displayName:"TransitionsPreview"};var Toast_stories={title:"Components/Feedback/Toast",component:components.Ix};const Variants={render:()=>react.createElement(Toast_VariantsPreview,null)},Positions={render:()=>react.createElement(Toast_PositionsPreview,null)},Transitions={render:()=>react.createElement(Toast_TransitionsPreview,null)},__namedExportsOrder=["Variants","Positions","Transitions"];Variants.parameters={...Variants.parameters,docs:{...Variants.parameters?.docs,source:{originalSource:"{\n  render: () => <VariantsPreview />\n}",...Variants.parameters?.docs?.source},description:{story:"There are multiple variants form which you can choose from:\n- success\n- info\n- warning\n- error\n- promise",...Variants.parameters?.docs?.description}}},Positions.parameters={...Positions.parameters,docs:{...Positions.parameters?.docs,source:{originalSource:"{\n  render: () => <PositionsPreview />\n}",...Positions.parameters?.docs?.source},description:{story:"Different positions are available for rendering toast.",...Positions.parameters?.docs?.description}}},Transitions.parameters={...Transitions.parameters,docs:{...Transitions.parameters?.docs,source:{originalSource:"{\n  render: () => <TransitionsPreview />\n}",...Transitions.parameters?.docs?.source},description:{story:"You can change the direction of the Toast transition.\nAvailable options are:\n- Slide\n- Bounce\n- Flip\n- Zoom\nDefault is set to 'Slide'.",...Transitions.parameters?.docs?.description}}}}}]);