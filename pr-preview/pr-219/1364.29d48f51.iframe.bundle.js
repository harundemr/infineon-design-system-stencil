/*! For license information please see 1364.29d48f51.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[1364],{"./dist/esm/ifx-link.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_link:()=>Link});var _index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-fbf4ddae.js"),_index_e6cb8223_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/index-e6cb8223.js");const Link=class{constructor(hostRef){(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.href=void 0,this.target="_self",this.color=void 0,this.bold=!0,this.underline=!0}render(){return(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{href:this.href,target:this.target,class:this.linkClassNames()},(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}linkClassNames(){return(0,_index_e6cb8223_js__WEBPACK_IMPORTED_MODULE_1__.c)("link",this.color,this.bold&&"bold",this.underline&&"underline")}};Link.style='*{font-family:"Source Sans Pro"}.link{font-weight:400;font-size:16px;text-decoration:none;color:#1d1d1d}.link.bold{font-weight:600}.link.primary{color:#378375}.link.secondary{color:#ab377a}.link.warning{color:#f07f3c}.link.danger{color:#cd002f}.link.success{color:#aec067}.link.underline{text-decoration:underline}'},"./dist/esm/index-e6cb8223.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>classnames});var classnames=function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))}}]);