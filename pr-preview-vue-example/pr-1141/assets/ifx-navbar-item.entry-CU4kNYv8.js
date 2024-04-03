import{r,c as o,h as i,g as h}from"./index-DhwMidoe.js";const l=".navbar__item{position:relative;display:flex;flex-direction:row;align-items:center;padding:0px 8px;flex:none;order:0;flex-grow:0;font-family:var(--ifx-font-family);text-decoration:none;font-weight:400;font-size:16px;color:#1D1D1D}.navbar__item.hide{display:none}.navbar__item.isParent{gap:8px}.navbar__item .navItemIconWrapper{transition:0.3s}.navbar__item.open .navItemIconWrapper{transform:rotate(-180deg);transition:0.3s}.navbar__item:hover{color:#0A8276;cursor:pointer}.navbar__item.remove{display:none}.navbar__item.removeLabel .label__wrapper{display:none}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px;gap:8px;flex:none;order:0;flex-grow:0}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper img{width:24px;height:24px;border-radius:100%}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper.removeWrapper{display:none}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper.hide{display:none}.container{position:relative}.container .sub__layer-back-button{display:none}.container .sub__layer-back-button.show{display:flex;justify-content:flex-start}.container .sub__layer-back-button.show .back__button-wrapper{display:flex;align-items:center;gap:8px;padding:8px 0 16px 0;color:#0A8276;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.container .sub__layer-back-button.show .back__button-wrapper span:hover,.container .sub__layer-back-button.show .back__button-wrapper ifx-icon:hover{cursor:pointer}.container.hide{display:none}.container .inner__content-wrapper{display:flex;justify-content:space-between;align-items:center;gap:8px}.navbar-menu{position:absolute;display:none;list-style-type:none;visibility:visible;flex-direction:column;width:224px;max-height:289px;min-width:224px;background:#FFFFFF;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;padding:8px 0px;font-family:var(--ifx-font-family)}.navbar-menu.open:not(.itemInMobileMenu){display:flex}.navbar-menu.itemInMobileMenu{display:none}.navbar-menu.right{left:100%;top:-40%}.navbar-menu.left{top:-40%;right:100%}.navbar-menu.rightSideItemMenu{left:initial;right:0px}.navbar__item.layer__item-parent{color:#1D1D1D;font-size:24px;font-style:normal;font-weight:600;line-height:32px;letter-spacing:-0.24px;cursor:initial}.navbar__item.layer__item-parent .navbar__container-right-content-navigation-item-icon-wrapper ifx-icon svg{width:24px;height:24px}.navbar__item.sidebarMenuItem{justify-content:space-between;padding:0}.navbar__item.menuItem{text-decoration:none;color:#1D1D1D;display:flex;align-items:center;justify-content:space-between;padding:8px 16px;gap:8px;font-family:var(--ifx-font-family)}.navbar__item.menuItem.hide{display:none}.navbar__item.menuItem .label__wrapper{color:#1D1D1D;font-size:16px;font-style:normal;font-weight:400;line-height:24px}.navbar__item.menuItem:hover{cursor:pointer;background-color:#EEEDED}.navbar__item.menuItem:active{background-color:#BFBBBB}.sub__layer-menu{padding:5px;display:none}.sub__layer-menu.remove__margin{margin:0;padding:0}.sub__layer-menu.open{display:block}.navbar__item.hide{display:none}.menuItemRightIconWrapper.hide{display:none}.navItemIconWrapper.hide{display:none}",m=l,c=class{constructor(e){r(this,e),this.ifxNavItem=o(this,"ifxNavItem",7),this.showLabel=!0,this.icon="",this.href="",this.target="_self",this.hideOnMobile=!0,this.internalHref="",this.isMenuItem=!1,this.hasChildNavItems=!1,this.isSidebarMenuItem=!1,this.itemPosition=void 0}handleOutsideClick(e){const t=e.composedPath(),n=this.getItemMenu();n&&n.classList.contains("open")&&(t.includes(this.el)||this.closeItemMenu())}async hideComponent(){this.el.style.display="none"}async showComponent(){this.el.style.display=""}async toggleChildren(e){const t=this.getItemMenu(),n=this.getChevronDownIconWrapper();t&&(this.handleClassList(n,e,"hide"),this.handleClassList(t,e,"itemInMobileMenu"))}async moveChildComponentsIntoSubLayerMenu(){const e=this.getItemMenu();if(e&&this.handleClassList(e,"contains","open")){const a=this.getNavBarItem(),s=this.getSubLayerBackButton();this.handleClassList(a,"add","layer__item-parent"),this.handleClassList(s,"add","show"),this.ifxNavItem.emit({component:this.el,action:"hideFirstLayer"})}const t=this.el.querySelectorAll('[slot="first__layer"]');this.isSidebarMenuItem=!0;for(let n=0;n<t.length;n++)t[n].setAttribute("slot","second__layer"),t[n].moveChildComponentsIntoSubLayerMenu()}getSubLayerBackButton(){return this.el.shadowRoot.querySelector(".sub__layer-back-button")}async toggleFirstLayerItem(e,t){const n=this.getNavBarItem(),a=this.getSubLayerMenu(),s=this.getSubLayerBackButton();this.handleClassList(s,[e],"show"),this.handleClassList(n,[t],"hide"),this.handleClassList(a,[t],"remove__margin")}openSubLayerMenu(){if(this.hasChildNavItems){const e=this.getSubLayerBackButton(),t=this.getRightArrowIcon(),n=this.getNavBarItem(),a=this.getSubLayerMenu(),s=this.el.getAttribute("slot");this.handleClassList(e,"add","show"),this.handleClassList(t,"add","hide"),this.handleClassList(n,"add","layer__item-parent"),this.handleClassList(a,"add","open"),s.toLowerCase()==="second__layer"?(this.ifxNavItem.emit({component:this.el,parent:this.el.parentElement,action:"hideSecondLayer"}),this.handleClassList(n,"remove","menuItem")):this.ifxNavItem.emit({component:this.el,action:"hideFirstLayer"})}}async addMenuItemClass(){const e=this.getNavBarItem();this.handleClassList(e,"add","menuItem");const t=this.getRightArrowIcon();this.hasChildNavItems&&this.handleClassList(t,"remove","hide")}async moveChildComponentsBackIntoNavbar(){const e=this.getSubLayerBackButton(),t=this.getNavBarItem(),n=this.getSubLayerMenu();this.handleClassList(e,"remove","show"),this.handleClassList(t,"remove","layer__item-parent"),this.handleClassList(n,"remove","remove__margin"),this.ifxNavItem.emit({component:this.el,action:"show"});const a=this.el.querySelectorAll('[slot="second__layer"]');this.isSidebarMenuItem=!1,this.showComponent(),this.handleClassList(t,"remove","hide");for(let s=0;s<a.length;s++)a[s].setAttribute("slot","first__layer"),a[s].moveChildComponentsBackIntoNavbar(),a[s].addMenuItemClass(),a[s].returnToFirstLayer()}getRightArrowIcon(){return this.el.shadowRoot.querySelector(".menuItemRightIconWrapper")}getChevronDownIconWrapper(){return this.el.shadowRoot.querySelector(".navItemIconWrapper")}async returnToFirstLayer(){const e=this.getSubLayerBackButton(),t=this.getNavBarItem(),n=this.getRightArrowIcon(),a=this.getSubLayerMenu(),s=this.el.getAttribute("slot");this.handleClassList(e,"remove","show"),this.handleClassList(t,"remove","layer__item-parent"),this.handleClassList(a,"remove","open"),this.hasChildNavItems&&this.handleClassList(n,"remove","hide"),s.toLowerCase()==="second__layer"?(this.ifxNavItem.emit({component:this.el,parent:this.el.parentElement,action:"returnToSecondLayer"}),this.handleClassList(t,"add","menuItem")):this.ifxNavItem.emit({component:this.el,action:"return"})}componentWillLoad(){this.setHref(),this.checkIfItemIsNested(),this.checkIfItemHasChildren()}componentDidLoad(){if(this.hasChildNavItems){const e=this.getNavbarItems();this.relocateItemsToFirstlayer(e)}}componentDidUpdate(){const e=this.getNavBarItem(),t=this.handleClassList(e,"contains","layer__item-parent");if(this.isSidebarMenuItem&&t){const n=this.getRightArrowIcon();this.handleClassList(n,"add","hide")}}async setMenuItemPosition(){if(this.isMenuItem&&this.hasChildNavItems){const e=this.getItemMenuPosition();e==="left"?this.itemPosition="left":e==="right"&&(this.itemPosition="right")}}handleClassList(e,t,n){if(e.classList[t](n),t==="contains")return e.classList.contains(n)}getNavbarItems(){return this.el.querySelectorAll("ifx-navbar-item")}getNavBarItem(){return this.el.shadowRoot.querySelector(".navbar__item")}getSubLayerMenu(){return this.el.shadowRoot.querySelector(".sub__layer-menu")}relocateItemsToFirstlayer(e){e.forEach(t=>{t.setAttribute("slot","first__layer")})}setHref(){this.href.toLowerCase().trim()===""?this.internalHref=void 0:this.internalHref=this.href}checkIfItemIsNested(){const e=this.el.parentElement;if(e.tagName.toUpperCase()==="IFX-NAVBAR-ITEM"||e.tagName.toUpperCase()==="IFX-NAVBAR-PROFILE"){this.isMenuItem=!0;return}else this.isMenuItem=!1}checkIfItemHasChildren(){this.getNavbarItems().length!==0?this.hasChildNavItems=!0:this.hasChildNavItems=!1}async setItemSideSpecifications(){const e=this.el,t=this.getItemMenu();return e.getAttribute("slot").toLowerCase().trim()==="right-item"&&this.handleClassList(t,"add","rightSideItemMenu"),!0}getItemMenu(){return this.el.shadowRoot.querySelector(".navbar-menu")}closeItemMenu(){const e=this.getItemMenu(),t=this.getNavBarItem();e&&(this.handleClassList(e,"remove","open"),this.handleClassList(t,"remove","open"))}getItemMenuPosition(){let e=this.el;for(;e;){if(e.tagName==="IFX-NAVBAR-PROFILE"||e.slot==="right-item")return"left";e=e.parentElement||e.getRootNode().host}return"right"}toggleItemMenu(){const e=this.el.getAttribute("slot");if((e.toLowerCase()==="mobile-menu-top"||e.toLowerCase()==="second__layer")&&this.openSubLayerMenu(),!this.internalHref&&e.toLowerCase()!=="mobile-menu-top"&&e.toLowerCase()!=="second__layer"){const t=this.getItemMenu();if(this.hasChildNavItems){const n=this.getNavBarItem();this.handleClassList(t,"toggle","open"),this.handleClassList(n,"toggle","open")}}}handleNestedLayerMenu(e){if(this.isMenuItem&&this.hasChildNavItems&&!this.isSidebarMenuItem){const t=this.getItemMenu(),n=this.getItemMenuPosition();e.type.toUpperCase()==="MOUSEENTER"&&(this.handleClassList(t,"add","open"),n==="left"?this.handleClassList(t,"add","left"):n==="right"&&this.handleClassList(t,"add","right")),e.type.toUpperCase()==="MOUSELEAVE"&&(this.handleClassList(t,"remove","open"),n==="left"?this.handleClassList(t,"remove","left"):n==="right"&&this.handleClassList(t,"remove","right"))}}render(){return i("div",{key:"22a0f463cc849016554005daa23b1539eadd09a4",class:"container",onMouseLeave:e=>this.handleNestedLayerMenu(e),onMouseEnter:e=>this.handleNestedLayerMenu(e)},i("div",{key:"f05033799c16034334bda55dc1bdc3fa412314b4",class:"sub__layer-back-button"},i("div",{key:"4401b63b8e21ddb41df375b73426f5cf7e6b85b6",class:"back__button-wrapper",onClick:()=>this.returnToFirstLayer()},i("ifx-icon",{key:"02068d0347469a01a1010d9e4d343fba078f3fef",icon:"arrow-left-16"}),i("span",{key:"d0809e258ddd3b910ed46e636a45cbd6c08b4b60"},"Back"))),i("a",{key:"355783237f7eb012b94856602a9842672a3aeb83",href:this.internalHref,target:this.target,onClick:()=>this.toggleItemMenu(),class:`navbar__item ${this.isSidebarMenuItem?"sidebarMenuItem":""} ${this.showLabel?"":"removeLabel"} ${this.isMenuItem?"menuItem":""} ${this.hasChildNavItems?"isParent":""}`},i("div",{key:"7e8343e1645098601b9a61a1d171b2b2d1c72071",class:"inner__content-wrapper"},i("div",{key:"b0e6a753edacf66fadc9107b599af76b7af54e92",class:`navbar__container-right-content-navigation-item-icon-wrapper ${this.icon?"":"removeWrapper"}`},this.icon&&i("ifx-icon",{icon:this.icon})),this.itemPosition==="left"&&this.hasChildNavItems&&this.isMenuItem&&i("div",{class:"menuItemLeftIconWrapper"},i("ifx-icon",{icon:"chevron-left-12"})),i("span",{key:"773af14471034ef6d3d4ac2f539bb9c36b3203c3",class:"label__wrapper"},i("slot",{key:"8baf0e3dda7afd126084e1fe8718daeb3ac7a460"}))),i("div",{key:"ef2ed682f70b4d3454a60c68231aafcff0b7da64",class:`navItemIconWrapper ${this.hasChildNavItems&&!this.isMenuItem&&!this.isSidebarMenuItem?"":"hide"}`},i("ifx-icon",{key:"ea6392cdc30565b0659a318283392c44136eb611",icon:"chevron-down-12"})),i("div",{class:`menuItemRightIconWrapper ${this.itemPosition==="right"&&this.hasChildNavItems&&this.isMenuItem||this.isSidebarMenuItem&&this.hasChildNavItems?"":"hide"}`},i("ifx-icon",{icon:"chevron-right-12"}))),this.hasChildNavItems&&!this.isSidebarMenuItem&&i("ul",{class:"navbar-menu"}," ",i("slot",{name:"first__layer"})," "),this.isSidebarMenuItem&&i("ul",{class:"sub__layer-menu"}," ",i("slot",{name:"second__layer"})," "))}get el(){return h(this)}};c.style=m;export{c as ifx_navbar_item};
