/*! For license information please see components-card-Usage-mdx.bd5d657f.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[6374,5841],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/card/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),card_stories=__webpack_require__("./src/components/card/card.stories.ts");const card_anatomy_namespaceObject=__webpack_require__.p+"static/media/card-anatomy.9c8e05fa.png",card_first_action_area_namespaceObject=__webpack_require__.p+"static/media/card-first-action-area.87bead63.png",card_horizontal_alignment_namespaceObject=__webpack_require__.p+"static/media/card-horizontal-alignment.5d13377c.png",card_horizontal_first_action_area_namespaceObject=__webpack_require__.p+"static/media/card-horizontal-first-action-area.abd9a072.png",card_horizontal_mobile_namespaceObject=__webpack_require__.p+"static/media/card-horizontal-mobile.3f7e2ea1.png",card_horizontal_second_action_area_namespaceObject=__webpack_require__.p+"static/media/card-horizontal-second-action-area.f55a9d30.png",card_horizontal_states_namespaceObject=__webpack_require__.p+"static/media/card-horizontal-states.ee6e3705.png",card_second_action_area_namespaceObject=__webpack_require__.p+"static/media/card-second-action-area.db71b4d8.png",card_simple_namespaceObject=__webpack_require__.p+"static/media/card-simple.14dc59a4.png",card_states_namespaceObject=__webpack_require__.p+"static/media/card-states.927fdbcf.png",card_with_button_namespaceObject=__webpack_require__.p+"static/media/card-with-button.da382986.png",card_with_link_namespaceObject=__webpack_require__.p+"static/media/card-with-link.94b8df82.png",card_with_redirect_link_namespaceObject=__webpack_require__.p+"static/media/card-with-redirect-link.89da7620.png";function _createMdxContent(props){const _components={a:"a",br:"br",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:card_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"card",children:"Card"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The card component provides users with a flexible layout for displaying various types of content. Cards can accommodate different functionalities, content types, and sizes, allowing designers to create visually appealing and informative card-based interfaces."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"To present information or content in a visually appealing and organized manner."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"To showcase a combination of image, text, and a button for user interaction."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"To incorporate various content elements instead of a button and allow for more flexibility."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"To represent a hierarchical flow of information."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"To display content elements side by side, with equal importance like products or news."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"If the content you need to display is minimal or doesn't require any specific visual organization."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If the content doesn't align with the available card variants (default card, text card, or additional functions card)."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If the visual hierarchy of the content doesn't align with the vertical or horizontal layout."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"anatomy",children:"Anatomy"}),"\n",(0,jsx_runtime.jsx)("img",{src:card_anatomy_namespaceObject,alt:"Card Anatomy"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Card Image (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","A linked image which corresponds to the cards' content."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Card Overline (2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","An overline appears above the card title to provide additional context."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Card Title (3)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","A core text element that briefly summarises the theme of the card."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Card Body (4)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The main content area of the card where the text copy is placed. The text should not be longer than ",(0,jsx_runtime.jsx)(_components.strong,{children:"three lines"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Additional interactive elements (5)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Another optional elements that can contain additional actions like buttons or links related to the card content."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Card Container (6)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The outermost container that wraps the entire card. It is surrounded with a border."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"layouts",children:"Layouts"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"vertical",children:"Vertical"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The vertical card Layout is the default and most commonly used layout. It consists of a single column of content and is ideal for presenting a compact summary of information."}),"\n",(0,jsx_runtime.jsx)("img",{src:card_simple_namespaceObject,alt:"Card Simple"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"horizontal",children:"Horizontal"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:'The horizontal layout is an alternative style of the card component, optimized for displaying content in a horizontal arrangement. It is particularly useful for showcasing images and brief descriptions. It is also possible to switch the image- and textual area. Note that some functionalities available in the vertical layout may not be applicable to the horizontal layout. For example, there is no "Button" and "Text Link" available.'}),"\n",(0,jsx_runtime.jsx)("img",{src:card_horizontal_alignment_namespaceObject,alt:"Card Horizontal Align"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"mouse-interactions",children:"Mouse interactions"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The card without buttons or links is completely clickable and leads the user to its corresponding detail page. It is also possible to add another action area to the card where you can insert buttons or links. The action area itself is not hoverable/clickable, so that the buttons and links have enough interactive space."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"no-buttonlink",children:"No Button/Link"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Simple card which is linked to a specific internal page."}),"\n",(0,jsx_runtime.jsx)("img",{src:card_simple_namespaceObject,alt:"Card Simple"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"bold-link",children:"Bold Link"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:['The card may contain "text" links that offer additional actions to the user. For example, "Quick view" or "Data sheet" links provide quick access to specific actions related to the card content before clicking on the card itself. A ',(0,jsx_runtime.jsx)(_components.strong,{children:"maximum of three"})," links are allowed."]}),"\n",(0,jsx_runtime.jsx)("img",{src:card_with_link_namespaceObject,alt:"Card With Link"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"icon-right",children:"Icon right"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["A link can be also combined with a right aligned arrow icon. This link variant could be used to redirect the user to a new page and not the corresponding one. A ",(0,jsx_runtime.jsx)(_components.strong,{children:"maximum of three"})," links are allowed."]}),"\n",(0,jsx_runtime.jsx)("img",{src:card_with_redirect_link_namespaceObject,alt:"Card With Redirect Link"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"button",children:"Button"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Buttons can be included, which serves as a direct action to improve or modify the content presented in the card. The primary, secondary and tertiary button can be used. Consider to place the ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-button--usage",rel:"nofollow",children:"buttons by importance"})}),".\nUse cases can be showing a CTA inside a card (e.g. sign-up process) or if you want to differentiate the CTAs being shown (e.g., Sign-up (Primary Button), Remind me later (Secondary Button) , Don’t ask me again (Tertiary)). A ",(0,jsx_runtime.jsx)(_components.strong,{children:"maximum of three"})," buttons are allowed."]}),"\n",(0,jsx_runtime.jsx)("img",{src:card_with_button_namespaceObject,alt:"Card with button"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"action-areas",children:"Action areas"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"first-action-area",children:"First action area"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The fist action area is fully hoverable/clickable."}),"\n",(0,jsx_runtime.jsx)("img",{src:card_first_action_area_namespaceObject,alt:"Card First Action Area",width:"50%"}),"\n",(0,jsx_runtime.jsx)("img",{src:card_horizontal_first_action_area_namespaceObject,alt:"Card HorizontalFirst Action Area"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"second-action-area",children:"Second action area"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"If the second action area with buttons or links is activated, only these bring their native interactivity."}),"\n",(0,jsx_runtime.jsx)("img",{src:card_second_action_area_namespaceObject,alt:"Card Second First Action Area",width:"50%"}),"\n",(0,jsx_runtime.jsx)("img",{src:card_horizontal_second_action_area_namespaceObject,alt:"Card Horizontal Second First Action Area"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"states",children:"States"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The card has two different states: default and hover. While hovering over a card the card-border and the card-title is colored in ocean-500. While hovering over the buttons and links, the respective states become active and the whole card keeps its default state."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"vertical-1",children:"Vertical"}),"\n",(0,jsx_runtime.jsx)("img",{src:card_states_namespaceObject,alt:"Card States"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"horizontal-1",children:"Horizontal"}),"\n",(0,jsx_runtime.jsx)("img",{src:card_horizontal_states_namespaceObject,alt:"Card Horizontal States"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"mobile",children:"Mobile"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"vertical-2",children:"Vertical"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The layout of the vertical card remains the same in all viewports. Only the font size of the title changes slightly."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"horizontal-2",children:"Horizontal"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"While the title, description and interactive elements are retained in desktop viewports, the description is deactivated in mobile viewports."}),"\n",(0,jsx_runtime.jsx)("img",{src:card_horizontal_mobile_namespaceObject,alt:"Card Horizontal Mobile"}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Check out the Figma component: ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?type=design&node-id=2420-2421&mode=design",rel:"nofollow",children:"Card"})})]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/card/card.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Horizontal:()=>Horizontal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Card",tags:["autodocs"],args:{direction:"vertical",overline:"Overline",headline:"Headline",description:"Some quick example text to build on the card title and make up the bulk of the card's content.",button:"button",href:"",target:"_blank",position:"right",src:"https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg"},argTypes:{button:{options:["button","link","none"],control:{type:"radio"}},direction:{options:["horizontal","vertical"],control:{type:"radio"}},position:{options:["left","right"],control:{type:"radio"},if:{arg:"direction",eq:"horizontal"}},target:{options:["_blank","_self","_parent"],control:{type:"radio"}}}},Default=(args=>`<ifx-card direction="${args.direction}" href="${args.href}" target="${args.target}">\n    <ifx-card-image position="${args.position}" src="${args.src}" alt="" slot="img"></ifx-card-image>\n    ${args.overline?`<ifx-card-overline>\n        ${args.overline}\n        </ifx-card-overline>`:""}\n      ${args.headline?`<ifx-card-headline>\n        ${args.headline}\n        </ifx-card-headline>`:""}\n     ${args.description?`<ifx-card-text>\n        ${args.description}\n        </ifx-card-text>`:""}\n      ${"button"===args.button?'<ifx-card-links slot="buttons">\n          <ifx-button variant="primary">Button</ifx-button>\n          <ifx-button variant="secondary">Button</ifx-button>\n          </ifx-card-links>':""}\n      ${"link"===args.button?'<ifx-card-links slot="buttons">\n            <ifx-link href="https://google.com" target="_blank">\n              <ifx-icon icon="calendar16"></ifx-icon>\n              Link\n            </ifx-link>\n            <ifx-link href="https://yahoo.com" target="_blank">\n              <ifx-icon icon="calendar16"></ifx-icon>\n              Link\n            </ifx-link>\n          </ifx-card-links>':""}\n  </ifx-card>`).bind({});Default.args={src:"https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg"};const Horizontal=(args=>`<ifx-card direction="${args.direction}" href="${args.href}" target="${args.target}">\n    <ifx-card-image position="${args.position}" src="${args.src}" alt="" slot="img"></ifx-card-image>\n    ${args.overline?`<ifx-card-overline>\n        ${args.overline}\n        </ifx-card-overline>`:""}\n      ${args.headline?`<ifx-card-headline>\n          ${args.headline}\n          </ifx-card-headline>`:""}\n        ${args.description?`<ifx-card-text>\n            ${args.description}\n            </ifx-card-text>`:""}\n      ${"button"===args.button?'<ifx-card-links slot="buttons">\n          <ifx-button variant="primary">Button</ifx-button>\n          <ifx-button variant="secondary">Button</ifx-button>\n          </ifx-card-links>':""}\n          ${"link"===args.button?'<ifx-card-links slot="buttons">\n          <ifx-link color="primary" href="https://google.com" target="_blank" underline="false">\n            <ifx-icon icon="calendar16"></ifx-icon>\n            Link\n          </ifx-link>\n          <ifx-link color="primary" href="https://yahoo.com" target="_blank" underline="false">\n            <ifx-icon icon="calendar16"></ifx-icon>\n            Link\n          </ifx-link>\n        </ifx-card-links>':""}\n  </ifx-card>`).bind({});Horizontal.args={direction:"horizontal",src:"https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg"},Horizontal.argTypes={direction:{table:{disable:!0}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `<ifx-card direction="${args.direction}" href="${args.href}" target="${args.target}">\n    <ifx-card-image position="${args.position}" src="${args.src}" alt="" slot="img"></ifx-card-image>\n    ${args.overline ? `<ifx-card-overline>\n        ${args.overline}\n        </ifx-card-overline>` : \'\'}\n      ${args.headline ? `<ifx-card-headline>\n        ${args.headline}\n        </ifx-card-headline>` : \'\'}\n     ${args.description ? `<ifx-card-text>\n        ${args.description}\n        </ifx-card-text>` : \'\'}\n      ${args.button === \'button\' ? `<ifx-card-links slot="buttons">\n          <ifx-button variant="primary">Button</ifx-button>\n          <ifx-button variant="secondary">Button</ifx-button>\n          </ifx-card-links>` : \'\'}\n      ${args.button === \'link\' ? `<ifx-card-links slot="buttons">\n            <ifx-link href="https://google.com" target="_blank">\n              <ifx-icon icon="calendar16"></ifx-icon>\n              Link\n            </ifx-link>\n            <ifx-link href="https://yahoo.com" target="_blank">\n              <ifx-icon icon="calendar16"></ifx-icon>\n              Link\n            </ifx-link>\n          </ifx-card-links>` : \'\'}\n  </ifx-card>`',...Default.parameters?.docs?.source}}},Horizontal.parameters={...Horizontal.parameters,docs:{...Horizontal.parameters?.docs,source:{originalSource:'args => `<ifx-card direction="${args.direction}" href="${args.href}" target="${args.target}">\n    <ifx-card-image position="${args.position}" src="${args.src}" alt="" slot="img"></ifx-card-image>\n    ${args.overline ? `<ifx-card-overline>\n        ${args.overline}\n        </ifx-card-overline>` : \'\'}\n      ${args.headline ? `<ifx-card-headline>\n          ${args.headline}\n          </ifx-card-headline>` : \'\'}\n        ${args.description ? `<ifx-card-text>\n            ${args.description}\n            </ifx-card-text>` : \'\'}\n      ${args.button === \'button\' ? `<ifx-card-links slot="buttons">\n          <ifx-button variant="primary">Button</ifx-button>\n          <ifx-button variant="secondary">Button</ifx-button>\n          </ifx-card-links>` : \'\'}\n          ${args.button === \'link\' ? `<ifx-card-links slot="buttons">\n          <ifx-link color="primary" href="https://google.com" target="_blank" underline="false">\n            <ifx-icon icon="calendar16"></ifx-icon>\n            Link\n          </ifx-link>\n          <ifx-link color="primary" href="https://yahoo.com" target="_blank" underline="false">\n            <ifx-icon icon="calendar16"></ifx-icon>\n            Link\n          </ifx-link>\n        </ifx-card-links>` : \'\'}\n  </ifx-card>`',...Horizontal.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Horizontal"]},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);