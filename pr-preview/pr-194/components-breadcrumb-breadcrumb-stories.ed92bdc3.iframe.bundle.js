"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[9248],{"./src/components/breadcrumb/breadcrumb.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Breadcrumb",component:"ifx-breadcrumb",parameters:{actions:{handles:["ifx-breadcrumb"]}},argTypes:{breadcrumbs:{control:"object"}}},Default=(args=>`<ifx-breadcrumb id="breadcrumb"></ifx-breadcrumb>\n           <script>\n             document.getElementById('breadcrumb').breadcrumbs = ${JSON.stringify(args.breadcrumbs)};\n           <\/script>`).bind({});Default.args={breadcrumbs:[{text:"Home",url:"#"},{text:"Products",url:"#"},{text:"Widgets",url:"#"},{text:"Current Page",url:""}]},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const breadcrumbsString = JSON.stringify(args.breadcrumbs);\n  return `<ifx-breadcrumb id=\"breadcrumb\"></ifx-breadcrumb>\n           <script>\n             document.getElementById('breadcrumb').breadcrumbs = ${breadcrumbsString};\n           <\/script>`;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);