/*! For license information please see components-modal-Development-mdx.5b083ddd.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[1390,9134],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{aD:()=>action});var v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),preview_errors=__webpack_require__("../../node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors.is({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler}},"./src/components/modal/modal.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Alert:()=>Alert,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@infineon/infineon-icons/dist/icons.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Modal",component:"ifx-modal",args:{opened:!1},argTypes:{caption:{control:"text",description:"Title for the modal"},opened:{control:{disable:!0},table:{type:{summary:"Example (in VanillaJs)",detail:"const modal = document.getElementById('modal'); \nconst openButton = document.getElementById('open'); \n//add DOM event listeners (e.g. click and/or keypress)\n\nfunction openModal() { \nmodal.opened=true;\n\nfunction closeModal() { \nmodal.opened = false; \n}"}},description:"Defaults to false - Can be set by referring to the component and setting it to false/true"},closeOnOverlayClick:{control:"boolean",description:"Close the modal when clicking outside the window"},showCloseButton:{control:"boolean",description:"Show or hide close button 'x'"},alertIcon:{options:Object.keys(_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__.c),control:{type:"select"},description:"When specified together with alertIcon then an border to the right is shown"},width:{options:["s","m","l"],control:{type:"radio"},description:"Usable only when screen width is more than 1024px"},variant:{options:["default","alert-brand","alert-danger"],control:{type:"radio"}},ifxModalOpen:{action:"ifxModalOpen",description:"Custom event emitted when modal opens",table:{type:{summary:"Framework integration",detail:'React: onIfxModalOpen={handleChange}\nVue:@ifxModalOpen="handleChange"\nAngular:(ifxModalOpen)="handleChange()"\nVanillaJs:.addEventListener("ifxModalOpen", (event) => {//handle change});'}}},ifxModalClose:{action:"ifxModalClose",description:"Custom event emitted when modal closes",table:{type:{summary:"Framework integration",detail:'React: onIfxModalClose={handleChange}\nVue:@ifxModalClose="handleChange"\nAngular:(ifxModalClose)="handleChange()"\nVanillaJs:.addEventListener("ifxModalClose", (event) => {//handle change});'}}}}},Template=({caption,showCloseButton,closeOnOverlayClick,variant,width,alertIcon})=>{const modal=document.createElement("ifx-modal");modal.setAttribute("caption",caption),modal.setAttribute("variant",variant),alertIcon&&modal.setAttribute("alert-icon",alertIcon),modal.setAttribute("close-on-overlay-click",closeOnOverlayClick),modal.setAttribute("show-close-button",showCloseButton),modal.setAttribute("width",width),modal.addEventListener("ifxModalOpen",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxModalOpen")),modal.addEventListener("ifxModalClose",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxModalClose"));const content=document.createElement("div");content.setAttribute("slot","content"),content.innerHTML="\n    <span>Modal content</span>\n  ",modal.appendChild(content);const buttons=document.createElement("div");buttons.setAttribute("slot","buttons");const cancelButton=document.createElement("ifx-button");cancelButton.setAttribute("variant","secondary"),cancelButton.textContent="Button 1",cancelButton.addEventListener("click",(()=>{console.log("Button 1 clicked")}));const primaryButton=document.createElement("ifx-button");primaryButton.textContent="Button 2",primaryButton.addEventListener("click",(()=>{console.log("Button 2 clicked")})),buttons.appendChild(cancelButton),buttons.appendChild(primaryButton),modal.appendChild(buttons);const openButton=document.createElement("ifx-button");openButton.id="open",openButton.textContent="Open Modal",openButton.addEventListener("click",(()=>{modal.opened=!0})),openButton.addEventListener("keydown",(event=>{"Enter"===event.key&&(modal.opened=!0)}));const storyElement=document.createElement("div");return storyElement.appendChild(modal),storyElement.appendChild(openButton),storyElement},Default=Template.bind({});Default.args={caption:"Modal Title",showCloseButton:!0,closeOnOverlayClick:!1,width:"s",variant:"default"};const Alert=Template.bind({});Alert.args={caption:"Alert-Brand Modal Title",closeOnOverlayClick:!0,alertIcon:"arrowdoen24",width:"s",variant:"alert-brand"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  caption,\n  showCloseButton,\n  closeOnOverlayClick,\n  variant,\n  width,\n  alertIcon\n}) => {\n  const modal = document.createElement('ifx-modal');\n  modal.setAttribute('caption', caption);\n  modal.setAttribute('variant', variant);\n  if (alertIcon) {\n    modal.setAttribute('alert-icon', alertIcon);\n  }\n  modal.setAttribute('close-on-overlay-click', closeOnOverlayClick);\n  modal.setAttribute('show-close-button', showCloseButton);\n  modal.setAttribute('width', width);\n  modal.addEventListener('ifxModalOpen', action('ifxModalOpen'));\n  modal.addEventListener('ifxModalClose', action('ifxModalClose'));\n  const content = document.createElement('div');\n  content.setAttribute('slot', 'content');\n  content.innerHTML = `\n    <span>Modal content</span>\n  `;\n  modal.appendChild(content);\n  const buttons = document.createElement('div');\n  buttons.setAttribute('slot', 'buttons');\n  const cancelButton = document.createElement('ifx-button');\n  cancelButton.setAttribute('variant', 'secondary');\n  cancelButton.textContent = 'Button 1';\n  cancelButton.addEventListener('click', () => {\n    console.log(\"Button 1 clicked\");\n  });\n  const primaryButton = document.createElement('ifx-button');\n  primaryButton.textContent = 'Button 2';\n  primaryButton.addEventListener('click', () => {\n    console.log(\"Button 2 clicked\");\n  });\n  buttons.appendChild(cancelButton);\n  buttons.appendChild(primaryButton);\n  modal.appendChild(buttons);\n  const openButton = document.createElement('ifx-button');\n  openButton.id = \"open\";\n  openButton.textContent = 'Open Modal';\n  openButton.addEventListener('click', () => {\n    modal.opened = true;\n  });\n  openButton.addEventListener('keydown', event => {\n    if (event.key === 'Enter') {\n      modal.opened = true;\n    }\n  });\n  const storyElement = document.createElement('div');\n  storyElement.appendChild(modal);\n  storyElement.appendChild(openButton);\n  return storyElement;\n}",...Default.parameters?.docs?.source}}},Alert.parameters={...Alert.parameters,docs:{...Alert.parameters?.docs,source:{originalSource:"({\n  caption,\n  showCloseButton,\n  closeOnOverlayClick,\n  variant,\n  width,\n  alertIcon\n}) => {\n  const modal = document.createElement('ifx-modal');\n  modal.setAttribute('caption', caption);\n  modal.setAttribute('variant', variant);\n  if (alertIcon) {\n    modal.setAttribute('alert-icon', alertIcon);\n  }\n  modal.setAttribute('close-on-overlay-click', closeOnOverlayClick);\n  modal.setAttribute('show-close-button', showCloseButton);\n  modal.setAttribute('width', width);\n  modal.addEventListener('ifxModalOpen', action('ifxModalOpen'));\n  modal.addEventListener('ifxModalClose', action('ifxModalClose'));\n  const content = document.createElement('div');\n  content.setAttribute('slot', 'content');\n  content.innerHTML = `\n    <span>Modal content</span>\n  `;\n  modal.appendChild(content);\n  const buttons = document.createElement('div');\n  buttons.setAttribute('slot', 'buttons');\n  const cancelButton = document.createElement('ifx-button');\n  cancelButton.setAttribute('variant', 'secondary');\n  cancelButton.textContent = 'Button 1';\n  cancelButton.addEventListener('click', () => {\n    console.log(\"Button 1 clicked\");\n  });\n  const primaryButton = document.createElement('ifx-button');\n  primaryButton.textContent = 'Button 2';\n  primaryButton.addEventListener('click', () => {\n    console.log(\"Button 2 clicked\");\n  });\n  buttons.appendChild(cancelButton);\n  buttons.appendChild(primaryButton);\n  modal.appendChild(buttons);\n  const openButton = document.createElement('ifx-button');\n  openButton.id = \"open\";\n  openButton.textContent = 'Open Modal';\n  openButton.addEventListener('click', () => {\n    modal.opened = true;\n  });\n  openButton.addEventListener('keydown', event => {\n    if (event.key === 'Enter') {\n      modal.opened = true;\n    }\n  });\n  const storyElement = document.createElement('div');\n  storyElement.appendChild(modal);\n  storyElement.appendChild(openButton);\n  return storyElement;\n}",...Alert.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Alert"]},"./src/components/modal/Development.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_infineon_design_system_stencil_infineon_design_system_stencil_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_modal_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/modal/modal.stories.ts");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",code:"code",a:"a"},(0,_home_runner_work_infineon_design_system_stencil_infineon_design_system_stencil_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_modal_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"modal",children:"Modal"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{withSource:"none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{height:"300px",of:_modal_stories__WEBPACK_IMPORTED_MODULE_2__.Default})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hw,{dark:"true",of:_modal_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"stories",children:"Stories"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_modal_stories__WEBPACK_IMPORTED_MODULE_2__.Default,sourceState:"shown"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"alert",children:"Alert"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{withSource:"none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{height:"300px",of:_modal_stories__WEBPACK_IMPORTED_MODULE_2__.Alert})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"notes",children:"Notes"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The Modal component is a modal window that appears on top of the app content and allows users to interact with it."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Example in VanillaJs - Adding functionality to the buttons"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-js",children:'<ifx-button id="open">Open Modal</ifx-button>\n...\n<ifx-modal id="my-modal" caption="Modal Title" variant="alert-brand" close-on-overlay-click="true">\n  <div slot="content"><span>Modal content</span></div>\n  <div slot="buttons">\n    <ifx-button variant="secondary" onclick="console.log(\'Button 1 clicked\')">Button 1</ifx-button>\n    <ifx-button onclick="closeModal">Button 2</ifx-button>\n  </div>\n</ifx-modal>\n...\nconst openButton = document.getElementById(\'open\');\nconst modal = document.getElementById(\'my-modal\');\n\nopenButton.addEventListener(\'click\', () => {\n    console.log("click")\n    modal.opened = true;\n  });\n  openButton.addEventListener(\'keydown\', (event) => {\n    if (event.key === \'Enter\') {\n      modal.opened = true;\n    }\n  });\nfunction closeModal() {\n  modal.opened = false;\n}\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["For more usage examples within other Javascript frameworks, please check the example applications that are linked in the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"README.md"})," of our ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://infineon.github.io/infineon-design-system-stencil",target:"_blank",rel:"nofollow noopener noreferrer",children:"Github repository"}),"."]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_infineon_design_system_stencil_infineon_design_system_stencil_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);