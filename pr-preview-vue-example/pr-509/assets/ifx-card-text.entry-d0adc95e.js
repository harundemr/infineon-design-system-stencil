import{r as s,h as e,g as i}from"./index-cfe8febf.js";const n='*{font-family:"Source Sans 3"}:host{pointer-events:none}.card__text-wrapper{padding-bottom:0px}.card__text-wrapper.hasBtn{padding-bottom:16px}.card-text{line-height:1.5rem;font-size:1rem;font-weight:400;white-space:wrap;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}',o=class{constructor(t){s(this,t),this.hasBtn=void 0}componentWillLoad(){const t=this.el.closest("ifx-card").querySelector("ifx-link"),r=this.el.closest("ifx-card").querySelector("ifx-button");(t||r)&&(this.hasBtn=!0)}render(){return e("div",{class:`card__text-wrapper ${this.hasBtn?"hasBtn":""}`},e("div",{class:"card-text"},e("slot",null)))}get el(){return i(this)}};o.style=n;export{o as ifx_card_text};
