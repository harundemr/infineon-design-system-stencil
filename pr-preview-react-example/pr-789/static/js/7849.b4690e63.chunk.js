"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[7849],{7849:(e,t,s)=>{s.r(t),s.d(t,{ifx_breadcrumb:()=>a});var r=s(3739);const a=class{constructor(e){(0,r.r)(this,e)}componentDidLoad(){const e=this.el.shadowRoot.firstChild;this.addEventListenersToHandleCustomFocusState(e)}addEventListenersToHandleCustomFocusState(e){if(!e)return void console.error("element not found");e.tabIndex=-1;const t=e.querySelector("slot");if(t){const e=t.assignedNodes();for(let t=0;t<e.length;t++){const s=e[t];if("IFX-BREADCRUMB-ITEM"===s.nodeName){const e=s;e.hasAttribute("url")||(e.tabIndex=-1,e.addEventListener("focus",(()=>{e.hasAttribute("url")&&e.blur()})))}}}}render(){return(0,r.h)("nav",{"aria-label":"Page navigation breadcrumb"},(0,r.h)("ol",{class:"breadcrumb"},(0,r.h)("slot",null)))}get el(){return(0,r.g)(this)}};a.style='*{font-family:"Source Sans 3"}:host{display:flex}.breadcrumb{list-style:none;padding:0px;margin:0px;display:flex;flex-direction:row;font-family:"Source Sans 3";font-size:0.875rem;align-items:flex-start}'}}]);
//# sourceMappingURL=7849.b4690e63.chunk.js.map