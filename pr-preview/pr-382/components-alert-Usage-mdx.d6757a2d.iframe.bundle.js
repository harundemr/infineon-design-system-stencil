/*! For license information please see components-alert-Usage-mdx.d6757a2d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[7168,9616],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/alert/alert.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@infineon/infineon-icons/dist/icons.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Alert",tags:["autodocs"],args:{label:"Attention! This is an alert message — check it out!",color:"primary",showIcon:!0,iconName:"c-info-24"},argTypes:{color:{options:["primary","secondary","success","danger","warning"],control:{type:"radio"}},iconName:{options:Object.values(_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_0__.c).map((i=>i.name)),control:{type:"select"}}}},Default=(args=>`<ifx-alert color="${args.color}" icon="${args.showIcon?args.iconName:""}">${args.label}</ifx-alert>`).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `<ifx-alert color="${args.color}" icon="${args.showIcon ? args.iconName : ""}">${args.label}</ifx-alert>`',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/alert/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Usage});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),alert_stories=__webpack_require__("./src/components/alert/alert.stories.ts");const alert_anatomy_namespaceObject=__webpack_require__.p+"static/media/alert-anatomy.317ff63e.png",alert_placement_desktop_namespaceObject=__webpack_require__.p+"static/media/alert-placement-desktop.e73cce93.png",alert_placement_mobile_namespaceObject=__webpack_require__.p+"static/media/alert-placement-mobile.83469ae8.png",alert_variant_brand_namespaceObject=__webpack_require__.p+"static/media/alert-variant-brand.8f9154a0.png",alert_variant_danger_namespaceObject=__webpack_require__.p+"static/media/alert-variant-danger.b075d17b.png",alert_variant_neutral_namespaceObject=__webpack_require__.p+"static/media/alert-variant-neutral.49077105.png",alert_variant_success_namespaceObject=__webpack_require__.p+"static/media/alert-variant-success.b84490e4.png",alert_variant_warning_namespaceObject=__webpack_require__.p+"static/media/alert-variant-warning.1075336f.png";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",br:"br",hr:"hr",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:alert_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"alert",children:"Alert"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The alert component displays important messages or alerts at the top of a web page. It provides a visually prominent and attention-grabbing way to communicate critical information, such as success messages, warnings, dangers, announcements, or any other custom notifications."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"If you have system failures, security breaches, or other critical issues, the alert can be used to inform users about the situation and provide any necessary instructions."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"When there are important announcements, such as upcoming maintenance schedules, new features, or changes to terms and conditions."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"Do not use the alert for aggressive or intrusive advertising purposes."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If the user has to make further actions like accepting changes. Use the modal component instead."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"anatomy",children:"Anatomy"}),"\n",(0,jsx_runtime.jsx)("img",{src:alert_anatomy_namespaceObject,alt:"Alert Anatomy"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Message Icon (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Suppotive icon which should highlight the message."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Message (2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The core content of the alert and contains the message or information that needs to be communicated to the user. The message text should be usually concise, clear, and easy to read."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Dismiss (3)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","A close icon button to allow users to dismiss the alert if they choose to do so."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"brand",children:"Brand"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Should deliver neutral ( = non-warning) messages to users about current activities."}),"\n",(0,jsx_runtime.jsx)("img",{src:alert_variant_brand_namespaceObject,alt:"Alert Variant Brand"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"danger",children:"Danger"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Can be used when a process has to be cancelled or incorrect data has been entered."}),"\n",(0,jsx_runtime.jsx)("img",{src:alert_variant_danger_namespaceObject,alt:"Alert Variant Danger"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"warning",children:"Warning"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Can be used to draw attention to complications in internal web applications."}),"\n",(0,jsx_runtime.jsx)("img",{src:alert_variant_warning_namespaceObject,alt:"Alert Variant Warning"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"success",children:"Success"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Can be used when a process has been successfully completed, e.g. purchasing process."}),"\n",(0,jsx_runtime.jsx)("img",{src:alert_variant_success_namespaceObject,alt:"Alert Variant Success"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"neutral",children:"Neutral"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Can be used for neutral message purposes."}),"\n",(0,jsx_runtime.jsx)("img",{src:alert_variant_neutral_namespaceObject,alt:"Alert Variant Neutral"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"placement",children:"Placement"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"desktop",children:"Desktop"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"For desktop, the alert component is placed at the top right and directly below the navbar. With scroll, the alert remains in its position."}),"\n",(0,jsx_runtime.jsx)("img",{src:alert_placement_desktop_namespaceObject,alt:"Alert Placement Desktop"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"mobile",children:"Mobile"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"In mobile, the alert component is placed at the top across the entire grid width below the navbar. With scroll, the alert remains in its position."}),"\n",(0,jsx_runtime.jsx)("img",{src:alert_placement_mobile_namespaceObject,alt:"Alert Placement Mobile",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Check out the Figma component: ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?type=design&node-id=19446-13846&mode=design&t=41wmZpsNcJw86RXB-4",target:"_blank",rel:"nofollow noopener noreferrer",children:"Alert"})})]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{})]})}const Usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);