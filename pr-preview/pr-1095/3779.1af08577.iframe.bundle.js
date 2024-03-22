"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[3779],{"./dist/esm/ifx-dropdown-menu.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_dropdown_menu:()=>DropdownMenu});var _index_618cb11f_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-618cb11f.js");const DropdownMenu=class{constructor(hostRef){(0,_index_618cb11f_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.menuSize=(0,_index_618cb11f_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"menuSize",7),this.ifxDropdownMenuItem=(0,_index_618cb11f_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxDropdownMenuItem",7),this.isOpen=!1,this.size="l",this.hideTopPadding=!1,this.filteredItems=[]}handleMenuFilter(event){const searchValue=event.detail;this.filterDropdownItems(searchValue)}handleDropdownItemValueEmission(event){this.ifxDropdownMenuItem.emit(event.detail)}filterDropdownItems(searchValue){const allItems=Array.from(this.el.querySelectorAll("ifx-dropdown-item"));let dropdownItem,txtValue,query=searchValue.toUpperCase();for(let i=0;i<allItems.length;i++)dropdownItem=allItems[i],txtValue=dropdownItem.textContent||dropdownItem.innerText,txtValue.toUpperCase().indexOf(query)>-1?dropdownItem.setAttribute("hide",!1):dropdownItem.setAttribute("hide",!0)}componentWillUpdate(){this.menuSize.emit(this.size)}componentWillLoad(){this.filteredItems=Array.from(this.el.querySelectorAll("ifx-dropdown-item"));const searchField=this.el.querySelector("ifx-search-field"),dropdownHeader=this.el.querySelector("ifx-dropdown-header");this.hideTopPadding=!(!searchField&&!dropdownHeader)}render(){return(0,_index_618cb11f_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"96f070d08c4c6478a76f7a47a49ceaeacd860474",class:`dropdown-menu \n      ${this.isOpen?"show":""} \n      ${this.hideTopPadding?"hideTopPadding":""}\n      ${"s"===this.size?"small":""}`},(0,_index_618cb11f_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"eed7f936e20f3500469ac14d2214c780d5bf0d4d"}))}get el(){return(0,_index_618cb11f_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};DropdownMenu.style=":host{position:relative;z-index:1000}.dropdown-menu{display:none;visibility:hidden;flex-direction:column;width:224px;max-height:289px;min-width:224px;overflow-y:auto;background:#FFFFFF;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;padding:8px 0px;font-family:var(--ifx-font-family)}.dropdown-menu.small{max-height:266px;max-width:186px;overflow-y:auto}.dropdown-menu.hideTopPadding{padding-top:0px}.dropdown-menu.show{display:flex;visibility:visible}"}}]);