(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[1907,3135,7118],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("@storybook/core-events/preview-errors"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/components/search-field/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),search_field_stories=__webpack_require__("./src/components/search-field/search-field.stories.ts");const search_field_anatomy_namespaceObject=__webpack_require__.p+"static/media/search-field-anatomy.f0157d0b.png",search_field_states_namespaceObject=__webpack_require__.p+"static/media/search-field-states.7176a86b.png",search_field_sizes_namespaceObject=__webpack_require__.p+"static/media/search-field-sizes.ecd87239.png",search_suggest_search_namespaceObject=__webpack_require__.p+"static/media/search-suggest-search.85c8d36f.png",search_recent_suggest_namespaceObject=__webpack_require__.p+"static/media/search-recent-suggest.4559afee.png";function _createMdxContent(props){const _components={a:"a",br:"br",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:search_field_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"search-field",children:"Search Field"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The search field component is a fundamental element of our design system that allows users to enter search queries to retrieve relevant information from a dataset or database. It enables users to find and filter content efficiently."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"When your application contains a large amount of content, such as products, articles, or data, and users may need to find specific items quickly."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"When navigation within your application involves multiple layers or categories, a search field can act as a time-saving alternative to browsing."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"When your content or data is minimal and easily navigable."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"anatomy",children:"Anatomy"}),"\n",(0,jsx_runtime.jsx)("img",{src:search_field_anatomy_namespaceObject,alt:"Search Field Anatomy"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Field (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The input field allows users to enter search queries."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Search Icon (2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The search icon signifies the search action."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Search Label (3)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","A label provides clarity about what the search field is for. It tells users explicitly that this is a search input, reducing any potential confusion."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Clear Icon (4)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The clear icon lets users quickly clear the search input field."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"states",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:search_field_states_namespaceObject,alt:"Search Field States"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"There are two search field sizes: 36px and 40px. This will give you more flexibility in structuring layouts due to e.g. different button heights. It's important to maintain uniform field height while combining form elements on a single page."}),"\n",(0,jsx_runtime.jsx)("img",{src:search_field_sizes_namespaceObject,alt:"Search Field Sizes"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"search-extension",children:"Search Extension"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"recent--and-search-suggestions",children:"Recent- and Search Suggestions"}),"\n",(0,jsx_runtime.jsx)("img",{src:search_recent_suggest_namespaceObject,alt:"Search Field Recent Suggest"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The DDS provides a recent- and search suggest feature. If the user clicks on the search field, recently displayed search keywords and/or trend keywords can be displayed. Does the user start typing if possible, only the suggested searches should be visible."}),"\n",(0,jsx_runtime.jsx)("img",{src:search_suggest_search_namespaceObject,alt:"Search Field Suggest"}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Check out the Figma component: ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?type=design&node-id=14251-8185&mode=design&t=donPtR9Uh27HrGsQ-4",rel:"nofollow",children:"Search Field"})})]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/search-field/search-field.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Search Field",args:{showDeleteIcon:!0,disabled:!1,size:"m"},argTypes:{size:{description:"Size options: s (36px) and m (40px) - default: m",options:["s","m"],control:{type:"radio"}},ifxInput:{action:"ifxInput",description:"Custom event",table:{type:{summary:"Framework integration",detail:'React: onIfxInput={handleInput}\nVue:@ifxInput="handleInput"\nAngular:(ifxInput)="handleInput()"\nVanillaJs:.addEventListener("ifxInput", (event) => {//handle input});'}}}}},Default=(({disabled,size,showDeleteIcon})=>{const element=document.createElement("ifx-search-field");return element.setAttribute("size",size),element.setAttribute("disabled",disabled),element.setAttribute("show-delete-icon",showDeleteIcon),element.addEventListener("ifxInput",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("ifxInput")),element}).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  disabled,\n  size,\n  showDeleteIcon\n}) => {\n  const element = document.createElement('ifx-search-field');\n  element.setAttribute('size', size);\n  element.setAttribute('disabled', disabled);\n  element.setAttribute('show-delete-icon', showDeleteIcon);\n  element.addEventListener('ifxInput', action('ifxInput'));\n  return element;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);