import{r as i,h as t}from"./index-DhwMidoe.js";const s=":host{display:inline-block}.rotate{transition:transform 0.2s ease-in-out;transform:rotate(-180deg);margin-top:0em}.icon{margin-top:0em;transition:transform 0.2s ease-in-out}",n=s,o=class{constructor(e){i(this,e),this.isOpen=!1,this.theme="default",this.variant=void 0,this.size="m",this.disabled=void 0,this.hideArrow=!1}render(){return t("ifx-button",{key:"3ec7b2dd97b42d5a9d56be71b76f2a0f65e61a5b",variant:this.variant,theme:this.theme,size:this.size,disabled:this.disabled,class:"dropdown-trigger-button"},t("slot",{key:"70694fb31498c4e007d54eae154aeda03c49b4f4"}),!this.hideArrow&&t("ifx-icon",{icon:"chevron-down-12",class:`icon${this.isOpen?" rotate":""}`}))}};o.style=n;export{o as ifx_dropdown_trigger_button};
