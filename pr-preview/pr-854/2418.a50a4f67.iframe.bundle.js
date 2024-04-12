"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[2418],{"./dist/esm/ifx-modal.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_modal:()=>IfxModal});var _index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-77e9cc30.js");function queryShadowRoot(root,skipNode,isMatch,maxDepth=20,depth=0){const matches=[];if(depth>=maxDepth)return matches;const traverseSlot=$slot=>{const assignedNodes=$slot.assignedNodes().filter((node=>1===node.nodeType));if(assignedNodes.length>0){return queryShadowRoot(assignedNodes[0].parentElement,skipNode,isMatch,maxDepth,depth+1)}return[]},children=Array.from(root.children||[]);for(const $child of children)skipNode($child)||(isMatch($child)&&matches.push($child),null!=$child.shadowRoot?matches.push(...queryShadowRoot($child.shadowRoot,skipNode,isMatch,maxDepth,depth+1)):"SLOT"===$child.tagName?matches.push(...traverseSlot($child)):matches.push(...queryShadowRoot($child,skipNode,isMatch,maxDepth,depth+1)));return matches}function isHidden($elem){return $elem.hasAttribute("hidden")||$elem.hasAttribute("aria-hidden")&&"false"!==$elem.getAttribute("aria-hidden")||"none"===$elem.style.display||"0"===$elem.style.opacity||"hidden"===$elem.style.visibility||"collapse"===$elem.style.visibility}function isFocusable($elem){return"-1"!==$elem.getAttribute("tabindex")&&!isHidden($elem)&&!function isDisabled($elem){return $elem.hasAttribute("disabled")||$elem.hasAttribute("aria-disabled")&&"false"!==$elem.getAttribute("aria-disabled")}($elem)&&($elem.hasAttribute("tabindex")||($elem instanceof HTMLAnchorElement||$elem instanceof HTMLAreaElement)&&$elem.hasAttribute("href")||$elem instanceof HTMLButtonElement||$elem instanceof HTMLInputElement||$elem instanceof HTMLTextAreaElement||$elem instanceof HTMLSelectElement||$elem instanceof HTMLIFrameElement)}function animationTo(element,keyframes,options){const animated=element.animate(keyframes,Object.assign(Object.assign({},options),{fill:"both"}));return animated.addEventListener("finish",(()=>{animated.commitStyles(),animated.cancel()})),animated}const keyframeDefaults={easing:"cubic-bezier(0.390, 0.575, 0.565, 1.000)"},KEYFRAMES={fadeIn:[Object.assign(Object.assign({offset:0},keyframeDefaults),{opacity:0}),Object.assign(Object.assign({offset:1},keyframeDefaults),{opacity:1})],fadeOut:[Object.assign(Object.assign({offset:0},keyframeDefaults),{opacity:1}),Object.assign(Object.assign({offset:1},keyframeDefaults),{opacity:0})]},IfxModal=class{constructor(hostRef){(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxModalOpen=(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxModalOpen",7),this.ifxModalClose=(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxModalClose",7),this.focusableElements=[],this.handleTopFocus=()=>{this.attemptFocus(this.getLastFocusableElement())},this.handleBottomFocus=()=>{this.attemptFocus(this.getFirstFocusableElement())},this.handleKeypress=event=>{this.showModal&&"Escape"===event.key&&this.doBeforeClose("ESCAPE_KEY")},this.opened=!1,this.showModal=this.opened||!1,this.caption="Modal Title",this.closeOnOverlayClick=!0,this.variant="default",this.alertIcon="",this.okButtonLabel="OK",this.cancelButtonLabel="Cancel",this.slotButtonsPresent=!1,this.showCloseButton=!0}componentDidLoad(){this.focusableElements=queryShadowRoot(this.hostElement.shadowRoot,(el=>isHidden(el)||el.matches("[data-focus-trap-edge]")),isFocusable)}getFirstFocusableElement(){return this.focusableElements[0]}getLastFocusableElement(){return this.focusableElements[this.focusableElements.length-1]}attemptFocus(element){null!=element?setTimeout((()=>{element.focus()}),0):setTimeout((()=>{this.closeButton.focus()}))}open(){this.showModal=!0;try{animationTo(this.modalContainer,KEYFRAMES.fadeIn,{duration:200}).addEventListener("finish",(()=>{this.attemptFocus(this.getFirstFocusableElement()),this.ifxModalOpen.emit()})),this.hostElement.addEventListener("keydown",this.handleKeypress)}catch(err){this.ifxModalOpen.emit()}}close(){try{animationTo(this.modalContainer,KEYFRAMES.fadeOut,{duration:200}).addEventListener("finish",(()=>{this.showModal=!1,this.ifxModalClose.emit()})),this.hostElement.removeEventListener("keydown",this.handleKeypress)}catch(err){this.showModal=!1,this.ifxModalClose.emit()}}doBeforeClose(trigger){const triggers=[];triggers.push(trigger);triggers.some((event=>event.defaultPrevented))||(this.opened=!1)}openedChanged(newValue){!0===newValue?this.open():this.close()}handleOverlayClick(){this.closeOnOverlayClick&&this.doBeforeClose("BACKDROP")}handleButtonsSlotChange(e){var _a;(null===(_a=e.currentTarget.assignedElements()[0])||void 0===_a?void 0:_a.childElementCount)>0?this.slotButtonsPresent=!0:this.slotButtonsPresent=!1}render(){const isAlertVariant="default"!==this.variant;return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.a,{key:"f0813d1a7e4f67c3c0a5cdd223a3b2ff15599b74"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"e7afd81ae3c34606fec4964f4d064a4a5d4639ef",ref:el=>this.modalContainer=el,class:"modal-container "+(this.showModal?"open":"")},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"f76ab35c1d23f8c85ef8f25c839a785c48d69b5d",class:"modal-overlay",onClick:()=>this.handleOverlayClick()}),(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"c43a7f61d549ad93d5577d49ac4cbc420622f43b","data-focus-trap-edge":!0,onFocus:this.handleTopFocus,tabindex:"0"}),(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"bac5195ac2880f7fa258f6ce8d7626a15c210085",class:"modal-content-container",role:"dialog","aria-modal":"true","aria-label":this.caption},isAlertVariant?(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"modal-icon-container "+("alert-brand"===this.variant?"":"danger")},this.alertIcon?(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:this.alertIcon}):null):null,(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"90e5a23f42dc008172db58a6367a061a643cd5c0",class:"modal-content"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"2d40f525434ffdb9a0147f3f2b6e574a9f36bfcd",class:"modal-header"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("h2",{key:"5cba0fa055e6f577b00db23c9ea5fbb5258b978e",class:"modal-caption"},this.caption),this.showCloseButton&&(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon-button",{class:"modal-close-button",ref:el=>this.closeButton=el,icon:"cross-24",variant:"tertiary",onClick:()=>this.doBeforeClose("CLOSE_BUTTON")})),(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"b424926417a92bf80a2118cccb3ecceb51661710",class:"modal-body"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"d658802533066be28f5f7ecfd98df0f52cce86a6",name:"content"})),(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"d2bbc9e119f08bdb63d107304f60d46607e26d23",class:"modal-footer "+(this.slotButtonsPresent?"buttons-present":"")},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"1ed1c4d49d506cc62c3722a9f2c25d032c5cd6d6",name:"buttons",onSlotchange:e=>this.handleButtonsSlotChange(e)})))),(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"bf9623ceab205d2276764183a504bfe45c2e0662","data-focus-trap-edge":!0,onFocus:this.handleBottomFocus,tabindex:"0"})))}get hostElement(){return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{opened:["openedChanged"]}}};IfxModal.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:block}.modal-container{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1060;overflow-y:auto;font-family:var(--ifx-font-family)}.modal-container.open{display:block}.modal-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1D1D1D;opacity:0.5;z-index:0}.modal-content-container{position:absolute;display:flex;justify-content:center;top:50%;left:50%;transform:translate(-50%, -50%);width:90%;min-height:218px;background-color:#fff;border-radius:0;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);overflow:hidden;box-sizing:border-box;align-items:stretch}@media screen and (min-width: 768px){.modal-content-container{width:540px;min-height:132px}}.modal-content{display:flex;flex-direction:column;width:100%;max-height:90vh}.modal-icon-container{display:flex;align-items:center;justify-content:center;width:32px;background-color:#0A8276;align-self:stretch}.modal-icon-container.danger{background-color:#CD002F}.modal-icon-container ifx-icon{color:#FFFFFF}.modal-header{display:flex;justify-content:space-between;align-items:center;padding:24px;min-height:76px;max-height:105px;box-sizing:border-box;border-radius:1px 1px 0px 0px;border-bottom:1px solid #EEEDED}.modal-caption{max-height:56px;display:-webkit-box;overflow:hidden;white-space:pre-wrap;word-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical}.modal-header h2{margin:0;font-weight:600;font-size:1.25rem;line-height:28px}.modal-header button{background:none;border:none;font-size:1.5em;padding:0;cursor:pointer}.modal-close-button{align-self:flex-start;margin-right:-8px}.modal-body{padding:16px 24px;min-height:56px;box-sizing:border-box;flex:1;overflow-y:auto}.modal-footer.buttons-present ::slotted(*){display:flex;justify-content:flex-end;gap:16px;padding:16px 24px 32px 16px}.modal-border{display:flex;align-items:center;justify-content:center;width:100%;font-size:1.5em;flex-grow:1}.modal-border.primary{background-color:#0A8276}.modal-border.secondary{background-color:#575352}.modal-border.danger{background-color:#CD002F}.modal-border.success{background-color:#4CA460}.modal-border.warning{background-color:#E16B25}.modal-border.orange{background-color:#E16B25}.modal-border.ocean{background-color:#0A8276}.modal-border.grey{background-color:#575352}.modal-border.grey-200{background-color:#EEEDED}.modal-border.red{background-color:#CD002F}.modal-border.green{background-color:#4CA460}.modal-border.berry{background-color:#9C216E}'}}]);