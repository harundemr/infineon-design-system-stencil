"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[2123],{"./dist/esm/ifx-dropdown-item.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_dropdown_item:()=>DropdownItem});var _index_2f901f5e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-2f901f5e.js");const DropdownItem=class{constructor(hostRef){(0,_index_2f901f5e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.itemValues=(0,_index_2f901f5e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"itemValues",3),this.label=void 0,this.size=void 0,this.disabled=void 0,this.icon=void 0,this.checkable=!1,this.value="",this.checkboxColor=""}handleItemChange(event){if("form-check-input"!==event.currentTarget.className.toLowerCase()){const checkBoxValue=this.el.shadowRoot.querySelector("ifx-checkbox");checkBoxValue?"IFX-CHECKBOX"===event.target.nodeName.toUpperCase()?this.itemValues.emit({check:!checkBoxValue.checked,value:this.value,target:this.el.closest("ifx-dropdown-item")}):this.itemValues.emit({check:checkBoxValue.checked,value:this.value,target:this.el.closest("ifx-dropdown-item")}):this.itemValues.emit({value:this.value})}}componentWillRender(){if(this.el.closest("ifx-dropdown")){if(this.el.closest("ifx-dropdown").querySelector("ifx-button")){const ifxButtonColor=this.el.closest("ifx-dropdown").querySelector("ifx-button").color;this.checkboxColor=ifxButtonColor}}}render(){return(0,_index_2f901f5e_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{href:"javascript:;",onClick:this.handleItemChange.bind(this),class:`dropdown-item ${this.checkboxColor}`},this.checkable&&(0,_index_2f901f5e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-checkbox",null),this.icon&&(0,_index_2f901f5e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:this.icon}),(0,_index_2f901f5e_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{class:"form-check-label"},(0,_index_2f901f5e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))}get el(){return(0,_index_2f901f5e_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};DropdownItem.style=".dropdown-item{display:flex;align-items:center;gap:12px;width:100%;text-align:inherit;white-space:nowrap;border:0;padding:8px 16px;text-decoration:none;color:#1d1d1d}.dropdown-item.primary input[type=checkbox]{accent-color:#378375}.dropdown-item.secondary input[type=checkbox]{accent-color:#ab377a}.dropdown-item.success input[type=checkbox]{accent-color:#aec067}.dropdown-item.danger input[type=checkbox]{accent-color:#cd002f}.dropdown-item.warning input[type=checkbox]{accent-color:#f07f3c}.dropdown-item .form-check-label:hover{cursor:pointer}.dropdown-item .form-check-input{border-radius:1px}.dropdown-item:hover{font-weight:600;background-color:#ebe9e9}.dropdown-item:hover svg{color:#1d1d1d}.dropdown-item.active,.dropdown-item:active{font-weight:600;background-color:transparent;color:#378375}.dropdown-item.active svg,.dropdown-item:active svg{color:#378375;fill:none}"}}]);