"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[7451],{7451:(e,t,r)=>{r.r(t),r.d(t,{ifx_breadcrumb_item:()=>n});var a=r(6205);const n=class{constructor(e){(0,a.r)(this,e),this.isLastItem=!1}handleOutsideClick(e){e.composedPath().includes(this.el)||this.closeDropdownMenu()}getDropdownMenu(){return this.el.shadowRoot.querySelector(".dropdown-menu")}menuWrapperEventReEmitter(e){this.emittedElement=e.detail}getMenuIconWrapper(){return this.emittedElement}handleClassList(e,t,r){e.classList[t](r)}closeDropdownMenu(){const e=this.getDropdownMenu(),t=this.getMenuIconWrapper();this.handleClassList(e,"remove","open"),this.handleClassList(t,"remove","show")}toggleDropdownMenu(){const e=this.getDropdownMenu(),t=this.getMenuIconWrapper();this.handleClassList(e,"toggle","open"),this.handleClassList(t,"toggle","show")}handleLastItem(){const e=this.el.closest("ifx-breadcrumb").querySelectorAll("ifx-breadcrumb-item");this.el===e[e.length-1]?this.isLastItem=!0:this.isLastItem=!1}componentWillLoad(){this.handleLastItem()}componentDidUpdate(){this.handleLastItem()}componentDidLoad(){const e=this.el.querySelector("ifx-dropdown-menu");if(e)e.isOpen=!0;else{const e=this.getMenuIconWrapper();this.handleClassList(e,"toggle","hide")}}render(){return(0,a.h)("li",{key:"2ea597469fc69b442bc2467814ae4033a97fac75",class:"breadcrumb-parent","aria-current":"".concat(this.isLastItem?"page":""),onClick:()=>this.toggleDropdownMenu()},(0,a.h)("li",{key:"24ddee6b25ea7d32668cc5d09a3e27b61236f834",class:"breadcrumb-wrapper"},(0,a.h)("slot",{key:"cc58eac4b526be9bcf006de50f4517da942733e3",name:"label"}),(0,a.h)("div",{key:"829615059e607d599c1f30b2334f4a998803dc30",class:"dropdown-menu"},(0,a.h)("slot",{key:"f974f32c5452c8eaaef978891b176e6078c7296d"}))),!this.isLastItem&&(0,a.h)("span",{class:"breadcrumb-divider"},"/"))}get el(){return(0,a.g)(this)}};n.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.breadcrumb-parent{display:flex;flex-direction:row;align-items:center;padding:0px;gap:12px}.breadcrumb-parent:hover{cursor:pointer}.breadcrumb-parent .breadcrumb-wrapper{display:flex;flex-direction:row;align-items:center;padding:0px;gap:8px;position:relative}.breadcrumb-parent .breadcrumb-wrapper .dropdown-menu{display:none;position:absolute;top:20px}.breadcrumb-parent .breadcrumb-wrapper .dropdown-menu.open{display:block}.breadcrumb-parent .breadcrumb-wrapper a{text-decoration:none;color:#1D1D1D;font-family:var(--ifx-font-family);font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;display:flex;align-items:center;color:#1D1D1D;flex-direction:column;justify-content:center;padding:0px;border-bottom:1px solid #1D1D1D}.breadcrumb-parent .breadcrumb-divider{width:10px;height:16px;color:#EEEDED;line-height:13px;font-size:1.25rem;margin-right:12px}'}}]);
//# sourceMappingURL=7451.6e529a02.chunk.js.map