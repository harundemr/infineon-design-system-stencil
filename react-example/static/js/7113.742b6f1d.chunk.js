"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[7113],{7113:function(t,n,e){e.r(n),e.d(n,{ifx_accordion:function(){return s},ifx_accordion_item:function(){return l}});var i=e(4165),o=e(5861),r=e(5671),c=e(3144),a=e(1091),s=function(){function t(n){(0,r.Z)(this,t),(0,a.r)(this,n),this.autoCollapse=!1}return(0,c.Z)(t,[{key:"onItemOpen",value:function(){var t=(0,o.Z)((0,i.Z)().mark((function t(n){var e,o,r,c,a;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.autoCollapse){t.next=16;break}e=Array.from(this.el.querySelectorAll("ifx-accordion-item")),o=0,r=e;case 3:if(!(o<r.length)){t.next=16;break}if(c=r[o],a=c,t.t0=a!==n.target,!t.t0){t.next=11;break}return t.next=10,a.isOpen();case 10:t.t0=t.sent;case 11:if(!t.t0){t.next=13;break}a.close();case 13:o++,t.next=3;break;case 16:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}()},{key:"render",value:function(){return(0,a.h)("div",{class:"accordion-wrapper"},(0,a.h)("slot",null))}},{key:"el",get:function(){return(0,a.g)(this)}}]),t}();s.style='*{font-family:"Source Sans 3"}:host{display:block}.accordion-wrapper{display:flex;flex-direction:column;gap:8px}';var l=function(){function t(n){(0,r.Z)(this,t),(0,a.r)(this,n),this.ifxItemOpen=(0,a.c)(this,"ifxItemOpen",7),this.ifxItemClose=(0,a.c)(this,"ifxItemClose",7),this.caption=void 0,this.open=!1}return(0,c.Z)(t,[{key:"toggleOpen",value:function(){this.open=!this.open,this.open?this.ifxItemOpen.emit():this.ifxItemClose.emit()}},{key:"componentDidUpdate",value:function(){this.open?this.contentEl.style.maxHeight="".concat(this.contentEl.scrollHeight,"px"):this.contentEl.style.maxHeight="0"}},{key:"close",value:function(){var t=(0,o.Z)((0,i.Z)().mark((function t(){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.open=!1,this.ifxItemClose.emit();case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"isOpen",value:function(){var t=(0,o.Z)((0,i.Z)().mark((function t(){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.open);case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return(0,a.h)("div",{class:"accordion-item ".concat(this.open?"open":"")},(0,a.h)("div",{class:"accordion-title",onClick:function(){return t.toggleOpen()}},(0,a.h)("span",{class:"accordion-icon"},(0,a.h)("ifx-icon",{icon:"chevron-down-12"})),(0,a.h)("span",{class:"accordion-caption"},this.caption)),(0,a.h)("div",{class:"accordion-content",ref:function(n){return t.contentEl=n}},(0,a.h)("div",{class:"inner-content"},(0,a.h)("slot",null))))}}]),t}();l.style='*{font-family:"Source Sans 3"}.accordion-item{border-radius:3px;overflow:hidden;transition:all 0.3s}.accordion-title:hover{border:1px solid #EEEDED;background-color:#EEEDED}.accordion-title{display:flex;align-items:center;padding:1rem;color:#0A8276;border:1px solid #EEEDED;cursor:pointer}.accordion-caption{font-weight:600;font-size:1rem}.accordion-content{max-height:0;overflow:hidden;transition:max-height 0.3s ease-in-out}.inner-content{padding:24px;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;}.accordion-icon{font-weight:bold;display:inline-block;transition:transform 0.3s;margin-right:0.5rem}.accordion-item.open .accordion-icon{transform:rotate(-180deg)}'}}]);
//# sourceMappingURL=7113.742b6f1d.chunk.js.map