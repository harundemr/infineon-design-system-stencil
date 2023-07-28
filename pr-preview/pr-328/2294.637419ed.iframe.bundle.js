/*! For license information please see 2294.637419ed.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[2294],{"./dist/esm/_commonjsHelpers-e9b9b14e.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getDefaultExportFromCjs(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}__webpack_require__.d(__webpack_exports__,{c:()=>createCommonjsModule,g:()=>getDefaultExportFromCjs})},"./dist/esm/ifx-link_2.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_link:()=>Link,ifx_search_input:()=>SearchInput});var _index_ae19f8dd_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-ae19f8dd.js"),_index_3c58b0c1_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/index-3c58b0c1.js");const Link=class{constructor(hostRef){(0,_index_ae19f8dd_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.href=void 0,this.target="_self",this.color=void 0,this.bold=!0,this.underline=!0}render(){return(0,_index_ae19f8dd_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{href:this.href,target:this.target,class:this.linkClassNames()},(0,_index_ae19f8dd_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}linkClassNames(){return(0,_index_3c58b0c1_js__WEBPACK_IMPORTED_MODULE_1__.c)("link",this.color,this.bold&&"bold",this.underline&&"underline")}};Link.style='*{font-family:"Source Sans Pro"}.link{font-weight:400;font-size:16px;text-decoration:none;color:#1d1d1d}.link.bold{font-weight:600}.link.primary{color:#378375}.link.secondary{color:#ab377a}.link.warning{color:#f07f3c}.link.danger{color:#cd002f}.link.success{color:#aec067}.link.underline{text-decoration:underline}';const SearchInput=class{constructor(hostRef){(0,_index_ae19f8dd_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxInput=(0,_index_ae19f8dd_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxInput",7),this.handleInput=()=>{const query=this.inputElement.value;this.value=query,this.ifxInput.emit(this.value)},this.handleDelete=()=>{this.inputElement.value="",this.ifxInput.emit(null)},this.value="",this.width="100%",this.insideDropdown=!1,this.showDeleteIcon=!1,this.disabled=!1,this.borderColor=void 0,this.size=void 0}valueWatcher(newValue){newValue!==this.inputElement.value&&(this.inputElement.value=newValue)}render(){return(0,_index_ae19f8dd_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:this.getClassNames()},(0,_index_ae19f8dd_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:this.getWrapperClassNames()},(0,_index_ae19f8dd_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"search-icon"}),(0,_index_ae19f8dd_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{ref:el=>this.inputElement=el,type:"text",onInput:()=>this.handleInput(),placeholder:"Search...",disabled:this.disabled,value:this.value}),this.showDeleteIcon?(0,_index_ae19f8dd_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:"delete-x-16",class:"delete-icon",onClick:this.handleDelete}):null))}getBorderClasses(){return`search-input__wrapper-outline-${this.borderColor}`}getSizeClass(){return"s"==`${this.size}`?"search-input__wrapper-s":""}getClassNames(){return(0,_index_3c58b0c1_js__WEBPACK_IMPORTED_MODULE_1__.c)("search-input",{"inside-dropdown":this.insideDropdown})}getWrapperClassNames(){return(0,_index_3c58b0c1_js__WEBPACK_IMPORTED_MODULE_1__.c)(`search-input__wrapper ${this.getBorderClasses()}`,`search-input__wrapper ${this.getSizeClass()}`,this.disabled?"disabled":"")}get el(){return(0,_index_ae19f8dd_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{value:["valueWatcher"]}}};SearchInput.style='.search-input{background:#FFFFFF;flex-direction:row;align-items:center;flex:1;width:100%}.search-input.inside-dropdown{max-width:192px}.search-input .search-input__wrapper{height:40px;box-sizing:border-box;display:flex;align-items:center;border:1px solid #8D8786;border-radius:1px;padding:12px 16px;gap:12px;flex:none;order:0;align-self:stretch;flex-grow:0;position:relative;width:100%}.search-input .search-input__wrapper.search-input__wrapper-s{height:40px}.search-input .search-input__wrapper.search-input__wrapper-outline-light{border:1px solid #8D8786}.search-input .search-input__wrapper.search-input__wrapper-outline-dark{border:1px solid #3C3A39}.search-input .search-input__wrapper.search-input__wrapper-outline-green{border:1px solid #0A8276}.search-input .search-input__wrapper ::slotted(.search-icon){left:12px}.search-input .search-input__wrapper .delete-icon{right:12px}.search-input .search-input__wrapper input[type=text]{font-family:"Source Sans Pro";font-style:normal;font-weight:400;font-size:16px;color:#8D8786;border:none;width:100%}.search-input .search-input__wrapper input[type=text]:focus{outline:none}.search-input .search-input__wrapper input[type=text]:disabled{background-color:#EEEDED}.search-input .search-input__wrapper:has(input[disabled]){background-color:#EEEDED}'},"./dist/esm/index-3c58b0c1.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>classnames});var classnames=(0,__webpack_require__("./dist/esm/_commonjsHelpers-e9b9b14e.js").c)((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))}}]);