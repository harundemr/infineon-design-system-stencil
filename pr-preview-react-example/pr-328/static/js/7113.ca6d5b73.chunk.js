"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[7113],{7113:function(e,t,n){n.r(t),n.d(t,{ifx_accordion:function(){return s},ifx_accordion_item:function(){return l}});var i=n(4165),o=n(5861),r=n(5671),c=n(3144),a=n(8633),s=function(){function e(t){(0,r.Z)(this,e),(0,a.r)(this,t),this.autoCollapse=!1}return(0,c.Z)(e,[{key:"onItemOpen",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var n,o,r,c,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.autoCollapse){e.next=16;break}n=Array.from(this.el.querySelectorAll("ifx-accordion-item")),o=0,r=n;case 3:if(!(o<r.length)){e.next=16;break}if(c=r[o],a=c,e.t0=a!==t.target,!e.t0){e.next=11;break}return e.next=10,a.isOpen();case 10:e.t0=e.sent;case 11:if(!e.t0){e.next=13;break}a.close();case 13:o++,e.next=3;break;case 16:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return(0,a.h)("div",{class:"accordion-wrapper"},(0,a.h)("slot",null))}},{key:"el",get:function(){return(0,a.g)(this)}}]),e}();s.style='*{font-family:"Source Sans Pro"}:host{display:block}.accordion-wrapper{display:flex;flex-direction:column;gap:8px}';var l=function(){function e(t){(0,r.Z)(this,e),(0,a.r)(this,t),this.ifxItemOpen=(0,a.c)(this,"ifxItemOpen",7),this.ifxItemClose=(0,a.c)(this,"ifxItemClose",7),this.caption=void 0,this.open=!1}return(0,c.Z)(e,[{key:"toggleOpen",value:function(){this.open=!this.open,this.open?this.ifxItemOpen.emit():this.ifxItemClose.emit()}},{key:"componentDidUpdate",value:function(){this.open?this.contentEl.style.maxHeight="".concat(this.contentEl.scrollHeight,"px"):this.contentEl.style.maxHeight="0"}},{key:"close",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.open=!1,this.ifxItemClose.emit();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isOpen",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.open);case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return(0,a.h)("div",{class:"accordion-item ".concat(this.open?"open":"")},(0,a.h)("div",{class:"accordion-title",onClick:function(){return e.toggleOpen()}},(0,a.h)("span",{class:"accordion-icon"},(0,a.h)("ifx-icon",{icon:"chevron-down-12"})),(0,a.h)("span",{class:"accordion-caption"},this.caption)),(0,a.h)("div",{class:"accordion-content",ref:function(t){return e.contentEl=t}},(0,a.h)("div",{class:"inner-content"},(0,a.h)("slot",null))))}}]),e}();l.style='*{font-family:"Source Sans Pro"}.accordion-item{border-radius:3px;overflow:hidden;transition:all 0.3s}.accordion-title:hover{border:1px solid #ebe9e9;background-color:#ebe9e9}.accordion-title{display:flex;align-items:center;padding:1rem;color:#378375;border:1px solid #ebe9e9;cursor:pointer}.accordion-caption{font-weight:600;font-size:1rem}.accordion-content{max-height:0;overflow:hidden;transition:max-height 0.3s ease-in-out}.inner-content{padding:24px;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;}.accordion-icon{font-weight:bold;display:inline-block;transition:transform 0.3s;margin-right:0.5rem}.accordion-item.open .accordion-icon{transform:rotate(-180deg)}'}}]);
//# sourceMappingURL=7113.ca6d5b73.chunk.js.map