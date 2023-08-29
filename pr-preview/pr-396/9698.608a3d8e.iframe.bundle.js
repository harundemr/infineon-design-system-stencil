/*! For license information please see 9698.608a3d8e.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[9698],{"./dist/esm/_commonjsHelpers-e9b9b14e.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getDefaultExportFromCjs(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}__webpack_require__.d(__webpack_exports__,{c:()=>createCommonjsModule,g:()=>getDefaultExportFromCjs})},"./dist/esm/ifx-link.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_link:()=>Link});var _index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-69e586c1.js"),_index_3c58b0c1_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/index-3c58b0c1.js");const Link=class{constructor(hostRef){(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.href=void 0,this.target="_self",this.color=void 0,this.bold=!0,this.underline=!0}render(){return(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{href:this.href,target:this.target,class:this.linkClassNames()},(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}linkClassNames(){return(0,_index_3c58b0c1_js__WEBPACK_IMPORTED_MODULE_1__.c)("link",this.color,this.bold&&"bold",this.underline&&"underline")}};Link.style='*{font-family:"Source Sans 3"}.link{display:inline-flex;align-items:center;font-weight:400;font-size:1rem;text-decoration:none;color:#1D1D1D;gap:8px;line-height:1.6}.link.bold{font-weight:600}.link.primary{color:#0A8276}.link.secondary{color:#9C216E}.link.warning{color:#E16B25}.link.danger{color:#CD002F}.link.success{color:#4CA460}.link.underline{text-decoration:underline}'},"./dist/esm/index-3c58b0c1.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>classnames});var classnames=(0,__webpack_require__("./dist/esm/_commonjsHelpers-e9b9b14e.js").c)((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))}}]);