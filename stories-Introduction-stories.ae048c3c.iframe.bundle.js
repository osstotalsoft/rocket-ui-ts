"use strict";(self.webpackChunk_totalsoft_rocket_ui=self.webpackChunk_totalsoft_rocket_ui||[]).push([[713],{"./.yarn/__virtual__/@mui-material-virtual-6eb82f048f/4/.yarn/berry/cache/@mui-material-npm-5.16.0-a68e3c876b-10c0.zip/node_modules/@mui/material/Link/Link.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Link_Link}});var objectWithoutPropertiesLoose=__webpack_require__("../../../.yarn/berry/cache/@babel-runtime-npm-7.24.7-035e043b00-10c0.zip/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("../../../.yarn/berry/cache/@babel-runtime-npm-7.24.7-035e043b00-10c0.zip/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../../.yarn/berry/cache/react-npm-18.2.0-1eae08fee2-10c0.zip/node_modules/react/index.js"),clsx=__webpack_require__("../../../.yarn/berry/cache/clsx-npm-2.1.1-96125b98be-10c0.zip/node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./.yarn/__virtual__/@mui-utils-virtual-1219c2a48b/4/.yarn/berry/cache/@mui-utils-npm-5.16.0-0b5986aa95-10c0.zip/node_modules/@mui/utils/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./.yarn/__virtual__/@mui-material-virtual-6eb82f048f/4/.yarn/berry/cache/@mui-material-npm-5.16.0-a68e3c876b-10c0.zip/node_modules/@mui/material/utils/capitalize.js"),styled=__webpack_require__("./.yarn/__virtual__/@mui-material-virtual-6eb82f048f/4/.yarn/berry/cache/@mui-material-npm-5.16.0-a68e3c876b-10c0.zip/node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./.yarn/__virtual__/@mui-material-virtual-6eb82f048f/4/.yarn/berry/cache/@mui-material-npm-5.16.0-a68e3c876b-10c0.zip/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),useIsFocusVisible=__webpack_require__("./.yarn/__virtual__/@mui-material-virtual-6eb82f048f/4/.yarn/berry/cache/@mui-material-npm-5.16.0-a68e3c876b-10c0.zip/node_modules/@mui/material/utils/useIsFocusVisible.js"),useForkRef=__webpack_require__("./.yarn/__virtual__/@mui-material-virtual-6eb82f048f/4/.yarn/berry/cache/@mui-material-npm-5.16.0-a68e3c876b-10c0.zip/node_modules/@mui/material/utils/useForkRef.js"),Typography=__webpack_require__("./.yarn/__virtual__/@mui-material-virtual-6eb82f048f/4/.yarn/berry/cache/@mui-material-npm-5.16.0-a68e3c876b-10c0.zip/node_modules/@mui/material/Typography/Typography.js"),generateUtilityClasses=__webpack_require__("./.yarn/__virtual__/@mui-utils-virtual-1219c2a48b/4/.yarn/berry/cache/@mui-utils-npm-5.16.0-0b5986aa95-10c0.zip/node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./.yarn/__virtual__/@mui-utils-virtual-1219c2a48b/4/.yarn/berry/cache/@mui-utils-npm-5.16.0-0b5986aa95-10c0.zip/node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js");function getLinkUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiLink",slot)}var Link_linkClasses=(0,generateUtilityClasses.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),style=__webpack_require__("./.yarn/__virtual__/@mui-system-virtual-f43935b712/4/.yarn/berry/cache/@mui-system-npm-5.16.0-3eb5972023-10c0.zip/node_modules/@mui/system/esm/style.js"),colorManipulator=__webpack_require__("./.yarn/__virtual__/@mui-system-virtual-f43935b712/4/.yarn/berry/cache/@mui-system-npm-5.16.0-3eb5972023-10c0.zip/node_modules/@mui/system/colorManipulator.js");const colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var Link_getTextDecoration=({theme:theme,ownerState:ownerState})=>{const transformedColor=(color=>colorTransformations[color]||color)(ownerState.color),color=(0,style.DW)(theme,`palette.${transformedColor}`,!1)||ownerState.color,channelColor=(0,style.DW)(theme,`palette.${transformedColor}Channel`);return"vars"in theme&&channelColor?`rgba(${channelColor} / 0.4)`:(0,colorManipulator.Fq)(color,.4)},jsx_runtime=__webpack_require__("../../../.yarn/berry/cache/react-npm-18.2.0-1eae08fee2-10c0.zip/node_modules/react/jsx-runtime.js");const _excluded=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],LinkRoot=(0,styled.ZP)(Typography.Z,{name:"MuiLink",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:ownerState}=props;return[styles.root,styles[`underline${(0,capitalize.Z)(ownerState.underline)}`],"button"===ownerState.component&&styles.button]}})((({theme:theme,ownerState:ownerState})=>(0,esm_extends.Z)({},"none"===ownerState.underline&&{textDecoration:"none"},"hover"===ownerState.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===ownerState.underline&&(0,esm_extends.Z)({textDecoration:"underline"},"inherit"!==ownerState.color&&{textDecorationColor:Link_getTextDecoration({theme:theme,ownerState:ownerState})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===ownerState.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Link_linkClasses.focusVisible}`]:{outline:"auto"}})));var Link_Link=react.forwardRef((function Link(inProps,ref){const props=(0,DefaultPropsProvider.i)({props:inProps,name:"MuiLink"}),{className:className,color:color="primary",component:component="a",onBlur:onBlur,onFocus:onFocus,TypographyClasses:TypographyClasses,underline:underline="always",variant:variant="inherit",sx:sx}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),{isFocusVisibleRef:isFocusVisibleRef,onBlur:handleBlurVisible,onFocus:handleFocusVisible,ref:focusVisibleRef}=(0,useIsFocusVisible.Z)(),[focusVisible,setFocusVisible]=react.useState(!1),handlerRef=(0,useForkRef.Z)(ref,focusVisibleRef),ownerState=(0,esm_extends.Z)({},props,{color:color,component:component,focusVisible:focusVisible,underline:underline,variant:variant}),classes=(ownerState=>{const{classes:classes,component:component,focusVisible:focusVisible,underline:underline}=ownerState,slots={root:["root",`underline${(0,capitalize.Z)(underline)}`,"button"===component&&"button",focusVisible&&"focusVisible"]};return(0,composeClasses.Z)(slots,getLinkUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(LinkRoot,(0,esm_extends.Z)({color:color,className:(0,clsx.Z)(classes.root,className),classes:TypographyClasses,component:component,onBlur:event=>{handleBlurVisible(event),!1===isFocusVisibleRef.current&&setFocusVisible(!1),onBlur&&onBlur(event)},onFocus:event=>{handleFocusVisible(event),!0===isFocusVisibleRef.current&&setFocusVisible(!0),onFocus&&onFocus(event)},ref:handlerRef,ownerState:ownerState,variant:variant,sx:[...Object.keys(colorTransformations).includes(color)?[]:[{color:color}],...Array.isArray(sx)?sx:[sx]]},other))}))},"./src/stories/Introduction.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Introduction:function(){return Introduction},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Introduction_stories}});var react=__webpack_require__("../../../.yarn/berry/cache/react-npm-18.2.0-1eae08fee2-10c0.zip/node_modules/react/index.js"),prop_types=__webpack_require__("../../../.yarn/berry/cache/prop-types-npm-15.8.1-17c71ee7ee-10c0.zip/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),emotion_styled_browser_esm=__webpack_require__("./.yarn/__virtual__/@emotion-styled-virtual-acebd01cc3/4/.yarn/berry/cache/@emotion-styled-npm-11.11.5-f6c8a45c9e-10c0.zip/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),emotion_cache_browser_esm=__webpack_require__("../../../.yarn/berry/cache/@emotion-cache-npm-11.11.0-3e6e449071-10c0.zip/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),emotion_serialize_browser_esm=__webpack_require__("../../../.yarn/berry/cache/@emotion-serialize-npm-1.1.2-4b856d3761-10c0.zip/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),emotion_utils_browser_esm=__webpack_require__("../../../.yarn/berry/cache/@emotion-utils-npm-1.2.1-3d04f99348-10c0.zip/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");function insertWithoutScoping(cache,serialized){if(void 0===cache.inserted[serialized.name])return cache.insert("",serialized,cache.sheet,!0)}function merge(registered,css,className){var registeredStyles=[],rawClassName=(0,emotion_utils_browser_esm.fp)(registered,registeredStyles,className);return registeredStyles.length<2?className:rawClassName+css(registeredStyles)}var classnames=function classnames(args){for(var cls="",i=0;i<args.length;i++){var arg=args[i];if(null!=arg){var toAdd=void 0;switch(typeof arg){case"boolean":break;case"object":if(Array.isArray(arg))toAdd=classnames(arg);else for(var k in toAdd="",arg)arg[k]&&k&&(toAdd&&(toAdd+=" "),toAdd+=k);break;default:toAdd=arg}toAdd&&(cls&&(cls+=" "),cls+=toAdd)}}return cls},_createEmotion=function createEmotion(options){var cache=(0,emotion_cache_browser_esm.Z)(options);cache.sheet.speedy=function(value){this.isSpeedy=value},cache.compat=!0;var css=function css(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];var serialized=(0,emotion_serialize_browser_esm.O)(args,cache.registered,void 0);return(0,emotion_utils_browser_esm.My)(cache,serialized,!1),cache.key+"-"+serialized.name};return{css:css,cx:function cx(){for(var _len4=arguments.length,args=new Array(_len4),_key4=0;_key4<_len4;_key4++)args[_key4]=arguments[_key4];return merge(cache.registered,css,classnames(args))},injectGlobal:function injectGlobal(){for(var _len3=arguments.length,args=new Array(_len3),_key3=0;_key3<_len3;_key3++)args[_key3]=arguments[_key3];var serialized=(0,emotion_serialize_browser_esm.O)(args,cache.registered);insertWithoutScoping(cache,serialized)},keyframes:function keyframes(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];var serialized=(0,emotion_serialize_browser_esm.O)(args,cache.registered),animation="animation-"+serialized.name;return insertWithoutScoping(cache,{name:serialized.name,styles:"@keyframes "+animation+"{"+serialized.styles+"}"}),animation},hydrate:function hydrate(ids){ids.forEach((function(key){cache.inserted[key]=!0}))},flush:function flush(){cache.registered={},cache.inserted={},cache.sheet.flush()},sheet:cache.sheet,cache:cache,getRegisteredStyles:emotion_utils_browser_esm.fp.bind(null,cache.registered),merge:merge.bind(null,cache.registered,css)}}({key:"css"}),css=(_createEmotion.flush,_createEmotion.hydrate,_createEmotion.cx,_createEmotion.merge,_createEmotion.getRegisteredStyles,_createEmotion.injectGlobal,_createEmotion.keyframes,_createEmotion.css),satellite_namespaceObject=(_createEmotion.sheet,_createEmotion.cache,__webpack_require__.p+"static/media/satellite.7e7adca7.png"),spaceship=__webpack_require__("./src/stories/assets/img/spaceship.png"),robot=__webpack_require__("./src/stories/assets/img/robot.png"),rocket_namespaceObject=__webpack_require__.p+"static/media/rocket.52f78286.png",Link=__webpack_require__("./.yarn/__virtual__/@mui-material-virtual-6eb82f048f/4/.yarn/berry/cache/@mui-material-npm-5.16.0-a68e3c876b-10c0.zip/node_modules/@mui/material/Link/Link.js");const Container=emotion_styled_browser_esm.Z.div`
  position: relative;
  min-height: 100vh;
`,Orbit=(0,emotion_styled_browser_esm.Z)(Link.Z,{shouldForwardProp:prop=>"orbitColor"!==prop})`
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid rgba(102, 166, 229, 0.12);
  border-radius: 1000px;
  transform: translate(-50%, -50%);
  transition: border 300ms ease;

  &::before {
    position: absolute;
    content: '';
    transform: translate(-50%, -50%);
    border-radius: 100px;
    transition: transform 300ms ease;
  }

  @keyframes orbit {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }

  @media (min-width: 768px) {
    &:hover {
      border: 1px solid ${props=>props.orbitColor};

      &::before {
        transform: scale(1.5) translate(-50%, -50%);
      }
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      border: 1px solid ${props=>props.orbitColor};

      &::before {
        transform: scale(1.5) translate(-50%, -50%);
      }
    }

    ${props=>props.isActive?css`
            border: 1px solid ${props=>props.orbitColor};
            &::before {
              transform: scale(1.5) translate(-50%, -50%);
            }
          `:""};
  }
`,Rocket=emotion_styled_browser_esm.Z.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 256px;
  width: 256px;
  border-radius: 1000px;
  background-image: url(${rocket_namespaceObject});
  background-size: cover;
  box-shadow: 0 0 10px 2px rgba(255, 107, 0, 0.4), 0 0 22px 11px rgba(255, 203, 0, 0.13);
  transform: translate(-50%, -50%);
  z-index: 150;
`,MaterialOrbit=(0,emotion_styled_browser_esm.Z)(Orbit)`
  width: 310px;
  height: 310px;
  animation: orbit 12.1867343561s linear infinite;
  z-index: 100;

  &::before {
    height: 80px;
    width: 80px;
    left: 75%;
    background-image: url(${satellite_namespaceObject});
    background-size: cover;
  }
`,GitHubOrbit=(0,emotion_styled_browser_esm.Z)(Orbit)`
  width: 480px;
  height: 480px;
  animation: orbit 18.4555338265s linear infinite;
  z-index: 99;

  &::before {
    height: 74px;
    width: 74px;
    left: 28%;
    background-image: url(${spaceship});
    background-size: cover;
  }
`,BitOrbit=(0,emotion_styled_browser_esm.Z)(Orbit)`
  width: 660px;
  height: 660px;
  animation: orbit 30s linear infinite;
  z-index: 98;

  &::before {
    width: 70px;
    height: 70px;
    left: 50%;
    background-image: url(${robot});
    background-size: cover;
  }
`,OrbitSwitch=({data:data,setActiveItem:setActiveItem})=>{const{id:id,website:website,orbitColor:orbitColor}=data,orbitProps={href:website,orbitColor:orbitColor,target:"_blank",onMouseOver:(0,react.useCallback)((()=>setActiveItem(id)),[id,setActiveItem])};return react.createElement(react.Fragment,null,(()=>{switch(data.id){case 1:return react.createElement(MaterialOrbit,orbitProps);case 2:return react.createElement(GitHubOrbit,orbitProps);case 3:return react.createElement(BitOrbit,orbitProps)}})())};OrbitSwitch.propTypes={data:prop_types_default().object.isRequired,setActiveItem:prop_types_default().func.isRequired};var orbits_OrbitSwitch=OrbitSwitch;OrbitSwitch.__docgenInfo={description:"",methods:[],displayName:"OrbitSwitch",props:{data:{description:"",type:{name:"object"},required:!0},setActiveItem:{description:"",type:{name:"func"},required:!0}}};const orbits=[{id:1,name:"Material-UI",website:"https://mui.com/",heading:"The engine of our rocket.",description:"This library represents our core, on top of which we design custom behaviors and styles. Besides that, it is one of our major benchmarks in terms of best development practices and conventions.",orbitColor:"hsl(194, 48%, 49%)"},{id:2,name:"Github repository",website:"https://github.com/osstotalsoft/rocket-ui-ts",heading:"Feel free to join us as a rocket engineer anytime you want.",description:"Have a look over our source code, create issues and contribute, so we can all have a safer and smoother flight.",orbitColor:"hsl(33, 82%, 61%)"},{id:3,name:"npm Registry",website:"https://www.npmjs.com/package/@totalsoft/rocket-ui",heading:"Our rocket launch site.",description:"We are building and publishing on npm public registry, the world`s largest software registry. Inside our scope, you can find codesandbox-style demos and source-code for all our rocket parts.",orbitColor:"hsl(10, 63%, 51%)"}],homeData={id:0,name:"Rocket-UI",heading:"Our modular, flexible and collaborative product.",description:"An open-source and community-driven project to provide a consistent user interface across web applications."};const OrbitContainer=({setActiveItem:setActiveItem})=>{const handleRocketHover=(0,react.useCallback)((()=>setActiveItem(0)),[setActiveItem]);return react.createElement(Container,null,react.createElement(Rocket,{onMouseOver:handleRocketHover}),orbits.map((orbit=>react.createElement(orbits_OrbitSwitch,{data:orbit,key:orbit.id,setActiveItem:setActiveItem}))))};OrbitContainer.propTypes={setActiveItem:prop_types_default().func.isRequired};var orbits_OrbitContainer=OrbitContainer;OrbitContainer.__docgenInfo={description:"",methods:[],displayName:"OrbitContainer",props:{setActiveItem:{description:"",type:{name:"func"},required:!0}}};var components=__webpack_require__("./src/components/index.ts");const Title=(0,emotion_styled_browser_esm.Z)(components.ZT)`
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: -0.056rem;

  @media (min-width: 900px) {
    font-size: 3rem;
    margin-top: 150px;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1025px) {
    font-size: 5rem;
  }
`;var Grid=__webpack_require__("./.yarn/__virtual__/@mui-material-virtual-6eb82f048f/4/.yarn/berry/cache/@mui-material-npm-5.16.0-a68e3c876b-10c0.zip/node_modules/@mui/material/Grid/Grid.js");const AboutContainer=({activeItem:activeItem})=>{const data=[homeData,...orbits].find((o=>o.id===activeItem));return react.createElement(Grid.ZP,{container:!0,rowSpacing:2},react.createElement(Grid.ZP,{item:!0,xs:12},react.createElement(Title,{variant:"h1"},data.name)),react.createElement(Grid.ZP,{item:!0,xs:12},react.createElement(components.ZT,{variant:"h5",emphasis:"italic",color:"secondary"},data.heading)),react.createElement(Grid.ZP,{item:!0,xs:12},react.createElement(components.ZT,{variant:"h6",color:"textSecondary"},data.description)))};AboutContainer.propTypes={activeItem:prop_types_default().number.isRequired},AboutContainer.defaultProps={activeItem:0};var about_AboutContainer=AboutContainer;AboutContainer.__docgenInfo={description:"",methods:[],displayName:"AboutContainer",props:{activeItem:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1}}};const LandingPage=()=>{const[activeItem,setActiveItem]=(0,react.useState)(0);return react.createElement(Grid.ZP,{container:!0,alignItems:"stretch",justifyContent:"center"},react.createElement(Grid.ZP,{item:!0,xs:12,md:6},react.createElement(orbits_OrbitContainer,{setActiveItem:setActiveItem})),react.createElement(Grid.ZP,{item:!0,xs:12,md:6},react.createElement(about_AboutContainer,{activeItem:activeItem})))};var Introduction_stories={title:"Introduction",component:LandingPage,tags:["!autodocs"],parameters:{options:{showPanel:!1}}};const Introduction={render:()=>react.createElement(LandingPage,null)},__namedExportsOrder=["Introduction"];Introduction.parameters={...Introduction.parameters,docs:{...Introduction.parameters?.docs,source:{originalSource:"{\n  render: () => <LandingPage />\n}",...Introduction.parameters?.docs?.source}}}},"./src/stories/assets/img/robot.png":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/robot.27205e8b.png"},"./src/stories/assets/img/spaceship.png":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/spaceship.fdcbb82b.png"}}]);
//# sourceMappingURL=stories-Introduction-stories.ae048c3c.iframe.bundle.js.map