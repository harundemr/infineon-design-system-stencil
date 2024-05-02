"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[7903],{7903:(v,h,d)=>{d.r(h),d.d(h,{ifx_sidebar:()=>f});var c=d(6330),r=d(3415);const f=class{constructor(e){(0,r.r)(this,e),this.applicationName="",this.initialCollapse=!0,this.showFooter=!0,this.showHeader=!0,this.termsOfUse="#",this.imprint="#",this.privacyPolicy="#",this.target="_blank",this.currentYear=(new Date).getFullYear(),this.copyrightText="\xa9 1999 - "+this.currentYear+" Infineon Technologies AG",this.internalTermsofUse="",this.internalImprint="",this.internalPrivacyPolicy="",this.internalShowFooter=!0,this.activeItem=null}expandActiveItems(){var e=this;const t=function(){var a=(0,c.A)(function*(o){if(!0!==(yield o.isItemExpandable()))return o.active?1:0;let s=0;const n=e.getSidebarMenuItems(o);for(let l=0;l<n.length;l++)s=Math.max(s,yield t(n[l]));return s>0&&o.expandMenu(1!=s),s?s+1:0});return function(s){return a.apply(this,arguments)}}(),i=this.getSidebarMenuItems(this.el);for(let a=0;a<i.length;a++)t(i[a])}adjustTopBorder(){const e=this.el.children;e.length&&("IFX-SIDEBAR-TITLE"===e[0].tagName&&e[0].shadowRoot.querySelector(".sidebar__title").classList.add("no-top-border"),"IFX-SIDEBAR-ITEM"===e[0].tagName&&e[0].shadowRoot.querySelector("div > a").classList.contains("header__section")&&e[0].shadowRoot.querySelector("div > a").classList.add("no-top-border"),this.el.querySelectorAll("ifx-sidebar-title").forEach(i=>{const a=i.nextElementSibling;a&&"IFX-SIDEBAR-ITEM"===a.tagName&&a.shadowRoot.querySelector("div > a").classList.contains("header__section")&&a.shadowRoot.querySelector("div > a").classList.add("no-top-border")}))}addPaddingToTheLastItem(e){var t=this;return(0,c.A)(function*(){const i=t.getSidebarMenuItems(e);for(let a=0;a<i.length;a++){const o=i[a],s=t.getNavItem(o.shadowRoot);(yield o.isItemExpandable())&&t.addPaddingToTheLastItem(o),a===i.length-1&&t.handleClassList(s,"add","extra-padding__bottom")}})()}adjustItemsPadding(){var e=this;return(0,c.A)(function*(){const t=e.el.children;if(0!==t.length){"IFX-SIDEBAR-ITEM"===t[0].tagName.toUpperCase()&&t[0].isItemExpandable()&&e.addPaddingToTheLastItem(t[0]);for(let i=1;i<t.length;i++){const a=t[i],o=t[i-1],s=e.getNavItem(o.shadowRoot);if("IFX-SIDEBAR-TITLE"===a.tagName.toUpperCase())"IFX-SIDEBAR-ITEM"===o.tagName.toUpperCase()&&s&&!e.handleClassList(s,"contains","header__section")&&e.handleClassList(s,"add","extra-padding__bottom");else if("IFX-SIDEBAR-ITEM"===a.tagName.toUpperCase()){const n=e.getNavItem(a.shadowRoot);"IFX-SIDEBAR-ITEM"===o.tagName.toUpperCase()&&s&&!e.handleClassList(s,"contains","header__section")&&e.handleClassList(n,"contains","header__section")&&e.handleClassList(s,"add","extra-padding__bottom"),(yield a.isItemExpandable())&&e.addPaddingToTheLastItem(a)}}}})()}componentDidLoad(){this.adjustTopBorder(),this.setInitialActiveItem(),this.initialCollapse||this.expandActiveItems(),this.adjustItemsPadding(),this.applyActiveSectionToParent(this.el)}getSidebarMenuItems(e=this.el){var t;const i=e.querySelectorAll("ifx-sidebar-item");return 0===i.length?null===(t=e.shadowRoot)||void 0===t?void 0:t.querySelectorAll("ifx-sidebar-item"):i}setInitialActiveItem(){const e=i=>{const a=this.getSidebarMenuItems(i);let o=!1;a?.forEach(s=>{if(this.isActive(s)&&!o?(o=!0,this.handleBorderIndicatorDisplacement(s)):this.isActive(s)&&o&&s.setAttribute("active","false"),this.hasChildren(s.shadowRoot)&&!this.hasActiveChild(s.shadowRoot)){const n=this.getActiveItemSection(s);this.handleClassList(n,"remove","active-section")}if(this.hasChildren(s.shadowRoot)&&this.isOpen(s.shadowRoot)&&this.containsActiveSection(s)){const n=this.getActiveItemSection(s);this.handleClassList(n,"remove","active-section")}this.hasChildren(s.shadowRoot)&&e(s.shadowRoot)})};this.getSidebarMenuItems(this.el).forEach(e)}handleClassList(e,t,i){if(e.classList[t](i),"contains"===t)return e.classList.contains(i)}getActiveItemSection(e){return this.getNavItem(e.shadowRoot)}getNavItem(e){return e?.querySelector(".sidebar__nav-item")}hasChildren(e){return null!==e?.querySelector(".item__arrow-wrapper")}handleBorderIndicatorDisplacement(e){const t=a=>{if(this.isActive(a)||a===e){const n=this.getActiveItemSection(a);this.hasChildren(n)&&this.handleClassList(n,"add","active-section")}this.getSidebarMenuItems(a).forEach(t)};this.getSidebarMenuItems(this.el).forEach(t)}removeActiveClassesRecursively(){const e=t=>{this.querySidebarItems(t).forEach(a=>{const o=a.shadowRoot.querySelector(".sidebar__nav-item");o.classList.remove("active-section"),o.classList.remove("active"),a.getAttribute("active")&&a.setAttribute("active","false"),e(a.shadowRoot)})};e(this.el),this.activeItem&&this.activeItem.setAttribute("active","false"),this.activeItem=null}hasActiveChild(e){const t=this.getSidebarMenuItems(e);if(t)for(let i of t){if(this.isActive(i))return!0;if(this.hasChildren(i.shadowRoot)&&this.hasActiveChild(i.shadowRoot))return!0}return!1}handleSidebarItemInteraction(e){const t=e.detail;if((!this.hasChildren(t.shadowRoot)||this.hasActiveChild(t.shadowRoot))&&this.handleBorderIndicatorDisplacement(t),this.hasChildren(t.shadowRoot)&&!this.hasActiveChild(t.shadowRoot)){const i=this.getActiveItemSection(t);this.handleClassList(i,"remove","active-section")}if(this.hasChildren(t.shadowRoot)&&this.isOpen(t.shadowRoot)&&this.containsActiveSection(t)){const i=this.getActiveItemSection(t);this.handleClassList(i,"remove","active-section")}}isOpen(e){return!!this.getNavItem(e).classList.contains("open")}containsActiveSection(e){const t=this.getSidebarMenuItems(e);for(let i of t)if(this.getNavItem(i.shadowRoot).classList.contains("active-section")||this.hasChildren(i.shadowRoot)&&this.containsActiveSection(i.shadowRoot))return this.handleClassList(i,"add","active-section"),!0;return!1}applyActiveSectionToParent(e){const t=this.getSidebarMenuItems(e);t?.forEach(i=>{if(this.hasActiveChild(i.shadowRoot)){const a=this.getActiveItemSection(i);this.handleClassList(a,"add","active-section")}this.applyActiveSectionToParent(i.shadowRoot)})}querySidebarItems(e){return e.querySelectorAll("ifx-sidebar-item")}isActive(e){return"true"===e.getAttribute("active")}handleSidebarItemActivated(e){this.removeActiveClassesRecursively(),this.activeItem=e.detail,this.activeItem.setAttribute("active","true");const t=this.getNavItem(e.detail.parentElement.parentElement.parentElement);t&&this.handleClassList(t,"add","active-section")}componentWillLoad(){this.internalTermsofUse=this.termsOfUse.trim(),this.internalPrivacyPolicy=this.privacyPolicy.trim(),this.internalImprint=this.imprint.trim(),this.internalShowFooter=this.showFooter,this.internalShowFooter&&!this.internalImprint&&!this.internalPrivacyPolicy&&!this.internalTermsofUse&&!this.copyrightText&&(this.internalShowFooter=!1)}render(){return(0,r.h)("div",{key:"3467bf07a02a3aa62cb627454807e8097dcee495","aria-label":"a navigation sidebar","aria-value":this.applicationName,class:"sidebar__container"},(0,r.h)("div",{key:"03bb335e3ad18e21692c9d0d753d07b4f7bdf29e",class:"sidebar__top-container"},this.showHeader&&(0,r.h)("div",{class:"sidebar__nav-bar"},(0,r.h)("div",{class:"sidebar__nav-bar-logo"},(0,r.h)("div",{class:"sidebar__nav-bar-logo-img"},(0,r.h)("svg",{width:"91",height:"40",viewBox:"0 0 91 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,r.h)("g",{"clip-path":"url(#clip0_2396_2480)"},(0,r.h)("path",{d:"M67.691 26.7766C71.0884 26.7766 72.1461 23.1841 72.1461 19.8802C72.1461 15.4536 70.2871 13.1441 67.691 13.1441C64.4219 13.1441 63.2681 16.7367 63.3001 19.9443C63.3322 23.1199 64.2296 26.7766 67.691 26.7766ZM66.0244 19.8481C66.0244 18.533 66.0244 15.4536 67.691 15.4536C69.4859 15.4536 69.4218 18.5009 69.4218 19.9123C69.4218 21.2595 69.4218 24.5313 67.7551 24.5313C65.9603 24.4992 66.0244 21.2274 66.0244 19.8481ZM57.8195 26.7766C59.1976 26.7766 60.3835 26.2313 61.5053 25.0445L60.5117 23.1841C59.7425 24.018 58.9733 24.4671 58.0438 24.4671C57.2746 24.4671 56.6336 24.018 56.249 23.2482C55.9285 22.5746 55.8644 21.8048 55.8644 20.9708V20.7142H61.6335V20.1368C61.6335 17.282 61.2809 15.7102 60.3835 14.5234C59.7104 13.6253 58.7169 13.1441 57.499 13.1441C56.2169 13.1441 55.1593 13.7215 54.39 14.8442C53.5567 16.0631 53.2042 17.699 53.2042 19.9443C53.1721 24.2426 54.8708 26.7766 57.8195 26.7766ZM57.531 15.2612C58.172 15.2612 58.5566 15.614 58.813 16.1914C59.0053 16.7046 59.1015 17.5707 59.1015 18.5971H55.8644C55.8964 16.3197 56.3772 15.2612 57.531 15.2612ZM74.2614 26.4559H76.7614V16.8329C77.3703 16.0952 78.0754 15.6782 78.5882 15.6782C78.9087 15.6782 79.2292 15.7423 79.4215 15.9989C79.6138 16.2876 79.71 16.7046 79.71 17.699V26.4559H82.21V16.5442C82.21 15.6782 82.1138 14.8121 81.601 14.1706C81.1523 13.5932 80.4472 13.2404 79.5497 13.2404C78.3959 13.2404 77.2101 13.914 76.569 14.6838C76.537 14.0102 76.3126 13.3687 76.2485 13.1441L73.9089 13.7536C74.0371 14.4593 74.2294 15.3253 74.2294 16.8971V26.4559H74.2614ZM45.2236 14.6838C45.1915 14.0102 44.9672 13.3687 44.9031 13.1441L42.5634 13.7536C42.6916 14.4593 42.8839 15.3253 42.8839 16.8971V26.4238H45.3838V16.8008C45.9928 16.0631 46.6979 15.6461 47.2107 15.6461C47.5312 15.6461 47.8517 15.7102 48.044 15.9669C48.2363 16.2555 48.3325 16.6725 48.3325 17.6669V26.4238H50.8324V16.5442C50.8324 15.6782 50.7363 14.8121 50.2235 14.1706C49.7748 13.5932 49.0696 13.2404 48.1722 13.2404C47.0505 13.2404 45.8646 13.914 45.2236 14.6838ZM14.6473 9.07042C16.1216 9.07042 17.3075 7.88359 17.3075 6.40807C17.3075 4.93256 16.1216 3.74573 14.6473 3.74573C13.173 3.74573 11.9871 4.93256 11.9871 6.40807C11.9871 7.88359 13.173 9.07042 14.6473 9.07042ZM26.9227 26.4559V16.5442C26.9227 15.6782 26.8265 14.8121 26.3137 14.1706C25.865 13.5932 25.1599 13.2404 24.2625 13.2404C23.1087 13.2404 21.9228 13.914 21.2818 14.6838C21.2497 14.0102 21.0254 13.3687 20.9613 13.1441L18.6536 13.7857C18.7818 14.4913 18.9741 15.3574 18.9741 16.9291V26.4559H21.4741V16.8329C22.0831 16.0952 22.7882 15.6782 23.301 15.6782C23.6215 15.6782 23.942 15.7423 24.1343 15.9989C24.3266 16.2876 24.4227 16.7046 24.4227 17.699V26.4559H26.9227ZM38.4289 8.36474C37.4994 8.36474 36.7622 9.10249 36.7622 10.0327C36.7622 10.9629 37.4994 11.7007 38.3968 11.7007C39.3263 11.7007 40.0634 10.9629 40.0634 10.0327C40.0634 9.10249 39.3263 8.36474 38.4289 8.36474ZM13.4614 26.4559H15.9614V10.8346L13.4614 11.1554V26.4559ZM33.8777 9.90441C34.3264 9.90441 34.7751 10.0648 35.0635 10.2893L35.7687 8.33266C35.0956 7.85151 34.3584 7.62698 33.429 7.62698C32.788 7.62698 32.1149 7.78736 31.5059 8.26851C30.897 8.78173 30.256 9.80818 30.256 11.7328C30.256 12.5667 30.288 13.4328 30.288 13.4328H29.4226V15.6461H30.288V26.4238H32.8521V15.6782H34.743L35.2238 13.4649H32.8841V11.4762C32.8841 10.5139 33.2687 9.90441 33.8777 9.90441ZM37.1468 26.4559H39.6788V13.2404L37.1468 13.5611V26.4559Z",fill:"#005DA9"}),(0,r.h)("path",{d:"M77.0816 33.5126C68.6203 36.0146 58.3321 37.1052 48.2682 37.1052C22.7239 37.1052 6.24986 29.5993 5.09604 19.6877C4.67938 15.9668 7.59599 12.3422 12.4677 9.26285C11.6023 8.62132 11.0575 7.59488 11.0254 6.44012C3.97427 10.161 0 15.0366 0 19.9764C0 30.9145 19.5188 40.1525 48.5246 39.7676C58.6205 39.6393 67.0498 38.1958 74.6778 35.6939C83.7482 32.7428 89.4532 28.5087 90.8313 26.6483C89.1968 28.1238 85.3186 31.0748 77.0816 33.5126ZM23.2687 4.38723C24.9674 3.80985 27.3712 3.0721 27.3712 3.0721C34.1339 1.21166 41.6017 0.121063 48.5566 0.185215C40.544 -0.295931 33.2365 0.185215 26.8584 1.33997C26.8584 1.33997 24.743 1.69281 22.4675 2.27018C22.4675 2.27018 21.3777 2.55887 20.7047 2.75133C20.0316 2.94379 19.1021 3.2004 19.1021 3.2004C18.4611 3.39286 17.8201 3.6174 17.1791 3.84193C17.8201 4.48346 18.2047 5.31745 18.2368 6.27974C19.3586 5.76652 21.5059 4.99668 23.2687 4.38723Z",fill:"#E30034"})),(0,r.h)("defs",null,(0,r.h)("clipPath",{id:"clip0_2396_2480"},(0,r.h)("rect",{width:"91",height:"40",fill:"white"})))),"              "),(0,r.h)("div",{class:"sidebar__nav-bar-logo-text"},this.applicationName))),(0,r.h)("div",{key:"95262c336ea12fadac4d1937bd25d5ce2888a4bd",class:"sidebar__nav-container"},(0,r.h)("slot",{key:"0802e93d07ccc378cb656d4df1c715eb0fc4817f"}))),this.internalShowFooter&&(0,r.h)("div",{class:"sidebar__footer-container"},(0,r.h)("div",{class:"sidebar__footer-wrapper"},(this.internalTermsofUse||this.internalImprint||this.internalPrivacyPolicy)&&(0,r.h)("div",{class:"sidebar__footer-wrapper-top-links"},""!==this.internalTermsofUse&&(0,r.h)("a",{target:this.target,href:this.internalTermsofUse},"Terms of use"),""!==this.internalImprint&&(0,r.h)("a",{target:this.target,href:this.internalImprint},"Imprint"),""!==this.internalPrivacyPolicy&&(0,r.h)("a",{target:this.target,href:this.internalPrivacyPolicy},"Privacy policy")),this.copyrightText&&(0,r.h)("div",{class:"sidebar__footer-wrapper-bottom-links"},(0,r.h)("span",null,this.copyrightText)))))}get el(){return(0,r.g)(this)}};f.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{height:100%;display:inline-flex}.sidebar__container{box-sizing:border-box;display:inline-flex;flex-direction:column;align-items:flex-start;padding:0px;background-color:#FFFFFF;border-right:1px solid #EEEDED;width:264px;height:100%;font-family:var(--ifx-font-family)}.sidebar__container .sidebar__top-container{display:flex;flex-direction:column;align-items:center;padding:0px;flex:1 1 auto;order:0;z-index:0;width:100%;overflow-y:auto}.sidebar__container .sidebar__top-container .sidebar__nav-bar{box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start;padding:12px 32px;background-color:#FFFFFF;flex:none;order:0;flex-grow:0;width:100%}.sidebar__container .sidebar__top-container .sidebar__nav-bar .sidebar__nav-bar-logo{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:0px;gap:16px;flex:none;order:0;flex-grow:0}.sidebar__container .sidebar__top-container .sidebar__nav-bar .sidebar__nav-bar-logo .sidebar__nav-bar-logo-img{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0px;flex:none;order:0;flex-grow:0}.sidebar__container .sidebar__top-container .sidebar__nav-bar .sidebar__nav-bar-logo .sidebar__nav-bar-logo-img svg{width:91px;height:40px}.sidebar__container .sidebar__top-container .sidebar__nav-bar .sidebar__nav-bar-logo .sidebar__nav-bar-logo-text{font-style:normal;font-weight:600;font-size:1rem;line-height:1.5rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:1;flex-grow:0;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere}.sidebar__container .sidebar__top-container .sidebar__nav-container{scrollbar-gutter:stable;box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start;padding:12px 32px;flex:1 1 auto;order:1;width:100%}.sidebar__container .sidebar__top-container .sidebar__nav-container ::slotted(*){width:100%}.sidebar__container .sidebar__footer-container{display:flex;flex-direction:column;justify-content:flex-end;align-items:center;padding:0px 32px;flex:none;order:1;align-self:stretch;flex-grow:1;z-index:1}.sidebar__container .sidebar__footer-container .sidebar__footer-wrapper{display:flex;flex-direction:column;align-items:flex-start;padding:24px 0px;gap:16px;border-top:1px solid #EEEDED;flex:none;order:0;flex-grow:0;width:100%}.sidebar__container .sidebar__footer-container .sidebar__footer-wrapper .sidebar__footer-wrapper-top-links{display:flex;align-items:flex-start;padding:0px;gap:12px;flex:none;order:0;align-self:stretch;flex-grow:0;flex-wrap:wrap}.sidebar__container .sidebar__footer-container .sidebar__footer-wrapper .sidebar__footer-wrapper-top-links a{font:400 0.875rem/1.25rem "Source Sans 3";display:flex;text-decoration:none;align-items:center;color:#1D1D1D;flex:none;flex-grow:0}.sidebar__container .sidebar__footer-container .sidebar__footer-wrapper .sidebar__footer-wrapper-top-links a:hover{color:#08665C}.sidebar__container .sidebar__footer-container .sidebar__footer-wrapper .sidebar__footer-wrapper-top-links a:focus{outline:none;color:#08665C}.sidebar__container .sidebar__footer-container .sidebar__footer-wrapper .sidebar__footer-wrapper-bottom-links{display:flex;flex-direction:column;align-items:center}.sidebar__container .sidebar__footer-container .sidebar__footer-wrapper .sidebar__footer-wrapper-bottom-links span{font:400 0.875rem/1.25rem "Source Sans 3";text-decoration:none;color:#575352;flex:none;order:1;flex-grow:0;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere}.sidebar__container .sidebar__footer-container .sidebar__footer-wrapper .sidebar__footer-wrapper-bottom-links span:hover{cursor:initial}'}}]);