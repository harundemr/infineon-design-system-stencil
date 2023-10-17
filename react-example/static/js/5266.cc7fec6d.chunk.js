"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[5266],{5266:function(t,o,i){i.r(o),i.d(o,{ifx_tooltip:function(){return p}});var e=i(2982),s=i(5671),l=i(3144),a=i(2243),n=i(844),p=function(){function t(o){var i=this;(0,s.Z)(this,t),(0,a.r)(this,o),this.popperInstance=null,this.onMouseEnter=function(){var t,o;null===(t=i.popperInstance)||void 0===t||t.setOptions((function(t){return Object.assign(Object.assign({},t),{modifiers:[].concat((0,e.Z)(t.modifiers),[{name:"eventListeners",enabled:!0}])})})),i.initializePopper(),i.tooltipVisible=!0,i.tooltipEl.style.display="block",null===(o=i.popperInstance)||void 0===o||o.update()},this.onMouseLeave=function(){i.tooltipVisible=!1,i.tooltipEl.style.display="none"},this.onClick=function(){var t;"dismissible"===i.variant.toLowerCase()&&(i.initializePopper(),i.tooltipVisible=!i.tooltipVisible,i.tooltipEl.style.display=i.tooltipVisible?"block":"none",null===(t=i.popperInstance)||void 0===t||t.update())},this.tooltipVisible=!1,this.header="",this.text="",this.position="auto",this.internalPosition="auto",this.variant="compact",this.icon=void 0}return(0,l.Z)(t,[{key:"initializePopper",value:function(){if(!this.popperInstance){this.referenceEl=this.el,"compact"===this.variant.toLowerCase()?this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-compact"):"dismissible"===this.variant.toLowerCase()?this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-dismissible"):this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-extended");var t="auto"===this.position?this.determineBestPosition():this.position;this.internalPosition=t,this.tooltipEl&&this.referenceEl&&(this.popperInstance=(0,n.c)(this.referenceEl,this.tooltipEl,{placement:this.internalPosition,modifiers:[{name:"offset",options:{offset:[0,8]}},{name:"arrow",options:{element:".tooltip-arrow-svg"}}]})),this.tooltipEl.setAttribute("data-placement",t)}}},{key:"determineBestPosition",value:function(){var t=this.referenceEl.getBoundingClientRect(),o=window.scrollY,i=window.scrollX,e=t.top+o+t.height/2,s=t.left+i+t.width/2;return"auto"===this.position?e>window.innerHeight/2?s>window.innerWidth/2?"top-end":"top-start":s>window.innerWidth/2?"bottom-end":"bottom-start":this.position}},{key:"positionChanged",value:function(t){var o;this.internalPosition=t,null===(o=this.popperInstance)||void 0===o||o.destroy(),this.popperInstance=null}},{key:"disconnectedCallback",value:function(){var t;null===(t=this.popperInstance)||void 0===t||t.destroy()}},{key:"render",value:function(){var t={"tooltip-dismissible":!0,visible:this.tooltipVisible},o={"tooltip-compact":!0,visible:this.tooltipVisible},i={"tooltip-extended":!0,visible:this.tooltipVisible},e="compact"===this.variant.toLowerCase()||"extended"===this.variant.toLowerCase()?{onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave}:{onClick:this.onClick};return(0,a.h)("div",Object.assign({class:"tooltip__container"},e),(0,a.h)("slot",null),"dismissible"===this.variant.toLowerCase()&&(0,a.h)("div",{class:t},(0,a.h)("ifx-icon",{icon:"cross16",class:"close-button"}),(0,a.h)("div",{class:"tooltip-dismissible-content"},this.header&&(0,a.h)("div",{class:"tooltip-dismissible-header"},this.header),(0,a.h)("div",{class:"tooltip-dismissible-body"},this.text)),(0,a.h)("svg",{class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,a.h)("path",{id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))),"compact"===this.variant.toLowerCase()&&(0,a.h)("div",{class:o},this.text,(0,a.h)("svg",{class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,a.h)("path",{id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))),"extended"===this.variant.toLowerCase()&&(0,a.h)("div",{class:i},(0,a.h)("slot",{name:"icon"},this.icon?(0,a.h)("div",{class:"extended_icon"},(0,a.h)("ifx-icon",{icon:this.icon})):(0,a.h)("svg",{class:"extended_icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},(0,a.h)("path",{stroke:"#fff","stroke-linecap":"round","stroke-linejoin":"round",d:"M20.5 2.5h-16a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2Z"}),(0,a.h)("path",{stroke:"#fff",d:"M19 17H6l2.5-4 2.097 2.516.405.486.379-.506 4.118-5.49.003-.002L19 17Z"}),(0,a.h)("path",{fill:"#fff",d:"M10 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"}))),(0,a.h)("div",{class:"tooltip-extended-content"},this.header&&(0,a.h)("div",{class:"tooltip-extended-header"},this.header),(0,a.h)("div",{class:"tooltip-extended-body"},this.text)),(0,a.h)("svg",{class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,a.h)("path",{id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))))}},{key:"el",get:function(){return(0,a.g)(this)}}],[{key:"watchers",get:function(){return{position:["positionChanged"]}}}]),t}();p.style='*{font-family:"Source Sans 3"}:host{display:inline-flex}.tooltip__container{display:inline-flex;flex-direction:column;position:relative}.tooltip-extended,.tooltip-compact,.tooltip-dismissible{background-color:#1D1D1D;border:1px solid black;z-index:1;display:none;transition:opacity 0.3s;position:relative;font-family:Source Sans 3;font-size:14px;font-style:normal;font-weight:400;line-height:20px;color:#FFFFFF}.visible.tooltip-extended,.visible.tooltip-compact,.visible.tooltip-dismissible{display:flex !important;align-items:center;min-width:100px}.tooltip-dismissible{width:310px}.tooltip-dismissible .close-button{position:absolute;top:12px;right:12px;cursor:pointer}.tooltip-dismissible .tooltip-dismissible-content{display:flex;flex-direction:column;gap:12px;padding:12px;flex-grow:1;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere}.tooltip-dismissible .tooltip-dismissible-header,.tooltip-dismissible .tooltip-dismissible-body{font-family:"Source Sans 3";font-size:14px;font-style:normal;line-height:20px}.tooltip-dismissible .tooltip-dismissible-header{font-weight:600}.tooltip-dismissible .tooltip-dismissible-body{font-weight:400}.tooltip-compact{padding:4px 8px;text-align:center;flex-grow:1}.tooltip-extended{width:310px;padding-left:12px}.tooltip-extended .extended_icon{display:flex;align-self:flex-start;padding-top:12px;cursor:pointer}.tooltip-extended .tooltip-extended-content{display:flex;flex-direction:column;gap:12px;padding:12px;flex-grow:1;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere}.tooltip-extended .tooltip-extended-header,.tooltip-extended .tooltip-extended-body{font-family:"Source Sans 3";font-size:14px;font-style:normal;line-height:20px}.tooltip-extended .tooltip-extended-header{font-weight:600}.tooltip-extended .tooltip-extended-body{font-weight:400}.tooltip__container .tooltip-arrow-svg{position:absolute;width:8px;height:8px}[data-placement=top].tooltip-extended>.tooltip-arrow-svg,[data-placement=top].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top].tooltip-compact>.tooltip-arrow-svg{bottom:-8px;left:50%;transform:rotate(180deg) translateX(-50%)}[data-placement=top-start].tooltip-extended>.tooltip-arrow-svg,[data-placement=top-start].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top-start].tooltip-compact>.tooltip-arrow-svg{bottom:-8px;left:10px;transform:rotate(180deg)}[data-placement=top-end].tooltip-extended>.tooltip-arrow-svg,[data-placement=top-end].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top-end].tooltip-compact>.tooltip-arrow-svg{bottom:-8px;right:10px;transform:rotate(180deg)}[data-placement=bottom].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom].tooltip-compact>.tooltip-arrow-svg{top:-8px;left:50%;transform:translateX(-50%)}[data-placement=bottom-start].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom-start].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom-start].tooltip-compact>.tooltip-arrow-svg{top:-8px;left:10px}[data-placement=bottom-end].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom-end].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom-end].tooltip-compact>.tooltip-arrow-svg{top:-8px;right:10px}[data-placement=left].tooltip-extended>.tooltip-arrow-svg,[data-placement=left].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=left].tooltip-compact>.tooltip-arrow-svg{right:-4px;top:50%;transform:rotate(90deg) translateY(-50%) translateX(-50%)}[data-placement=right].tooltip-extended>.tooltip-arrow-svg,[data-placement=right].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=right].tooltip-compact>.tooltip-arrow-svg{left:-4px;top:50%;transform:rotate(270deg) translateY(-50%) translateX(50%)}'}}]);
//# sourceMappingURL=5266.cc7fec6d.chunk.js.map