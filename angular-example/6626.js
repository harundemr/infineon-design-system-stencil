"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[6626],{6626:(f,s,o)=>{o.r(s),o.d(s,{ifx_accordion:()=>r,ifx_accordion_item:()=>c});var t=o(5861),e=o(4881);const r=class{constructor(n){(0,e.r)(this,n),this.autoCollapse=!1}onItemOpen(n){var a=this;return(0,t.Z)(function*(){if(a.autoCollapse){const h=Array.from(a.el.querySelectorAll("ifx-accordion-item"));for(const p of h){const i=p;i!==n.target&&(yield i.isOpen())&&i.close()}}})()}render(){return(0,e.h)("div",{class:"accordion-wrapper"},(0,e.h)("slot",null))}get el(){return(0,e.g)(this)}};r.style='*{font-family:"Source Sans 3"}:host{display:block}.accordion-wrapper{display:flex;flex-direction:column;gap:8px}';const c=class{constructor(n){(0,e.r)(this,n),this.ifxItemOpen=(0,e.c)(this,"ifxItemOpen",7),this.ifxItemClose=(0,e.c)(this,"ifxItemClose",7),this.caption=void 0,this.open=!1}toggleOpen(){this.open=!this.open,this.open?this.ifxItemOpen.emit():this.ifxItemClose.emit()}componentDidUpdate(){this.contentEl.style.maxHeight=this.open?`${this.contentEl.scrollHeight}px`:"0"}close(){var n=this;return(0,t.Z)(function*(){n.open=!1,n.ifxItemClose.emit()})()}isOpen(){var n=this;return(0,t.Z)(function*(){return n.open})()}render(){return(0,e.h)("div",{class:"accordion-item "+(this.open?"open":"")},(0,e.h)("div",{class:"accordion-title",onClick:()=>this.toggleOpen()},(0,e.h)("span",{class:"accordion-icon"},(0,e.h)("ifx-icon",{icon:"chevron-down-12"})),(0,e.h)("span",{class:"accordion-caption"},this.caption)),(0,e.h)("div",{class:"accordion-content",ref:n=>this.contentEl=n},(0,e.h)("div",{class:"inner-content"},(0,e.h)("slot",null))))}};c.style='*{font-family:"Source Sans 3"}.accordion-item{border-radius:3px;overflow:hidden;transition:all 0.3s}.accordion-title:hover{border:1px solid #EEEDED;background-color:#EEEDED}.accordion-title{display:flex;align-items:center;padding:1rem;color:#0A8276;border:1px solid #EEEDED;cursor:pointer}.accordion-caption{font-weight:600;font-size:1rem}.accordion-content{max-height:0;overflow:hidden;transition:max-height 0.3s ease-in-out}.inner-content{padding:24px;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;}.accordion-icon{font-weight:bold;display:inline-block;transition:transform 0.3s;margin-right:0.5rem}.accordion-item.open .accordion-icon{transform:rotate(-180deg)}'}}]);