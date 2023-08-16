/*! For license information please see components-template-story-with-markdown-Usage-template-mdx.e7b30a6f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[7100,6457],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/template-story-with-markdown/example.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Documentation/Story template",args:{label:"Button",variant:"solid",color:"primary",type:"button",size:"m",disabled:!1,icon:"",position:"left",href:"",target:"_blank"},argTypes:{variant:{options:["solid","outline","outline-text"],control:{type:"radio"}},color:{options:["primary","secondary","success","danger","warning"],control:{type:"radio"}},type:{options:["submit","button"],control:{type:"radio"}},size:{options:["s","m"],control:{type:"radio"}},position:{options:["left","right"],control:{type:"radio"}},target:{options:["_blank","_self","_parent"],control:{type:"radio"}}}},DefaultTemplate=args=>`<ifx-example type="${args.type}" variant="${args.variant}" icon="${args.icon}" position="${args.position}" href="${args.href}" target="${args.target}" color="${args.color}" size="${args.size}" disabled="${args.disabled}">\n  ${args.label}\n  </ifx-example>`,Primary=DefaultTemplate.bind({}),Secondary=DefaultTemplate.bind({});Secondary.args={color:"secondary"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'args => `<ifx-example type="${args.type}" variant="${args.variant}" icon="${args.icon}" position="${args.position}" href="${args.href}" target="${args.target}" color="${args.color}" size="${args.size}" disabled="${args.disabled}">\n  ${args.label}\n  </ifx-example>`',...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:'args => `<ifx-example type="${args.type}" variant="${args.variant}" icon="${args.icon}" position="${args.position}" href="${args.href}" target="${args.target}" color="${args.color}" size="${args.size}" disabled="${args.disabled}">\n  ${args.label}\n  </ifx-example>`',...Secondary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary"]},"./src/components/template-story-with-markdown/Usage template.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_example_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/template-story-with-markdown/example.stories.ts");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_example_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"story-template-with-markdown--assets",children:"Story template with markdown + assets"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"adding-markdown",children:"Adding markdown"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et blandit ligula. Maecenas eleifend lobortis tempor. Integer non eros eu dolor facilisis suscipit in eget massa. Praesent turpis elit, placerat quis ullamcorper ac, laoreet non elit. Morbi sed sollicitudin erat, eget mattis nibh. Maecenas posuere justo sapien, non tincidunt tellus condimentum sit amet. Vestibulum iaculis quam ex. Cras bibendum ut sem eget gravida. Cras porta, nisl non molestie porta, arcu lectus maximus purus, et ultrices ex nunc et erat. Praesent tempor maximus augue a tempor. Vestibulum at ex lorem. Donec pretium auctor erat vel condimentum. Maecenas porttitor, metus eu gravida tristique, lacus lorem faucibus arcu, eget vehicula quam nisl vel ante."})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);