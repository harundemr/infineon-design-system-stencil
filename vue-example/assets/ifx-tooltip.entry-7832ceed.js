import{r as a,h as t,g as n}from"./index-6af27dad.js";import{c as p}from"./popper-1604923e-f3391c26.js";const r='*{font-family:"Source Sans 3"}:host{display:inline-flex}.tooltip__container{display:inline-flex;flex-direction:column;position:relative}.tooltip-extended,.tooltip-compact,.tooltip-dismissible{background-color:#1D1D1D;border:1px solid black;z-index:1;display:none;transition:opacity 0.3s;position:relative;font-family:Source Sans 3;font-size:14px;font-style:normal;font-weight:400;line-height:20px;color:#FFFFFF}.visible.tooltip-extended,.visible.tooltip-compact,.visible.tooltip-dismissible{display:flex !important;align-items:center}.tooltip-dismissible{min-width:110px;width:auto}.tooltip-dismissible .close-button{cursor:pointer;position:relative;top:0px;order:2;padding-right:12px}.tooltip-dismissible .tooltip-dismissible-content{display:flex;flex-direction:column;gap:12px;padding:12px;flex-grow:1;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere}.tooltip-dismissible .tooltip-dismissible-header,.tooltip-dismissible .tooltip-dismissible-body{font-family:"Source Sans 3";font-size:14px;font-style:normal;line-height:20px}.tooltip-dismissible .tooltip-dismissible-header{font-weight:600}.tooltip-dismissible .tooltip-dismissible-body{font-weight:400}.tooltip-compact{padding:4px 8px;text-align:center;flex-grow:1}.tooltip-extended{min-width:100px;width:auto;align-items:center;padding:12px;gap:10px}.tooltip-extended .extended_icon{display:flex;align-self:flex-start;align-items:center;cursor:pointer}.tooltip-extended .tooltip-extended-content{display:flex;flex-direction:column;gap:12px;flex-grow:1;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere}.tooltip-extended .tooltip-extended-header,.tooltip-extended .tooltip-extended-body{font-family:"Source Sans 3";font-size:14px;font-style:normal;line-height:20px}.tooltip-extended .tooltip-extended-header{font-weight:600}.tooltip-extended .tooltip-extended-body{font-weight:400}.tooltip__container .tooltip-arrow-svg{position:absolute;width:8px;height:8px}[data-placement=top].tooltip-extended>.tooltip-arrow-svg,[data-placement=top].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top].tooltip-compact>.tooltip-arrow-svg{bottom:-8px;left:50%;transform:rotate(180deg) translateX(-50%)}[data-placement=top-start].tooltip-extended>.tooltip-arrow-svg,[data-placement=top-start].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top-start].tooltip-compact>.tooltip-arrow-svg{bottom:-8px;left:10px;transform:rotate(180deg)}[data-placement=top-end].tooltip-extended>.tooltip-arrow-svg,[data-placement=top-end].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top-end].tooltip-compact>.tooltip-arrow-svg{bottom:-8px;right:10px;transform:rotate(180deg)}[data-placement=bottom].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom].tooltip-compact>.tooltip-arrow-svg{top:-8px;left:50%;transform:translateX(-50%)}[data-placement=bottom-start].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom-start].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom-start].tooltip-compact>.tooltip-arrow-svg{top:-8px;left:10px}[data-placement=bottom-end].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom-end].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom-end].tooltip-compact>.tooltip-arrow-svg{top:-8px;right:10px}[data-placement=left].tooltip-extended>.tooltip-arrow-svg,[data-placement=left].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=left].tooltip-compact>.tooltip-arrow-svg{right:-4px;top:50%;transform:rotate(90deg) translateY(-50%) translateX(-50%)}[data-placement=right].tooltip-extended>.tooltip-arrow-svg,[data-placement=right].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=right].tooltip-compact>.tooltip-arrow-svg{left:-4px;top:50%;transform:rotate(270deg) translateY(-50%) translateX(50%)}',d=class{constructor(o){a(this,o),this.popperInstance=null,this.onMouseEnter=()=>{var i,e;(i=this.popperInstance)===null||i===void 0||i.setOptions(s=>Object.assign(Object.assign({},s),{modifiers:[...s.modifiers,{name:"eventListeners",enabled:!0}]})),this.initializePopper(),this.tooltipVisible=!0,this.tooltipEl.style.display="block",(e=this.popperInstance)===null||e===void 0||e.update()},this.onMouseLeave=()=>{this.tooltipVisible=!1,this.tooltipEl.style.display="none"},this.onClick=()=>{var i;this.variant.toLowerCase()==="dismissible"&&(this.initializePopper(),this.tooltipVisible=!this.tooltipVisible,this.tooltipEl.style.display=this.tooltipVisible?"block":"none",(i=this.popperInstance)===null||i===void 0||i.update())},this.tooltipVisible=!1,this.header="",this.text="",this.position="auto",this.internalPosition="auto",this.variant="compact",this.icon=void 0}componentWillLoad(){this.variant.toLowerCase().trim()===""&&(this.variant="compact")}initializePopper(){if(this.popperInstance)return;this.referenceEl=this.el,this.variant.toLowerCase()==="compact"?this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-compact"):this.variant.toLowerCase()==="dismissible"?this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-dismissible"):this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-extended");const o=this.position==="auto"?this.determineBestPosition():this.position;this.internalPosition=o,this.tooltipEl&&this.referenceEl&&(this.popperInstance=p(this.referenceEl,this.tooltipEl,{placement:this.internalPosition,modifiers:[{name:"offset",options:{offset:[0,8]}},{name:"arrow",options:{element:".tooltip-arrow-svg"}}]})),this.tooltipEl.setAttribute("data-placement",o)}determineBestPosition(){const o=this.referenceEl.getBoundingClientRect(),i=window.scrollY,e=window.scrollX,s=o.top+i+o.height/2,l=o.left+e+o.width/2;return this.position==="auto"?s>window.innerHeight/2?l>window.innerWidth/2?"top-end":"top-start":l>window.innerWidth/2?"bottom-end":"bottom-start":this.position}positionChanged(o){var i;this.internalPosition=o,(i=this.popperInstance)===null||i===void 0||i.destroy(),this.popperInstance=null}disconnectedCallback(){var o;(o=this.popperInstance)===null||o===void 0||o.destroy()}render(){const o={"tooltip-dismissible":!0,visible:this.tooltipVisible},i={"tooltip-compact":!0,visible:this.tooltipVisible},e={"tooltip-extended":!0,visible:this.tooltipVisible},s=this.variant.toLowerCase()==="compact"||this.variant.toLowerCase()==="extended"?{onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave}:{onClick:this.onClick};return t("div",Object.assign({"aria-label":"a tooltip showing important information","aria-value":this.header,class:"tooltip__container"},s),t("slot",null),this.variant.toLowerCase()==="dismissible"&&t("div",{class:o},t("ifx-icon",{icon:"cross16",class:"close-button"}),t("div",{class:"tooltip-dismissible-content"},this.header&&t("div",{class:"tooltip-dismissible-header"},this.header),t("div",{class:"tooltip-dismissible-body"},this.text)),t("svg",{class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))),this.variant.toLowerCase()==="compact"&&t("div",{class:i},this.text,t("svg",{class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))),this.variant.toLowerCase()==="extended"&&t("div",{class:e},t("slot",{name:"icon"},this.icon?t("div",{class:"extended_icon"},t("ifx-icon",{icon:this.icon})):t("svg",{class:"extended_icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},t("path",{stroke:"#fff","stroke-linecap":"round","stroke-linejoin":"round",d:"M20.5 2.5h-16a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2Z"}),t("path",{stroke:"#fff",d:"M19 17H6l2.5-4 2.097 2.516.405.486.379-.506 4.118-5.49.003-.002L19 17Z"}),t("path",{fill:"#fff",d:"M10 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"}))),t("div",{class:"tooltip-extended-content"},this.header&&t("div",{class:"tooltip-extended-header"},this.header),t("div",{class:"tooltip-extended-body"},this.text)),t("svg",{class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))))}get el(){return n(this)}static get watchers(){return{position:["positionChanged"]}}};d.style=r;export{d as ifx_tooltip};
