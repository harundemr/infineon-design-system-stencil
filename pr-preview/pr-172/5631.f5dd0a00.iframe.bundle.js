"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[5631],{"./dist/esm/ifx-filter-input.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_filter_input:()=>DropdownFilter});var _index_6c912e7e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-6c912e7e.js");const DropdownFilter=class{constructor(hostRef){(0,_index_6c912e7e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.selectValue=(0,_index_6c912e7e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"selectValue",3),this.label=void 0,this.size=void 0,this.disabled=void 0,this.icon=!1,this.search=!1,this.filter=!1,this.options=[]}handleSelectValue(event){this.selectValue.emit(event.target.value)}componentWillRender(){const optionElements=this.el.querySelectorAll("option");for(let i=0;i<optionElements.length;i++)this.options.push(optionElements[i])}render(){return(0,_index_6c912e7e_js__WEBPACK_IMPORTED_MODULE_0__.h)("select",{class:"inf__filter-input",onChange:this.handleSelectValue.bind(this)},(0,_index_6c912e7e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null),this.options.map((item=>(0,_index_6c912e7e_js__WEBPACK_IMPORTED_MODULE_0__.h)("option",null,item.label||item.value))))}get el(){return(0,_index_6c912e7e_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};DropdownFilter.style='.inf__filter-input{width:160px;min-height:calc(1.75em + 18px);font-size:0.8125rem;margin:16px;display:block;padding:8px 16px;font-family:"Source Sans Pro";font-weight:400;line-height:1.75;color:#1d1d1d;background-color:#fff;background-clip:padding-box;border:1px solid #c5bbbd;appearance:none;border-radius:1px;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}'}}]);