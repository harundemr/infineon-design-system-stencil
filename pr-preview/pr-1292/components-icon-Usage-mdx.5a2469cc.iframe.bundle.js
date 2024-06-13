/*! For license information please see components-icon-Usage-mdx.5a2469cc.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[4519,6131],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("@storybook/core-events/preview-errors"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/components/icon/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_infineon_design_system_stencil_infineon_design_system_stencil_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_infineonIconStencil_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/icon/infineonIconStencil.stories.ts"),_public_storybook_images_icon_icon_color_alignment_png__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./public-storybook/images/icon/icon-color-alignment.png"),_public_storybook_images_icon_icon_alignment_png__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./public-storybook/images/icon/icon-alignment.png"),_public_storybook_images_icon_icon_sizes_png__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./public-storybook/images/icon/icon-sizes.png"),_public_storybook_images_icon_icon_structure_png__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./public-storybook/images/icon/icon-structure.png"),_public_storybook_images_icon_icon_size_alignment_png__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./public-storybook/images/icon/icon-size-alignment.png"),_public_storybook_images_icon_icon_variants_png__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./public-storybook/images/icon/icon-variants.png"),_public_storybook_images_icon_icon_text_color_brand_png__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./public-storybook/images/icon/icon-text-color-brand.png"),_public_storybook_images_icon_icon_text_color_dark_png__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./public-storybook/images/icon/icon-text-color-dark.png"),_public_storybook_images_icon_icon_text_color_white_png__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./public-storybook/images/icon/icon-text-color-white.png");function _createMdxContent(props){const _components={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,_home_runner_work_infineon_design_system_stencil_infineon_design_system_stencil_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_12__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_13__.W8,{of:_infineonIconStencil_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"icon",children:"Icon"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Icons play a crucial role in our design system, providing visual representation and enhancing user experiences. We primarily utilize the Nucleo icon library for our icons, ensuring consistency and a wide range of options."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Icons can be used alongside text to aid navigation and improve usability. They can represent different sections, categories, or actions, making it easier for users to identify and interact with them."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"If you want to communicate actions, such as saving, deleting, editing, or sharing. By utilizing recognizable icons, users can quickly understand the purpose or functionality associated with a specific action."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"If an icon's meaning is unclear or open to interpretation, it is best to use descriptive text instead. Clarity and understanding should always take precedence over aesthetic considerations."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Avoid overcrowding interfaces with too many icons, as this can lead to visual clutter and confusion. Strive for a balanced composition that maintains a clean and intuitive design."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"size",children:"Size"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"To ensure consistency and alignment, we utilize a 4px grid size for our icons. This grid aligns with the overall design system and facilitates seamless integration into our interfaces. We have established four fixed icon sizes: 12×12px, 16×16px, and 24×24px. Choose the appropriate size based on the context and surrounding elements."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Icons within our DDS components come with the right icon size out of the box!"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:_public_storybook_images_icon_icon_sizes_png__WEBPACK_IMPORTED_MODULE_5__,alt:"Icon Sizes"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"structure",children:"Structure"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"All our icon sizes include the icon itself and the surrounding area."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:_public_storybook_images_icon_icon_structure_png__WEBPACK_IMPORTED_MODULE_6__,alt:"Icon Structure",width:"50%"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The DDS provides two different kinds of icons: outlined and filled."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:_public_storybook_images_icon_icon_variants_png__WEBPACK_IMPORTED_MODULE_8__,alt:"Icon Variants",width:"50%"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"alignment-with-text",children:"Alignment with text"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"size-alignment",children:"Size alignment"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Try to pair specific typographic styles with corresponding icon sizes. The body-03 and body-04 typographic style is well-suited for 16px icons, while larger typography, such as the heading-04, works best with 24px icons."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:_public_storybook_images_icon_icon_size_alignment_png__WEBPACK_IMPORTED_MODULE_7__,alt:"Icon Size Alignment",width:"50%"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"vertical-alignment",children:"Vertical alignment"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Icons should be vertically aligned with the accompanying text or other related elements. Centered aligned icons of adjacent text helps maintain visual harmony and improves readability."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:_public_storybook_images_icon_icon_alignment_png__WEBPACK_IMPORTED_MODULE_4__,alt:"Icon Alignment",width:"50%"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"text-color-alignment",children:"Text color alignment"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Icons should be aligned with the text color they accompany. Ensure that icons adhere to the same color scheme as the surrounding text to create a unified and visually pleasing user experience."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:_public_storybook_images_icon_icon_color_alignment_png__WEBPACK_IMPORTED_MODULE_3__,alt:"Icon Color Alignment",width:"50%"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"color",children:"Color"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"dark-font-color",children:"Dark font color"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The black font color is the default color for icons. We use this color in most cases on white or engineering-100 backgrounds."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:_public_storybook_images_icon_icon_text_color_dark_png__WEBPACK_IMPORTED_MODULE_10__,alt:"Icon Text Color Dark",width:"50%"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"white-font-color",children:"White font color"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"We use the base white color on dark backgrounds."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:_public_storybook_images_icon_icon_text_color_white_png__WEBPACK_IMPORTED_MODULE_11__,alt:"Icon Text Color White",width:"50%"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"brand-font-color",children:"Brand font color"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"We use our brand color ocean-500 to highlight the content or actions connected with the icon. Use it on white or engineering-100 backgrounds."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:_public_storybook_images_icon_icon_text_color_brand_png__WEBPACK_IMPORTED_MODULE_9__,alt:"Icon Text Color Brand",width:"50%"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.hr,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Check out the Figma Icon Library: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://www.figma.com/file/yWwaLoqsWLWygDxXfvdym9/Infineon-DDS-%7C-Icons?type=design&node-id=6%3A6&mode=design&t=Zc0icFhkq4Jv0xSn-1",rel:"nofollow",children:"Icon Library"})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.hr,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_infineon_design_system_stencil_infineon_design_system_stencil_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_12__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/icon/infineonIconStencil.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@infineon/infineon-icons/dist/icons.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Icon",tags:["autodocs"],args:{icon:"c-check-16"},argTypes:{icon:{options:Object.values(_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_0__.P).map((i=>i.name)),control:{type:"select"}},consoleError:{action:"consoleError",description:"Custom event emitted when icon is invalid",table:{type:{summary:"Framework integration",detail:'React: onConsoleError={handleChange}\nVue:@consoleError="handleChange"\nAngular:(consoleError)="handleChange()"\nVanillaJs:.addEventListener("consoleError", (event) => {//handle change});'}}}}},Default=(({icon})=>{const ifxIcon=document.createElement("ifx-icon");return ifxIcon.setAttribute("icon",icon),ifxIcon.addEventListener("consoleError",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("consoleError")),ifxIcon}).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  icon\n}) => {\n  const ifxIcon = document.createElement('ifx-icon');\n  ifxIcon.setAttribute('icon', icon);\n  ifxIcon.addEventListener('consoleError', action('consoleError'));\n  return ifxIcon;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./public-storybook/images/icon/icon-alignment.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/icon-alignment.1744f101.png"},"./public-storybook/images/icon/icon-color-alignment.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/icon-color-alignment.601f2ac0.png"},"./public-storybook/images/icon/icon-size-alignment.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/icon-size-alignment.109d8662.png"},"./public-storybook/images/icon/icon-sizes.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/icon-sizes.ece12984.png"},"./public-storybook/images/icon/icon-structure.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/icon-structure.85409766.png"},"./public-storybook/images/icon/icon-text-color-brand.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/icon-text-color-brand.056547af.png"},"./public-storybook/images/icon/icon-text-color-dark.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/icon-text-color-dark.992e5931.png"},"./public-storybook/images/icon/icon-text-color-white.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/icon-text-color-white.10945f17.png"},"./public-storybook/images/icon/icon-variants.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/icon-variants.7b983b92.png"}}]);