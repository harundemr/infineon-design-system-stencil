"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[6295],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("@storybook/core-events/preview-errors"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/components/breadcrumb/breadcrumb.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Breadcrumb",tags:["autodocs"],args:{icon:!1},argTypes:{ifxDropdownMenuItem:{action:"ifxDropdownMenuItem",description:"Custom event emitted when an item is selected",table:{type:{summary:"Framework integration",detail:'React: onIfxDropdownMenuItem={handleChange}\nVue:@ifxDropdownMenuItem="handleChange"\nAngular:(ifxDropdownMenuItem)="handleChange()"\nVanillaJs:.addEventListener("ifxDropdownMenuItem", (event) => {//handle change});'}}}}},Default=(args=>{const wrapper=document.createElement("div");wrapper.innerHTML=`<ifx-breadcrumb>\n  <ifx-breadcrumb-item>\n    <ifx-breadcrumb-item-label slot="label" icon="${args.icon?"c-info-16":""}">Breadcrumb 1</ifx-breadcrumb-item-label>\n    <ifx-dropdown-menu>\n      <ifx-dropdown-item url="http://google.com">Google</ifx-dropdown-item>\n      <ifx-dropdown-item url="http://bing.com">Bing</ifx-dropdown-item>\n      <ifx-dropdown-item url="http://yahoo.com">Yahoo</ifx-dropdown-item>\n      <ifx-dropdown-item url="http://naver.com">Naver</ifx-dropdown-item>\n    </ifx-dropdown-menu>\n  </ifx-breadcrumb-item>\n\n  <ifx-breadcrumb-item>\n    <ifx-breadcrumb-item-label slot="label" icon="${args.icon?"c-info-16":""}">Breadcrumb 2</ifx-breadcrumb-item-label>\n    <ifx-dropdown-menu>\n    <ifx-dropdown-item url="http://google.com">Google</ifx-dropdown-item>\n    <ifx-dropdown-item url="http://bing.com">Bing</ifx-dropdown-item>\n    <ifx-dropdown-item url="http://yahoo.com">Yahoo</ifx-dropdown-item>\n    <ifx-dropdown-item url="http://naver.com">Naver</ifx-dropdown-item>\n    </ifx-dropdown-menu>\n  </ifx-breadcrumb-item>\n\n  <ifx-breadcrumb-item>\n    <ifx-breadcrumb-item-label slot="label" icon="${args.icon?"c-info-16":""}" url="http://google.com">Breadcrumb 3</ifx-breadcrumb-item-label>\n  </ifx-breadcrumb-item>\n</ifx-breadcrumb>`;return wrapper.querySelector("ifx-breadcrumb").querySelectorAll("ifx-breadcrumb-item").forEach((breadcrumbItem=>{const dropdownMenu=breadcrumbItem.querySelector("ifx-dropdown-menu");dropdownMenu?.addEventListener("ifxDropdownMenuItem",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("ifxDropdownMenuItem"))})),wrapper}).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const wrapper = document.createElement(\'div\');\n  wrapper.innerHTML = `<ifx-breadcrumb>\n  <ifx-breadcrumb-item>\n    <ifx-breadcrumb-item-label slot="label" icon="${args.icon ? \'c-info-16\' : \'\'}">Breadcrumb 1</ifx-breadcrumb-item-label>\n    <ifx-dropdown-menu>\n      <ifx-dropdown-item url="http://google.com">Google</ifx-dropdown-item>\n      <ifx-dropdown-item url="http://bing.com">Bing</ifx-dropdown-item>\n      <ifx-dropdown-item url="http://yahoo.com">Yahoo</ifx-dropdown-item>\n      <ifx-dropdown-item url="http://naver.com">Naver</ifx-dropdown-item>\n    </ifx-dropdown-menu>\n  </ifx-breadcrumb-item>\n\n  <ifx-breadcrumb-item>\n    <ifx-breadcrumb-item-label slot="label" icon="${args.icon ? \'c-info-16\' : \'\'}">Breadcrumb 2</ifx-breadcrumb-item-label>\n    <ifx-dropdown-menu>\n    <ifx-dropdown-item url="http://google.com">Google</ifx-dropdown-item>\n    <ifx-dropdown-item url="http://bing.com">Bing</ifx-dropdown-item>\n    <ifx-dropdown-item url="http://yahoo.com">Yahoo</ifx-dropdown-item>\n    <ifx-dropdown-item url="http://naver.com">Naver</ifx-dropdown-item>\n    </ifx-dropdown-menu>\n  </ifx-breadcrumb-item>\n\n  <ifx-breadcrumb-item>\n    <ifx-breadcrumb-item-label slot="label" icon="${args.icon ? \'c-info-16\' : \'\'}" url="http://google.com">Breadcrumb 3</ifx-breadcrumb-item-label>\n  </ifx-breadcrumb-item>\n</ifx-breadcrumb>`;\n  const breadcrumb = (wrapper.querySelector(\'ifx-breadcrumb\') as HTMLElement);\n  // Loop through each breadcrumb item and attach event listeners to its dropdown menu\n  const breadcrumbItems = breadcrumb.querySelectorAll(\'ifx-breadcrumb-item\');\n  breadcrumbItems.forEach(breadcrumbItem => {\n    const dropdownMenu = breadcrumbItem.querySelector(\'ifx-dropdown-menu\');\n    dropdownMenu?.addEventListener(\'ifxDropdownMenuItem\', action(\'ifxDropdownMenuItem\'));\n  });\n  return wrapper;\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);