"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[3249],{3249:function(e,n,r){r.r(n),r.d(n,{ifx_checkbox:function(){return a}});var o=r(5671),i=r(9466),c=r(3144),a=function(){function e(n){(0,o.Z)(this,e),(0,c.r)(this,n),this.ifxChange=(0,c.c)(this,"ifxChange",7),this.disabled=!1,this.value=!1,this.error=!1,this.name="",this.internalValue=void 0}return(0,i.Z)(e,[{key:"handleCheckbox",value:function(){this.disabled||(this.internalValue=!this.internalValue,this.inputElement.checked=this.internalValue,this.ifxChange.emit(this.internalValue))}},{key:"valueChanged",value:function(e,n){e!==n&&(this.internalValue=e,this.inputElement.checked=this.internalValue)}},{key:"handleKeydown",value:function(e){32!==e.keyCode&&13!==e.keyCode||(this.handleCheckbox(),e.preventDefault())}},{key:"componentWillLoad",value:function(){this.internalValue=this.internalValue||!1}},{key:"render",value:function(){var e=this,n=!1;return this.el.innerHTML&&(n=!0),(0,c.h)("div",{class:"checkbox__container"},(0,c.h)("input",{type:"checkbox",hidden:!0,ref:function(n){return e.inputElement=n},name:this.name,checked:this.internalValue,onChange:this.handleCheckbox.bind(this),id:"checkbox",value:"".concat(this.internalValue)}),(0,c.h)("div",{tabindex:"0",onClick:this.handleCheckbox.bind(this),onKeyDown:this.handleKeydown.bind(this),role:"checkbox","aria-value":this.internalValue,"aria-disabled":this.disabled,"aria-labelledby":"label",class:"checkbox__wrapper \n        ".concat(this.internalValue?"checked":""," \n        ").concat(this.disabled?"disabled":"","\n        ").concat(this.error?"error":"")},this.internalValue&&(0,c.h)("ifx-icon",{icon:"check-12"})),n&&(0,c.h)("div",{id:"label",class:"label ".concat(this.error?"error":""," ").concat(this.disabled?"disabled":""," "),onClick:this.handleCheckbox.bind(this)},(0,c.h)("slot",null)))}},{key:"el",get:function(){return(0,c.g)(this)}}],[{key:"watchers",get:function(){return{value:["valueChanged"]}}}]),e}();a.style=":host{display:inline-flex;vertical-align:top}.checkbox__container{box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;padding:0px;gap:8px}.checkbox__container .checkbox__wrapper{display:flex;justify-content:center;align-items:center;width:20px;height:20px;background-color:#ffffff;border:1px solid #575352;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.error{border-color:#CD002F}.checkbox__container .checkbox__wrapper:focus-visible{border:1px solid #575352;outline:2px solid #0A8276;outline-offset:2px}.checkbox__container .checkbox__wrapper:hover{background-color:#EEEDED;border:1px solid #575352;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.disabled{background-color:#BFBBBB;border-color:#BFBBBB;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.checked{background-color:#0A8276;border-radius:1px;border-color:transparent;flex:none;order:0;flex-grow:0;color:#ffffff}.checkbox__container .checkbox__wrapper.checked:focus-visible{border:1px solid transparent;outline:2px solid #0A8276;outline-offset:2px}.checkbox__container .checkbox__wrapper.checked:hover{background-color:#08665C;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.checked.disabled{background:#BFBBBB;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .label{width:25px;height:20px;font-style:normal;font-weight:400;font-size:14px;line-height:20px;color:#1d1d1d;flex:none;order:1;flex-grow:0}.checkbox__container .label.disabled{color:#BFBBBB}.checkbox__container .label.error{color:#CD002F}.checkbox__container .checkbox__wrapper:hover,.checkbox__container .label:hover{cursor:pointer}"}}]);
//# sourceMappingURL=3249.74d37ab2.chunk.js.map