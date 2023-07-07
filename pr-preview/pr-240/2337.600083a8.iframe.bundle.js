"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[2337],{"./dist/esm/ifx-dropdown.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_dropdown:()=>Dropdown});var _index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-fbf4ddae.js");const Dropdown=class{constructor(hostRef){(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.addActiveMenuItem=e=>{const target=this.getClickedElement(e.composedPath()[0]),isCheckable=e.target.checkable;target&&(isCheckable?this.toggleCheckbox(target):(this.removeActiveMenuItem(),this.handleClassList(target,"add","active"),this.toggleDropdownMenu()))},this.label=void 0,this.size=void 0,this.disabled=void 0,this.icon=!1,this.search=!1,this.filter=!1}handleOutsideClick(event){event.composedPath().includes(this.el)||this.closeDropdownMenu()}getDropdownMenu(){return this.el.querySelector("ifx-dropdown-menu").shadowRoot.querySelector(".dropdown-menu")}getDropdownWrapper(){return this.el.shadowRoot.querySelector(".dropdown")}getDropdownItems(){return this.el.querySelectorAll("ifx-dropdown-item")}handleClassList(el,type,className){el.classList[type](className)}toggleDropdownMenu(){const dropdownMenu=this.getDropdownMenu(),dropdownWrapper=this.getDropdownWrapper();this.handleClassList(dropdownMenu,"toggle","show"),this.handleClassList(dropdownWrapper,"toggle","show")}closeDropdownMenu(){const dropdownMenu=this.getDropdownMenu(),dropdownWrapper=this.getDropdownWrapper();this.handleClassList(dropdownMenu,"remove","show"),this.handleClassList(dropdownWrapper,"remove","show")}removeActiveMenuItem(){const dropdownMenuItems=this.getDropdownItems();for(let i=0;i<dropdownMenuItems.length;i++)this.handleClassList(dropdownMenuItems[i].shadowRoot.querySelector("a"),"remove","active")}toggleCheckbox(target){target.querySelector("ifx-checkbox").checked=!target.querySelector("ifx-checkbox").checked}getClickedElement(target){return(target instanceof SVGElement||!target.className.includes("dropdown-menu")&&!target.className.includes("form-check-input"))&&target.closest(".dropdown-item")}addEventListeners(){const dropdownMenu=this.getDropdownMenu();document.addEventListener("click",this.handleOutsideClick.bind(this)),dropdownMenu.addEventListener("click",this.addActiveMenuItem)}componentDidRender(){let buttonComponent=this.el.querySelector("ifx-button");if(buttonComponent){const buttonElement=buttonComponent.shadowRoot.querySelector("button");buttonElement.classList.contains("disabled")||(buttonElement.addEventListener("click",this.toggleDropdownMenu.bind(this)),this.addEventListeners())}}render(){return(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"dropdown"},(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"button"}),(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}get el(){return(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Dropdown.style=".dropdown{display:inline-flex;flex-direction:column;position:relative}.dropdown .btn{min-width:200px}.dropdown .dropdown-toggle::after{content:\"\";display:inline-block;border:none;vertical-align:-2px;margin-left:10px;background-position:center;background-repeat:no-repeat;transition:transform 0.2s ease-in-out;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FFF' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M4.251 181.1C7.392 177.7 11.69 175.1 16 175.1c3.891 0 7.781 1.406 10.86 4.25l197.1 181.1l197.1-181.1c6.5-6 16.64-5.625 22.61 .9062c6 6.5 5.594 16.59-.8906 22.59l-208 192c-6.156 5.688-15.56 5.688-21.72 0l-208-192C-1.343 197.7-1.749 187.6 4.251 181.1z'/%3E%3C/svg%3E\")}.dropdown.show .dropdown-toggle::after{transform:rotate(-180deg);background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FFF' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M4.251 181.1C7.392 177.7 11.69 175.1 16 175.1c3.891 0 7.781 1.406 10.86 4.25l197.1 181.1l197.1-181.1c6.5-6 16.64-5.625 22.61 .9062c6 6.5 5.594 16.59-.8906 22.59l-208 192c-6.156 5.688-15.56 5.688-21.72 0l-208-192C-1.343 197.7-1.749 187.6 4.251 181.1z'/%3E%3C/svg%3E\")}.dropdown .btn-sm+.dropdown-menu{transform:translate3d(0px, 56.75px, 0px) !important}.dropdown .btn-lg+.dropdown-menu{transform:translate3d(0px, 72.5px, 0px) !important}.show>.btn-secondary.dropdown-toggle:focus{box-shadow:none}.svg-wrapper{display:inline-block}"}}]);