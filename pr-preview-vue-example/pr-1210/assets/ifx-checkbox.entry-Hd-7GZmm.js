import{r as t,c as o,h as n,g as a}from"./index-DPrdDKFF.js";const c=':host{display:inline-flex;vertical-align:top}.checkbox__container{box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;padding:0px;gap:8px;font-family:var(--ifx-font-family)}.checkbox__container .checkbox__wrapper{display:flex;position:relative;justify-content:center;align-items:center;width:20px;height:20px;background-color:#FFFFFF;border:1px solid #575352;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.checkbox-m{height:24px;width:24px}.checkbox__container .checkbox__wrapper.error{border-color:#CD002F}.checkbox__container .checkbox__wrapper:focus-visible{border:1px solid #575352;outline:2px solid #0A8276;outline-offset:2px}.checkbox__container .checkbox__wrapper:hover{background-color:#EEEDED;border:1px solid #575352;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.disabled{background-color:#BFBBBB;border-color:#BFBBBB;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.checked{background-color:#0A8276;border-radius:1px;border-color:transparent;flex:none;order:0;flex-grow:0;color:#FFFFFF}.checkbox__container .checkbox__wrapper.checked.error{background-color:#CD002F}.checkbox__container .checkbox__wrapper.checked:focus-visible{border:1px solid transparent;outline:2px solid #0A8276;outline-offset:2px}.checkbox__container .checkbox__wrapper.checked:hover{background-color:#08665C;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.checked.disabled{background:#BFBBBB;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.indeterminate:before{content:"";display:block;width:70%;height:2px;background-color:#08665C;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.checkbox__container .label{height:20px;font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;color:#1D1D1D;flex:none;order:1;flex-grow:0}.checkbox__container .label.label-m{height:24px;font-size:1rem;line-height:1.5rem}.checkbox__container .label.disabled{color:#BFBBBB}.checkbox__container .checkbox__wrapper:hover,.checkbox__container .label:hover{cursor:pointer}',l=c,h=class{constructor(e){t(this,e),this.ifxChange=o(this,"ifxChange",7),this.disabled=!1,this.value=!1,this.error=!1,this.name="",this.size="m",this.internalValue=void 0,this.indeterminate=!1,this.internalIndeterminate=void 0}handleCheckbox(){this.disabled||(this.inputElement.indeterminate?(this.internalValue=!0,this.internalIndeterminate=!1):this.internalValue=!this.internalValue,this.ifxChange.emit(this.internalValue))}valueChanged(e,i){e!==i&&(this.internalValue=e,this.inputElement.checked=this.internalValue)}indeterminateChanged(e,i){e!==i&&(this.internalIndeterminate=e,this.inputElement.indeterminate=this.internalIndeterminate)}handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(this.handleCheckbox(),e.preventDefault())}componentWillLoad(){this.internalValue=this.value,this.internalIndeterminate=this.indeterminate}componentDidRender(){this.inputElement.indeterminate=this.internalIndeterminate}getCheckedClassName(){return this.error?this.internalValue?"checked error":"error":this.internalValue?"checked":""}render(){const e=this.el.innerHTML;let i=!1;return e&&(i=!0),n("div",{key:"92f9ec2a0996246ec6ba6bbc4600024f85556c3b",class:"checkbox__container"},n("input",{key:"effb54bfabda52dc565edf648d3ea4c1675541ed",type:"checkbox",hidden:!0,ref:r=>this.inputElement=r,name:this.name,checked:this.internalValue,onChange:this.handleCheckbox.bind(this),id:"checkbox",value:`${this.internalValue}`}),n("div",{key:"159de38b813c9b7366f71e2911cc7b85ac919cd1",tabindex:"0",onClick:this.handleCheckbox.bind(this),onKeyDown:this.handleKeydown.bind(this),role:"checkbox","aria-value":this.internalValue,"aria-disabled":this.disabled,"aria-labelledby":"label",class:`checkbox__wrapper 
          ${this.getCheckedClassName()}
        ${this.size==="m"?"checkbox-m":""}
        ${this.indeterminate?"indeterminate":""}
        ${this.disabled?"disabled":""}`},this.internalValue&&n("ifx-icon",{icon:"check-12"})),i&&n("div",{id:"label",class:`label ${this.size==="m"?"label-m":""} ${this.disabled?"disabled":""} `,onClick:this.handleCheckbox.bind(this)},n("slot",null)))}get el(){return a(this)}static get watchers(){return{value:["valueChanged"],indeterminate:["indeterminateChanged"]}}};h.style=l;export{h as ifx_checkbox};
