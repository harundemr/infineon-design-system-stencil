"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[5794],{5794:function(e,t,n){n.r(t),n.d(t,{ifx_breadcrumb_item:function(){return o}});var r=n(5671),i=n(3144),a=n(1091),o=function(){function e(t){(0,r.Z)(this,e),(0,a.r)(this,t),this.isLastItem=!1}return(0,i.Z)(e,[{key:"handleOutsideClick",value:function(e){e.composedPath().includes(this.el)||this.closeDropdownMenu()}},{key:"getDropdownMenu",value:function(){return this.el.shadowRoot.querySelector(".dropdown-menu")}},{key:"menuWrapperEventReEmitter",value:function(e){this.emittedElement=e.detail}},{key:"getMenuIconWrapper",value:function(){return this.emittedElement}},{key:"handleClassList",value:function(e,t,n){e.classList[t](n)}},{key:"closeDropdownMenu",value:function(){var e=this.getDropdownMenu(),t=this.getMenuIconWrapper();this.handleClassList(e,"remove","open"),this.handleClassList(t,"remove","show")}},{key:"toggleDropdownMenu",value:function(){var e=this.getDropdownMenu(),t=this.getMenuIconWrapper();this.handleClassList(e,"toggle","open"),this.handleClassList(t,"toggle","show")}},{key:"handleLastItem",value:function(){var e=this.el.closest("ifx-breadcrumb").querySelectorAll("ifx-breadcrumb-item");this.el===e[e.length-1]?this.isLastItem=!0:this.isLastItem=!1}},{key:"componentWillLoad",value:function(){this.handleLastItem()}},{key:"componentDidUpdate",value:function(){this.handleLastItem()}},{key:"componentDidLoad",value:function(){var e=this.el.querySelector("ifx-dropdown-menu");if(e)e.isOpen=!0;else{var t=this.getMenuIconWrapper();this.handleClassList(t,"toggle","hide")}}},{key:"render",value:function(){var e=this;return(0,a.h)("li",{class:"breadcrumb-parent","aria-current":"".concat(this.isLastItem?"page":""),onClick:function(){return e.toggleDropdownMenu()}},(0,a.h)("li",{class:"breadcrumb-wrapper"},(0,a.h)("slot",{name:"label"}),(0,a.h)("div",{class:"dropdown-menu"},(0,a.h)("slot",null))),!this.isLastItem&&(0,a.h)("span",{class:"breadcrumb-divider"},"/"))}},{key:"el",get:function(){return(0,a.g)(this)}}]),e}();o.style='*{font-family:"Source Sans 3"}.breadcrumb-parent{display:flex;flex-direction:row;align-items:center;padding:0px;gap:12px}.breadcrumb-parent:hover{cursor:pointer}.breadcrumb-parent .breadcrumb-wrapper{display:flex;flex-direction:row;align-items:center;padding:0px;gap:8px;position:relative}.breadcrumb-parent .breadcrumb-wrapper .dropdown-menu{display:none;position:absolute;top:20px}.breadcrumb-parent .breadcrumb-wrapper .dropdown-menu.open{display:block}.breadcrumb-parent .breadcrumb-wrapper a{text-decoration:none;color:#1D1D1D;font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;display:flex;align-items:center;color:#1D1D1D;flex-direction:column;justify-content:center;padding:0px;border-bottom:1px solid #1D1D1D}.breadcrumb-parent .breadcrumb-divider{width:10px;height:16px;color:#BFBBBB;line-height:13px;font-size:1.25rem;margin-right:12px}'}}]);
//# sourceMappingURL=5794.c264e0cd.chunk.js.map