/*! For license information please see components-link-Usage-mdx.b681aecf.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[4500,5633],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/link/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),link_stories=__webpack_require__("./src/components/link/link.stories.ts");const link_bold_namespaceObject=__webpack_require__.p+"static/media/link-bold.60720d05.png",link_bold_states_namespaceObject=__webpack_require__.p+"static/media/link-bold-states.4e6827bc.png",link_title_namespaceObject=__webpack_require__.p+"static/media/link-title.8906cf7a.png",link_underline_namespaceObject=__webpack_require__.p+"static/media/link-underline.0215e483.png",link_underline_states_namespaceObject=__webpack_require__.p+"static/media/link-underline-states.1d299489.png",link_title_states_namespaceObject=__webpack_require__.p+"static/media/link-title-states.ef2e5736.png",link_menu_namespaceObject=__webpack_require__.p+"static/media/link-menu.932de1e5.png",link_menu_states_namespaceObject=__webpack_require__.p+"static/media/link-menu-states.1ff1d5d5.png",link_inline_namespaceObject=__webpack_require__.p+"static/media/link-inline.0ddabfb6.png",link_inline_states_namespaceObject=__webpack_require__.p+"static/media/link-inline-states.b33982f8.png",link_inline_error_namespaceObject=__webpack_require__.p+"static/media/link-inline-error.8e4dfbfe.png",link_inline_error_states_namespaceObject=__webpack_require__.p+"static/media/link-inline-error-states.6d1fc27b.png",link_mouse_interaction_namespaceObject=__webpack_require__.p+"static/media/link-mouse-interaction.7b7e0e24.png",link_icon_left_namespaceObject=__webpack_require__.p+"static/media/link-icon-left.14dc18c1.png",link_icon_right_namespaceObject=__webpack_require__.p+"static/media/link-icon-right.65df7bd3.png",link_icon_placement_left_namespaceObject=__webpack_require__.p+"static/media/link-icon-placement-left.8e99c2e2.png",link_icon_placement_right_namespaceObject=__webpack_require__.p+"static/media/link-icon-placement-right.1bb92edb.png",link_font_size_alignment_namespaceObject=__webpack_require__.p+"static/media/link-font-size-alignment.7280f676.png",link_sizes_namespaceObject=__webpack_require__.p+"static/media/link-sizes.25f4aada.png";function _createMdxContent(props){const _components={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:link_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"link",children:"Link"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The link component allows users to navigate to another location, either within the same website or to an external website. They have different levels of importance or hierarchy depending on their placement within a page or interface."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"To navigate to a different page"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"To navigate to a completely different site"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"To jump to an anchor element on the same page"}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"Users want to trigger an action. Use a button instead."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"types",children:"Types"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"bold-link",children:"Bold Link"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Bold links indicate tertiary actions on a page or screen. It is similar to the style of the tertiary button which has more spacing to achieve better alignment in button groups. This style is mainly used for links that lead you to a follow-up page or start a progress like a download."}),"\n",(0,jsx_runtime.jsxs)(_components.blockquote,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"Bold links and underlined links should not be used together in the same link group or very close to each other, as their usage slightly overlaps and they do not offer a 100% visual representation of their hierarchy."}),"\n"]}),"\n",(0,jsx_runtime.jsx)("img",{src:link_bold_namespaceObject,alt:"Link Bold",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"states",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:link_bold_states_namespaceObject,alt:"Link Bold States"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"title-link",children:"Title Link"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Title links indicate the title of a section is interactive and can be clicked. They should always contain an internal link icon to the right of the title text."}),"\n",(0,jsx_runtime.jsx)("img",{src:link_title_namespaceObject,alt:"Link Title",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"states-1",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:link_title_states_namespaceObject,alt:"Link Title States"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"underline-link",children:"Underline Link"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:'Underlined links indicate quaternary actions on a page or screen. The style differs a lot from a button and it can be used to show very distinct action from a button group displayed next to it. In situations where several links are shown close to each other, this style can help to keep the individual links more readable. Other use cases are actions that do not lead to another page but just modify the content shown on the current page, e.g. "Expand" "Show more" or "Quick view".'}),"\n",(0,jsx_runtime.jsx)("img",{src:link_underline_namespaceObject,alt:"Link Underline",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"states-2",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:link_underline_states_namespaceObject,alt:"Link Underline States"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"menu-link",children:"Menu Link"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This style is supposed to be used in some kind of a menu like the menu in a footer."}),"\n",(0,jsx_runtime.jsx)("img",{src:link_menu_namespaceObject,alt:"Link Menu",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"states-3",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:link_menu_states_namespaceObject,alt:"Link Menu States"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"inline-link",children:"Inline Link"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Inline links should assume the text properties of the content they are nested within."}),"\n",(0,jsx_runtime.jsxs)(_components.blockquote,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"Since inline links natively follow the text size and style of a text paragraph, there are no fixed sizes for the type of link."}),"\n"]}),"\n",(0,jsx_runtime.jsx)("img",{src:link_inline_namespaceObject,alt:"Link Inline",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"states-4",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:link_inline_states_namespaceObject,alt:"Link Inline States"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Default"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Native underlined text style. Text color is ",(0,jsx_runtime.jsx)(_components.code,{children:"ocean-500"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Hover"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Text color is ",(0,jsx_runtime.jsx)(_components.code,{children:"ocean-600"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Pressed"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Text color is ",(0,jsx_runtime.jsx)(_components.code,{children:"ocean-700"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Focus"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Text color is ",(0,jsx_runtime.jsx)(_components.code,{children:"ocean-500"}),". Text has a native browser outline of 1px outline width."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"inline-link-error",children:"Inline Link Error"}),"\n",(0,jsx_runtime.jsx)("img",{src:link_inline_error_namespaceObject,alt:"Link Inline Error",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"states-5",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:link_inline_error_states_namespaceObject,alt:"Link Inline Error States"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Default"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Native underlined text style. Text color is ",(0,jsx_runtime.jsx)(_components.code,{children:"red-500"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Hover"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Text color is ",(0,jsx_runtime.jsx)(_components.code,{children:"red-600"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Pressed"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Text color is ",(0,jsx_runtime.jsx)(_components.code,{children:"red-700"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Focus"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Text color is ",(0,jsx_runtime.jsx)(_components.code,{children:"red-500"}),". Text has a native browser outline of 1px outline width."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"icon-placement",children:"Icon placement"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"icon-left",children:"Icon left"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Links with functional or decorative icons should be placed to the left of a link."}),"\n",(0,jsx_runtime.jsx)("img",{src:link_icon_left_namespaceObject,alt:"Link Icon Left",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"example",children:"Example"}),"\n",(0,jsx_runtime.jsx)("img",{src:link_icon_placement_left_namespaceObject,alt:"Link Icon Placement Left"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"icon-right",children:"Icon right"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Normally, links with right-aligned icons should be used as links with a right-arrow icon. This is used to make it clear to users that they are changing the page because they want to find out detailed information about a topic, for example."}),"\n",(0,jsx_runtime.jsx)("img",{src:link_icon_right_namespaceObject,alt:"Link Icon Right",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"example-1",children:"Example"}),"\n",(0,jsx_runtime.jsx)("img",{src:link_icon_placement_right_namespaceObject,alt:"Link Icon Placement Right"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"There are four different link sizes that can be used flexibly: 14px, 16px, 18px and 20px."}),"\n",(0,jsx_runtime.jsx)("img",{src:link_sizes_namespaceObject,alt:"Link Size"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"text-size-alignment",children:"Text size alignment"}),"\n",(0,jsx_runtime.jsx)("img",{src:link_font_size_alignment_namespaceObject,alt:"Link Font Size Alignment",width:"50%"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The size of link text components ",(0,jsx_runtime.jsx)(_components.strong,{children:"(2)"})," should inherit the font size of the body copy ",(0,jsx_runtime.jsx)(_components.strong,{children:"(1)"})," preceding it."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"mouse-interaction",children:"Mouse interaction"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"All link variants are clickable together with the icons placed in front of or behind them. Only one target is defined as a link-url and cannot contain two separate ones. The click area corresponds to the height and width of the respective link size."}),"\n",(0,jsx_runtime.jsx)("img",{src:link_mouse_interaction_namespaceObject,alt:"Link Mouse Interaction",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Check out the Figma component: ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?type=design&node-id=2610-6235&mode=design&t=xVWOPkYnUvh53BSW-4",rel:"nofollow",children:"Link"})})]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/link/link.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Link",tags:["autodocs"],args:{label:"Link",href:"",target:"_blank",size:"m",disabled:!1,variant:"bold"},argTypes:{target:{options:["_blank","_self","_parent"],control:{type:"radio"}},size:{description:"Font Size options: s (14px), m (16px), l (18px), xl (20px) - default: m",options:["s","m","l","xl"],control:{type:"radio"}},variant:{options:["bold","underlined","title","menu"],control:{type:"radio"}}}},Default=(args=>`<ifx-link href="${args.href}" target="${args.target}" size="${args.size}" variant="${args.variant}" disabled="${args.disabled}" >\n  ${args.label}\n  </ifx-link>`).bind({}),WithIcon=(args=>`<ifx-link href="${args.href}" target="${args.target}" size="${args.size}" variant="${args.variant}" >\n  ${args.label}\n  <ifx-icon icon="arrow-right-16"></ifx-icon>\n  </ifx-link>`).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `<ifx-link href="${args.href}" target="${args.target}" size="${args.size}" variant="${args.variant}" disabled="${args.disabled}" >\n  ${args.label}\n  </ifx-link>`',...Default.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'args => `<ifx-link href="${args.href}" target="${args.target}" size="${args.size}" variant="${args.variant}" >\n  ${args.label}\n  <ifx-icon icon="arrow-right-16"></ifx-icon>\n  </ifx-link>`',...WithIcon.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithIcon"]},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);