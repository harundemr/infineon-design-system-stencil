import{r,h as e,g as l,c as s}from"./index-e7c8fdcd.js";const p=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:block}.accordion-wrapper{display:flex;flex-direction:column;gap:8px;font-family:var(--ifx-font-family)}',d=class{constructor(t){r(this,t),this.autoCollapse=!1}async onItemOpen(t){if(this.autoCollapse){const o=Array.from(this.el.querySelectorAll("ifx-accordion-item"));for(const i of o){const n=i;n!==t.target&&await n.open&&(n.open=!1)}}}render(){return e("div",{class:"accordion-wrapper"},e("slot",null))}get el(){return l(this)}};d.style=p;const h=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.accordion-item{border-radius:3px;overflow:hidden;transition:all 0.3s;font-family:var(--ifx-font-family)}.accordion-title:hover{border:1px solid #EEEDED;color:#08665C}.accordion-title{display:flex;align-items:center;padding:12px 16px;gap:12px;color:#0A8276;background-color:#FFFFFF;border:1px solid #EEEDED;cursor:pointer}.accordion-caption{font-weight:600;font-size:1.125rem}.accordion-content{gap:8px;max-height:0;overflow:hidden;transition:max-height 0.3s ease-in-out;line-height:24px;font-size:1rem;font-weight:400}.inner-content{background-color:#FFFFFF;padding:24px;word-wrap:break-word;overflow-wrap:anywhere;align-self:stretch;}.accordion-icon{font-weight:bold;display:inline-block;transition:transform 0.3s}.accordion-icon:hover{color:#08665C}.accordion-item.open .accordion-icon{transform:rotate(-180deg)}',f=class{constructor(t){r(this,t),this.ifxItemOpen=s(this,"ifxItemOpen",7),this.ifxItemClose=s(this,"ifxItemClose",7),this.caption=void 0,this.open=!1,this.initialCollapse=!0,this.internalOpen=!1}componentWillLoad(){this.internalOpen=this.open,this.initialCollapse||(this.internalOpen=!0)}componentDidLoad(){this.openAccordionItem()}componentDidUpdate(){this.openAccordionItem()}openChanged(t){this.internalOpen=t}toggleOpen(){this.internalOpen=!this.internalOpen,this.open=this.internalOpen,this.internalOpen?this.ifxItemOpen.emit({isOpen:this.internalOpen}):this.ifxItemClose.emit({isClosed:!this.internalOpen})}openAccordionItem(){this.internalOpen?this.contentEl.style.maxHeight=`${this.contentEl.scrollHeight}px`:this.contentEl.style.maxHeight="0"}handleSlotChange(t){const i=t.target.assignedNodes();i.length>0&&i.forEach(n=>{new MutationObserver((a,g)=>{for(let c of a)c.type==="childList"&&this.internalOpen&&this.openAccordionItem()}).observe(n,{attributes:!0,childList:!0,subtree:!0})}),this.internalOpen&&this.openAccordionItem()}render(){return e("div",{"aria-label":this.caption,class:`accordion-item ${this.internalOpen?"open":""}`},e("div",{class:"accordion-title",onClick:()=>this.toggleOpen()},e("span",{class:"accordion-icon"},e("ifx-icon",{icon:"chevron-down-12"})),e("span",{class:"accordion-caption"},this.caption)),e("div",{class:"accordion-content",ref:t=>this.contentEl=t},e("div",{class:"inner-content"},e("slot",{onSlotchange:t=>this.handleSlotChange(t)}))))}static get watchers(){return{open:["openChanged"]}}};f.style=h;export{d as ifx_accordion,f as ifx_accordion_item};
