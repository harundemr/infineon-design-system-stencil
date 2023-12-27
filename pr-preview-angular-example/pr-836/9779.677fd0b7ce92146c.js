"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[9779],{9779:(k,u,c)=>{c.r(u),c.d(u,{ifx_modal:()=>p});var e=c(4004);function r(t,o,i,n=20,d=0){const s=[];if(d>=n)return s;const v=a=>{const g=a.assignedNodes().filter(h=>1===h.nodeType);return g.length>0?r(g[0].parentElement,o,i,n,d+1):[]},C=Array.from(t.children||[]);for(const a of C)o(a)||(i(a)&&s.push(a),null!=a.shadowRoot?s.push(...r(a.shadowRoot,o,i,n,d+1)):"SLOT"===a.tagName?s.push(...v(a)):s.push(...r(a,o,i,n,d+1)));return s}function f(t){return t.hasAttribute("hidden")||t.hasAttribute("aria-hidden")&&"false"!==t.getAttribute("aria-hidden")||"none"===t.style.display||"0"===t.style.opacity||"hidden"===t.style.visibility||"collapse"===t.style.visibility}function y(t){return"-1"!==t.getAttribute("tabindex")&&!f(t)&&!function x(t){return t.hasAttribute("disabled")||t.hasAttribute("aria-disabled")&&"false"!==t.getAttribute("aria-disabled")}(t)&&(t.hasAttribute("tabindex")||(t instanceof HTMLAnchorElement||t instanceof HTMLAreaElement)&&t.hasAttribute("href")||t instanceof HTMLButtonElement||t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement||t instanceof HTMLIFrameElement)}function b(t,o,i){const n=t.animate(o,Object.assign(Object.assign({},i),{fill:"both"}));return n.addEventListener("finish",()=>{n.commitStyles(),n.cancel()}),n}const l={easing:"cubic-bezier(0.390, 0.575, 0.565, 1.000)"},m={fadeIn:[Object.assign(Object.assign({offset:0},l),{opacity:0}),Object.assign(Object.assign({offset:1},l),{opacity:1})],fadeOut:[Object.assign(Object.assign({offset:0},l),{opacity:1}),Object.assign(Object.assign({offset:1},l),{opacity:0})]},p=class{constructor(t){(0,e.r)(this,t),this.ifxModalOpen=(0,e.c)(this,"ifxModalOpen",7),this.ifxModalClose=(0,e.c)(this,"ifxModalClose",7),this.focusableElements=[],this.handleTopFocus=()=>{this.attemptFocus(this.getLastFocusableElement())},this.handleBottomFocus=()=>{this.attemptFocus(this.getFirstFocusableElement())},this.handleKeypress=o=>{this.showModal&&"Escape"===o.key&&this.doBeforeClose("ESCAPE_KEY")},this.opened=!1,this.showModal=this.opened||!1,this.caption="Modal Title",this.closeOnOverlayClick=!0,this.variant="default",this.alertIcon="",this.okButtonLabel="OK",this.cancelButtonLabel="Cancel"}componentDidLoad(){this.focusableElements=r(this.hostElement.shadowRoot,t=>f(t)||t.matches("[data-focus-trap-edge]"),y)}getFirstFocusableElement(){return this.focusableElements[0]}getLastFocusableElement(){return this.focusableElements[this.focusableElements.length-1]}attemptFocus(t){null!=t?setTimeout(()=>{t.focus()},0):setTimeout(()=>{this.closeButton.focus()})}open(){this.showModal=!0;try{b(this.modalContainer,m.fadeIn,{duration:200}).addEventListener("finish",()=>{this.attemptFocus(this.getFirstFocusableElement()),this.ifxModalOpen.emit()}),this.hostElement.addEventListener("keydown",this.handleKeypress)}catch{this.ifxModalOpen.emit()}}close(){try{b(this.modalContainer,m.fadeOut,{duration:200}).addEventListener("finish",()=>{this.showModal=!1,this.ifxModalClose.emit()}),this.hostElement.removeEventListener("keydown",this.handleKeypress)}catch{this.showModal=!1,this.ifxModalClose.emit()}}doBeforeClose(t){const o=[];o.push(t),o.some(n=>n.defaultPrevented)||(this.opened=!1)}openedChanged(t){!0===t?this.open():this.close()}handleOverlayClick(){this.closeOnOverlayClick&&this.doBeforeClose("BACKDROP")}render(){const t="default"!==this.variant;return(0,e.h)(e.a,null,(0,e.h)("div",{ref:o=>this.modalContainer=o,class:"modal-container "+(this.showModal?"open":"")},(0,e.h)("div",{class:"modal-overlay",onClick:()=>this.handleOverlayClick()}),(0,e.h)("div",{"data-focus-trap-edge":!0,onFocus:this.handleTopFocus,tabindex:"0"}),(0,e.h)("div",{class:"modal-content-container",role:"dialog","aria-modal":"true","aria-label":this.caption},t?(0,e.h)("div",{class:"modal-icon-container "+("alert-brand"===this.variant?"":"danger")},this.alertIcon?(0,e.h)("ifx-icon",{icon:this.alertIcon}):null):null,(0,e.h)("div",{class:"modal-content"},(0,e.h)("div",{class:"modal-header"},(0,e.h)("h2",null,this.caption),(0,e.h)("ifx-icon-button",{ref:o=>this.closeButton=o,icon:"cross-24",variant:"tertiary",onClick:()=>this.doBeforeClose("CLOSE_BUTTON")})),(0,e.h)("div",{class:"modal-body"},(0,e.h)("slot",{name:"content"})),(0,e.h)("div",{class:"modal-footer"},(0,e.h)("slot",{name:"buttons"},(0,e.h)("ifx-button",{"aria-label":this.okButtonLabel},this.okButtonLabel),(0,e.h)("ifx-button",{variant:"secondary","aria-label":this.cancelButtonLabel},this.cancelButtonLabel))))),(0,e.h)("div",{"data-focus-trap-edge":!0,onFocus:this.handleBottomFocus,tabindex:"0"})))}get hostElement(){return(0,e.g)(this)}static get watchers(){return{opened:["openedChanged"]}}};p.style='*{font-family:"Source Sans 3"}:host{display:block}.modal-container{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;overflow-y:auto}.modal-container.open{display:block}.modal-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1D1D1D;opacity:0.5;z-index:0}.modal-content-container{position:absolute;display:flex;align-items:center;justify-content:center;top:50%;left:50%;transform:translate(-50%, -50%);width:90%;min-height:218px;background-color:#fff;border-radius:0;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);overflow:hidden;box-sizing:border-box;font-family:"Source Sans 3"}@media screen and (min-width: 768px){.modal-content-container{width:540px;min-height:220px}}.modal-content{display:flex;flex-direction:column;width:100%;height:100%}.modal-icon-container{display:flex;align-items:center;justify-content:center;width:32px;background-color:#0A8276;height:100%}.modal-icon-container.danger{background-color:#CD002F}.modal-icon-container ifx-icon{color:#FFFFFF}.modal-header{display:flex;justify-content:space-between;align-items:center;padding:24px;height:76px;box-sizing:border-box;border-radius:1px 1px 0px 0px;border-bottom:1px solid #EEEDED}.modal-header h2{margin:0;font-weight:600;font-size:1.25rem;line-height:28px}.modal-header button{background:none;border:none;font-size:1.5em;padding:0;cursor:pointer}.modal-body{padding:16px 24px;min-height:56px;box-sizing:border-box;flex:1;max-height:70vh;overflow-y:auto}.modal-footer{display:flex;align-items:center;padding-top:16px;padding-bottom:32px;padding-right:24px;gap:1em;height:88px;box-sizing:border-box;margin-left:auto}.modal-footer ::slotted(*){display:flex;gap:24px}.modal-border{display:flex;align-items:center;justify-content:center;width:100%;font-size:1.5em;flex-grow:1}.modal-border.primary{background-color:#0A8276}.modal-border.secondary{background-color:#575352}.modal-border.danger{background-color:#CD002F}.modal-border.success{background-color:#4CA460}.modal-border.warning{background-color:#E16B25}.modal-border.orange{background-color:#E16B25}.modal-border.ocean{background-color:#0A8276}.modal-border.grey{background-color:#575352}.modal-border.grey-200{background-color:#EEEDED}.modal-border.red{background-color:#CD002F}.modal-border.green{background-color:#4CA460}.modal-border.berry{background-color:#9C216E}'}}]);