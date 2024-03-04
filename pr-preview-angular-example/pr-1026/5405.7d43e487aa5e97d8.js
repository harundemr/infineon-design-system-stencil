"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[5405],{5405:(E,_,c)=>{c.r(_),c.d(_,{ifx_icon:()=>f,ifx_number_indicator:()=>p,ifx_sidebar:()=>b,ifx_sidebar_item:()=>m,ifx_sidebar_title:()=>v});var d=c(4795),i=c(9279),u=c(4793);const f=class{constructor(e){(0,i.r)(this,e),this.consoleError=(0,i.c)(this,"consoleError",7),this.icon="",this.ifxIcon=void 0}convertStringToHtml(e){const t=document.createElement("div");return t.innerHTML=e,t.firstChild}convertHtmlToObject(e){return Array.from(e.attributes,({name:n,value:s})=>({name:n,value:s})).reduce((n,s)=>(n[s.name]=s.value,n),{})}convertPathsToVnode(e){let t=[];const n=this.convertHtmlToObject(e),s=(0,i.h)("path",n);if(t.push(s),e.firstChild){const r=e.querySelectorAll("path"),a=e.querySelectorAll("path").length;for(let o=0;o<a;o++){let l=this.convertHtmlToObject(r[o]),h=(0,i.h)("path",l);t.push(h)}}return t}getSVG(e){return(0,i.h)("svg",{class:"inline-svg",width:this.ifxIcon.width,height:this.ifxIcon.height,xmlns:"http://www.w3.org/2000/svg",fill:this.ifxIcon.fill,viewBox:this.ifxIcon.viewBox},...e)}constructIcon(){if(this.ifxIcon){const e=this.convertStringToHtml(this.ifxIcon.svgContent),t=this.convertPathsToVnode(e),n=this.getSVG(t);return this.consoleError.emit(!1),n}return console.error("Icon not found!"),this.consoleError.emit(!0),""}componentWillLoad(){this.ifxIcon=(0,u.g)(this.icon.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(n,s)=>s))}render(){return(0,i.h)(i.a,null,this.constructIcon())}};f.style="ifx-icon{display:inline-flex;justify-content:center}ifx-icon:empty{display:none}";const p=class{constructor(e){(0,i.r)(this,e),this.inverted=!1}render(){return(0,i.h)("div",{"aria-label":"a number indicator",class:"numberIndicator__container "+(this.inverted?"inverted":"")},(0,i.h)("span",null,(0,i.h)("slot",null)))}};p.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.numberIndicator__container{display:inline-flex;padding:0px 4px;justify-content:center;align-items:center;border-radius:100px;background-color:#0A8276;font-family:var(--ifx-font-family)}.numberIndicator__container span{color:#FFFFFF;text-align:center;font-size:0.875rem;font-style:normal;font-weight:600;line-height:15px}.numberIndicator__container.inverted{background-color:#FFFFFF}.numberIndicator__container.inverted span{color:#0A8276}';const b=class{constructor(e){(0,i.r)(this,e),this.applicationName="",this.initialCollapse=!0,this.showFooter=!0,this.showHeader=!0,this.termsOfUse="#",this.imprint="#",this.privacyPolicy="#",this.target="_blank",this.currentYear=(new Date).getFullYear(),this.copyrightText="\xa9 1999 - "+this.currentYear+" Infineon Technologies AG",this.internalTermsofUse="",this.internalImprint="",this.internalPrivacyPolicy="",this.internalShowFooter=!0,this.activeItem=null}expandActiveItems(){var e=this;const t=function(){var s=(0,d.Z)(function*(r){if(!0!==(yield r.isItemExpandable()))return r.active?1:0;let a=0;const o=e.getSidebarMenuItems(r);for(let l=0;l<o.length;l++)a=Math.max(a,yield t(o[l]));return a>0&&r.expandMenu(1!=a),a?a+1:0});return function(a){return s.apply(this,arguments)}}(),n=this.getSidebarMenuItems(this.el);for(let s=0;s<n.length;s++)t(n[s])}adjustTopBorder(){const e=this.el.children;e.length&&("IFX-SIDEBAR-TITLE"===e[0].tagName&&e[0].shadowRoot.querySelector(".sidebar__title").classList.add("no-top-border"),"IFX-SIDEBAR-ITEM"===e[0].tagName&&e[0].shadowRoot.querySelector("div > a").classList.contains("header__section")&&e[0].shadowRoot.querySelector("div > a").classList.add("no-top-border"),this.el.querySelectorAll("ifx-sidebar-title").forEach(n=>{const s=n.nextElementSibling;console.log(s),s&&"IFX-SIDEBAR-ITEM"===s.tagName&&s.shadowRoot.querySelector("div > a").classList.contains("header__section")&&s.shadowRoot.querySelector("div > a").classList.add("no-top-border")}))}componentDidLoad(){this.adjustTopBorder(),this.setInitialActiveItem(),this.initialCollapse||this.expandActiveItems(),this.applyActiveSectionToParent(this.el)}getSidebarMenuItems(e=this.el){var t;const n=e.querySelectorAll("ifx-sidebar-item");return 0===n.length?null===(t=e.shadowRoot)||void 0===t?void 0:t.querySelectorAll("ifx-sidebar-item"):n}setInitialActiveItem(){const e=n=>{const s=this.getSidebarMenuItems(n);let r=!1;s?.forEach(a=>{if(this.isActive(a)&&!r?(r=!0,this.handleBorderIndicatorDisplacement(a)):this.isActive(a)&&r&&a.setAttribute("active","false"),this.hasChildren(a.shadowRoot)&&!this.hasActiveChild(a.shadowRoot)){const o=this.getActiveItemSection(a);this.handleClassList(o,"remove","active-section")}if(this.hasChildren(a.shadowRoot)&&this.isOpen(a.shadowRoot)&&this.containsActiveSection(a)){const o=this.getActiveItemSection(a);this.handleClassList(o,"remove","active-section")}this.hasChildren(a.shadowRoot)&&e(a.shadowRoot)})};this.getSidebarMenuItems(this.el).forEach(e)}handleClassList(e,t,n){if(e.classList[t](n),"contains"===t)return e.classList.contains(n)}getActiveItemSection(e){return this.getNavItem(e.shadowRoot)}getNavItem(e){return e?.querySelector(".sidebar__nav-item")}hasChildren(e){return null!==e?.querySelector(".item__arrow-wrapper")}handleBorderIndicatorDisplacement(e){const t=s=>{if(this.isActive(s)||s===e){const o=this.getActiveItemSection(s);this.hasChildren(o)&&this.handleClassList(o,"add","active-section")}this.getSidebarMenuItems(s).forEach(t)};this.getSidebarMenuItems(this.el).forEach(t)}removeActiveClassesRecursively(){const e=t=>{this.querySidebarItems(t).forEach(s=>{const r=s.shadowRoot.querySelector(".sidebar__nav-item");r.classList.remove("active-section"),r.classList.remove("active"),s.getAttribute("active")&&s.setAttribute("active","false"),e(s.shadowRoot)})};e(this.el),this.activeItem&&this.activeItem.setAttribute("active","false"),this.activeItem=null}hasActiveChild(e){const t=this.getSidebarMenuItems(e);if(t)for(let n of t){if(this.isActive(n))return!0;if(this.hasChildren(n.shadowRoot)&&this.hasActiveChild(n.shadowRoot))return!0}return!1}handleSidebarItemInteraction(e){const t=e.detail;if((!this.hasChildren(t.shadowRoot)||this.hasActiveChild(t.shadowRoot))&&this.handleBorderIndicatorDisplacement(t),this.hasChildren(t.shadowRoot)&&!this.hasActiveChild(t.shadowRoot)){const n=this.getActiveItemSection(t);this.handleClassList(n,"remove","active-section")}if(this.hasChildren(t.shadowRoot)&&this.isOpen(t.shadowRoot)&&this.containsActiveSection(t)){const n=this.getActiveItemSection(t);this.handleClassList(n,"remove","active-section")}}isOpen(e){return!!this.getNavItem(e).classList.contains("open")}containsActiveSection(e){const t=this.getSidebarMenuItems(e);for(let n of t)if(this.getNavItem(n.shadowRoot).classList.contains("active-section")||this.hasChildren(n.shadowRoot)&&this.containsActiveSection(n.shadowRoot))return this.handleClassList(n,"add","active-section"),!0;return!1}applyActiveSectionToParent(e){const t=this.getSidebarMenuItems(e);t?.forEach(n=>{if(this.hasActiveChild(n.shadowRoot)){const s=this.getActiveItemSection(n);this.handleClassList(s,"add","active-section")}this.applyActiveSectionToParent(n.shadowRoot)})}querySidebarItems(e){return e.querySelectorAll("ifx-sidebar-item")}isActive(e){return"true"===e.getAttribute("active")}handleSidebarItemActivated(e){this.removeActiveClassesRecursively(),this.activeItem=e.detail,this.activeItem.setAttribute("active","true");const t=this.getNavItem(e.detail.parentElement.parentElement.parentElement);t&&this.handleClassList(t,"add","active-section")}componentWillLoad(){this.internalTermsofUse=this.termsOfUse.trim(),this.internalPrivacyPolicy=this.privacyPolicy.trim(),this.internalImprint=this.imprint.trim(),this.internalShowFooter=this.showFooter,this.internalShowFooter&&!this.internalImprint&&!this.internalPrivacyPolicy&&!this.internalTermsofUse&&!this.copyrightText&&(this.internalShowFooter=!1)}render(){return(0,i.h)("div",{"aria-label":"a navigation sidebar","aria-value":this.applicationName,class:"sidebar__container"},(0,i.h)("div",{class:"sidebar__top-container"},this.showHeader&&(0,i.h)("div",{class:"sidebar__nav-bar"},(0,i.h)("div",{class:"sidebar__nav-bar-logo"},(0,i.h)("div",{class:"sidebar__nav-bar-logo-img"},(0,i.h)("svg",{width:"91",height:"40",viewBox:"0 0 91 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,i.h)("g",{"clip-path":"url(#clip0_2396_2480)"},(0,i.h)("path",{d:"M67.691 26.7766C71.0884 26.7766 72.1461 23.1841 72.1461 19.8802C72.1461 15.4536 70.2871 13.1441 67.691 13.1441C64.4219 13.1441 63.2681 16.7367 63.3001 19.9443C63.3322 23.1199 64.2296 26.7766 67.691 26.7766ZM66.0244 19.8481C66.0244 18.533 66.0244 15.4536 67.691 15.4536C69.4859 15.4536 69.4218 18.5009 69.4218 19.9123C69.4218 21.2595 69.4218 24.5313 67.7551 24.5313C65.9603 24.4992 66.0244 21.2274 66.0244 19.8481ZM57.8195 26.7766C59.1976 26.7766 60.3835 26.2313 61.5053 25.0445L60.5117 23.1841C59.7425 24.018 58.9733 24.4671 58.0438 24.4671C57.2746 24.4671 56.6336 24.018 56.249 23.2482C55.9285 22.5746 55.8644 21.8048 55.8644 20.9708V20.7142H61.6335V20.1368C61.6335 17.282 61.2809 15.7102 60.3835 14.5234C59.7104 13.6253 58.7169 13.1441 57.499 13.1441C56.2169 13.1441 55.1593 13.7215 54.39 14.8442C53.5567 16.0631 53.2042 17.699 53.2042 19.9443C53.1721 24.2426 54.8708 26.7766 57.8195 26.7766ZM57.531 15.2612C58.172 15.2612 58.5566 15.614 58.813 16.1914C59.0053 16.7046 59.1015 17.5707 59.1015 18.5971H55.8644C55.8964 16.3197 56.3772 15.2612 57.531 15.2612ZM74.2614 26.4559H76.7614V16.8329C77.3703 16.0952 78.0754 15.6782 78.5882 15.6782C78.9087 15.6782 79.2292 15.7423 79.4215 15.9989C79.6138 16.2876 79.71 16.7046 79.71 17.699V26.4559H82.21V16.5442C82.21 15.6782 82.1138 14.8121 81.601 14.1706C81.1523 13.5932 80.4472 13.2404 79.5497 13.2404C78.3959 13.2404 77.2101 13.914 76.569 14.6838C76.537 14.0102 76.3126 13.3687 76.2485 13.1441L73.9089 13.7536C74.0371 14.4593 74.2294 15.3253 74.2294 16.8971V26.4559H74.2614ZM45.2236 14.6838C45.1915 14.0102 44.9672 13.3687 44.9031 13.1441L42.5634 13.7536C42.6916 14.4593 42.8839 15.3253 42.8839 16.8971V26.4238H45.3838V16.8008C45.9928 16.0631 46.6979 15.6461 47.2107 15.6461C47.5312 15.6461 47.8517 15.7102 48.044 15.9669C48.2363 16.2555 48.3325 16.6725 48.3325 17.6669V26.4238H50.8324V16.5442C50.8324 15.6782 50.7363 14.8121 50.2235 14.1706C49.7748 13.5932 49.0696 13.2404 48.1722 13.2404C47.0505 13.2404 45.8646 13.914 45.2236 14.6838ZM14.6473 9.07042C16.1216 9.07042 17.3075 7.88359 17.3075 6.40807C17.3075 4.93256 16.1216 3.74573 14.6473 3.74573C13.173 3.74573 11.9871 4.93256 11.9871 6.40807C11.9871 7.88359 13.173 9.07042 14.6473 9.07042ZM26.9227 26.4559V16.5442C26.9227 15.6782 26.8265 14.8121 26.3137 14.1706C25.865 13.5932 25.1599 13.2404 24.2625 13.2404C23.1087 13.2404 21.9228 13.914 21.2818 14.6838C21.2497 14.0102 21.0254 13.3687 20.9613 13.1441L18.6536 13.7857C18.7818 14.4913 18.9741 15.3574 18.9741 16.9291V26.4559H21.4741V16.8329C22.0831 16.0952 22.7882 15.6782 23.301 15.6782C23.6215 15.6782 23.942 15.7423 24.1343 15.9989C24.3266 16.2876 24.4227 16.7046 24.4227 17.699V26.4559H26.9227ZM38.4289 8.36474C37.4994 8.36474 36.7622 9.10249 36.7622 10.0327C36.7622 10.9629 37.4994 11.7007 38.3968 11.7007C39.3263 11.7007 40.0634 10.9629 40.0634 10.0327C40.0634 9.10249 39.3263 8.36474 38.4289 8.36474ZM13.4614 26.4559H15.9614V10.8346L13.4614 11.1554V26.4559ZM33.8777 9.90441C34.3264 9.90441 34.7751 10.0648 35.0635 10.2893L35.7687 8.33266C35.0956 7.85151 34.3584 7.62698 33.429 7.62698C32.788 7.62698 32.1149 7.78736 31.5059 8.26851C30.897 8.78173 30.256 9.80818 30.256 11.7328C30.256 12.5667 30.288 13.4328 30.288 13.4328H29.4226V15.6461H30.288V26.4238H32.8521V15.6782H34.743L35.2238 13.4649H32.8841V11.4762C32.8841 10.5139 33.2687 9.90441 33.8777 9.90441ZM37.1468 26.4559H39.6788V13.2404L37.1468 13.5611V26.4559Z",fill:"#005DA9"}),(0,i.h)("path",{d:"M77.0816 33.5126C68.6203 36.0146 58.3321 37.1052 48.2682 37.1052C22.7239 37.1052 6.24986 29.5993 5.09604 19.6877C4.67938 15.9668 7.59599 12.3422 12.4677 9.26285C11.6023 8.62132 11.0575 7.59488 11.0254 6.44012C3.97427 10.161 0 15.0366 0 19.9764C0 30.9145 19.5188 40.1525 48.5246 39.7676C58.6205 39.6393 67.0498 38.1958 74.6778 35.6939C83.7482 32.7428 89.4532 28.5087 90.8313 26.6483C89.1968 28.1238 85.3186 31.0748 77.0816 33.5126ZM23.2687 4.38723C24.9674 3.80985 27.3712 3.0721 27.3712 3.0721C34.1339 1.21166 41.6017 0.121063 48.5566 0.185215C40.544 -0.295931 33.2365 0.185215 26.8584 1.33997C26.8584 1.33997 24.743 1.69281 22.4675 2.27018C22.4675 2.27018 21.3777 2.55887 20.7047 2.75133C20.0316 2.94379 19.1021 3.2004 19.1021 3.2004C18.4611 3.39286 17.8201 3.6174 17.1791 3.84193C17.8201 4.48346 18.2047 5.31745 18.2368 6.27974C19.3586 5.76652 21.5059 4.99668 23.2687 4.38723Z",fill:"#E30034"})),(0,i.h)("defs",null,(0,i.h)("clipPath",{id:"clip0_2396_2480"},(0,i.h)("rect",{width:"91",height:"40",fill:"white"})))),"              "),(0,i.h)("div",{class:"sidebar__nav-bar-logo-text"},this.applicationName))),(0,i.h)("div",{class:"sidebar__nav-container"},(0,i.h)("slot",null))),this.internalShowFooter&&(0,i.h)("div",{class:"sidebar__footer-container"},(0,i.h)("div",{class:"sidebar__footer-wrapper"},(this.internalTermsofUse||this.internalImprint||this.internalPrivacyPolicy)&&(0,i.h)("div",{class:"sidebar__footer-wrapper-top-links"},""!==this.internalTermsofUse&&(0,i.h)("a",{target:this.target,href:this.internalTermsofUse},"Terms of use"),""!==this.internalImprint&&(0,i.h)("a",{target:this.target,href:this.internalImprint},"Imprint"),""!==this.internalPrivacyPolicy&&(0,i.h)("a",{target:this.target,href:this.internalPrivacyPolicy},"Privacy policy")),this.copyrightText&&(0,i.h)("div",{class:"sidebar__footer-wrapper-bottom-links"},(0,i.h)("span",null,this.copyrightText)))))}get el(){return(0,i.g)(this)}};b.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{height:100%;display:inline-flex}.sidebar__container{box-sizing:border-box;display:inline-flex;flex-direction:column;align-items:flex-start;padding:0px;background-color:#FFFFFF;border-right:1px solid #EEEDED;width:264px;height:100%;font-family:var(--ifx-font-family)}.sidebar__container .sidebar__top-container{display:flex;flex-direction:column;align-items:center;padding:0px;flex:1 1 auto;order:0;z-index:0;width:100%;overflow-y:auto}.sidebar__container .sidebar__top-container .sidebar__nav-bar{box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start;padding:12px 32px;background-color:#FFFFFF;flex:none;order:0;flex-grow:0;width:100%}.sidebar__container .sidebar__top-container .sidebar__nav-bar .sidebar__nav-bar-logo{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:0px;gap:16px;flex:none;order:0;flex-grow:0}.sidebar__container .sidebar__top-container .sidebar__nav-bar .sidebar__nav-bar-logo .sidebar__nav-bar-logo-img{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0px;flex:none;order:0;flex-grow:0}.sidebar__container .sidebar__top-container .sidebar__nav-bar .sidebar__nav-bar-logo .sidebar__nav-bar-logo-img svg{width:91px;height:40px}.sidebar__container .sidebar__top-container .sidebar__nav-bar .sidebar__nav-bar-logo .sidebar__nav-bar-logo-text{font-style:normal;font-weight:600;font-size:1rem;line-height:1.5rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:1;flex-grow:0;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere}.sidebar__container .sidebar__top-container .sidebar__nav-container{scrollbar-gutter:stable;box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start;padding:12px 32px;flex:1 1 auto;order:1;width:100%}.sidebar__container .sidebar__top-container .sidebar__nav-container ::slotted(*){width:100%}.sidebar__container .sidebar__footer-container{display:flex;flex-direction:column;justify-content:flex-end;align-items:center;padding:0px 32px;flex:none;order:1;align-self:stretch;flex-grow:1;z-index:1}.sidebar__container .sidebar__footer-container .sidebar__footer-wrapper{display:flex;flex-direction:column;align-items:flex-start;padding:24px 0px;gap:16px;border-top:1px solid #EEEDED;flex:none;order:0;flex-grow:0;width:100%}.sidebar__container .sidebar__footer-container .sidebar__footer-wrapper .sidebar__footer-wrapper-top-links{display:flex;align-items:flex-start;padding:0px;gap:12px;flex:none;order:0;align-self:stretch;flex-grow:0;flex-wrap:wrap}.sidebar__container .sidebar__footer-container .sidebar__footer-wrapper .sidebar__footer-wrapper-top-links a{font:400 0.875rem/1.25rem "Source Sans 3";display:flex;text-decoration:none;align-items:center;color:#1D1D1D;flex:none;flex-grow:0}.sidebar__container .sidebar__footer-container .sidebar__footer-wrapper .sidebar__footer-wrapper-top-links a:hover{color:#08665C}.sidebar__container .sidebar__footer-container .sidebar__footer-wrapper .sidebar__footer-wrapper-top-links a:focus{outline:none;color:#08665C}.sidebar__container .sidebar__footer-container .sidebar__footer-wrapper .sidebar__footer-wrapper-bottom-links{display:flex;flex-direction:column;align-items:center}.sidebar__container .sidebar__footer-container .sidebar__footer-wrapper .sidebar__footer-wrapper-bottom-links span{font:400 0.875rem/1.25rem "Source Sans 3";text-decoration:none;color:#575352;flex:none;order:1;flex-grow:0;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere}.sidebar__container .sidebar__footer-container .sidebar__footer-wrapper .sidebar__footer-wrapper-bottom-links span:hover{cursor:initial}';const m=class{constructor(e){(0,i.r)(this,e),this.ifxSidebarMenu=(0,i.c)(this,"ifxSidebarMenu",7),this.ifxSidebarNavigationItem=(0,i.c)(this,"ifxSidebarNavigationItem",7),this.ifxSidebarActionItem=(0,i.c)(this,"ifxSidebarActionItem",7),this.icon="",this.hasIcon=!1,this.hasIconWrapper=!1,this.href="",this.internalHref="",this.target="_self",this.isExpandable=!1,this.isNested=!0,this.numberIndicator=void 0,this.active=!1,this.isActionItem=!1,this.internalActiveState=!1,this.value="",this.handleItemClick=void 0}handleActiveChange(e,t){if(this.isActionItem)this.internalActiveState=!1;else if(this.internalActiveState=e,e!==t){let n=this.getNavItem(this.el.shadowRoot);!this.isExpandable&&!e&&this.handleClassList(n,"remove","active"),!this.isExpandable&&e&&this.handleClassList(n,"add","active")}}handleConsoleError(e){this.hasIcon=!e.detail}handleEventEmission(){this.ifxSidebarMenu.emit(this.el)}handleClassList(e,t,n){if(e.classList[t](n),"contains"===t)return e.classList.contains(n)}getExpandableMenu(){return this.el.shadowRoot.querySelector(".expandable__submenu")}getNavItem(e){return e?.querySelector(".sidebar__nav-item")}getSidebarMenuItems(e=this.el){const t=e.querySelectorAll("ifx-sidebar-item");return 0===t.length?e.shadowRoot.querySelectorAll("ifx-sidebar-item"):t}getSidebarMenuItem(){return this.el.shadowRoot.querySelector(".sidebar__nav-item")}toggleSubmenu(){if(this.isExpandable){const e=this.getSidebarMenuItem(),t=this.getExpandableMenu();this.handleClassList(t,"toggle","open"),this.handleClassList(e,"toggle","open"),this.handleEventEmission()}else{if(this.isActionItem)return void this.ifxSidebarActionItem.emit(this.el);this.handleActiveChange(!0,this.internalActiveState),this.ifxSidebarNavigationItem.emit(this.el),this.handleItemClick&&this.handleItemClick(this.el)}}handleExpandableMenu(e){const t=this.getExpandableMenu();e.forEach(n=>{const s=document.createElement("li");s.appendChild(n),t.appendChild(s)})}parentElementIsSidebar(){return"IFX-SIDEBAR"===this.el.parentElement.tagName.toUpperCase()}checkIfMenuItemIsNested(){this.parentElementIsSidebar()&&(this.isNested=!1)}isActive(e){return"true"===e.getAttribute("active")}getParentSection(e){let t=e.parentElement;for(;t&&"IFX-SIDEBAR"!==t.tagName.toUpperCase();){if("IFX-SIDEBAR-ITEM"===t.tagName.toUpperCase())return t;t=t.parentElement}return null}handleBorderIndicatorDisplacement(e){const t=(s,r)=>{if(this.isActive(s)){const l=this.handleClassList(r,"contains","open"),h=this.getActiveItemSection();this.handleClassList(h,l?"remove":"add","active-section")}this.getSidebarMenuItems(s).forEach(l=>t(l,r))};this.getSidebarMenuItems().forEach(s=>t(s,e))}setHref(){this.internalHref=""===this.href.toLowerCase().trim()?void 0:this.href}getActiveItemSection(){return this.parentElementIsSidebar(),this.getNavItem(this.el.shadowRoot)}setActiveClasses(){var e=this;return(0,d.Z)(function*(){const t=e.getNavItem(e.el.shadowRoot);e.handleClassList(t,"add","active")})()}expandMenu(e){var t=this;return(0,d.Z)(function*(){const n=t.getSidebarMenuItem(),s=t.getExpandableMenu();t.handleClassList(s,"add","open"),t.handleClassList(n,"add","open"),e&&(t.handleClassList(s,"remove","active-section"),t.handleClassList(n,"remove","active-section"))})()}isItemExpandable(){var e=this;return(0,d.Z)(function*(){return e.isExpandable})()}handleActiveState(){this.internalActiveState&&this.setActiveClasses()}handleKeyDown(e){"Enter"===e.key&&this.toggleSubmenu()}componentDidLoad(){if(this.handleActiveState(),this.isExpandable){const e=this.getSidebarMenuItems();this.handleExpandableMenu(e)}}componentWillLoad(){this.internalActiveState=this.active,this.checkIfMenuItemIsNested(),this.setHref(),this.isExpandable=0!==this.getSidebarMenuItems().length}componentWillUpdate(){this.active&&!this.internalActiveState&&(this.internalActiveState=this.active,this.ifxSidebarNavigationItem.emit(this.el))}render(){return(0,i.h)("div",null,(0,i.h)("a",{tabIndex:1,onKeyDown:e=>this.handleKeyDown(e),href:this.internalHref,onClick:()=>this.toggleSubmenu(),target:this.target,class:"sidebar__nav-item "+(!this.isNested&&this.isExpandable?"header__section":"")},this.icon&&(0,i.h)("div",{class:"sidebar__nav-item-icon-wrapper "+(this.hasIcon?"":"noIcon")},(0,i.h)("ifx-icon",{icon:this.icon})),(0,i.h)("div",{class:"sidebar__nav-item-label"},(0,i.h)("slot",null)),(0,i.h)("div",{class:"sidebar__nav-item-indicator"},this.isExpandable&&(0,i.h)("span",{class:"item__arrow-wrapper"},(0,i.h)("ifx-icon",{icon:"chevron-down-12"})),!this.isExpandable&&!this.isNested&&(0,i.h)("span",{class:"item__number-indicator"},(0,i.h)("ifx-number-indicator",null,this.numberIndicator)))),this.isExpandable&&(0,i.h)("ul",{class:"expandable__submenu"}))}get el(){return(0,i.g)(this)}static get watchers(){return{active:["handleActiveChange"]}}};m.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{position:relative}.sidebar__nav-item:focus,.sidebar__nav-item.header__section:focus{outline:none}.sidebar__nav-item:focus .sidebar__nav-item-icon-wrapper,.sidebar__nav-item.header__section:focus .sidebar__nav-item-icon-wrapper{color:#08665C}.sidebar__nav-item:focus .sidebar__nav-item-label,.sidebar__nav-item.header__section:focus .sidebar__nav-item-label{outline:none;color:#08665C}.sidebar__nav-item:focus .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon,.sidebar__nav-item.header__section:focus .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon{color:#08665C}.sidebar__nav-item:hover,.sidebar__nav-item.header__section:hover{outline:none}.sidebar__nav-item:hover .sidebar__nav-item-icon-wrapper,.sidebar__nav-item.header__section:hover .sidebar__nav-item-icon-wrapper{color:#08665C}.sidebar__nav-item:hover .sidebar__nav-item-label,.sidebar__nav-item.header__section:hover .sidebar__nav-item-label{outline:none;color:#08665C}.sidebar__nav-item:hover .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon,.sidebar__nav-item.header__section:hover .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon{color:#08665C}.sidebar__nav-item{display:flex;flex-direction:row;align-items:center;width:100%;padding:8px 0px;gap:4px;flex:none;order:0;flex-grow:0;text-decoration:none;color:#1D1D1D;cursor:pointer;font-family:var(--ifx-font-family)}.sidebar__nav-item.active{color:#0A8276}.sidebar__nav-item.active-section::before{content:"";position:absolute;left:-44px;height:40px;width:2px;background:#0A8276}.sidebar__nav-item.open .sidebar__nav-item-label{font-size:16px;font-style:normal;font-weight:400;line-height:24px}.sidebar__nav-item.open .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon{transform:rotate(-180deg)}.sidebar__nav-item.header__section{box-sizing:padding-box;border-top:1px solid #EEEDED;padding:20px 0px;display:-webkit-flex;-webkit-line-clamp:1;-webkit-box-orient:horizontal;overflow:hidden;text-overflow:ellipsis}.sidebar__nav-item.header__section.no-top-border{border-top:none}.sidebar__nav-item.header__section.active-section::before{content:"";position:absolute;left:-32px;height:40px;width:2px;background:#0A8276}.sidebar__nav-item.header__section.open .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon{transform:rotate(-180deg)}.sidebar__nav-item.header__section .sidebar__nav-item-label{color:#1D1D1D;font-family:Source Sans 3;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.sidebar__nav-item .sidebar__nav-item-icon-wrapper{display:flex;width:24px;height:24px;justify-content:center;align-items:center;gap:8px;flex-shrink:0}.sidebar__nav-item .sidebar__nav-item-icon-wrapper.noIcon{display:none}.sidebar__nav-item .sidebar__nav-item-icon-wrapper ifx-icon{width:16px;height:16px}.sidebar__nav-item .sidebar__nav-item-label{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;display:flex;align-items:center;flex:none;order:1;flex-grow:1;cursor:pointer}.sidebar__nav-item .sidebar__nav-item-indicator{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px 4px;flex:none;order:2;flex-grow:0}.expandable__submenu{display:none;list-style-type:none;flex-direction:column;padding:0;margin:0;padding-left:12px}.expandable__submenu.open{display:flex}';const v=class{constructor(e){(0,i.r)(this,e)}render(){return(0,i.h)("div",{class:"sidebar__title"},(0,i.h)("div",{class:"sidebar__title-label"},(0,i.h)("slot",null)))}get el(){return(0,i.g)(this)}};v.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{position:relative}.sidebar__title{width:100%;height:fit-content;border-top:1px solid #EEEDED;padding:12px 0}.sidebar__title.no-top-border{border-top:none}.sidebar__title-label{height:20px;font:600 0.875rem/1.25rem "Source Sans 3";text-transform:uppercase;color:#575352;letter-spacing:3px}'}}]);