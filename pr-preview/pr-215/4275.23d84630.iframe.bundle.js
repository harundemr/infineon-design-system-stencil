"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[4275],{"./dist/esm/ifx-chip.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_chip:()=>Chip});var _index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-fbf4ddae.js");const Chip=class{constructor(hostRef){(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.addActiveMenuItem=e=>{const target=this.getClickedElement(e.composedPath()[0]),selectedAnchor=e.target.shadowRoot.querySelector("a"),isCheckable=e.target.checkable;this.uncheckCheckboxes(selectedAnchor),target?isCheckable?this.toggleCheckbox(target):(this.removeActiveMenuItem(),this.handleClassList(target,"add","active"),this.toggleDropdownMenu()):!1===selectedAnchor.querySelector("ifx-checkbox").checked&&this.returnToDefaultLabel()},this.placeholder=void 0,this.isEmpty=!0}handleOutsideClick(event){event.composedPath().includes(this.el)||this.closeDropdownMenu()}getDropdownMenu(){let dropdownMenuComponent=this.el.querySelector("ifx-dropdown-menu");if(dropdownMenuComponent){dropdownMenuComponent=this.el.querySelector("ifx-dropdown-menu").shadowRoot;return dropdownMenuComponent.querySelector(".dropdown-menu")}}getDropdownWrapper(){return this.el.shadowRoot.querySelector(".dropdown")}getDropdownItems(){return this.el.querySelectorAll("ifx-dropdown-item")}handleClassList(el,type,className){null==el||el.classList[type](className)}toggleDropdownMenu(){const textField=this.getTextField(),textFieldElement=textField.querySelector(".wrapper-close-button"),chipWrapper=textField.closest(".wrapper"),dropdownMenu=this.getDropdownMenu(),dropdownWrapper=this.getDropdownWrapper();this.handleClassList(dropdownMenu,"toggle","show"),this.handleClassList(dropdownWrapper,"toggle","show"),this.handleClassList(textFieldElement,"toggle","show"),this.handleClassList(chipWrapper,"toggle","open")}closeDropdownMenu(){const dropdownMenu=this.getDropdownMenu(),dropdownWrapper=this.getDropdownWrapper(),textField=this.getTextField(),chipWrapper=textField.closest(".wrapper"),textFieldElement=textField.querySelector(".wrapper-close-button");this.handleClassList(dropdownMenu,"remove","show"),this.handleClassList(dropdownWrapper,"remove","show"),this.handleClassList(textFieldElement,"remove","show"),this.handleClassList(chipWrapper,"remove","open")}removeActiveMenuItem(){const dropdownMenuItems=this.getDropdownItems();for(let i=0;i<dropdownMenuItems.length;i++)this.handleClassList(dropdownMenuItems[i].shadowRoot.querySelector("a"),"remove","active")}uncheckCheckboxes(target){const dropdownMenuItems=this.getDropdownItems();for(let i=0;i<dropdownMenuItems.length;i++)dropdownMenuItems[i].shadowRoot.querySelector("a")!==target&&(dropdownMenuItems[i].shadowRoot.querySelector("a").querySelector("ifx-checkbox").checked=!1)}returnToDefaultLabel(){this.getTextField().querySelector(".wrapper-label").innerHTML=this.placeholder}toggleCheckbox(target){this.uncheckCheckboxes(target),target.querySelector("ifx-checkbox").checked=!target.querySelector("ifx-checkbox").checked,!1===target.querySelector("ifx-checkbox").checked&&this.returnToDefaultLabel()}getClickedElement(target){return(target instanceof SVGElement||!target.className.includes("dropdown-menu")&&!target.className.includes("form-check-input"))&&target.closest(".dropdown-item")}getTextField(){return this.el.shadowRoot.querySelector(".wrapper")}addItemValueToTextField(value){var _a;const labelWrapper=this.getTextField().querySelector(".wrapper-label");value.target.setAttribute("target",null===(_a=value.target)||void 0===_a?void 0:_a.index),labelWrapper.innerHTML=value.value}addEventListeners(){const dropdownMenu=this.getDropdownMenu();document.addEventListener("click",this.handleOutsideClick.bind(this)),dropdownMenu.addEventListener("click",this.addActiveMenuItem),this.el.querySelector("ifx-dropdown-menu").addEventListener("selectValues",(event=>{this.addItemValueToTextField(event.detail)}))}componentDidRender(){let textInput=this.getTextField();textInput&&(textInput.addEventListener("click",this.toggleDropdownMenu.bind(this)),this.addEventListeners())}render(){return(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"dropdown container"},(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"wrapper"},(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"wrapper-label"},this.placeholder),(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"wrapper-close-button"},(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:"chevrondown12"}))),(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"menu"}))}get el(){return(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Chip.style='*{font-family:"Source Sans Pro"}.container{position:relative}.container .wrapper{display:inline-flex;flex-direction:row;align-items:center;padding:8px 16px;gap:8px;background:#FFFFFF;border:1px solid #BFBBBB;border-radius:100px}.container .wrapper:hover{cursor:pointer;border:1px solid #575352}.container .wrapper:active{border:1px solid #0A8276}.container .wrapper.open{border:1px solid #0A8276}.container .wrapper .wrapper-label{font-style:normal;font-weight:400;font-size:14px;line-height:20px;display:flex;align-items:center;color:#1D1D1D;flex:none;order:0;flex-grow:0}.container .wrapper .wrapper-close-button ifx-icon{transition:0.3s}.container .wrapper .wrapper-close-button.show ifx-icon{transition:0.3s;transform:rotate(180deg)}.container .wrapper .wrapper-close-button ifx-icon{width:12px;height:12px;flex:none;order:1;flex-grow:0}'}}]);