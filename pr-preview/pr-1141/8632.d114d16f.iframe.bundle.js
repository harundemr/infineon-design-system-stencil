"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[8632],{"./dist/esm/ifx-card-headline.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_card_headline:()=>CardHeadline});var _index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-77e9cc30.js");const CardHeadline=class{constructor(hostRef){(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.direction=void 0,this.hasDesc=void 0,this.isHovered=!1}componentWillLoad(){var _a;const cardElement=this.el.closest("ifx-card");if(cardElement){const cardClass=null===(_a=cardElement.shadowRoot.querySelector(".card"))||void 0===_a?void 0:_a.className;cardClass&&cardClass.includes("horizontal")&&(this.direction="horizontal");cardElement.querySelector("ifx-card-text")&&(this.hasDesc=!0)}}render(){return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"9433ff789abb135f340b7597d4abac96d1fa9983",class:"card__headline-wrapper "+(this.hasDesc?"withDesc":"")},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"0de5cdecbd7b8d518e2fdd51ed9d29dc0aee33e1",class:`card-headline ${this.direction} ${this.isHovered?"isHovered":""}`},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"00a616ae175bfe6d63e595b1363cee8cc895c7f2"})))}get el(){return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};CardHeadline.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{pointer-events:none}.card__headline-wrapper{padding-bottom:16px}.card__headline-wrapper.withDesc{padding-bottom:8px}.card-headline{margin-top:0;padding-top:0;font-family:var(--ifx-font-family);font-weight:600;font-size:1.5rem;line-height:2rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.card-headline.isHovered{color:#0A8276}.card-headline.horizontal{font-size:1.25rem;line-height:28px}'}}]);