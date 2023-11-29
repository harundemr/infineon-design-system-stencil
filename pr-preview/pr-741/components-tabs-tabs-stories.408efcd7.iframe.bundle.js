"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[3222],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./src/components/tabs/tabs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs");const tabHeaders=[{header:"tab a",disabled:!1},{header:"tab b",disabled:!0},{header:"tab c",disabled:!1}],__WEBPACK_DEFAULT_EXPORT__={title:"Components/Tabs",tags:["autodocs"],component:"ifx-tabs",argTypes:{amountOfTabs:{name:"Amount of Tabs",control:"number"},lastTabDisabled:{name:"Last tab disabled",control:"boolean"},orientation:{name:"Orientation",options:["horizontal","vertical"],control:{type:"radio"}},ifxTabIndex:{action:"ifxTabIndex",description:"Custom event emitted on tab index change",table:{type:{summary:"Framework integration",detail:'React: onIfxTabIndex={handleChange}\nVue:@ifxTabIndex="handleChange"\nAngular:(ifxTabIndex)="handleChange()"\nVanillaJs:.addEventListener("ifxTabIndex", (event) => {//handle change});'}}},setActiveTab:{action:"setActiveTab",description:"A function to set the active tab. Must be called with the index of the tab to activate",table:{type:{summary:"Framework integration",detail:"Angular:\n//app.component.html\n<ifx-tabs #tabsElement>...</ifx-tabs>\n//app.component.ts\nimport { IfxTabs } from '@infineon/infineon-design-system-angular';\n...\n@ViewChild('tabsElement') ifxTabs: IfxTabs | undefined;\nthis.ifxTabs?.setActiveTab(index);\n\nReact:\n//Tabs.js\n<ifx-tabs ref={tabsElement}>...</ifx-tabs>\n...\nconst tabsElement = useRef(null);\ntabsElement.current.setActiveTab(index);\n\nVue:\n//Tabs.vue\n<ifx-tabs ref=\"tabsElement\">...</ifx-tabs>\n...\nconst tabsElement = ref(null);\ntabsElement.value.setActiveTab(index);"}}}}},Template=args=>{const tabsElement=document.createElement("ifx-tabs");tabsElement.setAttribute("orientation",args.orientation),tabsElement.addEventListener("ifxTabIndex",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxTabIndex"));for(let i=0;i<args.amountOfTabs;i++){const tabContent=document.createElement("ifx-tab");tabContent.setAttribute("header",tabHeaders[i].header),tabContent.setAttribute("disabled",tabHeaders[i].disabled.toString()),i===args.amountOfTabs-1&&tabContent.setAttribute("disabled",`${args.lastTabDisabled}`),tabContent.innerHTML=`\n        Content for Tab #${i+1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n    `,tabsElement.append(tabContent)}return tabsElement},Default=Template.bind({});Default.args={amountOfTabs:3,orientation:"horizontal",lastTabDisabled:!1};const Disabled=Template.bind({});Disabled.args={amountOfTabs:3,orientation:"horizontal",lastTabDisabled:!0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const tabsElement = (document.createElement('ifx-tabs') as HTMLIfxTabsElement);\n  tabsElement.setAttribute('orientation', args.orientation);\n  tabsElement.addEventListener('ifxTabIndex', action(`ifxTabIndex`));\n  for (let i = 0; i < args.amountOfTabs; i++) {\n    const tabContent = document.createElement('ifx-tab');\n    tabContent.setAttribute('header', tabHeaders[i].header);\n    tabContent.setAttribute('disabled', tabHeaders[i].disabled.toString());\n    if (i === args.amountOfTabs - 1) {\n      tabContent.setAttribute('disabled', `${args.lastTabDisabled}`);\n    }\n    tabContent.innerHTML = `\n        Content for Tab #${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n    `;\n    tabsElement.append(tabContent);\n  }\n\n  // if (args.activeTabIndex !== undefined) { // && !isDisabled(args.activeTabIndex, args.tabHeaders)\n  //   console.log(\"set active tab from new index: \", args.activeTabIndex)\n  //   tabsElement.setActiveTab(args.activeTabIndex);\n  // }\n  // else {\n  //   console.log(\"index\", args.activeTabIndex);\n  //   args.activeTabIndex = undefined;\n  // }\n\n  return tabsElement;\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => {\n  const tabsElement = (document.createElement('ifx-tabs') as HTMLIfxTabsElement);\n  tabsElement.setAttribute('orientation', args.orientation);\n  tabsElement.addEventListener('ifxTabIndex', action(`ifxTabIndex`));\n  for (let i = 0; i < args.amountOfTabs; i++) {\n    const tabContent = document.createElement('ifx-tab');\n    tabContent.setAttribute('header', tabHeaders[i].header);\n    tabContent.setAttribute('disabled', tabHeaders[i].disabled.toString());\n    if (i === args.amountOfTabs - 1) {\n      tabContent.setAttribute('disabled', `${args.lastTabDisabled}`);\n    }\n    tabContent.innerHTML = `\n        Content for Tab #${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n    `;\n    tabsElement.append(tabContent);\n  }\n\n  // if (args.activeTabIndex !== undefined) { // && !isDisabled(args.activeTabIndex, args.tabHeaders)\n  //   console.log(\"set active tab from new index: \", args.activeTabIndex)\n  //   tabsElement.setActiveTab(args.activeTabIndex);\n  // }\n  // else {\n  //   console.log(\"index\", args.activeTabIndex);\n  //   args.activeTabIndex = undefined;\n  // }\n\n  return tabsElement;\n}",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Disabled"]}}]);