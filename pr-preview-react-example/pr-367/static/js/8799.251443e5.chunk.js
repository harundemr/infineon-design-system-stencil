"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[8799],{8799:function(e,t,i){i.r(t),i.d(t,{ifx_multi_select_input:function(){return c}});var n=i(4165),o=i(5861),l=i(5671),r=i(9466),s=i(3144),c=function(){function e(t){var i=this;(0,l.Z)(this,e),(0,s.r)(this,t),this.addActiveMenuItem=function(e){var t=i.getClickedElement(e.composedPath()[0]),n=e.target.checkable;t&&(n?i.toggleCheckbox(t):(i.removeActiveMenuItem(),i.handleClassList(t,"add","active"),i.toggleDropdownMenu(e)))},this.Placeholder="",this.isEmpty=!0,this.isOverflowing=!1}return(0,r.Z)(e,[{key:"handleOutsideClick",value:function(e){e.composedPath().includes(this.el)||this.closeDropdownMenu()}},{key:"handleButtonClose",value:function(e){for(var t,i,n=null===(t=e.detail)||void 0===t?void 0:t.getAttribute("target"),o=this.el.querySelectorAll("ifx-dropdown-item"),l=this.el.shadowRoot.querySelector(".dropdown").querySelectorAll("ifx-multi-select-input-item"),r=0;r<o.length;r++)o[r].index===Number(n)&&(o[r].shadowRoot.querySelector("ifx-checkbox").checked=!1);if(null===(i=e.detail)||void 0===i||i.remove(),e&&e.check)for(var s=0;s<l.length;s++){var c=l[s].getAttribute("target");Number(e.target.index)===Number(c)&&l[s].remove()}this.togglePlaceHolder(),this.toggleSlideButtons()}},{key:"togglePlaceHolder",value:function(){var e=this.getMultiSelectFieldWrapper().querySelector("ifx-multi-select-input-item");e&&this.isEmpty?this.isEmpty=!1:e||this.isEmpty||(this.isEmpty=!0)}},{key:"toggleSlideButtons",value:function(){var e=this.getMultiSelectFieldWrapper();this.isOverflown(e)?this.isOverflowing=!0:this.isOverflowing&&(this.isOverflowing=!1)}},{key:"getDropdownMenu",value:function(){var e=this.el.querySelector("ifx-dropdown-menu");if(e)return(e=this.el.querySelector("ifx-dropdown-menu").shadowRoot).querySelector(".dropdown-menu")}},{key:"getDropdownWrapper",value:function(){return this.el.shadowRoot.querySelector(".dropdown")}},{key:"getDropdownItems",value:function(){return this.el.querySelectorAll("ifx-dropdown-item")}},{key:"handleClassList",value:function(e,t,i){null===e||void 0===e||e.classList[t](i)}},{key:"toggleDropdownMenu",value:function(e){if(!e.composedPath()[0].closest("span")){var t=this.getMultiSelectFieldContainer(),i=this.getDropdownMenu(),n=this.getDropdownWrapper();this.handleClassList(i,"toggle","show"),this.handleClassList(n,"toggle","show"),this.handleClassList(t,"toggle","show")}}},{key:"closeDropdownMenu",value:function(){var e=this.getDropdownMenu(),t=this.getDropdownWrapper(),i=this.getMultiSelectFieldContainer();this.handleClassList(e,"remove","show"),this.handleClassList(t,"remove","show"),this.handleClassList(i,"remove","show")}},{key:"removeActiveMenuItem",value:function(){for(var e=this.getDropdownItems(),t=0;t<e.length;t++)this.handleClassList(e[t].shadowRoot.querySelector("a"),"remove","active")}},{key:"toggleCheckbox",value:function(e){e.querySelector("ifx-checkbox").checked=!e.querySelector("ifx-checkbox").checked}},{key:"getClickedElement",value:function(e){return(e instanceof SVGElement||!e.className.includes("dropdown-menu")&&!e.className.includes("form-check-input"))&&e.closest(".dropdown-item")}},{key:"getMultiSelectFieldWrapper",value:function(){return this.el.shadowRoot.querySelector(".multiSelectInput__content")}},{key:"getMultiSelectFieldContainer",value:function(){return this.el.shadowRoot.querySelector(".multiSelectInput__container")}},{key:"getMultiSelectFieldIconWrapper",value:function(){return this.el.shadowRoot.querySelector(".multiSelectInput__container").querySelector(".multiSelectInput__icon-wrapper")}},{key:"addSelectItemsToArray",value:function(){var e=this.getMultiSelectFieldWrapper().querySelectorAll("ifx-multi-select-input-item");return Array.from(e).reduce((function(e,t){return e+t.offsetWidth}),0)}},{key:"isOverflown",value:function(e){return e.scrollWidth>e.clientWidth}},{key:"addSelectSlider",value:function(e){var t=this.getMultiSelectFieldWrapper(),i=t.querySelectorAll("ifx-multi-select-input-item"),n=Array.from(i).reduce((function(e,t){return e+t.offsetWidth}),0);"left"===e?t.scrollLeft-=n:"right"===e&&(t.scrollLeft+=n)}},{key:"addItemValueToTextField",value:function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t){var i,o,l,r=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=this.getMultiSelectFieldWrapper(),(l=document.createElement("ifx-multi-select-input-item")).setAttribute("target",null===(i=t.target)||void 0===i?void 0:i.index),l.setAttribute("content",t.value),o.append(l),setTimeout((function(){r.toggleSlideButtons()}),20);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"addEventListeners",value:function(){var e=this,t=this.getDropdownMenu(),i=this.el.querySelector("ifx-dropdown-menu");document.addEventListener("click",this.handleOutsideClick.bind(this)),t.addEventListener("click",this.addActiveMenuItem),i.addEventListener("selectValues",(function(t){e.addItemValueToTextField(t.detail),e.handleButtonClose(t.detail)}))}},{key:"componentDidLoad",value:function(){this.getMultiSelectFieldContainer().addEventListener("click",this.toggleDropdownMenu.bind(this)),this.addEventListeners()}},{key:"render",value:function(){var e=this;return(0,s.h)("div",{class:"multiSelect dropdown"},(0,s.h)("div",{class:"multiSelectInput__container",tabindex:1},this.isOverflowing&&(0,s.h)("span",{class:"prev",onClick:function(){return e.addSelectSlider("left")}},(0,s.h)("ifx-icon",{icon:"chevron-left-16"})),this.isOverflowing&&(0,s.h)("span",{class:"next",onClick:function(){return e.addSelectSlider("right")}},(0,s.h)("ifx-icon",{icon:"chevron-right-16"})),(0,s.h)("div",{class:"multiSelectInput__wrapper"},(0,s.h)("div",{class:"multiSelectInput__content"},this.isEmpty&&(0,s.h)("span",null,this.Placeholder))),(0,s.h)("div",{class:"multiSelectInput__icon-wrapper"},(0,s.h)("ifx-icon",{icon:"chevron-down-16"}))),(0,s.h)("slot",{name:"menu"}))}},{key:"el",get:function(){return(0,s.g)(this)}}]),e}();c.style=".multiSelect.dropdown{box-sizing:border-box;width:300px;border:1px solid transparent}.multiSelect.dropdown:active{outline:none;border:1px solid #0A8276}.multiSelectInput__container{position:relative;display:flex;flex-direction:column;align-items:flex-start;padding:0px;width:100%;border:1px solid #8D8786;flex:none;order:0;align-self:stretch;flex-grow:0}.multiSelectInput__container:focus:not(.success,:active){outline:2px solid #0A8276;border:1px solid #3C3A39;border-radius:1px;outline-offset:2px}.multiSelectInput__container:hover:not(:disabled,.success){border:1px solid #3C3A39;cursor:pointer}.multiSelectInput__container.success{border:1px solid #4CA460}.multiSelectInput__container.success:focus{outline:none}.multiSelectInput__container .prev{position:absolute;top:7px;left:5px;z-index:1000;cursor:pointer}.multiSelectInput__container .prev ifx-icon svg{width:10px}.multiSelectInput__container .next{position:absolute;top:7px;right:40px;z-index:1000;cursor:pointer}.multiSelectInput__container .next ifx-icon svg{width:10px}.multiSelectInput__container .multiSelectInput__icon-wrapper:hover{cursor:pointer}.multiSelectInput__container.show .multiSelectInput__icon-wrapper ifx-icon{transition:0.3s;transform:rotate(180deg)}.multiSelectInput__container .multiSelectInput__icon-wrapper ifx-icon{position:absolute;top:12px;right:17px;transition:0.3s}.multiSelectInput__container .multiSelectInput__wrapper{position:relative;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:0px;height:40px;left:20px;width:220px;background-color:#FFFFFF;color:#1D1D1D;border-radius:1px;flex:none;flex-grow:0}.multiSelectInput__container .multiSelectInput__wrapper .multiSelectInput__content{box-sizing:border-box;display:flex;flex-direction:row;width:220px;gap:6px;font-size:0.813rem;overflow:hidden}.multiSelectInput__container .multiSelectInput__wrapper .multiSelectInput__content span{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;pointer-events:none;color:#8D8786;flex:none;order:1;flex-grow:1}.multiSelectInput__container .textInput__bottom-wrapper-error{font-style:normal;font-weight:400;font-size:0.75rem;line-height:1rem;letter-spacing:0.2px;color:#CD002F;flex:none;order:1;align-self:stretch;flex-grow:0}"}}]);
//# sourceMappingURL=8799.251443e5.chunk.js.map