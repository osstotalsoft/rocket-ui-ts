"use strict";(self.webpackChunk_totalsoft_rocket_ui=self.webpackChunk_totalsoft_rocket_ui||[]).push([[384],{"./src/stories/inputs/Slider/Slider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Discrete:()=>Discrete,Error:()=>Error,Required:()=>Required,Restricted:()=>Restricted,WithCustomMarks:()=>WithCustomMarks,WithHelperText:()=>WithHelperText,WithLimits:()=>WithLimits,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Inputs/Slider",component:__webpack_require__("./src/components/index.ts").Ap},Default={args:{label:"Basic",min:1,max:12,step:1,decimalScale:0,fullWidth:!0,onChange:null}},WithLimits={parameters:{controls:{hideNoControlsWarning:!0}},args:{label:"With slider limits",min:1,max:12,step:1,decimalScale:0,showSliderLimits:!0,fullWidth:!0,onChange:null}},Required={parameters:{controls:{hideNoControlsWarning:!0}},args:{label:"Required",min:1,max:12,step:1,decimalScale:0,required:!0,fullWidth:!0,onChange:null}},Error={parameters:{controls:{hideNoControlsWarning:!0}},args:{label:"Error",min:1,max:12,step:1,decimalScale:0,error:!0,helperText:"Mandatory field.",fullWidth:!0,onChange:null}},WithHelperText={parameters:{controls:{hideNoControlsWarning:!0}},args:{label:"Helper text",min:1,max:12,step:1,decimalScale:0,helperText:"Enter the number of months.",fullWidth:!0,onChange:null}},WithCustomMarks={parameters:{controls:{hideNoControlsWarning:!0}},args:{label:"With custom marks",min:1,max:12,step:1,decimalScale:0,marks:[{value:1,label:"1 month"},{value:6,label:"6 months"},{value:12,label:"12 months"}],fullWidth:!0,onChange:null}},Restricted={parameters:{controls:{hideNoControlsWarning:!0}},args:{label:"With custom marks",min:1,max:12,decimalScale:0,step:null,marks:[{value:1,label:"1 month"},{value:6,label:"6 months"},{value:12,label:"12 months"}],fullWidth:!0,onChange:null}},Discrete={parameters:{controls:{hideNoControlsWarning:!0}},args:{label:"Discrete",min:1,max:12,step:1,decimalScale:0,marks:!0,fullWidth:!0,onChange:null}},__namedExportsOrder=["Default","WithLimits","Required","Error","WithHelperText","WithCustomMarks","Restricted","Discrete"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Basic',\n    min: 1,\n    max: 12,\n    step: 1,\n    decimalScale: 0,\n    fullWidth: true,\n    onChange: null\n  }\n}",...Default.parameters?.docs?.source},description:{story:"Sliders reflect a range of values along a bar, from which users may select a single value.\nThey are ideal for adjusting settings such as volume, brightness, or applying image filters.",...Default.parameters?.docs?.description}}},WithLimits.parameters={...WithLimits.parameters,docs:{...WithLimits.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    controls: {\n      hideNoControlsWarning: true\n    }\n  },\n  args: {\n    label: 'With slider limits',\n    min: 1,\n    max: 12,\n    step: 1,\n    decimalScale: 0,\n    showSliderLimits: true,\n    fullWidth: true,\n    onChange: null\n  }\n}",...WithLimits.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    controls: {\n      hideNoControlsWarning: true\n    }\n  },\n  args: {\n    label: 'Required',\n    min: 1,\n    max: 12,\n    step: 1,\n    decimalScale: 0,\n    required: true,\n    fullWidth: true,\n    onChange: null\n  }\n}",...Required.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    controls: {\n      hideNoControlsWarning: true\n    }\n  },\n  args: {\n    label: 'Error',\n    min: 1,\n    max: 12,\n    step: 1,\n    decimalScale: 0,\n    error: true,\n    helperText: 'Mandatory field.',\n    fullWidth: true,\n    onChange: null\n  }\n}",...Error.parameters?.docs?.source}}},WithHelperText.parameters={...WithHelperText.parameters,docs:{...WithHelperText.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    controls: {\n      hideNoControlsWarning: true\n    }\n  },\n  args: {\n    label: 'Helper text',\n    min: 1,\n    max: 12,\n    step: 1,\n    decimalScale: 0,\n    helperText: 'Enter the number of months.',\n    fullWidth: true,\n    onChange: null\n  }\n}",...WithHelperText.parameters?.docs?.source}}},WithCustomMarks.parameters={...WithCustomMarks.parameters,docs:{...WithCustomMarks.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    controls: {\n      hideNoControlsWarning: true\n    }\n  },\n  args: {\n    label: 'With custom marks',\n    min: 1,\n    max: 12,\n    step: 1,\n    decimalScale: 0,\n    marks: [{\n      value: 1,\n      label: '1 month'\n    }, {\n      value: 6,\n      label: '6 months'\n    }, {\n      value: 12,\n      label: '12 months'\n    }],\n    fullWidth: true,\n    onChange: null\n  }\n}",...WithCustomMarks.parameters?.docs?.source},description:{story:"You can have custom marks by providing a rich array to the `marks` prop.",...WithCustomMarks.parameters?.docs?.description}}},Restricted.parameters={...Restricted.parameters,docs:{...Restricted.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    controls: {\n      hideNoControlsWarning: true\n    }\n  },\n  args: {\n    label: 'With custom marks',\n    min: 1,\n    max: 12,\n    decimalScale: 0,\n    step: null,\n    marks: [{\n      value: 1,\n      label: '1 month'\n    }, {\n      value: 6,\n      label: '6 months'\n    }, {\n      value: 12,\n      label: '12 months'\n    }],\n    fullWidth: true,\n    onChange: null\n  }\n}",...Restricted.parameters?.docs?.source},description:{story:"You can restrict the selectable values to those provided with the `marks` prop with `step={null}`.",...Restricted.parameters?.docs?.description}}},Discrete.parameters={...Discrete.parameters,docs:{...Discrete.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    controls: {\n      hideNoControlsWarning: true\n    }\n  },\n  args: {\n    label: 'Discrete',\n    min: 1,\n    max: 12,\n    step: 1,\n    decimalScale: 0,\n    marks: true,\n    fullWidth: true,\n    onChange: null\n  }\n}",...Discrete.parameters?.docs?.source},description:{story:"Discrete sliders can be adjusted to a specific value by referencing its value indicator. You can generate a mark for each step with `marks={true}`.",...Discrete.parameters?.docs?.description}}}}}]);