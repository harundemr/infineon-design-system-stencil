"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[3008],{3008:function(r,o,t){t.r(o),t.d(o,{ifx_radio_button:function(){return n}});var e=t(5671),a=t(3144),i=t(1091),n=function(){function r(o){(0,e.Z)(this,r),(0,i.r)(this,o),this.ifxChange=(0,i.c)(this,"ifxChange",7),this.disabled=!1,this.value=!1,this.error=!1,this.size="s",this.internalValue=void 0,this.hasSlot=!0}return(0,a.Z)(r,[{key:"valueChanged",value:function(r,o){r!==o&&(this.internalValue=r)}},{key:"componentWillLoad",value:function(){this.internalValue=this.value;var r=this.el.innerHTML;this.hasSlot=!!r}},{key:"handleRadioButtonClick",value:function(){this.disabled||(this.internalValue=!this.internalValue,this.el.shadowRoot.querySelector(".radioButton__wrapper").focus(),this.ifxChange.emit(this.internalValue))}},{key:"render",value:function(){return(0,i.h)("div",{class:"radioButton__container ".concat(this.size," ").concat(this.disabled?"disabled":""),onClick:this.handleRadioButtonClick.bind(this)},(0,i.h)("div",{class:"radioButton__wrapper ".concat(this.internalValue?"checked":""," ").concat(this.disabled?"disabled":""," ").concat(this.error?"error":""),tabIndex:this.disabled?-1:0},this.internalValue&&(0,i.h)("div",{class:"radioButton__wrapper-mark"})),this.hasSlot&&(0,i.h)("div",{class:"label ".concat(this.error?"error":""," ").concat(this.disabled?"disabled":"")},(0,i.h)("slot",null)))}},{key:"el",get:function(){return(0,i.g)(this)}}],[{key:"watchers",get:function(){return{value:["valueChanged"]}}}]),r}();n.style='.radioButton__container{box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;padding:0px;gap:8px;cursor:pointer}.radioButton__container.m .radioButton__wrapper{width:24px;height:24px}.radioButton__container .radioButton__wrapper{width:20px;height:20px;position:relative;display:block;border-radius:50%;background-color:#FFFFFF;border:1px solid #575352}.radioButton__container .radioButton__wrapper:focus{outline:none}.radioButton__container .radioButton__wrapper:focus::before{content:"";position:absolute;width:calc(100% + 4px);height:calc(100% + 4px);top:50%;left:50%;transform:translate(-50%, -50%);border:2px solid #0A8276;border-radius:50%}.radioButton__container .radioButton__wrapper .radioButton__wrapper-mark{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:#0A8276;border-radius:50%;display:flex;justify-content:center;align-items:center;border-color:transparent}.radioButton__container .radioButton__wrapper:hover{border-color:#0A8276}.radioButton__container .radioButton__wrapper.disabled{background-color:#BFBBBB;border-color:#BFBBBB}.radioButton__container .radioButton__wrapper.disabled.error:hover,.radioButton__container .radioButton__wrapper.disabled.error:focus-visible{border-color:#CD002F}.radioButton__container .radioButton__wrapper.checked{border-color:#0A8276}.radioButton__container .radioButton__wrapper.checked::after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:10px;height:10px;background-color:#0A8276;border-radius:50%}.radioButton__container .radioButton__wrapper.checked.disabled::after{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked:hover{border-color:#08665C}.radioButton__container .radioButton__wrapper.checked:hover .radioButton__wrapper-mark{background-color:#08665C}.radioButton__container .radioButton__wrapper.checked.disabled{background-color:#FFFFFF;border-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked.disabled.disabled::after{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked.disabled .radioButton__wrapper-mark{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.error:not(.disabled){border-color:#CD002F}.radioButton__container .radioButton__wrapper.error:not(.disabled):hover,.radioButton__container .radioButton__wrapper.error:not(.disabled):focus-visible{border-color:#CD002F}.radioButton__container .label{display:flex;align-items:center;width:25px;height:20px;font-style:normal;font-weight:400;font-size:0.813rem;line-height:1.25rem;color:#1D1D1D;flex:none;order:1;flex-grow:0}.radioButton__container .label.disabled{color:#BFBBBB}.radioButton__container .label.error{color:#CD002F}.radioButton__container .label:hover{cursor:pointer}'}}]);
//# sourceMappingURL=3008.63658ab7.chunk.js.map