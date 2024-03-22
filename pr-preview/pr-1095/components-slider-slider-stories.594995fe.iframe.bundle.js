"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[8768],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>action});var v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),preview_errors=__webpack_require__("../../node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors.is({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler}},"./src/components/slider/slider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,WithIcons:()=>WithIcons,WithPercentageDisplay:()=>WithPercentageDisplay,WithTexts:()=>WithTexts,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@infineon/infineon-icons/dist/icons.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Slider",component:"ifx-slider",tags:["autodocs"],argTypes:{value:{control:"number"},min:{control:"number"},max:{control:"number"},showPercentage:{control:"boolean"},disabled:{control:"boolean"},leftIcon:{options:Object.values(_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__.c).map((i=>i.name)),control:{type:"select"}},rightIcon:{options:Object.values(_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__.c).map((i=>i.name)),control:{type:"select"}},leftText:{control:"text"},rightText:{control:"text"},ifxChange:{action:"ifxChange",description:"Custom event emitted on input change",table:{type:{summary:"Framework integration",detail:'React: onIfxChange={handleChange}\nVue:@ifxChange="handleChange"\nAngular:(ifxChange)="handleChange()"\nVanillaJs:.addEventListener("ifxChange", (event) => {//handle change});'}}}}},Template=args=>{const sliderElement=document.createElement("ifx-slider");return sliderElement.setAttribute("value",args.value),sliderElement.setAttribute("min",args.min),sliderElement.setAttribute("max",args.max),args.showPercentage&&sliderElement.setAttribute("show-percentage","true"),args.disabled&&sliderElement.setAttribute("disabled","true"),args.leftIcon&&sliderElement.setAttribute("left-icon",args.leftIcon),args.rightIcon&&sliderElement.setAttribute("right-icon",args.rightIcon),args.leftText&&sliderElement.setAttribute("left-text",args.leftText),args.rightText&&sliderElement.setAttribute("right-text",args.rightText),sliderElement.addEventListener("ifxChange",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxChange")),sliderElement},Default=Template.bind({});Default.args={value:50,min:0,max:100,showPercentage:!1,disabled:!1};const WithPercentageDisplay=Template.bind({});WithPercentageDisplay.args={value:50,min:0,max:100,showPercentage:!0,disabled:!1};const WithIcons=Template.bind({});WithIcons.args={...Default.args,leftIcon:"cogwheel-16",rightIcon:"cogwheel-16"};const WithTexts=Template.bind({});WithTexts.args={...Default.args,leftText:"LeftText",rightText:"RightText"};const Disabled=Template.bind({});Disabled.args={...Default.args,disabled:!0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const sliderElement = document.createElement('ifx-slider');\n  sliderElement.setAttribute('value', args.value);\n  sliderElement.setAttribute('min', args.min);\n  sliderElement.setAttribute('max', args.max);\n  if (args.showPercentage) {\n    sliderElement.setAttribute('show-percentage', 'true');\n  }\n  if (args.disabled) {\n    sliderElement.setAttribute('disabled', 'true'); // Set disabled attribute\n  }\n  if (args.leftIcon) {\n    sliderElement.setAttribute('left-icon', args.leftIcon);\n  }\n  if (args.rightIcon) {\n    sliderElement.setAttribute('right-icon', args.rightIcon);\n  }\n  if (args.leftText) {\n    sliderElement.setAttribute('left-text', args.leftText);\n  }\n  if (args.rightText) {\n    sliderElement.setAttribute('right-text', args.rightText);\n  }\n  sliderElement.addEventListener('ifxChange', action('ifxChange'));\n  return sliderElement;\n}",...Default.parameters?.docs?.source}}},WithPercentageDisplay.parameters={...WithPercentageDisplay.parameters,docs:{...WithPercentageDisplay.parameters?.docs,source:{originalSource:"args => {\n  const sliderElement = document.createElement('ifx-slider');\n  sliderElement.setAttribute('value', args.value);\n  sliderElement.setAttribute('min', args.min);\n  sliderElement.setAttribute('max', args.max);\n  if (args.showPercentage) {\n    sliderElement.setAttribute('show-percentage', 'true');\n  }\n  if (args.disabled) {\n    sliderElement.setAttribute('disabled', 'true'); // Set disabled attribute\n  }\n  if (args.leftIcon) {\n    sliderElement.setAttribute('left-icon', args.leftIcon);\n  }\n  if (args.rightIcon) {\n    sliderElement.setAttribute('right-icon', args.rightIcon);\n  }\n  if (args.leftText) {\n    sliderElement.setAttribute('left-text', args.leftText);\n  }\n  if (args.rightText) {\n    sliderElement.setAttribute('right-text', args.rightText);\n  }\n  sliderElement.addEventListener('ifxChange', action('ifxChange'));\n  return sliderElement;\n}",...WithPercentageDisplay.parameters?.docs?.source}}},WithIcons.parameters={...WithIcons.parameters,docs:{...WithIcons.parameters?.docs,source:{originalSource:"args => {\n  const sliderElement = document.createElement('ifx-slider');\n  sliderElement.setAttribute('value', args.value);\n  sliderElement.setAttribute('min', args.min);\n  sliderElement.setAttribute('max', args.max);\n  if (args.showPercentage) {\n    sliderElement.setAttribute('show-percentage', 'true');\n  }\n  if (args.disabled) {\n    sliderElement.setAttribute('disabled', 'true'); // Set disabled attribute\n  }\n  if (args.leftIcon) {\n    sliderElement.setAttribute('left-icon', args.leftIcon);\n  }\n  if (args.rightIcon) {\n    sliderElement.setAttribute('right-icon', args.rightIcon);\n  }\n  if (args.leftText) {\n    sliderElement.setAttribute('left-text', args.leftText);\n  }\n  if (args.rightText) {\n    sliderElement.setAttribute('right-text', args.rightText);\n  }\n  sliderElement.addEventListener('ifxChange', action('ifxChange'));\n  return sliderElement;\n}",...WithIcons.parameters?.docs?.source}}},WithTexts.parameters={...WithTexts.parameters,docs:{...WithTexts.parameters?.docs,source:{originalSource:"args => {\n  const sliderElement = document.createElement('ifx-slider');\n  sliderElement.setAttribute('value', args.value);\n  sliderElement.setAttribute('min', args.min);\n  sliderElement.setAttribute('max', args.max);\n  if (args.showPercentage) {\n    sliderElement.setAttribute('show-percentage', 'true');\n  }\n  if (args.disabled) {\n    sliderElement.setAttribute('disabled', 'true'); // Set disabled attribute\n  }\n  if (args.leftIcon) {\n    sliderElement.setAttribute('left-icon', args.leftIcon);\n  }\n  if (args.rightIcon) {\n    sliderElement.setAttribute('right-icon', args.rightIcon);\n  }\n  if (args.leftText) {\n    sliderElement.setAttribute('left-text', args.leftText);\n  }\n  if (args.rightText) {\n    sliderElement.setAttribute('right-text', args.rightText);\n  }\n  sliderElement.addEventListener('ifxChange', action('ifxChange'));\n  return sliderElement;\n}",...WithTexts.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => {\n  const sliderElement = document.createElement('ifx-slider');\n  sliderElement.setAttribute('value', args.value);\n  sliderElement.setAttribute('min', args.min);\n  sliderElement.setAttribute('max', args.max);\n  if (args.showPercentage) {\n    sliderElement.setAttribute('show-percentage', 'true');\n  }\n  if (args.disabled) {\n    sliderElement.setAttribute('disabled', 'true'); // Set disabled attribute\n  }\n  if (args.leftIcon) {\n    sliderElement.setAttribute('left-icon', args.leftIcon);\n  }\n  if (args.rightIcon) {\n    sliderElement.setAttribute('right-icon', args.rightIcon);\n  }\n  if (args.leftText) {\n    sliderElement.setAttribute('left-text', args.leftText);\n  }\n  if (args.rightText) {\n    sliderElement.setAttribute('right-text', args.rightText);\n  }\n  sliderElement.addEventListener('ifxChange', action('ifxChange'));\n  return sliderElement;\n}",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithPercentageDisplay","WithIcons","WithTexts","Disabled"]}}]);