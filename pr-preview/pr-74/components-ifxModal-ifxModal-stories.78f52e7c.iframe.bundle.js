(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/components/ifxModal/ifxModal.stories.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Alert",(function(){return Alert}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js");__webpack_exports__.default={title:"Components/IfxModal",component:"ifx-modal",argTypes:{caption:{control:"text",description:"Title for the modal"},closeOnOverlayClick:{control:"boolean",description:"Close the modal when clicking outside the window"},alertColor:{options:["orange","ocean","grey","grey-200","red","green","berry"],control:{type:"radio"},description:"When specified together with alertIcon then an border to the right is shown"},alertIcon:{control:"text",description:"When specified together with alertColor then an border to the right is shown"}}};var Template=function Template(_ref){var caption=_ref.caption,closeOnOverlayClick=_ref.closeOnOverlayClick,alertIcon=_ref.alertIcon,alertColor=_ref.alertColor,modal=document.createElement("ifx-modal");modal.setAttribute("caption",caption),alertIcon&&modal.setAttribute("alert-icon",alertIcon),alertColor&&modal.setAttribute("alert-color",alertColor),modal.setAttribute("close-on-overlay-click",closeOnOverlayClick),modal.addEventListener("modalOpen",Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("modalOpen")),modal.addEventListener("modalClose",Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("modalClose")),modal.addEventListener("okButtonClick",Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("okButtonClick")),modal.addEventListener("cancelButtonClick",Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("cancelButtonClick"));var content=document.createElement("div");content.setAttribute("slot","content"),content.innerHTML="\n    <span>This is the content of the modal.</span>\n  ",modal.appendChild(content);var openButton=document.createElement("button");openButton.id="open",openButton.textContent="Open Modal",openButton.addEventListener("click",(function(){modal.open()}));var storyElement=document.createElement("div");return storyElement.appendChild(modal),storyElement.appendChild(openButton),storyElement},Default=Template.bind({});Default.args={caption:"Modal Title",closeOnOverlayClick:!1};var Alert=Template.bind({});Alert.args={caption:"Alert Modal Title",closeOnOverlayClick:!0,alertIcon:"test",alertColor:"orange"},Default.parameters=Object.assign({storySource:{source:"({\n  caption,\n  closeOnOverlayClick,\n  alertIcon,\n  alertColor\n}) => {\n  const modal = document.createElement('ifx-modal');\n  modal.setAttribute('caption', caption);\n  if (alertIcon) {\n    modal.setAttribute('alert-icon', alertIcon);\n  }\n  if (alertColor) {\n    modal.setAttribute('alert-color', alertColor);\n  }\n  modal.setAttribute('close-on-overlay-click', closeOnOverlayClick);\n\n  modal.addEventListener('modalOpen', action('modalOpen'));\n  modal.addEventListener('modalClose', action('modalClose'));\n  modal.addEventListener('okButtonClick', action('okButtonClick'));\n  modal.addEventListener('cancelButtonClick', action('cancelButtonClick'));\n\n  const content = document.createElement('div');\n  content.setAttribute('slot', 'content');\n  content.innerHTML = `\n    <span>This is the content of the modal.</span>\n  `;\n  modal.appendChild(content);\n\n  const openButton = document.createElement('button');\n  openButton.id = 'open';\n  openButton.textContent = 'Open Modal';\n  openButton.addEventListener('click', () => {\n    modal.open();\n  });\n\n  const storyElement = document.createElement('div');\n  storyElement.appendChild(modal);\n  storyElement.appendChild(openButton);\n\n  return storyElement;\n}"}},Default.parameters),Alert.parameters=Object.assign({storySource:{source:"({\n  caption,\n  closeOnOverlayClick,\n  alertIcon,\n  alertColor\n}) => {\n  const modal = document.createElement('ifx-modal');\n  modal.setAttribute('caption', caption);\n  if (alertIcon) {\n    modal.setAttribute('alert-icon', alertIcon);\n  }\n  if (alertColor) {\n    modal.setAttribute('alert-color', alertColor);\n  }\n  modal.setAttribute('close-on-overlay-click', closeOnOverlayClick);\n\n  modal.addEventListener('modalOpen', action('modalOpen'));\n  modal.addEventListener('modalClose', action('modalClose'));\n  modal.addEventListener('okButtonClick', action('okButtonClick'));\n  modal.addEventListener('cancelButtonClick', action('cancelButtonClick'));\n\n  const content = document.createElement('div');\n  content.setAttribute('slot', 'content');\n  content.innerHTML = `\n    <span>This is the content of the modal.</span>\n  `;\n  modal.appendChild(content);\n\n  const openButton = document.createElement('button');\n  openButton.id = 'open';\n  openButton.textContent = 'Open Modal';\n  openButton.addEventListener('click', () => {\n    modal.open();\n  });\n\n  const storyElement = document.createElement('div');\n  storyElement.appendChild(modal);\n  storyElement.appendChild(openButton);\n\n  return storyElement;\n}"}},Alert.parameters)}}]);