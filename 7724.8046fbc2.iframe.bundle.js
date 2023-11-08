"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[7724],{"./dist/esm/ifx-slider.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_slider:()=>IfxSlider});var _index_b3f1e599_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-b3f1e599.js");const IfxSlider=class{constructor(hostRef){(0,_index_b3f1e599_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxChange=(0,_index_b3f1e599_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxChange",7),this.min=0,this.max=100,this.value=0,this.disabled=!1,this.showPercentage=!1,this.leftIcon=void 0,this.rightIcon=void 0,this.leftText=void 0,this.rightText=void 0,this.internalValue=0}valueChanged(newValue){this.internalValue=newValue,this.updateValuePercent()}handleInputChange(event){const target=event.target;this.internalValue=parseInt(target.value),this.ifxChange.emit(this.internalValue),this.updateValuePercent()}updateValuePercent(){if(this.inputRef){const percent=(this.internalValue-this.min)/(this.max-this.min)*100;this.inputRef.style.setProperty("--value-percent",`${percent}%`)}}componentWillLoad(){this.internalValue=this.value}componentDidLoad(){this.updateValuePercent()}render(){return(0,_index_b3f1e599_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"ifx-slider"},this.leftText&&(0,_index_b3f1e599_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"left-text"},this.leftText),this.leftIcon&&(0,_index_b3f1e599_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:this.leftIcon,class:"left-icon"+(this.disabled?" disabled":"")}),(0,_index_b3f1e599_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{type:"range",min:this.min,max:this.max,disabled:this.disabled,value:this.internalValue,ref:el=>this.inputRef=el,onInput:event=>this.handleInputChange(event),"aria-label":"a slider","aria-value":this.value,"aria-disabled":this.disabled}),this.rightIcon&&(0,_index_b3f1e599_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:this.rightIcon,class:"right-icon"+(this.disabled?" disabled":"")}),this.rightText&&(0,_index_b3f1e599_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"right-text"+(this.disabled?" disabled":"")},this.rightText),this.showPercentage&&(0,_index_b3f1e599_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"percentage-display"+(this.disabled?" disabled":"")},this.internalValue,"%"))}static get watchers(){return{value:["valueChanged"]}}};IfxSlider.style='*{font-family:"Source Sans 3"}:host{display:inline-block}.left-icon,.right-icon,.left-text,.right-text,.percentage-display{font-size:0.875rem;color:#575352;margin-left:8px}.left-icon.disabled,.right-icon.disabled,.left-text.disabled,.right-text.disabled,.percentage-display.disabled{color:#BFBBBB}.left-icon,.left-text{margin-right:8px}.right-icon,.right-text,.percentage-display{margin-left:8px}.ifx-slider{display:flex;align-items:center;padding:2px 16px;border-radius:9999px}.ifx-slider input[type=range]{-webkit-appearance:none;width:100%;height:4px;background:linear-gradient(to right, #0A8276 0%, #0A8276 var(--value-percent, 0%), #EEEDED var(--value-percent, 0%), #EEEDED 100%);outline:none;cursor:pointer;transition:0.2s}.ifx-slider input[type=range]::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#0A8276;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-slider input[type=range]:not(:disabled)::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;background:#0A8276;border-radius:50%;cursor:pointer;transition:box-shadow 0.2s}.ifx-slider input[type=range]:not(:disabled)::-webkit-slider-thumb:hover{background:#08665C}.ifx-slider input[type=range]:not(:disabled)::-webkit-slider-thumb:active{background:#06534B}.ifx-slider input[type=range]:disabled{background:#BFBBBB;cursor:default}.ifx-slider input[type=range]:disabled::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;background:#BFBBBB;border-radius:50%;cursor:default}'}}]);