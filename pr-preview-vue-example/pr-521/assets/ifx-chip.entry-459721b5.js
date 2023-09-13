import{r as i,h as n,g as l}from"./index-1a047ecb.js";const d='*{font-family:"Source Sans 3"}.container{position:relative}.container .wrapper{display:inline-flex;flex-direction:row;align-items:center;padding:8px 16px;gap:8px;background:#FFFFFF;border:1px solid #BFBBBB;border-radius:100px}.container .wrapper:hover{cursor:pointer;border:1px solid #575352}.container .wrapper:active{border:1px solid #0A8276}.container .wrapper.open{border:1px solid #0A8276}.container .wrapper .wrapper-label{font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:0;flex-grow:0}.container .wrapper .wrapper-close-button ifx-icon{transition:0.3s}.container .wrapper .wrapper-close-button.show ifx-icon{transition:0.3s;transform:rotate(180deg)}.container .wrapper .wrapper-close-button ifx-icon{width:12px;height:12px;flex:none;order:1;flex-grow:0}',c=class{constructor(e){i(this,e),this.addActiveMenuItem=t=>{const o=this.getClickedElement(t.composedPath()[0]),r=t.target.shadowRoot.querySelector("a"),s=t.target.checkable;if(this.uncheckCheckboxes(r),!o){r.querySelector("ifx-checkbox").checked===!1&&this.returnToDefaultLabel();return}if(s){this.toggleCheckbox(o);return}this.removeActiveMenuItem(),this.handleClassList(o,"add","active"),this.toggleDropdownMenu()},this.placeholder=void 0,this.isEmpty=!0}handleOutsideClick(e){e.composedPath().includes(this.el)||this.closeDropdownMenu()}getDropdownMenu(){let e=this.el.querySelector("ifx-dropdown-menu");if(e)return e=this.el.querySelector("ifx-dropdown-menu").shadowRoot,e.querySelector(".dropdown-menu")}getDropdownWrapper(){return this.el.shadowRoot.querySelector(".dropdown")}getDropdownItems(){return this.el.querySelectorAll("ifx-dropdown-item")}handleClassList(e,t,o){e==null||e.classList[t](o)}toggleDropdownMenu(){const e=this.getTextField(),t=e.querySelector(".wrapper-close-button"),o=e.closest(".wrapper"),r=this.getDropdownMenu(),s=this.getDropdownWrapper();this.handleClassList(r,"toggle","show"),this.handleClassList(s,"toggle","show"),this.handleClassList(t,"toggle","show"),this.handleClassList(o,"toggle","open")}closeDropdownMenu(){const e=this.getDropdownMenu(),t=this.getDropdownWrapper(),o=this.getTextField(),r=o.closest(".wrapper"),s=o.querySelector(".wrapper-close-button");this.handleClassList(e,"remove","show"),this.handleClassList(t,"remove","show"),this.handleClassList(s,"remove","show"),this.handleClassList(r,"remove","open")}removeActiveMenuItem(){const e=this.getDropdownItems();for(let t=0;t<e.length;t++)this.handleClassList(e[t].shadowRoot.querySelector("a"),"remove","active")}uncheckCheckboxes(e){const t=this.getDropdownItems();for(let o=0;o<t.length;o++)t[o].shadowRoot.querySelector("a")!==e&&(t[o].shadowRoot.querySelector("a").querySelector("ifx-checkbox").checked=!1)}returnToDefaultLabel(){const t=this.getTextField().querySelector(".wrapper-label");t.innerHTML=this.placeholder}toggleCheckbox(e){this.uncheckCheckboxes(e),e.querySelector("ifx-checkbox").checked=!e.querySelector("ifx-checkbox").checked,e.querySelector("ifx-checkbox").checked===!1&&this.returnToDefaultLabel()}getClickedElement(e){return e instanceof SVGElement?e.closest(".dropdown-item"):e.className.includes("dropdown-menu")||e.className.includes("form-check-input")?!1:e.closest(".dropdown-item")}getTextField(){return this.el.shadowRoot.querySelector(".wrapper")}addItemValueToTextField(e){var t;const r=this.getTextField().querySelector(".wrapper-label");e.target.setAttribute("target",(t=e.target)===null||t===void 0?void 0:t.index),r.innerHTML=e.value}addEventListeners(){const e=this.getDropdownMenu();document.addEventListener("click",this.handleOutsideClick.bind(this)),e.addEventListener("click",this.addActiveMenuItem),this.el.querySelector("ifx-dropdown-menu").addEventListener("selectValues",o=>{this.addItemValueToTextField(o.detail)})}componentDidRender(){let e=this.getTextField();e&&(e.addEventListener("click",this.toggleDropdownMenu.bind(this)),this.addEventListeners())}render(){return n("div",{class:"dropdown container"},n("div",{class:"wrapper"},n("div",{class:"wrapper-label"},this.placeholder),n("div",{class:"wrapper-close-button"},n("ifx-icon",{icon:"chevrondown12"}))),n("slot",{name:"menu"}))}get el(){return l(this)}};c.style=d;export{c as ifx_chip};
