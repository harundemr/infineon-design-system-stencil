"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[6646],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./src/components/accordion/accordion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Accordion",component:"ifx-accordion",tags:["autodocs"],args:{autoCollapse:!1,initialCollapse:!0},argTypes:{amountOfItems:{control:"number"},initialCollapse:{description:"If set on more than one accordion-item, auto-collapse must be false"}}},Default=(args=>{const accordionElement=document.createElement("ifx-accordion"),initialItem=document.createElement("ifx-accordion-item");initialItem.setAttribute("initialCollapse",args.initialCollapse),initialItem.setAttribute("caption","Label"),initialItem.innerHTML="\n  Content for Initial Item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n",accordionElement.append(initialItem),accordionElement.setAttribute("auto-collapse",args.autoCollapse);for(let i=0;i<args.amountOfItems;i++){const item=document.createElement("ifx-accordion-item");item.setAttribute("caption","Label"),item.innerHTML=`\n        Content for Item #${i+1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n    `,item.addEventListener("ifxItemOpen",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxItemOpen")),item.addEventListener("ifxItemClose",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxItemClose")),accordionElement.append(item)}return accordionElement}).bind({});Default.args={amountOfItems:3},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const accordionElement = document.createElement('ifx-accordion');\n  const initialItem = document.createElement('ifx-accordion-item');\n  initialItem.setAttribute('initialCollapse', args.initialCollapse);\n  initialItem.setAttribute('caption', `Label`);\n  initialItem.innerHTML = `\n  Content for Initial Item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n`;\n  accordionElement.append(initialItem);\n  accordionElement.setAttribute('auto-collapse', args.autoCollapse);\n  for (let i = 0; i < args.amountOfItems; i++) {\n    const item = document.createElement('ifx-accordion-item');\n    item.setAttribute('caption', `Label`);\n    item.innerHTML = `\n        Content for Item #${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n    `;\n    item.addEventListener('ifxItemOpen', action('ifxItemOpen'));\n    item.addEventListener('ifxItemClose', action('ifxItemClose'));\n    accordionElement.append(item);\n  }\n  return accordionElement;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);