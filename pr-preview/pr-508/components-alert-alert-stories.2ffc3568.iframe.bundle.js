"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[9616],{"./src/components/alert/alert.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@infineon/infineon-icons/dist/icons.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Alert",tags:["autodocs"],args:{label:"Attention! This is an alert message — check it out!",color:"primary",showIcon:!0,iconName:"c-info-24"},argTypes:{color:{options:["primary","secondary","danger","warning"],control:{type:"radio"}},iconName:{options:Object.values(_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_0__.c).map((i=>i.name)),control:{type:"select"}}}},Default=(args=>`<ifx-alert color="${args.color}" icon="${args.showIcon?args.iconName:""}">${args.label}</ifx-alert>`).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `<ifx-alert color="${args.color}" icon="${args.showIcon ? args.iconName : ""}">${args.label}</ifx-alert>`',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);