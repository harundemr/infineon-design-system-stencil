"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[366],{366:(a,o,i)=>{i.r(o),i.d(o,{ifx_filter_accordion:()=>s});var e=i(3415);const s=class{constructor(n){(0,e.r)(this,n),this.toggleAccordion=t=>{t.stopPropagation(),this.expanded=!this.expanded},this.toggleShowMore=t=>{t.stopPropagation(),this.showMore=!this.showMore},this.handleCheckedChange=()=>{this.selectedCount=Array.from(this.el.querySelectorAll("ifx-filter-entry")).filter(t=>"true"===t.getAttribute("value")).length},this.expanded=!1,this.showMore=!1,this.selectedCount=0,this.totalItems=0,this.filterGroupName=""}componentWillLoad(){this.el.addEventListener("ifxFilterChange",this.handleCheckedChange),this.handleCheckedChange()}componentDidLoad(){this.totalItems=this.el.querySelectorAll("ifx-filter-entry").length}componentWillUnload(){this.el.removeEventListener("ifxFilterChange",this.handleCheckedChange)}render(){const n=this.totalItems-6;return(0,e.h)("div",{key:"931fba651e7fafa1ac0b0742652bc5c1c1de07dd",class:`accordion ${this.expanded?"expanded":""} ${this.showMore?"show-more":""}`},(0,e.h)("div",{key:"8dc98fe859a6c92809bc1e00a08ff14ff4edf758",class:"header",onClick:this.toggleAccordion},(0,e.h)("div",{key:"3f20b40f95f5550695fb6180595963c50c6274fc",class:"text-and-icon"},(0,e.h)("div",{key:"0adb1c751d70e007448719ccab23445b64b5a138",class:"text"},(0,e.h)("span",{key:"e34f78fe0a8eaf2aaad672a025295722fcfc9663"},this.filterGroupName),(0,e.h)("ifx-number-indicator",{key:"9a1bf9f5a247700887774be848545618a54eee38"},this.selectedCount)),(0,e.h)("ifx-icon",{key:"aff821f2d328ba90821a6719ca03f29cee01f52b",class:this.expanded?"":"hidden",icon:"minus-16",onClick:this.toggleAccordion}),(0,e.h)("ifx-icon",{key:"1100ab234659170fe2f03e9e53669fabff2ec2e9",class:this.expanded?"hidden":"",icon:"plus-16",onClick:this.toggleAccordion}))),this.expanded&&(0,e.h)("div",{class:"filter-accordion-container"},(0,e.h)("slot",null),(0,e.h)("div",{class:"link",onClick:this.toggleShowMore},(0,e.h)("ifx-icon",{key:this.showMore.toString(),icon:this.showMore?"chevron-up-12":"chevron-down-12"}),"              ",(0,e.h)("ifx-link",{href:"",target:"_blank",size:"m",variant:"underlined",disabled:!1},this.showMore?"Show less":`Show ${n} more`))))}get el(){return(0,e.g)(this)}};s.style=".header{display:flex;align-items:flex-start;align-self:stretch}.text-and-icon{display:flex;padding:12px 16px 12px 20px;align-items:center;gap:16px;flex:1 0 0;border-bottom:1px solid #EEEDED}.text-and-icon.expanded{border-left:3px solid #0A8276;border-bottom:none}.text{display:flex;align-items:center;gap:8px;flex:1 0 0;color:#1D1D1D;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.hidden{display:none}.filter-accordion-container{display:flex;padding:8px 16px 16px 20px;flex-direction:column;align-items:flex-start;gap:12px;align-self:stretch;border-left:3px solid #0A8276}::slotted(ifx-filter-entry:nth-child(n+7)){display:none}.link{display:flex;align-items:center;gap:8px}.show-more ::slotted(ifx-filter-entry:nth-child(n+7)){display:block}.show-more .show-more-link{display:none}"}}]);