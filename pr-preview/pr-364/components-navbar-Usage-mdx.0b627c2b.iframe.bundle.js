/*! For license information please see components-navbar-Usage-mdx.0b627c2b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[1063,1779],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/navbar/navbar.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Navbar"},Default=(()=>'<ifx-navbar application-name="Application name" fixed="false">\n  <ifx-navbar-item hide-label="false" icon="calendar16" slot="left-item" target="_blank" href="https://google.com">Menu Item1</ifx-navbar-item>\n  <ifx-navbar-item  slot="left-item">Menu Item</ifx-navbar-item>\n  <ifx-navbar-item  slot="left-item">Menu Item</ifx-navbar-item>\n\n  <ifx-navbar-menu slot="menu">\n    <ifx-navbar-menu-item href="https://google.com" target="_blank">Item 1</ifx-navbar-menu-item>\n    <ifx-navbar-menu-item href="https://google.com">Item 2</ifx-navbar-menu-item>\n    <ifx-navbar-menu-item href="https://google.com">Item 3</ifx-navbar-menu-item>\n  </ifx-navbar-menu>\n\n  <ifx-search-bar size="default" slot="search-bar-right" is-open="false" show-close-button="true"></ifx-search-bar>\n\n  <ifx-navbar-item hide-label="false" slot="right-item">Right One</ifx-navbar-item>\n  <ifx-navbar-item hide-label="false" slot="right-item">Right Two</ifx-navbar-item>\n  <ifx-navbar-item hide-label="false" slot="right-profile-item">Tisho</ifx-navbar-item>\n</ifx-navbar>').bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'() => `<ifx-navbar application-name="Application name" fixed="false">\n  <ifx-navbar-item hide-label="false" icon="calendar16" slot="left-item" target="_blank" href="https://google.com">Menu Item1</ifx-navbar-item>\n  <ifx-navbar-item  slot="left-item">Menu Item</ifx-navbar-item>\n  <ifx-navbar-item  slot="left-item">Menu Item</ifx-navbar-item>\n\n  <ifx-navbar-menu slot="menu">\n    <ifx-navbar-menu-item href="https://google.com" target="_blank">Item 1</ifx-navbar-menu-item>\n    <ifx-navbar-menu-item href="https://google.com">Item 2</ifx-navbar-menu-item>\n    <ifx-navbar-menu-item href="https://google.com">Item 3</ifx-navbar-menu-item>\n  </ifx-navbar-menu>\n\n  <ifx-search-bar size="default" slot="search-bar-right" is-open="false" show-close-button="true"></ifx-search-bar>\n\n  <ifx-navbar-item hide-label="false" slot="right-item">Right One</ifx-navbar-item>\n  <ifx-navbar-item hide-label="false" slot="right-item">Right Two</ifx-navbar-item>\n  <ifx-navbar-item hide-label="false" slot="right-profile-item">Tisho</ifx-navbar-item>\n</ifx-navbar>`',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/navbar/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Usage});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),navbar_stories=__webpack_require__("./src/components/navbar/navbar.stories.ts"),button_grouping_by_importance=__webpack_require__("./public-storybook/images/button/button-grouping-by-importance.png");const header_default_anatomy_720px_namespaceObject=__webpack_require__.p+"static/media/header-default-anatomy_720px.3c3c0e4b.png",header_default_anatomy_1440px_namespaceObject=__webpack_require__.p+"static/media/header-default-anatomy_1440px.ec3f90ff.png",header_main_items_example_namespaceObject=__webpack_require__.p+"static/media/header-main-items-example.5d63a8bc.png",header_mobile_navigation_namespaceObject=__webpack_require__.p+"static/media/header-mobile-navigation.2c92c603.png",header_secondary_navigation_items_example_namespaceObject=(__webpack_require__.p,__webpack_require__.p+"static/media/header-secondary-navigation-items-example.7b66ab19.png");__webpack_require__.p,__webpack_require__.p,__webpack_require__.p,__webpack_require__.p;function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",br:"br",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li",hr:"hr",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:navbar_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"navbar",children:"Navbar"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The navbar is the essential component of our design system as it represents the brand identity of our products. It is also the primary way users navigate through the website or applications."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"anatomy-of-desktop-navbar",children:"Anatomy of desktop navbar"}),"\n",(0,jsx_runtime.jsx)("img",{src:header_default_anatomy_1440px_namespaceObject,alt:"Anatomy Navbar Default above 1440px"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Logo (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The header always starts with the brand logo. Usually the logo is left aligned."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Application name (2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The application name is shown right after the brand logo ."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Divider (3)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Show the separator after the application name if a main navigation is to be shown afterwards."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Main navigation (4)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The main navigation enables users to find the information they are looking for. To sustain usability we recommend a ",(0,jsx_runtime.jsx)(_components.strong,{children:"maximum of seven menu items"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Search field (5)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Optional: Use a search field if you want to enable users to search the entire website for relevant content."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Secondary navigation (6)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The secondary menu offers the possibility of displaying further important functions of an application. Every application should design their secondary menu items to its needs. To sustain usability we recommend a ",(0,jsx_runtime.jsx)(_components.strong,{children:"maximum of 6 menu items"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Border (7)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","A 1px border indicates the bottom edge of the header at anytime."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"anatomy-of-mobile-navbar",children:"Anatomy of mobile navbar"}),"\n",(0,jsx_runtime.jsx)("img",{src:header_default_anatomy_720px_namespaceObject,alt:"Anatomy Navbar Default below 720px"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Logo (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Mandatory: On any breakpoint, the brand logo is always displayed as an integral part of the header, except when the search bar is active."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Application Name (2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Optional: The application name ",(0,jsx_runtime.jsx)(_components.strong,{children:"can be"})," shown right after the brand logo."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Secondary Navigation (3)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","It is not necessary to have the same amount of menu items on mobile headers as on desktop headers. Try to move unnecessary menu items into the mobile menu. To sustain usability we recommend a ",(0,jsx_runtime.jsx)(_components.strong,{children:"maximum of 4 menu items"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Divider (4)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","If the mobile menu ist not active, a 1 px border is always visible right before the burger menu icon."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Burger Menu Icon (5)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The burger menu icon represents a collapsible menu with additional navigation options."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Border (6)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Just like the desktop view, the mobile view has a 1px border below the header."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"placement",children:"Placement"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"When placing menu items, it is important to consider their relative importance and frequency of use."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"main-navigation-items",children:"Main Navigation Items"}),"\n",(0,jsx_runtime.jsx)("img",{src:header_main_items_example_namespaceObject,alt:"Anatomy Header Main Items",width:"50%"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Text link (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","These text links should be placed prominently in the header. They should be concise and represent the most important pages or sections of the website."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Expandable Submenu (2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","A text item with a chevron-down icon that points to a mega-menu or a simple submenu menu and contains further subordinate menu items. This item does not lead to a different page."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Expanded Submenu (3)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","A text link with a chevron-up icon which hints that a mega-menu or a simple drop-down menu is collapsible. This item does not lead to a different page."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"More Submenu (4)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n",'Due to space or smaller breakpoints it is possible to use a "More" text item which indicates there are more options in the 1st level navigation. Those text items should be placed inside a submenu component.']}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"secondary-navigation-items",children:"Secondary Navigation Items"}),"\n",(0,jsx_runtime.jsx)("img",{src:header_secondary_navigation_items_example_namespaceObject,alt:"Anatomy Header Main Items",width:"50%"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Search (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Always positioned at the ",(0,jsx_runtime.jsx)(_components.strong,{children:"leftmost"}),' position. To underline its functionality we recommend to add a "Search" label to the icon.']}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Other (2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Special or less important functions, which you can't fit into the menu, can be positioned right hand next to the search."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Notification (3)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The notification icon is right aligned. But cart (4), profile (5) and button (6) have priority regarding the alignment."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Cart (4)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","For product websites with shopping-like functions, the cart icon is a critical item. It should be placed ",(0,jsx_runtime.jsx)(_components.strong,{children:"third from the right"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Profile (5)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The profile icon is a key item of many websites, so it should be easily accessible. Place it ",(0,jsx_runtime.jsx)(_components.strong,{children:"second from the right"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Button (6)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Depending on the context, the button can be used for a variety of functions such as initiating an action. Place it ",(0,jsx_runtime.jsx)(_components.strong,{children:"rightmost"})," for easy accessibility."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"placement-by-priority",children:"Placement by priority"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The table below gives you an overview and guidance how to prioritize your secondary navigation items."}),"\n",(0,jsx_runtime.jsxs)(_components.table,{children:[(0,jsx_runtime.jsx)(_components.thead,{children:(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.th,{children:"Breakpoint"}),(0,jsx_runtime.jsx)(_components.th,{children:"Logo"}),(0,jsx_runtime.jsx)(_components.th,{children:"Application name"}),(0,jsx_runtime.jsx)(_components.th,{children:"Main navigation"}),(0,jsx_runtime.jsx)(_components.th,{children:"Secondary navigation"}),(0,jsx_runtime.jsx)(_components.th,{children:"Search field"})]})}),(0,jsx_runtime.jsxs)(_components.tbody,{children:[(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:"≥1440px"}),(0,jsx_runtime.jsx)(_components.td,{children:"Mandatory"}),(0,jsx_runtime.jsx)(_components.td,{children:"High"}),(0,jsx_runtime.jsx)(_components.td,{children:"High"}),(0,jsx_runtime.jsx)(_components.td,{children:"High"}),(0,jsx_runtime.jsx)(_components.td,{children:"High"})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:"≥1200px"}),(0,jsx_runtime.jsx)(_components.td,{children:"Mandatory"}),(0,jsx_runtime.jsx)(_components.td,{children:"High"}),(0,jsx_runtime.jsx)(_components.td,{children:"High"}),(0,jsx_runtime.jsx)(_components.td,{children:"High"}),(0,jsx_runtime.jsx)(_components.td,{children:"Low"})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:"≥1024px"}),(0,jsx_runtime.jsx)(_components.td,{children:"Mandatory"}),(0,jsx_runtime.jsx)(_components.td,{children:"High"}),(0,jsx_runtime.jsx)(_components.td,{children:"n/c"}),(0,jsx_runtime.jsx)(_components.td,{children:"High"}),(0,jsx_runtime.jsx)(_components.td,{children:"n/c"})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:"≥720px"}),(0,jsx_runtime.jsx)(_components.td,{children:"Mandatory"}),(0,jsx_runtime.jsx)(_components.td,{children:"Low"}),(0,jsx_runtime.jsx)(_components.td,{children:"n/c"}),(0,jsx_runtime.jsx)(_components.td,{children:"High"}),(0,jsx_runtime.jsx)(_components.td,{children:"n/c"})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:"<720px"}),(0,jsx_runtime.jsx)(_components.td,{children:"Mandatory"}),(0,jsx_runtime.jsx)(_components.td,{children:"Low"}),(0,jsx_runtime.jsx)(_components.td,{children:"n/c"}),(0,jsx_runtime.jsx)(_components.td,{children:"High"}),(0,jsx_runtime.jsx)(_components.td,{children:"n/c"})]})]})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"mobile-navigation",children:"Mobile Navigation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Below the breakpoint of 1024px the navbar becomes mobile. This ensures that users with smaller devices like tablets or smartphones get the same user experience as the ones with larger devices.\nBy triggering the burger menu icon the menu icon becomes a cross icon. To apply the focus on usability and clarity all other elements except the logo and/or the application name become invisible."}),"\n",(0,jsx_runtime.jsx)("img",{src:header_mobile_navigation_namespaceObject,alt:"Header Mobile Navigation"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"sticky-header",children:"Sticky header"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"In some situations our websites and applications provide a lot of content on a page and space on a screen is crucial. In those cases, we recommend to use a hidden header that only appears and stays sticky when the user scrolls/swipes up."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"If the header contains important navigation or branding elements that the user needs to access quickly."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"If a website or application only has a few pages or a small amount of content."}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["If a page has a specific goal, such as completing a form or making a purchase, a sticky header can be distracting and take the user's attention away from the task. In this case, it may be better to deactivate the sticky behaviour or remove the entire header.",(0,jsx_runtime.jsx)("img",{src:button_grouping_by_importance,alt:"Button Group By Importance"})]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Check out the Figma component: ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?type=design&node-id=19241-12529&mode=design&t=2lNZOOqATnlJOKBG-4",target:"_blank",rel:"nofollow noopener noreferrer",children:"Navbar"})})]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{})]})}const Usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./public-storybook/images/button/button-grouping-by-importance.png":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/button-grouping-by-importance.967f8230.png"}}]);