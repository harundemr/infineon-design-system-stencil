import{r as d,h as t,g as r}from"./index-DhwMidoe.js";const s=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{pointer-events:none}.card__headline-wrapper{padding-bottom:16px}.card__headline-wrapper.withDesc{padding-bottom:8px}.card-headline{margin-top:0;padding-top:0;font-family:var(--ifx-font-family);font-weight:600;font-size:1.5rem;line-height:2rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.card-headline.isHovered{color:#0A8276}.card-headline.horizontal{font-size:1.25rem;line-height:28px}',o=s,n=class{constructor(e){d(this,e),this.direction=void 0,this.hasDesc=void 0,this.isHovered=!1}componentWillLoad(){var e;const i=this.el.closest("ifx-card");if(i){const a=(e=i.shadowRoot.querySelector(".card"))===null||e===void 0?void 0:e.className;a&&a.includes("horizontal")&&(this.direction="horizontal"),i.querySelector("ifx-card-text")&&(this.hasDesc=!0)}}render(){return t("div",{key:"9433ff789abb135f340b7597d4abac96d1fa9983",class:`card__headline-wrapper ${this.hasDesc?"withDesc":""}`},t("div",{key:"0de5cdecbd7b8d518e2fdd51ed9d29dc0aee33e1",class:`card-headline ${this.direction} ${this.isHovered?"isHovered":""}`},t("slot",{key:"00a616ae175bfe6d63e595b1363cee8cc895c7f2"})))}get el(){return r(this)}};n.style=o;export{n as ifx_card_headline};
