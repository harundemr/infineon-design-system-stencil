"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[2461],{2461:(e,t,o)=>{o.r(t),o.d(t,{ifx_modal:()=>c});var n=o(1597);function a(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:20,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;const s=[];if(i>=n)return s;const l=e=>{const s=e.assignedNodes().filter((e=>1===e.nodeType));if(s.length>0){return a(s[0].parentElement,t,o,n,i+1)}return[]},r=Array.from(e.children||[]);for(const d of r)t(d)||(o(d)&&s.push(d),null!=d.shadowRoot?s.push(...a(d.shadowRoot,t,o,n,i+1)):"SLOT"===d.tagName?s.push(...l(d)):s.push(...a(d,t,o,n,i+1)));return s}function i(e){return e.hasAttribute("hidden")||e.hasAttribute("aria-hidden")&&"false"!==e.getAttribute("aria-hidden")||"none"===e.style.display||"0"===e.style.opacity||"hidden"===e.style.visibility||"collapse"===e.style.visibility}function s(e){return"-1"!==e.getAttribute("tabindex")&&!i(e)&&!function(e){return e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&"false"!==e.getAttribute("aria-disabled")}(e)&&(e.hasAttribute("tabindex")||(e instanceof HTMLAnchorElement||e instanceof HTMLAreaElement)&&e.hasAttribute("href")||e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLIFrameElement)}function l(e,t,o){const n=e.animate(t,Object.assign(Object.assign({},o),{fill:"both"}));return n.addEventListener("finish",(()=>{n.commitStyles(),n.cancel()})),n}const r={easing:"cubic-bezier(0.390, 0.575, 0.565, 1.000)"},d={fadeIn:[Object.assign(Object.assign({offset:0},r),{opacity:0}),Object.assign(Object.assign({offset:1},r),{opacity:1})],fadeOut:[Object.assign(Object.assign({offset:0},r),{opacity:1}),Object.assign(Object.assign({offset:1},r),{opacity:0})]},c=class{constructor(e){(0,n.r)(this,e),this.ifxModalOpen=(0,n.c)(this,"ifxModalOpen",7),this.ifxModalClose=(0,n.c)(this,"ifxModalClose",7),this.focusableElements=[],this.handleTopFocus=()=>{this.attemptFocus(this.getLastFocusableElement())},this.handleBottomFocus=()=>{this.attemptFocus(this.getFirstFocusableElement())},this.handleKeypress=e=>{this.showModal&&"Escape"===e.key&&this.doBeforeClose("ESCAPE_KEY")},this.opened=!1,this.showModal=this.opened||!1,this.caption="Modal Title",this.closeOnOverlayClick=!0,this.variant="default",this.alertIcon="",this.okButtonLabel="OK",this.cancelButtonLabel="Cancel",this.slotButtonsPresent=!1}componentDidLoad(){this.focusableElements=a(this.hostElement.shadowRoot,(e=>i(e)||e.matches("[data-focus-trap-edge]")),s)}getFirstFocusableElement(){return this.focusableElements[0]}getLastFocusableElement(){return this.focusableElements[this.focusableElements.length-1]}attemptFocus(e){null!=e?setTimeout((()=>{e.focus()}),0):setTimeout((()=>{this.closeButton.focus()}))}open(){this.showModal=!0;try{l(this.modalContainer,d.fadeIn,{duration:200}).addEventListener("finish",(()=>{this.attemptFocus(this.getFirstFocusableElement()),this.ifxModalOpen.emit()})),this.hostElement.addEventListener("keydown",this.handleKeypress)}catch(e){this.ifxModalOpen.emit()}}close(){try{l(this.modalContainer,d.fadeOut,{duration:200}).addEventListener("finish",(()=>{this.showModal=!1,this.ifxModalClose.emit()})),this.hostElement.removeEventListener("keydown",this.handleKeypress)}catch(e){this.showModal=!1,this.ifxModalClose.emit()}}doBeforeClose(e){const t=[];t.push(e);t.some((e=>e.defaultPrevented))||(this.opened=!1)}openedChanged(e){!0===e?this.open():this.close()}handleOverlayClick(){this.closeOnOverlayClick&&this.doBeforeClose("BACKDROP")}handleButtonsSlotChange(e){var t;(null===(t=e.currentTarget.assignedElements()[0])||void 0===t?void 0:t.childElementCount)>0?this.slotButtonsPresent=!0:this.slotButtonsPresent=!1}render(){const e="default"!==this.variant;return(0,n.h)(n.a,null,(0,n.h)("div",{ref:e=>this.modalContainer=e,class:"modal-container ".concat(this.showModal?"open":"")},(0,n.h)("div",{class:"modal-overlay",onClick:()=>this.handleOverlayClick()}),(0,n.h)("div",{"data-focus-trap-edge":!0,onFocus:this.handleTopFocus,tabindex:"0"}),(0,n.h)("div",{class:"modal-content-container",role:"dialog","aria-modal":"true","aria-label":this.caption},e?(0,n.h)("div",{class:"modal-icon-container ".concat("alert-brand"===this.variant?"":"danger")},this.alertIcon?(0,n.h)("ifx-icon",{icon:this.alertIcon}):null):null,(0,n.h)("div",{class:"modal-content"},(0,n.h)("div",{class:"modal-header"},(0,n.h)("h2",null,this.caption),(0,n.h)("ifx-icon-button",{ref:e=>this.closeButton=e,icon:"cross-24",variant:"tertiary",onClick:()=>this.doBeforeClose("CLOSE_BUTTON")})),(0,n.h)("div",{class:"modal-body"},(0,n.h)("slot",{name:"content"})),(0,n.h)("div",{class:"modal-footer ".concat(this.slotButtonsPresent?"buttons-present":"")},(0,n.h)("slot",{name:"buttons",onSlotchange:e=>this.handleButtonsSlotChange(e)})))),(0,n.h)("div",{"data-focus-trap-edge":!0,onFocus:this.handleBottomFocus,tabindex:"0"})))}get hostElement(){return(0,n.g)(this)}static get watchers(){return{opened:["openedChanged"]}}};c.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:block}.modal-container{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1060;overflow-y:auto;font-family:var(--ifx-font-family)}.modal-container.open{display:block}.modal-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1D1D1D;opacity:0.5;z-index:0}.modal-content-container{position:absolute;display:flex;justify-content:center;top:50%;left:50%;transform:translate(-50%, -50%);width:90%;min-height:218px;background-color:#fff;border-radius:0;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);overflow:hidden;box-sizing:border-box;align-items:stretch}@media screen and (min-width: 768px){.modal-content-container{width:540px;min-height:132px}}.modal-content{display:flex;flex-direction:column;width:100%;height:100%}.modal-icon-container{display:flex;align-items:center;justify-content:center;width:32px;background-color:#0A8276;align-self:stretch}.modal-icon-container.danger{background-color:#CD002F}.modal-icon-container ifx-icon{color:#FFFFFF}.modal-header{display:flex;justify-content:space-between;align-items:center;padding:24px;height:76px;box-sizing:border-box;border-radius:1px 1px 0px 0px;border-bottom:1px solid #EEEDED}.modal-header h2{margin:0;font-weight:600;font-size:1.25rem;line-height:28px}.modal-header button{background:none;border:none;font-size:1.5em;padding:0;cursor:pointer}.modal-body{padding:16px 24px;min-height:56px;box-sizing:border-box;flex:1;max-height:70vh;overflow-y:auto}.modal-footer.buttons-present ::slotted(*){display:flex;justify-content:flex-end;gap:16px;padding:16px 24px 32px 16px}.modal-border{display:flex;align-items:center;justify-content:center;width:100%;font-size:1.5em;flex-grow:1}.modal-border.primary{background-color:#0A8276}.modal-border.secondary{background-color:#575352}.modal-border.danger{background-color:#CD002F}.modal-border.success{background-color:#4CA460}.modal-border.warning{background-color:#E16B25}.modal-border.orange{background-color:#E16B25}.modal-border.ocean{background-color:#0A8276}.modal-border.grey{background-color:#575352}.modal-border.grey-200{background-color:#EEEDED}.modal-border.red{background-color:#CD002F}.modal-border.green{background-color:#4CA460}.modal-border.berry{background-color:#9C216E}'}}]);
//# sourceMappingURL=2461.9bbb1251.chunk.js.map