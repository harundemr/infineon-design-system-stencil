/*! For license information please see components-tabs-Usage-mdx.f41f1521.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[4131,3222],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./src/components/tabs/tabs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Tabs",tags:["autodocs"],component:"ifx-tabs",argTypes:{amountOfTabs:{name:"Amount of Tabs",control:"number"},lastTabDisabled:{name:"Last tab disabled",control:"boolean"},orientation:{name:"Orientation",options:["horizontal","vertical"],control:{type:"radio"}}}},Template=args=>{const tabsElement=document.createElement("ifx-tabs");tabsElement.setAttribute("orientation",args.orientation),tabsElement.addEventListener("ifxTabIndex",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxTabIndex"));for(let i=0;i<args.amountOfTabs;i++){const tabContent=document.createElement("ifx-tab");tabContent.setAttribute("header",`tab header ${i+1}`),tabContent.setAttribute("disabled","false"),i===args.amountOfTabs-1&&tabContent.setAttribute("disabled",`${args.lastTabDisabled}`),tabContent.innerHTML=`\n        Content for Tab #${i+1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n    `,tabContent.addEventListener("tabBecameActive",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)(`tabBecameActive (tab #${i})`)),tabContent.addEventListener("tabBecameInactive",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)(`tabBecameInactive (tab #${i})`)),tabsElement.append(tabContent)}return tabsElement},Default=Template.bind({});Default.args={amountOfTabs:3,orientation:"horizontal",lastTabDisabled:!1};const Disabled=Template.bind({});Disabled.args={amountOfTabs:3,orientation:"horizontal",lastTabDisabled:!0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const tabsElement = (document.createElement('ifx-tabs') as HTMLIfxTabsElement);\n  tabsElement.setAttribute('orientation', args.orientation);\n  tabsElement.addEventListener('ifxTabIndex', action(`ifxTabIndex`));\n  for (let i = 0; i < args.amountOfTabs; i++) {\n    const tabContent = document.createElement('ifx-tab');\n    tabContent.setAttribute('header', `tab header ${i + 1}`);\n    tabContent.setAttribute('disabled', 'false');\n    if (i === args.amountOfTabs - 1) {\n      tabContent.setAttribute('disabled', `${args.lastTabDisabled}`);\n    }\n    tabContent.innerHTML = `\n        Content for Tab #${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n    `;\n    tabContent.addEventListener('tabBecameActive', action(`tabBecameActive (tab #${i})`));\n    tabContent.addEventListener('tabBecameInactive', action(`tabBecameInactive (tab #${i})`));\n    tabsElement.append(tabContent);\n  }\n  return tabsElement;\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => {\n  const tabsElement = (document.createElement('ifx-tabs') as HTMLIfxTabsElement);\n  tabsElement.setAttribute('orientation', args.orientation);\n  tabsElement.addEventListener('ifxTabIndex', action(`ifxTabIndex`));\n  for (let i = 0; i < args.amountOfTabs; i++) {\n    const tabContent = document.createElement('ifx-tab');\n    tabContent.setAttribute('header', `tab header ${i + 1}`);\n    tabContent.setAttribute('disabled', 'false');\n    if (i === args.amountOfTabs - 1) {\n      tabContent.setAttribute('disabled', `${args.lastTabDisabled}`);\n    }\n    tabContent.innerHTML = `\n        Content for Tab #${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n    `;\n    tabContent.addEventListener('tabBecameActive', action(`tabBecameActive (tab #${i})`));\n    tabContent.addEventListener('tabBecameInactive', action(`tabBecameInactive (tab #${i})`));\n    tabsElement.append(tabContent);\n  }\n  return tabsElement;\n}",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Disabled"]},"./src/components/tabs/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Usage});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),tabs_stories=__webpack_require__("./src/components/tabs/tabs.stories.tsx");const tabs_anatomy_namespaceObject=__webpack_require__.p+"static/media/tabs-anatomy.5c03eaf9.png",tabs_desktop_horizontal_namespaceObject=__webpack_require__.p+"static/media/tabs-desktop-horizontal.465096b9.png",tabs_desktop_vertical_namespaceObject=__webpack_require__.p+"static/media/tabs-desktop-vertical.a28a5342.png",tabs_mobile_horizontal_namespaceObject=__webpack_require__.p+"static/media/tabs-mobile-horizontal.da8319db.png",tabs_states_namespaceObject=__webpack_require__.p+"static/media/tabs-states.707be23c.png",tabs_size_namespaceObject=__webpack_require__.p+"static/media/tabs-size.aafb1f6e.png",tabs_mouse_interaction_namespaceObject=__webpack_require__.p+"static/media/tabs-mouse-interaction.f4440876.png";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",br:"br",h4:"h4",hr:"hr",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:tabs_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"tabs",children:"Tabs"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The tab component guides the user step-by-step through the user interface and allows them to access more specific content without overwhelming them with all the available options at once."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"If you have a significant amount of content organized into distinct sections or categories and you want to provide users with a structured way to navigate through them."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"If your interface has only a small amount of content that doesn't require a hierarchical navigation structure."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If the navigation hierarchy is shallow or flat, and the content sections or categories are easily scannable or accessible without the need for tabs."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If the available screen space is extremely limited and cannot accommodate the content navigation component without compromising the overall user experience."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"anatomy",children:"Anatomy"}),"\n",(0,jsx_runtime.jsx)("img",{src:tabs_anatomy_namespaceObject,alt:"Tabs Anatomy"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Selected Tab Item (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","As default the first tab item should be selected."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Tab Item (2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The unselected state of a tab navigation."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Tab Container (3)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The parent element that holds all the individual tab items and the content area associated with each tab."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Content Area(4)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The content area is the part where the actual content related to the active tab is displayed. When a user clicks on a tab, the content area updates to show the corresponding content associated with that tab."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"horizontal",children:"Horizontal"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This variant is intended for use in layouts with a horizontal orientation. Each tab represents a specific section or content, and users can click on them to switch between the different sections seamlessly."}),"\n",(0,jsx_runtime.jsx)("img",{src:tabs_desktop_horizontal_namespaceObject,alt:"Tabs Desktop Horizontal"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"vertical",children:"Vertical"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This variant is designed for use in layouts with a vertical orientation. In this variant, the tabs are stacked vertically, typically on the left of the content area. Users can click on each tab to navigate to the respective content or section."}),"\n",(0,jsx_runtime.jsx)("img",{src:tabs_desktop_vertical_namespaceObject,alt:"Tabs Desktop Vertical"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"mobile",children:"Mobile"}),"\n",(0,jsx_runtime.jsx)("img",{src:tabs_mobile_horizontal_namespaceObject,alt:"Tabs Mobile Use",width:"50%"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"For mobile devices, it is recommended to use the horizontal tab variant exclusively."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"The small size should be used."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If the tabs become too long for mobile screens, they can be wiped."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Only one size is available for the vertical tab variant, which should primarily be used for desktop and not for mobile. The vertical tab variant can be used for all viewports."}),"\n",(0,jsx_runtime.jsx)("img",{src:tabs_size_namespaceObject,alt:"Tabs Size"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"mouse-interaction",children:"Mouse Interaction"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The whole tab item area should be clickable."}),"\n",(0,jsx_runtime.jsx)("img",{src:tabs_mouse_interaction_namespaceObject,alt:"Tabs Mouse Interaction"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"state",children:"State"}),"\n",(0,jsx_runtime.jsx)("img",{src:tabs_states_namespaceObject,alt:"Tabs States"}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Check out the Figma component: ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/VxG1MQaNdzsjiW6P6WmVt9/Documentation-assets?type=design&node-id=16847-13055&mode=design&t=SPEdFh90JrvCz8JT-4",target:"_blank",rel:"nofollow noopener noreferrer",children:"Tabs"})})]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{})]})}const Usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);