(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"./dist/esm/ifx-toggle.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ifx_toggle",(function(){return ifxToggle}));__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/esm/index-2a2fcfb8.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var ifxToggle=function(){function ifxToggle(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ifxToggle),Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_7__.g)(this,hostRef),this.valueChanged=Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_7__.c)(this,"valueChanged",7),this.checked=!1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(ifxToggle,[{key:"toggle",value:function toggle(){this.checked=!this.checked,this.valueChanged.emit(this.checked)}},{key:"render",value:function render(){var _this=this;return Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_7__.e)("div",{class:"toggle-container "+(this.checked?"checked":""),onClick:function onClick(){return _this.toggle()}},Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_7__.e)("div",{class:"toggle-switch "+(this.checked?"checked":"")}))}}]),ifxToggle}();ifxToggle.style=":host{display:inline-block;user-select:none}.toggle-container{display:inline-block;position:relative;width:50px;height:25px;background-color:#ffffff;border:1px solid #7d6f72;border-radius:25px;cursor:pointer;transition:background-color 0.3s ease}.toggle-switch{position:absolute;top:2px;left:2px;width:21px;height:21px;background-color:#7d6f72;border-radius:50%;transition:transform 0.3s ease}.pill-container:hover .pill-switch{box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}.pill-switch.checked{transform:translateX(25px);background-color:#ffffff}.pill-container.checked{background-color:#378375;border-color:#378375}"}}]);