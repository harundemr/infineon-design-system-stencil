"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[7519],{7519:function(e,t,o){o.r(t),o.d(t,{ifx_modal:function(){return f}});var n=o(5671),a=o(3144),i=o(2982),r=o(929);function s(e,t,o){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:20,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=[];if(a>=n)return r;for(var l=function(e){var i=e.assignedNodes().filter((function(e){return 1===e.nodeType}));return i.length>0?s(i[0].parentElement,t,o,n,a+1):[]},d=0,c=Array.from(e.children||[]);d<c.length;d++){var u=c[d];t(u)||(o(u)&&r.push(u),null!=u.shadowRoot?r.push.apply(r,(0,i.Z)(s(u.shadowRoot,t,o,n,a+1))):"SLOT"===u.tagName?r.push.apply(r,(0,i.Z)(l(u))):r.push.apply(r,(0,i.Z)(s(u,t,o,n,a+1))))}return r}function l(e){return e.hasAttribute("hidden")||e.hasAttribute("aria-hidden")&&"false"!==e.getAttribute("aria-hidden")||"none"===e.style.display||"0"===e.style.opacity||"hidden"===e.style.visibility||"collapse"===e.style.visibility}function d(e){return"-1"!==e.getAttribute("tabindex")&&!l(e)&&!function(e){return e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&"false"!==e.getAttribute("aria-disabled")}(e)&&(e.hasAttribute("tabindex")||(e instanceof HTMLAnchorElement||e instanceof HTMLAreaElement)&&e.hasAttribute("href")||e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLIFrameElement)}function c(e,t,o){var n=e.animate(t,Object.assign(Object.assign({},o),{fill:"both"}));return n.addEventListener("finish",(function(){n.commitStyles(),n.cancel()})),n}var u={easing:"cubic-bezier(0.390, 0.575, 0.565, 1.000)"},h={fadeIn:[Object.assign(Object.assign({offset:0},u),{opacity:0}),Object.assign(Object.assign({offset:1},u),{opacity:1})],fadeOut:[Object.assign(Object.assign({offset:0},u),{opacity:1}),Object.assign(Object.assign({offset:1},u),{opacity:0})]},f=function(){function e(t){var o=this;(0,n.Z)(this,e),(0,r.r)(this,t),this.ifxModalOpen=(0,r.c)(this,"ifxModalOpen",7),this.ifxModalClose=(0,r.c)(this,"ifxModalClose",7),this.focusableElements=[],this.handleTopFocus=function(){o.attemptFocus(o.getLastFocusableElement())},this.handleBottomFocus=function(){o.attemptFocus(o.getFirstFocusableElement())},this.handleKeypress=function(e){o.showModal&&"Escape"===e.key&&o.doBeforeClose("ESCAPE_KEY")},this.opened=!1,this.showModal=this.opened||!1,this.caption="Modal Title",this.closeOnOverlayClick=!0,this.variant="default",this.alertIcon="",this.okButtonLabel="OK",this.cancelButtonLabel="Cancel"}return(0,a.Z)(e,[{key:"componentDidLoad",value:function(){this.focusableElements=s(this.hostElement.shadowRoot,(function(e){return l(e)||e.matches("[data-focus-trap-edge]")}),d)}},{key:"getFirstFocusableElement",value:function(){return this.focusableElements[0]}},{key:"getLastFocusableElement",value:function(){return this.focusableElements[this.focusableElements.length-1]}},{key:"attemptFocus",value:function(e){var t=this;null!=e?setTimeout((function(){e.focus()}),0):setTimeout((function(){t.closeButton.focus()}))}},{key:"open",value:function(){var e=this;this.showModal=!0,console.log("attempt focus");try{c(this.modalContainer,h.fadeIn,{duration:200}).addEventListener("finish",(function(){e.attemptFocus(e.getFirstFocusableElement()),e.ifxModalOpen.emit()})),this.hostElement.addEventListener("keydown",this.handleKeypress)}catch(t){this.ifxModalOpen.emit()}}},{key:"close",value:function(){var e=this;try{c(this.modalContainer,h.fadeOut,{duration:200}).addEventListener("finish",(function(){e.showModal=!1,e.ifxModalClose.emit()})),this.hostElement.removeEventListener("keydown",this.handleKeypress)}catch(t){this.showModal=!1,this.ifxModalClose.emit()}}},{key:"doBeforeClose",value:function(e){var t=[];t.push(e),t.some((function(e){return e.defaultPrevented}))||(this.opened=!1)}},{key:"openedChanged",value:function(e){!0===e?this.open():this.close()}},{key:"handleOverlayClick",value:function(){this.closeOnOverlayClick&&this.doBeforeClose("BACKDROP")}},{key:"render",value:function(){var e=this,t="default"!==this.variant;return(0,r.h)(r.a,null,(0,r.h)("div",{ref:function(t){return e.modalContainer=t},class:"modal-container ".concat(this.showModal?"open":"")},(0,r.h)("div",{class:"modal-overlay",onClick:function(){return e.handleOverlayClick()}}),(0,r.h)("div",{"data-focus-trap-edge":!0,onFocus:this.handleTopFocus,tabindex:"0"}),(0,r.h)("div",{class:"modal-content-container",role:"dialog","aria-modal":"true","aria-label":this.caption},t?(0,r.h)("div",{class:"modal-icon-container ".concat("alert-brand"===this.variant?"":"danger")},this.alertIcon?(0,r.h)("ifx-icon",{icon:this.alertIcon}):null):null,(0,r.h)("div",{class:"modal-content"},(0,r.h)("div",{class:"modal-header"},(0,r.h)("h2",null,this.caption),(0,r.h)("ifx-icon-button",{ref:function(t){return e.closeButton=t},icon:"cross-24",variant:"tertiary",onClick:function(){return e.doBeforeClose("CLOSE_BUTTON")}})),(0,r.h)("div",{class:"modal-body"},(0,r.h)("slot",{name:"content"})),(0,r.h)("div",{class:"modal-footer"},(0,r.h)("slot",{name:"buttons"},(0,r.h)("ifx-button",{"aria-label":this.okButtonLabel},this.okButtonLabel),(0,r.h)("ifx-button",{variant:"secondary","aria-label":this.cancelButtonLabel},this.cancelButtonLabel))))),(0,r.h)("div",{"data-focus-trap-edge":!0,onFocus:this.handleBottomFocus,tabindex:"0"})))}},{key:"hostElement",get:function(){return(0,r.g)(this)}}],[{key:"watchers",get:function(){return{opened:["openedChanged"]}}}]),e}();f.style='*{font-family:"Source Sans 3"}:host{display:block}.modal-container{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000}.modal-container.open{display:block}.modal-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1D1D1D;opacity:0.5;z-index:0}.modal-content-container{position:absolute;display:flex;align-items:center;justify-content:center;top:50%;left:50%;transform:translate(-50%, -50%);width:90%;height:218px;background-color:#fff;border-radius:0;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);overflow:hidden;box-sizing:border-box;font-family:"Source Sans 3"}@media screen and (min-width: 768px){.modal-content-container{width:540px;height:220px}}.modal-content{display:flex;flex-direction:column;width:100%;height:100%}.modal-icon-container{display:flex;align-items:center;justify-content:center;width:32px;background-color:#0A8276;height:100%}.modal-icon-container.danger{background-color:#CD002F}.modal-icon-container ifx-icon{color:#FFFFFF}.modal-header{display:flex;justify-content:space-between;align-items:center;padding:24px;height:76px;box-sizing:border-box;border-radius:1px 1px 0px 0px;border-bottom:1px solid #EEEDED}.modal-header h2{margin:0;font-weight:600;font-size:1.25rem;line-height:28px}.modal-header button{background:none;border:none;font-size:1.5em;padding:0;cursor:pointer}.modal-body{padding:16px 24px;height:56px;box-sizing:border-box;flex:1}.modal-body slot[name=content]{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.modal-footer{display:flex;align-items:center;padding-top:16px;padding-bottom:32px;padding-right:24px;gap:1em;height:88px;box-sizing:border-box;margin-left:auto}.modal-footer ::slotted(*){display:flex;gap:24px}.modal-border{display:flex;align-items:center;justify-content:center;width:100%;font-size:1.5em;flex-grow:1}.modal-border.primary{background-color:#0A8276}.modal-border.secondary{background-color:#575352}.modal-border.danger{background-color:#CD002F}.modal-border.success{background-color:#4CA460}.modal-border.warning{background-color:#E16B25}.modal-border.orange{background-color:#E16B25}.modal-border.ocean{background-color:#0A8276}.modal-border.grey{background-color:#575352}.modal-border.grey-200{background-color:#EEEDED}.modal-border.red{background-color:#CD002F}.modal-border.green{background-color:#4CA460}.modal-border.berry{background-color:#9C216E}'}}]);
//# sourceMappingURL=7519.6aafadc6.chunk.js.map