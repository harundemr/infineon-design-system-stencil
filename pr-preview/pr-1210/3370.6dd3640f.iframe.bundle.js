/*! For license information please see 3370.6dd3640f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[3370],{"./dist/esm/ifx-spinner.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_spinner:()=>Spinner});var _index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-77e9cc30.js"),_index_72ac5051_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/index-72ac5051.js");const Spinner=class{constructor(hostRef){(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.size=void 0,this.variant=void 0,this.inverted=!1}render(){return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"9a975c3e6117f29b40df92081fc307d2f0edfdc8","aria-label":"spinner indicating a loading process",class:this.getClassNames()},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"12be43dd8568240240a227a1952be90f678b5bef",class:`${"brand"!==this.variant?"border":""} ${this.inverted?"inverted":""}`}),"brand"===this.variant&&(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`semiconductor ${this.inverted?"inverted":""} ${this.getSizeClass()}`},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("g",{id:"spinner/conductor"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{id:"Vector",d:"M38.75 18.75C39.4375 18.75 40 19.3125 40 20C40 20.6875 39.4409 21.25 38.75 21.25H35V26.25H38.75C39.4375 26.25 40 26.8125 40 27.5C40 28.1875 39.4409 28.75 38.75 28.75H35V30C35 32.7617 32.7617 35 30 35H28.75V38.75C28.75 39.4409 28.1875 40 27.5 40C26.8125 40 26.25 39.4409 26.25 38.75V35H21.25V38.75C21.25 39.4409 20.6875 40 20 40C19.3125 40 18.75 39.4409 18.75 38.75V35H13.75V38.75C13.75 39.4409 13.1875 40 12.5 40C11.8125 40 11.25 39.4409 11.25 38.75V35H10C7.23828 35 5 32.7617 5 30V28.75H1.25C0.559062 28.75 0 28.1875 0 27.5C0 26.8125 0.559062 26.25 1.25 26.25H5V21.25H1.25C0.559062 21.25 0 20.6875 0 20C0 19.3125 0.559062 18.75 1.25 18.75H5V13.75H1.25C0.559062 13.75 0 13.1875 0 12.5C0 11.8125 0.559062 11.25 1.25 11.25H5V10C5 7.23828 7.23828 5 10 5H11.25V1.25C11.25 0.5625 11.8125 0 12.5 0C13.1875 0 13.75 0.559063 13.75 1.25V5H18.75V1.25C18.75 0.559063 19.3091 0 20 0C20.6909 0 21.25 0.559063 21.25 1.25V5H26.25V1.25C26.25 0.559063 26.8091 0 27.5 0C28.1909 0 28.75 0.559063 28.75 1.25V5H30C32.7617 5 35 7.23828 35 10V11.25H38.75C39.4409 11.25 40 11.8091 40 12.5C40 13.1909 39.4409 13.75 38.75 13.75H35V18.75H38.75ZM32.5 10C32.5 8.62188 31.3781 7.5 30 7.5H10C8.62187 7.5 7.5 8.62188 7.5 10V30C7.5 31.3781 8.62187 32.5 10 32.5H30C31.3781 32.5 32.5 31.3781 32.5 30V10Z"})))))}getSizeClass(){return"s"==`${this.size}`?"s":""}getClassNames(){return(0,_index_72ac5051_js__WEBPACK_IMPORTED_MODULE_1__.c)("spinner",this.size&&`spinner ${this.getSizeClass()}`)}};Spinner.style=":host{display:inline-block}.spinner{position:relative;width:40px;height:40px}.spinner.s{width:24px;height:24px}.border{box-sizing:border-box;position:absolute;width:100%;height:100%;border:4px solid transparent;border-top-color:#0A8276;border-left-color:#0A8276;border-right-color:#0A8276;border-top-left-radius:1px;border-top-right-radius:1px;border-radius:50%;animation:spin 2s linear infinite}.border.inverted{border-top-color:#FFFFFF;border-left-color:#FFFFFF;border-right-color:#FFFFFF}.semiconductor{width:100%;height:100%;animation:spin 2s linear infinite}.semiconductor svg{fill:#0A8276}.semiconductor.inverted svg{fill:#FFFFFF}.semiconductor.s svg{width:24px;height:24px}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}"},"./dist/esm/index-72ac5051.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>classNames});var module,classnames={exports:{}};module=classnames,function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}();const classNames=classnames.exports}}]);