/*! For license information please see components-icon-Usage-mdx.dd024635.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[4476,3061],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/icon/infineonIconStencil.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Icon",tags:["autodocs"],args:{icon:"c-check-16"},argTypes:{icon:{control:"text"}}},Default=(args=>`<ifx-icon icon="${args.icon}"></ifx-icon>`).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `<ifx-icon icon="${args.icon}"></ifx-icon>`',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/icon/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Usage});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),infineonIconStencil_stories=__webpack_require__("./src/components/icon/infineonIconStencil.stories.ts");const icon_color_alignment_namespaceObject=__webpack_require__.p+"static/media/icon-color-alignment.942ae734.png",icon_alignment_namespaceObject=__webpack_require__.p+"static/media/icon-alignment.1744f101.png",icon_sizes_namespaceObject=__webpack_require__.p+"static/media/icon-sizes.0a6db4d7.png",icon_structure_namespaceObject=__webpack_require__.p+"static/media/icon-structure.85409766.png",icon_size_alignment_namespaceObject=__webpack_require__.p+"static/media/icon-size-alignment.e21e6ae3.png",icon_variants_namespaceObject=__webpack_require__.p+"static/media/icon-variants.7e10c4d3.png",icon_text_color_brand_namespaceObject=__webpack_require__.p+"static/media/icon-text-color-brand.056547af.png",icon_text_color_dark_namespaceObject=__webpack_require__.p+"static/media/icon-text-color-dark.992e5931.png",icon_text_color_white_namespaceObject=__webpack_require__.p+"static/media/icon-text-color-white.10945f17.png";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",blockquote:"blockquote",hr:"hr",strong:"strong",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:infineonIconStencil_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"icon",children:"Icon"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Icons play a crucial role in our design system, providing visual representation and enhancing user experiences. We primarily utilize the Nucleo icon library for our icons, ensuring consistency and a wide range of options."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"Icons can be used alongside text to aid navigation and improve usability. They can represent different sections, categories, or actions, making it easier for users to identify and interact with them."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If you want to communicate actions, such as saving, deleting, editing, or sharing. By utilizing recognizable icons, users can quickly understand the purpose or functionality associated with a specific action."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"If an icon's meaning is unclear or open to interpretation, it is best to use descriptive text instead. Clarity and understanding should always take precedence over aesthetic considerations."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Avoid overcrowding interfaces with too many icons, as this can lead to visual clutter and confusion. Strive for a balanced composition that maintains a clean and intuitive design."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"To ensure consistency and alignment, we utilize a 4px grid size for our icons. This grid aligns with the overall design system and facilitates seamless integration into our interfaces. We have established four fixed icon sizes: 12×12px, 16×16px, and 24×24px. Choose the appropriate size based on the context and surrounding elements."}),"\n",(0,jsx_runtime.jsxs)(_components.blockquote,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"Icons within our DDS components come with the right icon size out of the box!"}),"\n"]}),"\n",(0,jsx_runtime.jsx)("img",{src:icon_sizes_namespaceObject,alt:"Icon Sizes"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"structure",children:"Structure"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"All our icon sizes include the icon itself and the surrounding area."}),"\n",(0,jsx_runtime.jsx)("img",{src:icon_structure_namespaceObject,alt:"Icon Structure",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The DDS provides two different kinds of icons: outlined and filled."}),"\n",(0,jsx_runtime.jsx)("img",{src:icon_variants_namespaceObject,alt:"Icon Variants",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"alignment-with-text",children:"Alignment with text"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"size-alignment",children:"Size alignment"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Try to pair specific typographic styles with corresponding icon sizes. The body-03 and body-04 typographic style is well-suited for 16px icons, while larger typography, such as the heading-04, works best with 24px icons."}),"\n",(0,jsx_runtime.jsx)("img",{src:icon_size_alignment_namespaceObject,alt:"Icon Size Alignment",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"vertical-alignment",children:"Vertical alignment"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Icons should be vertically aligned with the accompanying text or other related elements. Centered aligned icons of adjacent text helps maintain visual harmony and improves readability."}),"\n",(0,jsx_runtime.jsx)("img",{src:icon_alignment_namespaceObject,alt:"Icon Alignment",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"text-color-alignment",children:"Text color alignment"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Icons should be aligned with the text color they accompany. Ensure that icons adhere to the same color scheme as the surrounding text to create a unified and visually pleasing user experience."}),"\n",(0,jsx_runtime.jsx)("img",{src:icon_color_alignment_namespaceObject,alt:"Icon Color Alignment",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"color",children:"Color"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"dark-font-color",children:"Dark font color"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The black font color is the default color for icons. We use this color in most cases on white or engineering-100 backgrounds."}),"\n",(0,jsx_runtime.jsx)("img",{src:icon_text_color_dark_namespaceObject,alt:"Icon Text Color Dark",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"white-font-color",children:"White font color"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"We use the base white color on dark backgrounds."}),"\n",(0,jsx_runtime.jsx)("img",{src:icon_text_color_white_namespaceObject,alt:"Icon Text Color White",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"brand-font-color",children:"Brand font color"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"We use our brand color ocean-500 to highlight the content or actions connected with the icon. Use it on white or engineering-100 backgrounds."}),"\n",(0,jsx_runtime.jsx)("img",{src:icon_text_color_brand_namespaceObject,alt:"Icon Text Color Brand",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Check out the Figma Icon Library: ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/yWwaLoqsWLWygDxXfvdym9/Infineon-DDS-%7C-Icons?type=design&node-id=6%3A6&mode=design&t=Zc0icFhkq4Jv0xSn-1",target:"_blank",rel:"nofollow noopener noreferrer",children:"Icon Library"})})]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{})]})}const Usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);