"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[314],{314:function(e,t,o){o.r(t),o.d(t,{ifx_chip:function(){return s}});var n=o(5671),r=o(3144),i=o(2204),s=function(){function e(t){var o=this;(0,n.Z)(this,e),(0,i.r)(this,t),this.ifxDropdownMenu=(0,i.c)(this,"ifxDropdownMenu",7),this.addActiveMenuItem=function(e){var t=o.getClickedElement(e.composedPath()[0]),n=e.target.shadowRoot.querySelector("a");console.log("anchor",n),o.removeActiveMenuItem(),o.handleClassList(t,"add","active"),o.toggleDropdownMenu()},this.placeholder=void 0,this.selectedValue=""}return(0,r.Z)(e,[{key:"handleOutsideClick",value:function(e){e.composedPath().includes(this.el)||this.closeDropdownMenu()}},{key:"getDropdownMenu",value:function(){var e=this.el.querySelector("ifx-dropdown-menu");return e?(e=this.el.querySelector("ifx-dropdown-menu").shadowRoot).querySelector(".dropdown-menu"):null}},{key:"getDropdownWrapper",value:function(){return this.el.shadowRoot.querySelector(".dropdown")}},{key:"getDropdownItems",value:function(){return this.el.querySelectorAll("ifx-dropdown-item")}},{key:"handleClassList",value:function(e,t,o){null===e||void 0===e||e.classList[t](o)}},{key:"toggleDropdownMenu",value:function(){console.log("toggle");var e=this.getTextField(),t=e.querySelector(".wrapper-close-button"),o=e.closest(".wrapper"),n=this.getDropdownMenu(),r=this.getDropdownWrapper();this.handleClassList(n,"toggle","show"),this.handleClassList(r,"toggle","show"),this.handleClassList(t,"toggle","show"),this.handleClassList(o,"toggle","open")}},{key:"closeDropdownMenu",value:function(){var e=this.getDropdownMenu(),t=this.getDropdownWrapper(),o=this.getTextField(),n=o.closest(".wrapper"),r=o.querySelector(".wrapper-close-button");this.handleClassList(e,"remove","show"),this.handleClassList(t,"remove","show"),this.handleClassList(r,"remove","show"),this.handleClassList(n,"remove","open")}},{key:"removeActiveMenuItem",value:function(){for(var e=this.getDropdownItems(),t=0;t<e.length;t++)this.handleClassList(e[t].shadowRoot.querySelector("a"),"remove","active")}},{key:"getClickedElement",value:function(e){return(e instanceof SVGElement||!e.className.includes("dropdown-menu")&&!e.className.includes("form-check-input"))&&e.closest(".dropdown-item")}},{key:"handleDropdownItemValueEmission",value:function(e){console.log("dropdown item event"),this.selectedValue=e.detail,this.ifxDropdownMenu.emit(e.detail)}},{key:"getTextField",value:function(){return this.el.shadowRoot.querySelector(".wrapper")}},{key:"addEventListeners",value:function(){var e=this.getDropdownMenu();document.addEventListener("click",this.handleOutsideClick.bind(this)),null===e||void 0===e||e.addEventListener("click",this.addActiveMenuItem)}},{key:"connectedCallback",value:function(){this.addEventListeners()}},{key:"componentDidRender",value:function(){console.log("click");var e=this.getTextField();e&&(e.addEventListener("click",this.toggleDropdownMenu.bind(this)),this.addEventListeners())}},{key:"render",value:function(){return(0,i.h)("div",{class:"dropdown container"},(0,i.h)("div",{class:"wrapper"},(0,i.h)("div",{class:"wrapper-label"},this.selectedValue?this.selectedValue:this.placeholder),(0,i.h)("div",{class:"wrapper-close-button"},(0,i.h)("ifx-icon",{icon:"chevrondown12"}))),(0,i.h)("slot",{name:"menu"}))}},{key:"el",get:function(){return(0,i.g)(this)}}]),e}();s.style='*{font-family:"Source Sans 3"}.container{position:relative}.container .wrapper{display:inline-flex;flex-direction:row;align-items:center;padding:8px 16px;gap:8px;background:#FFFFFF;border:1px solid #BFBBBB;border-radius:100px}.container .wrapper:hover{cursor:pointer;border:1px solid #575352}.container .wrapper:active{border:1px solid #0A8276}.container .wrapper.open{border:1px solid #0A8276}.container .wrapper .wrapper-label{font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:0;flex-grow:0}.container .wrapper .wrapper-close-button ifx-icon{transition:0.3s}.container .wrapper .wrapper-close-button.show ifx-icon{transition:0.3s;transform:rotate(180deg)}.container .wrapper .wrapper-close-button ifx-icon{width:12px;height:12px;flex:none;order:1;flex-grow:0}.container .dropdown-menu{display:none}.container.show .dropdown-menu{display:block}'}}]);
//# sourceMappingURL=314.e7e26098.chunk.js.map