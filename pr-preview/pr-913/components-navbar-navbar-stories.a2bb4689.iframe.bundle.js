"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[1779],{"./src/components/navbar/navbar.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@infineon/infineon-icons/dist/icons.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Navbar",args:{applicationName:"Application name",hideLabel:!1,navbarItemTarget:"_blank",navbarItemHref:"",navbarMenuHref:"",navbarMenuTarget:"_blank",searchBarIsOpen:!1,searchBarShowCloseButton:!0,navbarPositionFixed:!1,showLogoAndAppname:!0,logoHref:"http://google.com"},argTypes:{icon:{options:Object.values(_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_0__.c).map((i=>i.name)),control:{type:"select"}}}},Default=(args=>`<ifx-navbar show-logo-and-appname="${args.showLogoAndAppname}" application-name="${args.applicationName}" fixed="${args.navbarPositionFixed}" logo-href="${args.logoHref}">\n  <ifx-navbar-item hide-label="${args.hideLabel}" icon="${args.icon}" slot="left-item" target="${args.navbBarItemTarget}" href="${args.navbBarItemHref}">Menu Item 1</ifx-navbar-item>\n  <ifx-navbar-item hide-label="${args.hideLabel}" slot="left-item">Menu Item</ifx-navbar-item>\n  <ifx-navbar-item hide-label="${args.hideLabel}" slot="left-item">Menu Item</ifx-navbar-item>\n\n  <ifx-navbar-menu slot="menu">\n    <ifx-navbar-menu-item href="${args.navbarMenuHref}" target="${args.navbarMenuTarget}">Item 1</ifx-navbar-menu-item>\n    <ifx-navbar-menu-item href="${args.navbarMenuHref}">Item 2</ifx-navbar-menu-item>\n    <ifx-navbar-menu-item href="${args.navbarMenuHref}">Item 3</ifx-navbar-menu-item>\n  </ifx-navbar-menu>\n\n  <ifx-search-bar slot="search-bar-right" is-open="${args.searchBarIsOpen}" show-close-button="${args.searchBarShowCloseButton}"></ifx-search-bar>\n\n  <ifx-navbar-item hide-label="${args.hideLabel}" slot="right-item">Right One</ifx-navbar-item>\n  <ifx-navbar-item hide-label="${args.hideLabel}" slot="right-item">Right Two</ifx-navbar-item>\n  <ifx-navbar-item hide-label="${args.hideLabel}" slot="right-profile-item">Tisho</ifx-navbar-item>\n</ifx-navbar>`).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `<ifx-navbar show-logo-and-appname="${args.showLogoAndAppname}" application-name="${args.applicationName}" fixed="${args.navbarPositionFixed}" logo-href="${args.logoHref}">\n  <ifx-navbar-item hide-label="${args.hideLabel}" icon="${args.icon}" slot="left-item" target="${args.navbBarItemTarget}" href="${args.navbBarItemHref}">Menu Item 1</ifx-navbar-item>\n  <ifx-navbar-item hide-label="${args.hideLabel}" slot="left-item">Menu Item</ifx-navbar-item>\n  <ifx-navbar-item hide-label="${args.hideLabel}" slot="left-item">Menu Item</ifx-navbar-item>\n\n  <ifx-navbar-menu slot="menu">\n    <ifx-navbar-menu-item href="${args.navbarMenuHref}" target="${args.navbarMenuTarget}">Item 1</ifx-navbar-menu-item>\n    <ifx-navbar-menu-item href="${args.navbarMenuHref}">Item 2</ifx-navbar-menu-item>\n    <ifx-navbar-menu-item href="${args.navbarMenuHref}">Item 3</ifx-navbar-menu-item>\n  </ifx-navbar-menu>\n\n  <ifx-search-bar slot="search-bar-right" is-open="${args.searchBarIsOpen}" show-close-button="${args.searchBarShowCloseButton}"></ifx-search-bar>\n\n  <ifx-navbar-item hide-label="${args.hideLabel}" slot="right-item">Right One</ifx-navbar-item>\n  <ifx-navbar-item hide-label="${args.hideLabel}" slot="right-item">Right Two</ifx-navbar-item>\n  <ifx-navbar-item hide-label="${args.hideLabel}" slot="right-profile-item">Tisho</ifx-navbar-item>\n</ifx-navbar>`',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);