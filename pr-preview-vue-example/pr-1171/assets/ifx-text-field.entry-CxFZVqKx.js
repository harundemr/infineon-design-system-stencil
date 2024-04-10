import{r as n,c as i,h as t,g as r}from"./index-DFeIjpJG.js";const o=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.textInput__container{display:flex;flex-direction:column;align-items:flex-start;padding:0px;width:100%;flex:none;order:0;align-self:stretch;flex-grow:0;font-family:var(--ifx-font-family)}.textInput__container.disabled .textInput__top-wrapper label{color:#575352}.textInput__container.disabled .textInput__bottom-wrapper input{border:1px solid #575352;background-color:#EEEDED}.textInput__container.disabled .textInput__bottom-wrapper input::placeholder{font-size:0.875rem;color:#575352}.textInput__container .textInput__top-wrapper{display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:4px;flex:none;order:0;align-self:stretch;flex-grow:0}.textInput__container .textInput__top-wrapper label{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:0;flex-grow:0}.textInput__container .textInput__top-wrapper label .optional-required{margin-left:4px}.textInput__container .textInput__top-wrapper label .optional{margin-left:4px}.textInput__container .textInput__top-wrapper label .required{margin-left:4px}.textInput__container .input-container{position:relative;display:flex;align-items:center;width:100%}.textInput__container .textInput__bottom-wrapper{flex-grow:1;position:relative;display:flex;flex-direction:column;align-items:flex-start;padding:0px;gap:4px;flex:none;order:1;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper input{width:100%;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:8px 16px;gap:8px;height:40px;background-color:#FFFFFF;color:#1D1D1D;font-family:"Source Sans 3";font-size:1rem;line-height:1.5rem;border:1px solid #8D8786;border-radius:1px;flex:none;order:0;align-self:stretch;flex-grow:0;text-overflow:ellipsis}.textInput__container .textInput__bottom-wrapper input.input-s{height:36px;font-size:0.875rem;line-height:1.25rem}.textInput__container .textInput__bottom-wrapper input.input-s::placeholder{font-size:0.875rem;line-height:1.25rem}.textInput__container .textInput__bottom-wrapper input.icon{padding-left:40px}.textInput__container .textInput__bottom-wrapper input.error{border:1px solid #CD002F}.textInput__container .textInput__bottom-wrapper input.error:focus{outline:none}.textInput__container .textInput__bottom-wrapper input.success{border:1px solid #4CA460}.textInput__container .textInput__bottom-wrapper input.success:focus{outline:none}.textInput__container .textInput__bottom-wrapper input:focus:not(.error,.success){outline:none;border:1px solid #0A8276}.textInput__container .textInput__bottom-wrapper input:hover:not(:disabled,:focus,.error,.success){border:1px solid #575352}.textInput__container .textInput__bottom-wrapper input::placeholder{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;color:#8D8786;flex:none;order:1;flex-grow:1}.textInput__container .textInput__bottom-wrapper ifx-icon{position:absolute;top:50%;transform:translateY(-50%);left:16px;transition:0.3s;color:#8D8786}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption{font-style:normal;font-weight:400;font-size:0.75rem;line-height:1rem;letter-spacing:0.2px;color:#1D1D1D;flex:none;order:1;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption.error{color:#CD002F}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption.disabled{color:#575352}',p=o,a=class{constructor(e){n(this,e),this.ifxInput=i(this,"ifxInput",7),this.placeholder="Placeholder",this.value="",this.error=!1,this.label="",this.icon="",this.caption="",this.size="m",this.required=!1,this.optional=!1,this.success=!1,this.disabled=!1}valueWatcher(e){e!==this.inputElement.value&&(this.inputElement.value=e)}async reset(){this.value="",this.inputElement.value=""}handleInput(){const e=this.inputElement.value;this.value=e,this.ifxInput.emit(this.value)}render(){return t("div",{key:"e19c8a9e821942ffd573ad1bcaf91727ffe75f63","aria-label":"a text field for user input","aria-value":this.value,"aria-disabled":this.disabled,class:`textInput__container ${this.disabled?"disabled":""}`},t("div",{key:"9275f4f59b25043bf6c97b9e963ec685d801e282",class:"textInput__top-wrapper"},t("label",{key:"fe2bc4bdc97d4e154935d2492783f7822b109443",htmlFor:"text-field"},t("slot",{key:"c0177d9dba625e053082ccc7136168b31b0e6917"}),this.optional&&this.required?t("span",{class:"optional-required"},"(optional) *"):this.optional?t("span",{class:"optional"},"(optional)"):this.required?t("span",{class:"required"},"*"):null)),t("div",{key:"166024b6e29671e65cb758fc08aa9a52cfbff921",class:"textInput__bottom-wrapper"},t("div",{key:"85f4a25815868474a9a103b52d8c640cb6888ae7",class:"input-container"},this.icon&&t("ifx-icon",{icon:this.icon}),t("input",{key:"986acedf3fef664021d5e34ebb6e2f5a442149f3",ref:e=>this.inputElement=e,disabled:this.disabled,type:"text",id:"text-field",value:this.value,onInput:()=>this.handleInput(),placeholder:this.placeholder,class:`${this.icon?"icon":""}
                ${this.error?"error":""} 
              ${this.size==="s"?"input-s":""}
              ${this.success?"success":""}`})),this.caption&&!this.error&&t("div",{class:`textInput__bottom-wrapper-caption ${this.disabled} ? disabled : ""`},this.caption),this.error&&t("div",{class:"textInput__bottom-wrapper-caption error"},this.caption)))}get el(){return r(this)}static get watchers(){return{value:["valueWatcher"]}}};a.style=p;export{a as ifx_text_field};
