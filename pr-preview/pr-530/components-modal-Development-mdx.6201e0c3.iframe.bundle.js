/*! For license information please see components-modal-Development-mdx.6201e0c3.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[1390,9134],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./src/components/modal/modal.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Alert:()=>Alert,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@infineon/infineon-icons/dist/icons.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Modal",component:"ifx-modal",argTypes:{caption:{control:"text",description:"Title for the modal"},closeOnOverlayClick:{control:"boolean",description:"Close the modal when clicking outside the window"},alertIcon:{options:Object.keys(_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__.c),control:{type:"select"},description:"When specified together with alertIcon then an border to the right is shown"},variant:{options:["default","alert-brand","alert-danger"],control:{type:"radio"}}}},Template=({caption,closeOnOverlayClick,variant,alertIcon})=>{const modal=document.createElement("ifx-modal");modal.setAttribute("caption",caption),modal.setAttribute("variant",variant),alertIcon&&modal.setAttribute("alert-icon",alertIcon),modal.setAttribute("close-on-overlay-click",closeOnOverlayClick),modal.addEventListener("modalOpen",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("modalOpen")),modal.addEventListener("modalClose",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("modalClose")),modal.addEventListener("closeButtonClick",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("closeButtonClick"));const content=document.createElement("div");content.setAttribute("slot","content"),content.innerHTML="\n    <span>Modal content</span>\n  ",modal.appendChild(content);const buttons=document.createElement("div");buttons.setAttribute("slot","buttons");const cancelButton=document.createElement("ifx-button");cancelButton.setAttribute("variant","secondary"),cancelButton.textContent="Button",cancelButton.addEventListener("click",(()=>{modal.close()}));const primaryButton=document.createElement("ifx-button");primaryButton.textContent="Button",primaryButton.addEventListener("click",(()=>{modal.close()})),buttons.appendChild(cancelButton),buttons.appendChild(primaryButton),modal.appendChild(buttons);const openButton=document.createElement("ifx-button");openButton.id="open",openButton.textContent="Open Modal",openButton.addEventListener("click",(()=>{modal.open()}));const storyElement=document.createElement("div");return storyElement.appendChild(modal),storyElement.appendChild(openButton),storyElement},Default=Template.bind({});Default.args={caption:"Modal Title",closeOnOverlayClick:!1,variant:"default"};const Alert=Template.bind({});Alert.args={caption:"Alert-Brand Modal Title",closeOnOverlayClick:!0,alertIcon:"arrowdoen24",variant:"alert-brand"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  caption,\n  closeOnOverlayClick,\n  variant,\n  alertIcon\n}) => {\n  const modal = document.createElement('ifx-modal');\n  modal.setAttribute('caption', caption);\n  modal.setAttribute('variant', variant);\n  if (alertIcon) {\n    modal.setAttribute('alert-icon', alertIcon);\n  }\n  modal.setAttribute('close-on-overlay-click', closeOnOverlayClick);\n  modal.addEventListener('modalOpen', action('modalOpen'));\n  modal.addEventListener('modalClose', action('modalClose'));\n  modal.addEventListener('closeButtonClick', action('closeButtonClick'));\n  const content = document.createElement('div');\n  content.setAttribute('slot', 'content');\n  content.innerHTML = `\n    <span>Modal content</span>\n  `;\n  modal.appendChild(content);\n  const buttons = document.createElement('div');\n  buttons.setAttribute('slot', 'buttons');\n  const cancelButton = document.createElement('ifx-button');\n  cancelButton.setAttribute('variant', 'secondary');\n  cancelButton.textContent = 'Button';\n  cancelButton.addEventListener('click', () => {\n    modal.close();\n  });\n  const primaryButton = document.createElement('ifx-button');\n  primaryButton.textContent = 'Button';\n  primaryButton.addEventListener('click', () => {\n    modal.close();\n  });\n  buttons.appendChild(cancelButton);\n  buttons.appendChild(primaryButton);\n  modal.appendChild(buttons);\n  const openButton = document.createElement('ifx-button');\n  openButton.id = 'open';\n  openButton.textContent = 'Open Modal';\n  openButton.addEventListener('click', () => {\n    modal.open();\n  });\n  const storyElement = document.createElement('div');\n  storyElement.appendChild(modal);\n  storyElement.appendChild(openButton);\n  return storyElement;\n}",...Default.parameters?.docs?.source}}},Alert.parameters={...Alert.parameters,docs:{...Alert.parameters?.docs,source:{originalSource:"({\n  caption,\n  closeOnOverlayClick,\n  variant,\n  alertIcon\n}) => {\n  const modal = document.createElement('ifx-modal');\n  modal.setAttribute('caption', caption);\n  modal.setAttribute('variant', variant);\n  if (alertIcon) {\n    modal.setAttribute('alert-icon', alertIcon);\n  }\n  modal.setAttribute('close-on-overlay-click', closeOnOverlayClick);\n  modal.addEventListener('modalOpen', action('modalOpen'));\n  modal.addEventListener('modalClose', action('modalClose'));\n  modal.addEventListener('closeButtonClick', action('closeButtonClick'));\n  const content = document.createElement('div');\n  content.setAttribute('slot', 'content');\n  content.innerHTML = `\n    <span>Modal content</span>\n  `;\n  modal.appendChild(content);\n  const buttons = document.createElement('div');\n  buttons.setAttribute('slot', 'buttons');\n  const cancelButton = document.createElement('ifx-button');\n  cancelButton.setAttribute('variant', 'secondary');\n  cancelButton.textContent = 'Button';\n  cancelButton.addEventListener('click', () => {\n    modal.close();\n  });\n  const primaryButton = document.createElement('ifx-button');\n  primaryButton.textContent = 'Button';\n  primaryButton.addEventListener('click', () => {\n    modal.close();\n  });\n  buttons.appendChild(cancelButton);\n  buttons.appendChild(primaryButton);\n  modal.appendChild(buttons);\n  const openButton = document.createElement('ifx-button');\n  openButton.id = 'open';\n  openButton.textContent = 'Open Modal';\n  openButton.addEventListener('click', () => {\n    modal.open();\n  });\n  const storyElement = document.createElement('div');\n  storyElement.appendChild(modal);\n  storyElement.appendChild(openButton);\n  return storyElement;\n}",...Alert.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Alert"]},"./src/components/modal/Development.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_infineon_design_system_stencil_infineon_design_system_stencil_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_modal_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/modal/modal.stories.ts");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",strong:"strong",pre:"pre",code:"code",h2:"h2",h3:"h3",a:"a"},(0,_home_runner_work_infineon_design_system_stencil_infineon_design_system_stencil_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_modal_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"modal",children:"Modal"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_modal_stories__WEBPACK_IMPORTED_MODULE_2__.Default,sourceState:"shown"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Methods"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"open()\nclose()\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"stories",children:"Stories"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_modal_stories__WEBPACK_IMPORTED_MODULE_2__.Default,sourceState:"shown"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"alert",children:"Alert"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_modal_stories__WEBPACK_IMPORTED_MODULE_2__.Alert,sourceState:"shown"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"notes",children:"Notes"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The Modal component is a modal window that appears on top of the app content and allows users to interact with it."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Example in VanillaJs:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-js",children:'<ifx-modal caption="Modal Title" variant="alert-brand" close-on-overlay-click="true">\n  <div slot="content"><span>Modal content</span></div>\n  <div slot="buttons">\n    <ifx-button variant="secondary" onclick="console.log(\'Button 1 clicked\')">Button 1</ifx-button>\n    <ifx-button onclick="modal.close()">Button 2</ifx-button>\n  </div>\n</ifx-modal>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["For more usage examples within other Javascript frameworks, please check the example applications that are linked in the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"README.md"})," of our ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://infineon.github.io/infineon-design-system-stencil",target:"_blank",rel:"nofollow noopener noreferrer",children:"Github repository"}),"."]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_infineon_design_system_stencil_infineon_design_system_stencil_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);