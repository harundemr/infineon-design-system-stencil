/*! For license information please see 1354.74e90807.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[1354],{"./dist/esm/ifx-search-field.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_search_field:()=>SearchField});var _index_618cb11f_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-618cb11f.js"),_index_72ac5051_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/index-72ac5051.js");const SearchField=class{constructor(hostRef){(0,_index_618cb11f_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxInput=(0,_index_618cb11f_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxInput",7),this.handleInput=()=>{const query=this.inputElement.value;this.value=query,this.ifxInput.emit(this.value)},this.handleDelete=()=>{this.inputElement.value="",this.value="",this.ifxInput.emit(null)},this.value="",this.insideDropdown=!1,this.showDeleteIcon=!1,this.showDeleteIconInternalState=!1,this.disabled=!1,this.size="l",this.isFocused=!1}handleOutsideClick(event){event.composedPath().includes(this.inputElement)||(this.isFocused=!1)}valueWatcher(newValue){newValue!==this.inputElement.value&&(this.inputElement.value=newValue)}focusInput(){this.inputElement.focus(),this.isFocused=!0}componentWillUpdate(){""!==this.value?this.showDeleteIconInternalState=!0:this.showDeleteIconInternalState=!1}render(){return(0,_index_618cb11f_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"67246bc388552e0db6bdce5688b3c7d30f9d30aa","aria-label":"a search field for user input","aria-disabled":this.disabled,"aria-value":this.value,class:"search-field"},(0,_index_618cb11f_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"b91f41595479facbe0af4f8168173c76ade82d33",class:this.getWrapperClassNames(),tabindex:1,onFocus:()=>this.focusInput(),onClick:()=>this.focusInput()},(0,_index_618cb11f_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"7fbec99a15d7f9b6f8c71c395ced8c3020f9da5d",icon:"search-16",class:"search-icon"}),(0,_index_618cb11f_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{key:"c9b7578c8f8f83c0f25246990fa9ff115db3a353",ref:el=>this.inputElement=el,type:"text",onInput:()=>this.handleInput(),placeholder:"Search...",disabled:this.disabled,value:this.value}),this.showDeleteIcon&&this.showDeleteIconInternalState?(0,_index_618cb11f_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:"cremove16",class:"delete-icon",onClick:this.handleDelete}):null))}getSizeClass(){return"s"==`${this.size}`?"search-field__wrapper-s":""}getWrapperClassNames(){return(0,_index_72ac5051_js__WEBPACK_IMPORTED_MODULE_1__.c)("search-field__wrapper",`search-field__wrapper ${this.getSizeClass()}`,""+(this.isFocused?"focused":""))}static get watchers(){return{value:["valueWatcher"]}}};SearchField.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.search-field{box-sizing:border-box;background-color:#FFFFFF;width:100%;font-family:var(--ifx-font-family)}.search-field .search-field__wrapper{box-sizing:border-box;height:40px;display:flex;align-items:center;border:1px solid #8D8786;border-radius:1px;padding:8px 16px;gap:12px;flex:none;order:0;align-self:stretch;flex-grow:0;position:relative;width:100%;outline:none;color:#8D8786}.search-field .search-field__wrapper.focused{border:1px solid #0A8276}.search-field .search-field__wrapper.focused ifx-icon{color:#575352}.search-field .search-field__wrapper.search-field__wrapper-s{height:36px}.search-field .search-field__wrapper:hover:not(.focused,:focus){border:1px solid #3C3A39}.search-field .search-field__wrapper:focus{outline:none;border:1px solid #0A8276}.search-field .search-field__wrapper .delete-icon{right:12px;cursor:pointer}.search-field .search-field__wrapper input[type=text]{font-style:normal;font-weight:400;font-size:16px;color:#8D8786;border:none;width:100%;outline:none;height:16px}.search-field .search-field__wrapper input[type=text]:focus{outline:none;color:#1d1d1d}.search-field .search-field__wrapper input[type=text]:disabled{background-color:#EEEDED}.search-field .search-field__wrapper:has(input[disabled]){background-color:#EEEDED}'},"./dist/esm/index-72ac5051.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>classNames});var module,classnames={exports:{}};module=classnames,function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}();const classNames=classnames.exports}}]);