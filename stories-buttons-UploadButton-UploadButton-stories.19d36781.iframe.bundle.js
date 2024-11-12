"use strict";(self.webpackChunk_totalsoft_rocket_ui=self.webpackChunk_totalsoft_rocket_ui||[]).push([[466],{"./src/stories/buttons/UploadButton/UploadButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomIcons:()=>CustomIcons,FontSize:()=>FontSize,InputTypes:()=>InputTypes,MobileCapture:()=>MobileCapture,MultipleSelection:()=>MultipleSelection,Sizes:()=>Sizes,UploadButton:()=>UploadButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>UploadButton_stories});var react=__webpack_require__("../../../.yarn/berry/cache/react-npm-18.3.1-af38f3c1ae-10c0.zip/node_modules/react/index.js"),components=__webpack_require__("./src/components/index.ts"),Box=__webpack_require__("./.yarn/__virtual__/@mui-material-virtual-2baa73ee9f/4/.yarn/berry/cache/@mui-material-npm-6.1.6-6fe62c1d46-10c0.zip/node_modules/@mui/material/Box/Box.js");const InputTypesPreview=()=>{const[error,setError]=(0,react.useState)(),handleError=(0,react.useCallback)((err=>setError(err)),[]),handleChoice=(0,react.useCallback)((()=>setError(void 0)),[]);return react.createElement(react.Fragment,null,react.createElement(Box.A,{gap:"15px",display:"flex"},react.createElement(components.s5,{onFilesChanged:handleChoice,tooltip:"All files (default)"}),react.createElement(components.s5,{accept:"image/*",onError:handleError,onFilesChanged:handleChoice,tooltip:"Images"}),react.createElement(components.s5,{accept:"audio/*",onError:handleError,onFilesChanged:handleChoice,tooltip:"Audios"}),react.createElement(components.s5,{accept:".pdf,.txt",onError:handleError,onFilesChanged:handleChoice,tooltip:"Custom (*.pdf, *.txt)"})),react.createElement(Box.A,null,react.createElement(components.o5,{variant:"h6",color:"error"},error?.message),react.createElement(components.o5,{variant:"body1",color:"error"},error?.files?.[0]?.name)))};InputTypesPreview.__docgenInfo={description:"",methods:[],displayName:"InputTypesPreview"};const MobileCapturePreview=()=>react.createElement(react.Fragment,null,react.createElement(Box.A,{gap:"15px",display:"flex"},react.createElement(components.s5,{accept:"image/*",capture:"environment",tooltip:"Environment Camera Photo"}),react.createElement(components.s5,{accept:"image/*",capture:"user",tooltip:"User Camera Photo"}),react.createElement(components.s5,{accept:"video/*",capture:"environment",tooltip:"Environment Camera Video"}),react.createElement(components.s5,{accept:"video/*",capture:"user",tooltip:"User Camera Video"})),react.createElement(Box.A,{maxWidth:"250px"},react.createElement(components.o5,{variant:"caption",style:{maxWidth:"300px"}},"Note these work better on mobile devices; If your device is a desktop computer, you'll likely get a typical file picker.")));MobileCapturePreview.__docgenInfo={description:"",methods:[],displayName:"MobileCapturePreview"};var ClassNameGenerator=__webpack_require__("./.yarn/__virtual__/@mui-utils-virtual-36d84f4e0a/4/.yarn/berry/cache/@mui-utils-npm-6.1.6-7b25509605-10c0.zip/node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js"),createBox=__webpack_require__("./.yarn/__virtual__/@mui-system-virtual-9309363972/4/.yarn/berry/cache/@mui-system-npm-6.1.6-1b3c7c5668-10c0.zip/node_modules/@mui/system/esm/createBox/createBox.js");const Box_boxClasses=(0,__webpack_require__("./.yarn/__virtual__/@mui-utils-virtual-36d84f4e0a/4/.yarn/berry/cache/@mui-utils-npm-6.1.6-7b25509605-10c0.zip/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").A)("MuiBox",["root"]),esm_Box_Box=(0,createBox.A)({defaultClassName:Box_boxClasses.root,generateClassName:ClassNameGenerator.A.generate}),FontSizePreview=()=>react.createElement(react.Fragment,null,react.createElement(esm_Box_Box,{gap:"15px",display:"flex",mb:"15px"},react.createElement(components.s5,{fontSize:"inherit",tooltip:"inherit"}),react.createElement(components.s5,{fontSize:"small",tooltip:"small (default)"}),react.createElement(components.s5,{fontSize:"medium",tooltip:"medium"}),react.createElement(components.s5,{fontSize:"large",tooltip:"large"})),react.createElement(esm_Box_Box,{gap:"15px",display:"flex"},react.createElement(components.s5,{disabled:!0,fontSize:"inherit",tooltip:"inherit"}),react.createElement(components.s5,{disabled:!0,fontSize:"small",tooltip:"small (default)"}),react.createElement(components.s5,{disabled:!0,fontSize:"medium",tooltip:"medium"}),react.createElement(components.s5,{disabled:!0,fontSize:"large",tooltip:"large"})));FontSizePreview.__docgenInfo={description:"",methods:[],displayName:"FontSizePreview"};var _curry2=__webpack_require__("../../../.yarn/berry/cache/ramda-npm-0.30.1-b62811823d-10c0.zip/node_modules/ramda/es/internal/_curry2.js");var curryN=__webpack_require__("../../../.yarn/berry/cache/ramda-npm-0.30.1-b62811823d-10c0.zip/node_modules/ramda/es/curryN.js"),es_toString=__webpack_require__("../../../.yarn/berry/cache/ramda-npm-0.30.1-b62811823d-10c0.zip/node_modules/ramda/es/toString.js");const es_join=(0,_curry2.A)((function invoker(arity,method){return(0,curryN.A)(arity+1,(function(){var target=arguments[arity];if(null!=target&&function _isFunction(x){var type=Object.prototype.toString.call(x);return"[object Function]"===type||"[object AsyncFunction]"===type||"[object GeneratorFunction]"===type||"[object AsyncGeneratorFunction]"===type}(target[method]))return target[method].apply(target,Array.prototype.slice.call(arguments,0,arity));throw new TypeError((0,es_toString.A)(target)+' does not have a method named "'+method+'"')}))}))(1,"join");var map=__webpack_require__("../../../.yarn/berry/cache/ramda-npm-0.30.1-b62811823d-10c0.zip/node_modules/ramda/es/map.js"),prop=__webpack_require__("../../../.yarn/berry/cache/ramda-npm-0.30.1-b62811823d-10c0.zip/node_modules/ramda/es/prop.js");const SizesPreview=()=>{const[error,setError]=(0,react.useState)(),handleError=(0,react.useCallback)((err=>setError(err)),[]),handleChoice=(0,react.useCallback)((()=>setError(void 0)),[]);return react.createElement(react.Fragment,null,react.createElement(esm_Box_Box,{gap:"15px",display:"flex"},react.createElement(components.s5,{onFilesChanged:handleChoice,tooltip:"All files (default)"}),react.createElement(components.s5,{multiple:!0,maxTotalSize:5e3,onError:handleError,onFilesChanged:handleChoice,tooltip:"Max total size 5000 bytes"}),react.createElement(components.s5,{multiple:!0,maxItemSize:5e3,onError:handleError,onFilesChanged:handleChoice,tooltip:"Max item size 5000 bytes"}),react.createElement(components.s5,{multiple:!0,minTotalSize:5e3,onError:handleError,onFilesChanged:handleChoice,tooltip:"Min total size 5000 bytes"}),react.createElement(components.s5,{multiple:!0,minItemSize:5e3,onError:handleError,onFilesChanged:handleChoice,tooltip:"Min item size 5000 bytes"})),react.createElement(esm_Box_Box,null,react.createElement(components.o5,{variant:"h6",color:"error"},error?.message),react.createElement(components.o5,{variant:"body1",color:"error"},error?.files&&es_join("; ",(0,map.A)((0,prop.A)("name"),error.files)))))};SizesPreview.__docgenInfo={description:"",methods:[],displayName:"SizesPreview"};var _curry1=__webpack_require__("../../../.yarn/berry/cache/ramda-npm-0.30.1-b62811823d-10c0.zip/node_modules/ramda/es/internal/_curry1.js"),_nth=__webpack_require__("../../../.yarn/berry/cache/ramda-npm-0.30.1-b62811823d-10c0.zip/node_modules/ramda/es/internal/_nth.js");const es_head=(0,_curry1.A)((function(list){return(0,_nth.A)(0,list)})),MultipleSelectionPreview=()=>{const[file,setFile]=(0,react.useState)(""),[files,setFiles]=(0,react.useState)(""),handleFileSelected=(0,react.useCallback)((files=>setFile((0,prop.A)("name",es_head([...files])))),[]),handleFilesSelected=(0,react.useCallback)((files=>setFiles(es_join("; ",(0,map.A)((0,prop.A)("name"),[...files])))),[]);return react.createElement(react.Fragment,null,react.createElement(esm_Box_Box,{mb:"15px"},react.createElement(components.s5,{onFilesChanged:handleFileSelected,tooltip:"Select one file (default)"}),react.createElement(components.o5,{variant:"body1"},file)),react.createElement(esm_Box_Box,null,react.createElement(components.s5,{multiple:!0,onFilesChanged:handleFilesSelected,tooltip:"Select multiple files"}),react.createElement(components.o5,{variant:"body1"},files)))};MultipleSelectionPreview.__docgenInfo={description:"",methods:[],displayName:"MultipleSelectionPreview"};var createSvgIcon=__webpack_require__("./.yarn/__virtual__/@mui-material-virtual-2baa73ee9f/4/.yarn/berry/cache/@mui-material-npm-6.1.6-6fe62c1d46-10c0.zip/node_modules/@mui/material/utils/createSvgIcon.js"),jsx_runtime=__webpack_require__("../../../.yarn/berry/cache/react-npm-18.3.1-af38f3c1ae-10c0.zip/node_modules/react/jsx-runtime.js");const BrowserUpdated=(0,createSvgIcon.A)((0,jsx_runtime.jsx)("path",{d:"M22 13v3c0 1.1-.9 2-2 2h-3l1 1v2H6v-2l1-1H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h8v2H4v11h16v-3zm-7 2-5-5h4V3h2v7h4z"}),"BrowserUpdated"),ImageSearch=(0,createSvgIcon.A)((0,jsx_runtime.jsx)("path",{d:"M18 13v7H4V6h5.02c.05-.71.22-1.38.48-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5zm-1.5 5h-11l2.75-3.53 1.96 2.36 2.75-3.54zm2.8-9.11c.44-.7.7-1.51.7-2.39C20 4.01 17.99 2 15.5 2S11 4.01 11 6.5s2.01 4.5 4.49 4.5c.88 0 1.7-.26 2.39-.7L21 13.42 22.42 12zM15.5 9C14.12 9 13 7.88 13 6.5S14.12 4 15.5 4 18 5.12 18 6.5 16.88 9 15.5 9"}),"ImageSearch"),DriveFolderUpload=(0,createSvgIcon.A)((0,jsx_runtime.jsx)("path",{d:"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V8h16zM8 13.01l1.41 1.41L11 12.84V17h2v-4.16l1.59 1.59L16 13.01 12.01 9z"}),"DriveFolderUpload"),CustomIconsPreview=()=>react.createElement(esm_Box_Box,{gap:"15px",display:"flex"},react.createElement(components.s5,{tooltip:"Backup (default)"}),react.createElement(components.s5,{Icon:BrowserUpdated,tooltip:"BrowserUpdated"}),react.createElement(components.s5,{Icon:ImageSearch,tooltip:"ImageSearch"}),react.createElement(components.s5,{Icon:DriveFolderUpload,tooltip:"DriveFolderUpload"}));CustomIconsPreview.__docgenInfo={description:"",methods:[],displayName:"CustomIconsPreview"};const UploadButton_stories={title:"Components/Buttons/UploadButton",component:components.s5},UploadButton={args:{tooltip:"Upload your file here"}},InputTypes={parameters:{controls:{hideNoControlsWarning:!0},docs:{source:{code:'<UploadButton accept=".pdf,.txt" />',format:!0}}},render:()=>react.createElement(InputTypesPreview,null)},Sizes={parameters:{controls:{hideNoControlsWarning:!0},docs:{source:{code:'<UploadButton color="color-code-here">',format:!0}}},render:()=>react.createElement(SizesPreview,null)},FontSize={parameters:{controls:{hideNoControlsWarning:!0},docs:{source:{code:'<UploadButton fontSize="font-size-here" />',format:!0}}},render:()=>react.createElement(FontSizePreview,null)},MultipleSelection={parameters:{controls:{hideNoControlsWarning:!0},docs:{source:{code:"<UploadButton multiple />",format:!0}}},render:()=>react.createElement(MultipleSelectionPreview,null)},MobileCapture={parameters:{controls:{hideNoControlsWarning:!0},docs:{source:{code:'<UploadButton capture="environment" />',format:!0}}},render:()=>react.createElement(MobileCapturePreview,null)},CustomIcons={parameters:{controls:{hideNoControlsWarning:!0},docs:{source:{code:"<UploadButton Icon={BrowserUpdatedIcon} />",format:!0}}},render:()=>react.createElement(CustomIconsPreview,null)},__namedExportsOrder=["UploadButton","InputTypes","Sizes","FontSize","MultipleSelection","MobileCapture","CustomIcons"];UploadButton.parameters={...UploadButton.parameters,docs:{...UploadButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    tooltip: 'Upload your file here'\n  }\n}",...UploadButton.parameters?.docs?.source},description:{story:"The Upload Button component is a special customization for an Icon Button component used to upload files.",...UploadButton.parameters?.docs?.description}}},InputTypes.parameters={...InputTypes.parameters,docs:{...InputTypes.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    controls: {\n      hideNoControlsWarning: true\n    },\n    docs: {\n      source: {\n        code: '<UploadButton accept=\".pdf,.txt\" />',\n        format: true\n      }\n    }\n  },\n  render: () => <InputTypesPreview />\n}",...InputTypes.parameters?.docs?.source},description:{story:"The accept attribute takes as its value a comma-separated list of one or more file types,\nor unique file type specifiers, describing which file types to allow.",...InputTypes.parameters?.docs?.description}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    controls: {\n      hideNoControlsWarning: true\n    },\n    docs: {\n      source: {\n        code: '<UploadButton color=\"color-code-here\">',\n        format: true\n      }\n    }\n  },\n  render: () => <SizesPreview />\n}",...Sizes.parameters?.docs?.source},description:{story:"An IconButton supports `tiny`, `small`, `medium` and `large` size. Default size is `medium`.",...Sizes.parameters?.docs?.description}}},FontSize.parameters={...FontSize.parameters,docs:{...FontSize.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    controls: {\n      hideNoControlsWarning: true\n    },\n    docs: {\n      source: {\n        code: '<UploadButton fontSize=\"font-size-here\" />',\n        format: true\n      }\n    }\n  },\n  render: () => <FontSizePreview />\n}",...FontSize.parameters?.docs?.source},description:{story:"A button supports `small`, `medium` and `large` size. Default size is `small`.",...FontSize.parameters?.docs?.description}}},MultipleSelection.parameters={...MultipleSelection.parameters,docs:{...MultipleSelection.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    controls: {\n      hideNoControlsWarning: true\n    },\n    docs: {\n      source: {\n        code: '<UploadButton multiple />',\n        format: true\n      }\n    }\n  },\n  render: () => <MultipleSelectionPreview />\n}",...MultipleSelection.parameters?.docs?.source},description:{story:"By setting the attribute 'multiple', the form control will allow uploading multiple files at once.",...MultipleSelection.parameters?.docs?.description}}},MobileCapture.parameters={...MobileCapture.parameters,docs:{...MobileCapture.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    controls: {\n      hideNoControlsWarning: true\n    },\n    docs: {\n      source: {\n        code: '<UploadButton capture=\"environment\" />',\n        format: true\n      }\n    }\n  },\n  render: () => <MobileCapturePreview />\n}",...MobileCapture.parameters?.docs?.source},description:{story:'The "capture" attribute specifies that, optionally, a new file should be captured,\nand which device should be used to capture that new media of a type defined by the "accept" attribute.',...MobileCapture.parameters?.docs?.description}}},CustomIcons.parameters={...CustomIcons.parameters,docs:{...CustomIcons.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    controls: {\n      hideNoControlsWarning: true\n    },\n    docs: {\n      source: {\n        code: '<UploadButton Icon={BrowserUpdatedIcon} />',\n        format: true\n      }\n    }\n  },\n  render: () => <CustomIconsPreview />\n}",...CustomIcons.parameters?.docs?.source},description:{story:"The icon display on the upload button can be customized as desired.",...CustomIcons.parameters?.docs?.description}}}}}]);