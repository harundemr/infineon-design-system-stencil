"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[1611],{1611:(e,t,i)=>{i.r(t),i.d(t,{ifx_filter_accordion:()=>d});var a=i(7770);const d=class{constructor(e){(0,a.r)(this,e),this.ifxFilterAccordionChange=(0,a.c)(this,"ifxFilterAccordionChange",7),this.handleCheckedChange=e=>{const t=e.detail.selectedItems;this.count=t.length,this.ifxFilterAccordionChange.emit({filterGroupName:this.filterGroupName,selectedItems:t})},this.toggleAccordion=e=>{e.stopPropagation(),this.expanded=!this.expanded},this.expanded=!1,this.maxVisibleItems=void 0,this.count=0,this.totalItems=0,this.filterGroupName=""}componentWillLoad(){this.el.addEventListener("ifxListUpdate",this.handleCheckedChange)}componentWillUpdate(){const e=(t=this.el,Array.from(t.querySelectorAll("ifx-list-entry")).filter((e=>"true"===e.getAttribute("value"))).map((e=>({label:e.getAttribute("label"),value:e.getAttribute("value")}))));var t;this.count=e.length}componentWillUnload(){this.el.removeEventListener("ifxListUpdate",this.handleCheckedChange)}render(){return(0,a.h)("div",{key:"f7f1d30d37687de36c41c45a2e86a40a66929c6b",class:"accordion ".concat(this.expanded?"expanded":"")},(0,a.h)("div",{key:"3d15fcd33a28e81ccda81c81b374ca9494f4af85",class:"header",onClick:this.toggleAccordion},(0,a.h)("div",{key:"a93f6a1ddb3ebd2b2127fe86d59935fc3db0e88e",class:"text-and-icon ".concat(this.expanded?"expanded":"")},(0,a.h)("div",{key:"8d94210ea17c2e4cdf2b2f556cd0fc075ae857cd",class:"text"},(0,a.h)("span",{key:"b00adac49e91129dfad3afc69005180fad3fe8a2"},this.filterGroupName),(0,a.h)("ifx-number-indicator",{key:"c2421d58dc2749bb390eb12e8ddc1e303160c7f6"},this.count)),(0,a.h)("ifx-icon",{key:"c1945334fc13357b83bde9cf5d9b9beca9fc14fd",class:this.expanded?"":"hidden",icon:"minus-16",onClick:this.toggleAccordion}),(0,a.h)("ifx-icon",{key:"1e5b8199e1ee76d913bb51916e2ee9a92ad15fab",class:this.expanded?"hidden":"",icon:"plus-16",onClick:this.toggleAccordion}))),this.expanded&&(0,a.h)("div",{class:"filter-accordion-container"},(0,a.h)("slot",{name:"list"})))}get el(){return(0,a.g)(this)}};d.style=".header{display:flex;align-items:flex-start;align-self:stretch;cursor:pointer}.text-and-icon{display:flex;padding:12px 16px 12px 20px;align-items:center;gap:16px;flex:1 0 0;border-bottom:1px solid #EEEDED}.text-and-icon.expanded{border-left:3px solid #0A8276;border-bottom:none}.text{display:flex;align-items:center;gap:8px;flex:1 0 0;color:#1D1D1D;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.hidden{display:none}.filter-accordion-container{display:flex;padding:8px 16px 16px 20px;flex-direction:column;align-items:flex-start;gap:12px;align-self:stretch;border-left:3px solid #0A8276}::slotted(ifx-filter-entry:nth-child(n+7)){display:none}.link{display:flex;align-items:center;gap:8px}.show-more ::slotted(ifx-filter-entry:nth-child(n+7)){display:block}.show-more .show-more-link{display:none}"}}]);
//# sourceMappingURL=1611.bd57111d.chunk.js.map