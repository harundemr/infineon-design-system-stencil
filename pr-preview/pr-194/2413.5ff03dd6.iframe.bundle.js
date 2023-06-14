/*! For license information please see 2413.5ff03dd6.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[2413],{"./dist/esm/ifx-button.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_button:()=>Button});var _index_6c912e7e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-6c912e7e.js"),_index_e6cb8223_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/index-e6cb8223.js");const Button=class{constructor(hostRef){(0,_index_6c912e7e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.variant="solid",this.color="primary",this.size="m",this.disabled=void 0,this.icon=void 0,this.position="left",this.href=void 0,this.target="_self"}async setFocus(){this.focusableElement.focus()}componentWillLoad(){"LEFT"!==this.position.toUpperCase()&&(this.position="right")}render(){return(0,_index_6c912e7e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6c912e7e_js__WEBPACK_IMPORTED_MODULE_0__.H,null,this.href?(0,_index_6c912e7e_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{ref:el=>this.focusableElement=el,class:this.getClassNames(),href:this.disabled?void 0:this.href,target:this.target,rel:"_blank"===this.target?"noopener noreferrer":void 0},this.icon&&"LEFT"===this.position.toUpperCase()&&(0,_index_6c912e7e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:this.icon}),(0,_index_6c912e7e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null),this.icon&&"RIGHT"===this.position.toUpperCase()&&(0,_index_6c912e7e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:this.icon})):(0,_index_6c912e7e_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{class:this.getClassNames(),type:"button"},this.icon&&"LEFT"===this.position.toUpperCase()&&(0,_index_6c912e7e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:this.icon}),(0,_index_6c912e7e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null),this.icon&&"RIGHT"===this.position.toUpperCase()&&(0,_index_6c912e7e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:this.icon})))}getVariantClass(){return"outline"==`${this.variant}`?`outline-${this.color}`:"outline-text"==`${this.variant}`?`${this.color}-outline-text`:`${this.color}`}getSizeClass(){return"s"==`${this.size}`?"s":""}getClassNames(){return(0,_index_e6cb8223_js__WEBPACK_IMPORTED_MODULE_1__.c)("btn",this.size&&`btn-${this.getSizeClass()}`,`btn-${this.getVariantClass()}`,this.disabled?"disabled":"")}get el(){return(0,_index_6c912e7e_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Button.style='*{font-family:"Source Sans Pro"}.btn{display:inline-flex;align-items:center;justify-content:center;min-width:80px;min-height:40px;padding:0px 16px;gap:8px;color:#FFFFFF;flex-direction:row;font-weight:600;border-radius:1px;line-height:24px;outline:none;font-family:"Source Sans Pro";text-decoration:none;user-select:none;border:1px solid rgba(0, 0, 0, 0);font-size:1rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.btn:not(.disabled){cursor:pointer}.btn-primary{color:#ffffff;background-color:#378375;border-color:#378375}.btn-outline-primary{background-color:#ffffff;color:#378375;border-color:#378375}.btn-secondary{color:#ffffff;background-color:#ab377a;border-color:#ab377a}.btn-outline-secondary{background-color:#ffffff;color:#ab377a;border-color:#ab377a}.btn-success{color:#1d1d1d;background-color:#aec067;border-color:#aec067}.btn-outline-success{background-color:#ffffff;border-color:#aec067}.btn-danger{color:#ffffff;background-color:#cd002f;border-color:#cd002f}.btn-outline-danger{background-color:#ffffff;color:#cd002f;border-color:#cd002f}.btn-warning{color:#1d1d1d;background-color:#f07f3c;border-color:#f07f3c}.btn-outline-warning{background-color:#ffffff;border-color:#f07f3c}.btn.btn-s{font-size:0.8125rem;min-width:71px;min-height:32px;line-height:16px}.btn.icon-button{min-width:initial;min-height:initial;width:40px;height:40px;padding:0;justify-content:center}.btn.icon-button.btn-round{border-radius:100px}.btn.icon-button.btn-square{border-radius:1px}.btn.icon-button.btn-s{width:32px;height:32px}.btn.btn-primary:focus,.btn.btn-outline-primary:focus,.btn.btn-secondary:focus,.btn.btn-outline-secondary:focus,.btn.btn-success:focus,.btn.btn-outline-success:focus,.btn.btn-danger:focus,.btn.btn-outline-danger:focus,.btn.btn-warning:focus,.btn.btn-outline-warning:focus,.btn.btn-outline-text:focus{box-shadow:none}.btn.btn-primary:focus-visible,.btn.btn-outline-primary:focus-visible,.btn.btn-secondary:focus-visible,.btn.btn-outline-secondary:focus-visible,.btn.btn-success:focus-visible,.btn.btn-outline-success:focus-visible,.btn.btn-danger:focus-visible,.btn.btn-outline-danger:focus-visible,.btn.btn-warning:focus-visible,.btn.btn-outline-warning:focus-visible,.btn.btn-outline-text:focus-visible{box-shadow:0 0 0 3px #B4DDD8}.btn:disabled,.btn.disabled{opacity:1;background-color:#dcd5d7;border-color:#dcd5d7;color:#ffffff}.btn.btn-primary:not(:disabled,.disabled):focus{background-color:#378375;border-color:#378375}.btn.btn-primary:not(:disabled,.disabled):hover{background-color:#2d6357;border-color:#2d6357}.btn.btn-primary:not(:disabled,.disabled):active,.btn.btn-primary:not(:disabled,.disabled).active{background-color:#28594e;border-color:#28594e}.btn.btn-outline-primary:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-primary:not(:disabled,.disabled):hover{color:#ffffff;background-color:#2d6357;border-color:#2d6357}.btn.btn-outline-primary:not(:disabled,.disabled):active,.btn.btn-outline-primary:not(:disabled,.disabled).active{background-color:#28594e;border-color:#28594e}.btn.btn-secondary:not(:disabled,.disabled):focus{background-color:#ab377a;border-color:#ab377a}.btn.btn-secondary:not(:disabled,.disabled):hover{background-color:#99316d;border-color:#99316d}.btn.btn-secondary:not(:disabled,.disabled):active,.btn.btn-secondary:not(:disabled,.disabled).active{background-color:#822060;border-color:#822060}.btn.btn-outline-secondary:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-secondary:not(:disabled,.disabled):hover{color:#ffffff;background-color:#99316d;border-color:#99316d}.btn.btn-outline-secondary:not(:disabled,.disabled):active,.btn.btn-outline-secondary:not(:disabled,.disabled).active{background-color:#822060;border-color:#822060}.btn.btn-success:not(:disabled,.disabled):focus{background-color:#aec067;border-color:#aec067}.btn.btn-success:not(:disabled,.disabled):hover{background-color:#91a646;border-color:#91a646}.btn.btn-success:not(:disabled,.disabled):active,.btn.btn-success:not(:disabled,.disabled).active{background-color:#7d933c;border-color:#7d933c}.btn.btn-outline-success:not(:disabled,.disabled){color:#1d1d1d}.btn.btn-outline-success:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-success:not(:disabled,.disabled):hover{background-color:#91a646;border-color:#91a646}.btn.btn-outline-success:not(:disabled,.disabled):active,.btn.btn-outline-success:not(:disabled,.disabled).active{background-color:#7d933c;border-color:#7d933c}.btn.btn-danger:not(:disabled,.disabled):focus{background-color:#cd002f;border-color:#cd002f}.btn.btn-danger:not(:disabled,.disabled):hover{background-color:#bf0023;border-color:#bf0023}.btn.btn-danger:not(:disabled,.disabled):active,.btn.btn-danger:not(:disabled,.disabled).active{background-color:#900021;border-color:#900021}.btn.btn-outline-danger:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-danger:not(:disabled,.disabled):hover{color:#ffffff;background-color:#bf0023;border-color:#bf0023}.btn.btn-outline-danger:not(:disabled,.disabled):active,.btn.btn-outline-danger:not(:disabled,.disabled).active{background-color:#900021;border-color:#900021}.btn.btn-warning:not(:disabled,.disabled):focus{background-color:#f07f3c;border-color:#f07f3c}.btn.btn-warning:not(:disabled,.disabled):hover{background-color:#d97336;border-color:#d97336}.btn.btn-warning:not(:disabled,.disabled):active,.btn.btn-warning:not(:disabled,.disabled).active{background-color:#cc6e33;border-color:#cc6e33}.btn.btn-outline-warning:not(:disabled,.disabled){color:#1d1d1d}.btn.btn-outline-warning:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-warning:not(:disabled,.disabled):hover{background-color:#d97336;border-color:#d97336}.btn.btn-outline-warning:not(:disabled,.disabled):active,.btn.btn-outline-warning:not(:disabled,.disabled).active{background-color:#cc6e33;border-color:#cc6e33}.btn.btn-primary-outline-text{background-color:transparent;color:#378375}.btn.btn-primary-outline-text:hover{color:#2d6357}.btn.btn-primary-outline-text:active,.btn.btn-primary-outline-text.active{color:#28594e}.btn.btn-primary-outline-text:disabled,.btn.btn-primary-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}.btn.btn-secondary-outline-text{background-color:transparent;color:#ab377a}.btn.btn-secondary-outline-text:hover{color:#99316d}.btn.btn-secondary-outline-text:active,.btn.btn-secondary-outline-text.active{color:#822060}.btn.btn-secondary-outline-text:disabled,.btn.btn-secondary-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}.btn.btn-success-outline-text{background-color:transparent;color:#aec067}.btn.btn-success-outline-text:hover{color:#91a646}.btn.btn-success-outline-text:active,.btn.btn-success-outline-text.active{color:#7d933c}.btn.btn-success-outline-text:disabled,.btn.btn-success-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}.btn.btn-danger-outline-text{background-color:transparent;color:#cd002f}.btn.btn-danger-outline-text:hover{color:#bf0023}.btn.btn-danger-outline-text:active,.btn.btn-danger-outline-text.active{color:#900021}.btn.btn-danger-outline-text:disabled,.btn.btn-danger-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}.btn.btn-warning-outline-text{background-color:transparent;color:#f07f3c}.btn.btn-warning-outline-text:hover{color:#d97336}.btn.btn-warning-outline-text:active,.btn.btn-warning-outline-text.active{color:#cc6e33}.btn.btn-warning-outline-text:disabled,.btn.btn-warning-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}'},"./dist/esm/index-e6cb8223.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>classnames});var classnames=function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))}}]);