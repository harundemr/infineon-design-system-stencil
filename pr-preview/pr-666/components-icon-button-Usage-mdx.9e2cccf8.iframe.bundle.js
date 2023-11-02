/*! For license information please see components-icon-button-Usage-mdx.9e2cccf8.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[584,5164],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/icon-button/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Usage});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),icon_button_stories=__webpack_require__("./src/components/icon-button/icon-button.stories.ts");const icon_button_grouping_by_function_namespaceObject=__webpack_require__.p+"static/media/icon-button-grouping-by-function.ed47194c.png",icon_button_grouping_by_importance_namespaceObject=__webpack_require__.p+"static/media/icon-button-grouping-by-importance.86afe8a9.png",icon_button_interaction_namespaceObject=__webpack_require__.p+"static/media/icon-button-interaction.087b41c1.png",icon_button_primary_states_namespaceObject=__webpack_require__.p+"static/media/icon-button-primary-states.bdfdf2b0.png",icon_button_secondary_states_namespaceObject=__webpack_require__.p+"static/media/icon-button-secondary-states.eea3423c.png",icon_button_tertiary_states_namespaceObject=__webpack_require__.p+"static/media/icon-button-tertiary-states.b36384d8.png",icon_button_sizes_namespaceObject=__webpack_require__.p+"static/media/icon-button-sizes.0e5af524.png",icon_button_styles_namespaceObject=__webpack_require__.p+"static/media/icon-button-styles.5939ee43.png",icon_button_variant_primary_namespaceObject=__webpack_require__.p+"static/media/icon-button-variant-primary.5ee7d2c7.png",icon_button_variant_secondary_namespaceObject=__webpack_require__.p+"static/media/icon-button-variant-secondary.7c3e8e34.png",icon_button_variant_tertiary_namespaceObject=__webpack_require__.p+"static/media/icon-button-variant-tertiary.66fb3de0.png";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",h4:"h4",hr:"hr",strong:"strong",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:icon_button_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"icon-button",children:"Icon Button"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Icon buttons can be more space-efficient compared to text buttons, especially when you have limited screen real estate or need to display multiple actions in a compact area. By using icons instead of text labels, you can fit more buttons within a given space without sacrificing usability."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"When you have limited screen space and need to prioritize visual clarity and simplicity."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:'When you want to provide additional functions inside a component like "Delete", "Edit", or just to trigger a dropdown menu.'}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"Avoid using icon-buttons as navigational items."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"When the user needs to send a message with forms. Instead use a button with label."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If the action associated with the button is not self-explanatory or requires additional context. Instead use a button with label."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"primary",children:"Primary"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:'Used for CTA-like actions like "Add to cart".'}),"\n",(0,jsx_runtime.jsx)("img",{src:icon_button_variant_primary_namespaceObject,alt:"Icon Button Variant Primary",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"states",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:icon_button_primary_states_namespaceObject,alt:"Icon Button Primary States"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"secondary",children:"Secondary"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Mostly used as neighbour icon button beside the primary one."}),"\n",(0,jsx_runtime.jsx)("img",{src:icon_button_variant_secondary_namespaceObject,alt:"Icon Button Variant Secondary",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"states-1",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:icon_button_secondary_states_namespaceObject,alt:"Icon Button Secondary States"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"tertiary",children:"Tertiary"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Mostly used for other supportive actions where visual dominance is not the case."}),"\n",(0,jsx_runtime.jsx)("img",{src:icon_button_variant_tertiary_namespaceObject,alt:"Icon Button Variant Tertiary",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"states-2",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:icon_button_tertiary_states_namespaceObject,alt:"Icon Button Tertiary States"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"style",children:"Style"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Our design system provides two different styles: square and round."}),"\n",(0,jsx_runtime.jsx)("img",{src:icon_button_styles_namespaceObject,alt:"Icon Button Styles"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsx)("img",{src:icon_button_sizes_namespaceObject,alt:"Icon Button Sizes"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"20px",children:"20px"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Our smallest size which should be handled as a function item. It can be used alone or in an icon group."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"32px",children:"32px"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"From this size it is possible to provide an icon group which can be grouped by importance. This is our default size."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"36px",children:"36px"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"To complement other DDS components that have the same size, we offer the same capabilities as the 32px icon button."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"40px",children:"40px"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Our largest icon button to be used for single actions such as pagination arrows or a support icon button that has a fixed position when scrolling."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"mouse-interaction",children:"Mouse interaction"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"While icon buttons like the primary and secondary have a visible clicking area, the tertiary one is invisible."}),"\n",(0,jsx_runtime.jsx)("img",{src:icon_button_interaction_namespaceObject,alt:"Icon Button Interaction"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"grouping-icon-buttons",children:"Grouping icon buttons"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"It is often necessary to provide several icons in a central location. This helps users to recognise and distinguish the actions they can perform on a page or screen. Grouping icon buttons also improves the visual hierarchy of a design, making it clearer and more user-friendly."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"group-by-importance",children:"Group by importance"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:'Group icon buttons by importance if you want to help users quickly identify the primary action they should perform. You can use a primary icon button for an important action such as "Add to cart" and a secondary one for "Download PDF". You can also place a tertiary icon button next to the others, e.g. to provide a "More" icon where a drop-down menu with supplementary options can be accessed after clicking.'}),"\n",(0,jsx_runtime.jsx)("img",{src:icon_button_grouping_by_importance_namespaceObject,alt:"Icon Button Group by Importacne"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"group-by-function",children:"Group by function"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:'Group buttons by function to help users quickly find the action they need to take based on the task they are trying to complete. For example this can be useful in tables to manage a single row with actions like "Download", "Share", "Mark as favorite".'}),"\n",(0,jsx_runtime.jsx)("img",{src:icon_button_grouping_by_function_namespaceObject,alt:"Icon Button Group by Function"}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Check out the Figma component: ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?type=design&node-id=11700-6732&mode=design&t=xVWOPkYnUvh53BSW-4",target:"_blank",rel:"nofollow noopener noreferrer",children:"Icon Button"})})]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{})]})}const Usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/icon-button/icon-button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@infineon/infineon-icons/dist/icons.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Icon Button",tags:["autodocs"],args:{variant:"primary",size:"m",disabled:!1,icon:"c-info-24",href:"",target:"_blank",shape:"round"},argTypes:{icon:{options:Object.values(_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_0__.c).map((i=>i.name)),control:{type:"select"}},variant:{options:["primary","secondary","tertiary"],control:{type:"radio"}},size:{description:"Size options: s (24px), m (40px) and l (48px) - default: m",options:["s","m","l"],control:{type:"radio"}},target:{options:["_blank","_self","_parent"],control:{type:"radio"}},shape:{options:["round","square"],control:{type:"radio"}}}},Default=(args=>`<ifx-icon-button shape="${args.shape}" variant="${args.variant}" icon="${args.icon}" href="${args.href}" target="${args.target}"  size="${args.size}" disabled="${args.disabled}">\n  </ifx-icon-button>`).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `<ifx-icon-button shape="${args.shape}" variant="${args.variant}" icon="${args.icon}" href="${args.href}" target="${args.target}"  size="${args.size}" disabled="${args.disabled}">\n  </ifx-icon-button>`',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);