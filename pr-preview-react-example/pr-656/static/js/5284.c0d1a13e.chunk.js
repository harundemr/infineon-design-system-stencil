"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[5284],{5284:function(e,t,i){i.r(t),i.d(t,{ifx_slider:function(){return s}});var n=i(5671),a=i(3144),r=i(3178),s=function(){function e(t){(0,n.Z)(this,e),(0,r.r)(this,t),this.ifxChange=(0,r.c)(this,"ifxChange",7),this.min=0,this.max=100,this.value=0,this.disabled=!1,this.showPercentage=!1,this.leftIcon=void 0,this.rightIcon=void 0,this.leftText=void 0,this.rightText=void 0,this.internalValue=0}return(0,a.Z)(e,[{key:"valueChanged",value:function(e){this.internalValue=e,this.updateValuePercent()}},{key:"handleInputChange",value:function(e){var t=e.target;this.internalValue=parseInt(t.value),this.ifxChange.emit(this.internalValue),this.updateValuePercent()}},{key:"updateValuePercent",value:function(){if(this.inputRef){var e=(this.internalValue-this.min)/(this.max-this.min)*100;this.inputRef.style.setProperty("--value-percent","".concat(e,"%"))}}},{key:"componentWillLoad",value:function(){this.internalValue=this.value}},{key:"componentDidLoad",value:function(){this.updateValuePercent()}},{key:"render",value:function(){var e=this;return(0,r.h)("div",{class:"ifx-slider"},this.leftText&&(0,r.h)("span",{class:"left-text"},this.leftText),this.leftIcon&&(0,r.h)("ifx-icon",{icon:this.leftIcon,class:"left-icon".concat(this.disabled?" disabled":"")}),(0,r.h)("input",{type:"range",min:this.min,max:this.max,disabled:this.disabled,value:this.internalValue,ref:function(t){return e.inputRef=t},onInput:function(t){return e.handleInputChange(t)}}),this.rightIcon&&(0,r.h)("ifx-icon",{icon:this.rightIcon,class:"right-icon".concat(this.disabled?" disabled":"")}),this.rightText&&(0,r.h)("span",{class:"right-text".concat(this.disabled?" disabled":"")},this.rightText),this.showPercentage&&(0,r.h)("span",{class:"percentage-display".concat(this.disabled?" disabled":"")},this.internalValue,"%"))}}],[{key:"watchers",get:function(){return{value:["valueChanged"]}}}]),e}();s.style='*{font-family:"Source Sans 3"}:host{display:inline-block}.left-icon,.right-icon,.left-text,.right-text,.percentage-display{font-size:0.875rem;color:#575352;margin-left:8px}.left-icon.disabled,.right-icon.disabled,.left-text.disabled,.right-text.disabled,.percentage-display.disabled{color:#BFBBBB}.left-icon,.left-text{margin-right:8px}.right-icon,.right-text,.percentage-display{margin-left:8px}.ifx-slider{display:flex;align-items:center;padding:2px 16px;border-radius:9999px}.ifx-slider input[type=range]{-webkit-appearance:none;width:100%;height:4px;background:linear-gradient(to right, #0A8276 0%, #0A8276 var(--value-percent, 0%), #EEEDED var(--value-percent, 0%), #EEEDED 100%);outline:none;cursor:pointer;transition:0.2s}.ifx-slider input[type=range]::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#0A8276;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-slider input[type=range]:not(:disabled)::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;background:#0A8276;border-radius:50%;cursor:pointer;transition:box-shadow 0.2s}.ifx-slider input[type=range]:not(:disabled)::-webkit-slider-thumb:hover{background:#08665C}.ifx-slider input[type=range]:not(:disabled)::-webkit-slider-thumb:active{background:#06534B}.ifx-slider input[type=range]:disabled{background:#BFBBBB;cursor:default}.ifx-slider input[type=range]:disabled::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;background:#BFBBBB;border-radius:50%;cursor:default}'}}]);
//# sourceMappingURL=5284.c0d1a13e.chunk.js.map