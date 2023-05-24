/*! For license information please see 44.cb0ada44.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"./dist/esm/_commonjsHelpers-9943807e.js":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(global){__webpack_require__.d(__webpack_exports__,"a",(function(){return commonjsGlobal})),__webpack_require__.d(__webpack_exports__,"b",(function(){return createCommonjsModule}));__webpack_require__("./node_modules/core-js/modules/es.global-this.js");var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==global?global:"undefined"!=typeof self?self:{};function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}}).call(this,__webpack_require__("./node_modules/webpack/buildin/global.js"))},"./dist/esm/ifx-spinner.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ifx_spinner",(function(){return Spinner}));__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/esm/index-2a2fcfb8.js"),_index_41d07358_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/esm/index-41d07358.js");__webpack_require__("./dist/esm/_commonjsHelpers-9943807e.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var Spinner=function(){function Spinner(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Spinner),Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_7__.g)(this,hostRef),this.size=void 0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Spinner,[{key:"render",value:function render(){return Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_7__.e)("div",{class:this.getClassNames()},Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_7__.e)("div",{class:"border"}))}},{key:"getSizeClass",value:function getSizeClass(){return""+this.size=="s"?"s":""}},{key:"getClassNames",value:function getClassNames(){return Object(_index_41d07358_js__WEBPACK_IMPORTED_MODULE_8__.a)("spinner",this.size&&"spinner "+this.getSizeClass())}}]),Spinner}();Spinner.style=":host{display:inline-block}.spinner{position:relative;width:40px;height:40px}.spinner.s{width:24px;height:24px}.border{box-sizing:border-box;position:absolute;width:100%;height:100%;border:4px solid transparent;border-top-color:#0A8276;border-left-color:#0A8276;border-right-color:#0A8276;border-top-left-radius:1px;border-top-right-radius:1px;border-radius:50%;animation:spin 2s linear infinite}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}"},"./dist/esm/index-41d07358.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return classnames}));__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js");var _commonjsHelpers_9943807e_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/esm/_commonjsHelpers-9943807e.js"),classnames=Object(_commonjsHelpers_9943807e_js__WEBPACK_IMPORTED_MODULE_7__.b)((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"./node_modules/core-js/modules/es.global-this.js":function(module,exports,__webpack_require__){var $=__webpack_require__("./node_modules/core-js/internals/export.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js");$({global:!0,forced:global.globalThis!==global},{globalThis:global})}}]);
//# sourceMappingURL=44.cb0ada44.iframe.bundle.js.map