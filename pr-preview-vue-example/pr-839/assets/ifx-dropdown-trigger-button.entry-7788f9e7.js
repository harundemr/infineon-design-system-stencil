import{r as s,h as t}from"./index-b0a0340b.js";const e=":host{display:inline-block}.rotate{transition:transform 0.2s ease-in-out;transform:rotate(-180deg);margin-top:0em}.icon{margin-top:0em;transition:transform 0.2s ease-in-out}",n=class{constructor(i){s(this,i),this.isOpen=!1,this.theme="default",this.variant=void 0,this.size="m",this.disabled=void 0,this.hideArrow=!1}render(){return t("ifx-button",{variant:this.variant,theme:this.theme,size:this.size,disabled:this.disabled,class:"dropdown-trigger-button"},t("slot",null),!this.hideArrow&&t("ifx-icon",{icon:"chevron-down-12",class:`icon${this.isOpen?" rotate":""}`}))}};n.style=e;export{n as ifx_dropdown_trigger_button};
