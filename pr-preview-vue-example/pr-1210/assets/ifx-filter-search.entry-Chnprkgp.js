import{r as t,c as i,h as a}from"./index-DPrdDKFF.js";const s=".filter-search-wrapper{display:flex;padding:12px 16px 16px 16px;flex-direction:column;align-items:flex-start;align-self:stretch;gap:4px;font-family:var(--ifx-font-family);background:#EEEDED}.filter-name{font-size:1rem;line-height:1.5rem;font-weight:600}",r=s,l=class{constructor(e){t(this,e),this.ifxInput=i(this,"ifxInput",7),this.filterName=void 0,this.disabled=!1,this.value=void 0}handleInput(e){this.value=e.detail,this.ifxInput.emit(this.value)}render(){return a("div",{key:"b36d8a43f30cd663179e79aeb3bfb431bddfb00f",class:"filter-search-wrapper"},a("div",{key:"c33205dcf10a178fa3182a7553adc90d21c60476",class:"filter-name"},"Your Filter Name"),a("ifx-search-field",{key:"47c6b0a3220594b799ab36a4a08a86aa92af4459",disabled:this.disabled,value:this.value,onIfxInput:this.handleInput.bind(this)}))}};l.style=r;export{l as ifx_filter_search};
