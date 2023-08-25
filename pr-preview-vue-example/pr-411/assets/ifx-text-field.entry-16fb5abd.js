import{r,c as n,h as e,g as o}from"./index-3098309b.js";const i='*{font-family:"Source Sans 3"}.textInput__container{display:flex;flex-direction:column;align-items:flex-start;padding:0px;width:100%;flex:none;order:0;align-self:stretch;flex-grow:0}.textInput__container.disabled .textInput__top-wrapper label{color:#BFBBBB}.textInput__container.disabled .textInput__bottom-wrapper input{border:1px solid #BFBBBB}.textInput__container.disabled .textInput__bottom-wrapper input::placeholder{color:#BFBBBB}.textInput__container .textInput__top-wrapper{display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:4px;flex:none;order:0;align-self:stretch;flex-grow:0}.textInput__container .textInput__top-wrapper label{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:0;flex-grow:0}.textInput__container .textInput__bottom-wrapper{position:relative;display:flex;flex-direction:column;align-items:flex-start;padding:0px;gap:4px;flex:none;order:1;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper input{box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:8px 16px;gap:6px;height:40px;background-color:#FFFFFF;color:#1D1D1D;border:1px solid #8D8786;border-radius:1px;flex:none;order:0;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper input.error{border:1px solid #CD002F}.textInput__container .textInput__bottom-wrapper input.error:focus{outline:none}.textInput__container .textInput__bottom-wrapper input.success{border:1px solid #4CA460}.textInput__container .textInput__bottom-wrapper input.success:focus{outline:none}.textInput__container .textInput__bottom-wrapper input:focus:not(.error,.success){outline:none;border:1px solid #0A8276}.textInput__container .textInput__bottom-wrapper input:hover:not(:disabled,.error,.success){border:1px solid #3C3A39}.textInput__container .textInput__bottom-wrapper input::placeholder{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;color:#8D8786;flex:none;order:1;flex-grow:1}.textInput__container .textInput__bottom-wrapper ifx-icon{position:absolute;top:12px;right:17px;transition:0.3s}.textInput__container .textInput__bottom-wrapper.show ifx-icon{transition:0.3s;transform:rotate(180deg)}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-error{font-style:normal;font-weight:400;font-size:0.75rem;line-height:1rem;letter-spacing:0.2px;color:#CD002F;flex:none;order:1;align-self:stretch;flex-grow:0}',p=class{constructor(t){r(this,t),this.ifxInput=n(this,"ifxInput",7),this.placeholder="Placeholder",this.value="",this.error=!1,this.errorMessage="",this.success=!1,this.disabled=!1,this.readonly=!1,this.icon=!1}valueWatcher(t){t!==this.inputElement.value&&(this.inputElement.value=t)}handleInput(){const t=this.inputElement.value;this.value=t,this.ifxInput.emit(this.value)}render(){return e("div",{class:`textInput__container ${this.disabled?"disabled":""}`},e("div",{class:"textInput__top-wrapper"},e("label",{htmlFor:"text-field"},e("slot",null))),e("div",{class:"textInput__bottom-wrapper"},e("input",{ref:t=>this.inputElement=t,readonly:this.readonly,disabled:this.disabled,type:"text",id:"text-field",value:this.value,onInput:()=>this.handleInput(),placeholder:this.placeholder,class:`${this.error?"error":""} ${this.success?"success":""}`}),this.error&&e("div",{class:"textInput__bottom-wrapper-error"},this.errorMessage),this.icon&&e("ifx-icon",{icon:"chevron-down-16"})))}get el(){return o(this)}static get watchers(){return{value:["valueWatcher"]}}};p.style=i;export{p as ifx_text_field};
