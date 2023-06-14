"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[9134],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_OPEUWD42.aD});var chunk_OPEUWD42=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs")},"./src/components/modal/modal.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Alert:()=>Alert,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@infineon/infineon-icons/dist/icons.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Modal",component:"ifx-modal",argTypes:{caption:{control:"text",description:"Title for the modal"},closeOnOverlayClick:{control:"boolean",description:"Close the modal when clicking outside the window"},alertIcon:{options:Object.keys(_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__.c),control:{type:"select"},description:"When specified together with alertIcon then an border to the right is shown"},alertColor:{options:["primary","secondary","success","danger","warning"],control:{type:"select"},description:"When specified together with alertColor then an border to the right is shown"}}},Template=({caption,closeOnOverlayClick,alertIcon,alertColor})=>{const modal=document.createElement("ifx-modal");modal.setAttribute("caption",caption),alertIcon&&modal.setAttribute("alert-icon",alertIcon),alertColor&&modal.setAttribute("alert-color",alertColor),modal.setAttribute("close-on-overlay-click",closeOnOverlayClick),modal.addEventListener("modalOpen",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("modalOpen")),modal.addEventListener("modalClose",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("modalClose")),modal.addEventListener("okButtonClick",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("okButtonClick")),modal.addEventListener("cancelButtonClick",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("cancelButtonClick"));const content=document.createElement("div");content.setAttribute("slot","content"),content.innerHTML="\n    <span>This is the content of the modal.</span>\n  ",modal.appendChild(content);const openButton=document.createElement("ifx-button");openButton.id="open",openButton.textContent="Open Modal",openButton.addEventListener("click",(()=>{modal.open()}));const storyElement=document.createElement("div");return storyElement.appendChild(modal),storyElement.appendChild(openButton),storyElement},Default=Template.bind({});Default.args={caption:"Modal Title",closeOnOverlayClick:!1};const Alert=Template.bind({});Alert.args={caption:"Alert Modal Title",closeOnOverlayClick:!0,alertIcon:"test",alertColor:"primary"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  caption,\n  closeOnOverlayClick,\n  alertIcon,\n  alertColor\n}) => {\n  const modal = document.createElement('ifx-modal');\n  modal.setAttribute('caption', caption);\n  if (alertIcon) {\n    modal.setAttribute('alert-icon', alertIcon);\n  }\n  if (alertColor) {\n    modal.setAttribute('alert-color', alertColor);\n  }\n  modal.setAttribute('close-on-overlay-click', closeOnOverlayClick);\n  modal.addEventListener('modalOpen', action('modalOpen'));\n  modal.addEventListener('modalClose', action('modalClose'));\n  modal.addEventListener('okButtonClick', action('okButtonClick'));\n  modal.addEventListener('cancelButtonClick', action('cancelButtonClick'));\n  const content = document.createElement('div');\n  content.setAttribute('slot', 'content');\n  content.innerHTML = `\n    <span>This is the content of the modal.</span>\n  `;\n  modal.appendChild(content);\n  const openButton = document.createElement('ifx-button');\n  openButton.id = 'open';\n  openButton.textContent = 'Open Modal';\n  openButton.addEventListener('click', () => {\n    modal.open();\n  });\n  const storyElement = document.createElement('div');\n  storyElement.appendChild(modal);\n  storyElement.appendChild(openButton);\n  return storyElement;\n}",...Default.parameters?.docs?.source}}},Alert.parameters={...Alert.parameters,docs:{...Alert.parameters?.docs,source:{originalSource:"({\n  caption,\n  closeOnOverlayClick,\n  alertIcon,\n  alertColor\n}) => {\n  const modal = document.createElement('ifx-modal');\n  modal.setAttribute('caption', caption);\n  if (alertIcon) {\n    modal.setAttribute('alert-icon', alertIcon);\n  }\n  if (alertColor) {\n    modal.setAttribute('alert-color', alertColor);\n  }\n  modal.setAttribute('close-on-overlay-click', closeOnOverlayClick);\n  modal.addEventListener('modalOpen', action('modalOpen'));\n  modal.addEventListener('modalClose', action('modalClose'));\n  modal.addEventListener('okButtonClick', action('okButtonClick'));\n  modal.addEventListener('cancelButtonClick', action('cancelButtonClick'));\n  const content = document.createElement('div');\n  content.setAttribute('slot', 'content');\n  content.innerHTML = `\n    <span>This is the content of the modal.</span>\n  `;\n  modal.appendChild(content);\n  const openButton = document.createElement('ifx-button');\n  openButton.id = 'open';\n  openButton.textContent = 'Open Modal';\n  openButton.addEventListener('click', () => {\n    modal.open();\n  });\n  const storyElement = document.createElement('div');\n  storyElement.appendChild(modal);\n  storyElement.appendChild(openButton);\n  return storyElement;\n}",...Alert.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Alert"]}}]);