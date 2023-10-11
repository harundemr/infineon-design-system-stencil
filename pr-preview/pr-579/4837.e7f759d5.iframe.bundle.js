"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[4837],{"./dist/esm/ifx-dropdown.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_dropdown:()=>Dropdown});var _index_f31c492a_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-f31c492a.js"),_popper_1604923e_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/popper-1604923e.js");const Dropdown=class{constructor(hostRef){(0,_index_f31c492a_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxOpen=(0,_index_f31c492a_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxOpen",7),this.ifxClose=(0,_index_f31c492a_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxClose",7),this.ifxDropdown=(0,_index_f31c492a_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxDropdown",7),this.placement="bottom-start",this.defaultOpen=!1,this.internalIsOpen=!1,this.noAppendToBody=!1,this.disabled=void 0,this.noCloseOnOutsideClick=!1,this.noCloseOnMenuClick=!1,this.trigger=void 0,this.menu=void 0}componentWillLoad(){this.updateSlotContent(),this.watchHandlerIsOpen(this.defaultOpen,this.internalIsOpen)}watchHandlerIsOpen(newValue,oldValue){newValue!==oldValue&&newValue!==this.internalIsOpen&&(newValue?this.openDropdown():this.closeDropdown())}watchHandlerDisabled(newValue){this.trigger&&(this.trigger.disabled=newValue)}watchHandlerSlot(){this.updateSlotContent()}updateSlotContent(){this.trigger=this.el.querySelector("ifx-dropdown-trigger-button, ifx-dropdown-trigger"),this.trigger&&(this.trigger.disabled=this.disabled,this.trigger.removeEventListener("click",this.triggerClickHandler.bind(this)),this.trigger.addEventListener("click",this.triggerClickHandler.bind(this))),this.noAppendToBody?this.menu=this.el.querySelector("ifx-dropdown-menu"):(this.menu&&this.menu.remove(),this.menu=this.el.querySelector("ifx-dropdown-menu"),document.body.append(this.menu)),this.menu.removeEventListener("click",this.menuClickHandler.bind(this)),this.menu.addEventListener("click",this.menuClickHandler.bind(this))}menuClickHandler(){this.noCloseOnMenuClick||this.closeDropdown()}triggerClickHandler(){this.internalIsOpen?this.closeDropdown():this.openDropdown()}disconnectedCallback(){this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=null),this.menu&&this.menu.remove()}async isOpen(){return this.internalIsOpen}async closeDropdown(){this.internalIsOpen&&(this.internalIsOpen=!1,this.trigger.isOpen=!1,this.menu.isOpen=!1,this.ifxClose.emit()),this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=null)}async openDropdown(){this.internalIsOpen||this.disabled||(this.internalIsOpen=!0,this.trigger.isOpen=!0,this.menu.isOpen=!0,this.popperInstance=(0,_popper_1604923e_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.el,this.menu,{placement:this.placement}),this.ifxOpen.emit())}handleOutsideClick(event){const target=event.target;this.noCloseOnOutsideClick||this.el.contains(target)||this.menu.contains(target)||this.closeDropdown()}render(){return(0,_index_f31c492a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"dropdown"},(0,_index_f31c492a_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}get el(){return(0,_index_f31c492a_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{defaultOpen:["watchHandlerIsOpen"],disabled:["watchHandlerDisabled"]}}};Dropdown.style=":host{display:inline-block}"}}]);