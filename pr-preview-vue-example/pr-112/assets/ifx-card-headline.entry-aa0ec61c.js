import{r as t,h as e,g as r}from"./index-08b40155.js";const s='.card__headline-wrapper{padding-bottom:16px}.card__headline-wrapper.withDesc{padding-bottom:8px}.card-headline{margin-top:0;padding-top:0;font-family:"Source Sans Pro";font-weight:600;font-size:1.5rem;line-height:32px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.card-headline.horizontal{font-size:1.25rem;line-height:28px}',a=class{constructor(i){t(this,i),this.direction=void 0,this.hasDesc=void 0}componentWillLoad(){this.el.closest("ifx-card").shadowRoot.querySelector(".card").className.includes("horizontal")&&(this.direction="horizontal"),this.el.closest("ifx-card").querySelector("ifx-card-text")&&(this.hasDesc=!0)}render(){return e("div",{class:`card__headline-wrapper ${this.hasDesc?"withDesc":""}`},e("div",{class:`card-headline ${this.direction}`},e("slot",null)))}get el(){return r(this)}};a.style=s;export{a as ifx_card_headline};
