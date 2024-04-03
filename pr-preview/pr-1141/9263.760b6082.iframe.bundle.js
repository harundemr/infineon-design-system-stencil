"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[9263],{"./dist/esm/ifx-modal.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_modal:()=>IfxModal});var _index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-77e9cc30.js");function queryShadowRoot(root,skipNode,isMatch,maxDepth=20,depth=0){const matches=[];if(depth>=maxDepth)return matches;const traverseSlot=$slot=>{const assignedNodes=$slot.assignedNodes().filter((node=>1===node.nodeType));if(assignedNodes.length>0){return queryShadowRoot(assignedNodes[0].parentElement,skipNode,isMatch,maxDepth,depth+1)}return[]},children=Array.from(root.children||[]);for(const $child of children)skipNode($child)||(isMatch($child)&&matches.push($child),null!=$child.shadowRoot?matches.push(...queryShadowRoot($child.shadowRoot,skipNode,isMatch,maxDepth,depth+1)):"SLOT"===$child.tagName?matches.push(...traverseSlot($child)):matches.push(...queryShadowRoot($child,skipNode,isMatch,maxDepth,depth+1)));return matches}function isHidden($elem){return $elem.hasAttribute("hidden")||$elem.hasAttribute("aria-hidden")&&"false"!==$elem.getAttribute("aria-hidden")||"none"===$elem.style.display||"0"===$elem.style.opacity||"hidden"===$elem.style.visibility||"collapse"===$elem.style.visibility}function isFocusable($elem){return"-1"!==$elem.getAttribute("tabindex")&&!isHidden($elem)&&!function isDisabled($elem){return $elem.hasAttribute("disabled")||$elem.hasAttribute("aria-disabled")&&"false"!==$elem.getAttribute("aria-disabled")}($elem)&&($elem.hasAttribute("tabindex")||($elem instanceof HTMLAnchorElement||$elem instanceof HTMLAreaElement)&&$elem.hasAttribute("href")||$elem instanceof HTMLButtonElement||$elem instanceof HTMLInputElement||$elem instanceof HTMLTextAreaElement||$elem instanceof HTMLSelectElement||$elem instanceof HTMLIFrameElement)}function animationTo(element,keyframes,options){const animated=element.animate(keyframes,Object.assign(Object.assign({},options),{fill:"both"}));return animated.addEventListener("finish",(()=>{animated.commitStyles(),animated.cancel()})),animated}const keyframeDefaults={easing:"cubic-bezier(0.390, 0.575, 0.565, 1.000)"},KEYFRAMES={fadeIn:[Object.assign(Object.assign({offset:0},keyframeDefaults),{opacity:0}),Object.assign(Object.assign({offset:1},keyframeDefaults),{opacity:1})],fadeOut:[Object.assign(Object.assign({offset:0},keyframeDefaults),{opacity:1}),Object.assign(Object.assign({offset:1},keyframeDefaults),{opacity:0})]},IfxModal=class{constructor(hostRef){(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxModalOpen=(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxModalOpen",7),this.ifxModalClose=(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxModalClose",7),this.focusableElements=[],this.handleTopFocus=()=>{this.attemptFocus(this.getLastFocusableElement())},this.handleBottomFocus=()=>{this.attemptFocus(this.getFirstFocusableElement())},this.handleKeypress=event=>{this.showModal&&"Escape"===event.key&&this.doBeforeClose("ESCAPE_KEY")},this.opened=!1,this.showModal=this.opened||!1,this.caption="Modal Title",this.closeOnOverlayClick=!0,this.variant="default",this.width="s",this.alertIcon="",this.okButtonLabel="OK",this.cancelButtonLabel="Cancel",this.slotButtonsPresent=!1,this.showCloseButton=!0}componentDidLoad(){this.focusableElements=queryShadowRoot(this.hostElement.shadowRoot,(el=>isHidden(el)||el.matches("[data-focus-trap-edge]")),isFocusable)}getFirstFocusableElement(){return this.focusableElements[0]}getLastFocusableElement(){return this.focusableElements[this.focusableElements.length-1]}attemptFocus(element){null!=element?setTimeout((()=>{element.focus()}),0):setTimeout((()=>{this.closeButton.focus()}))}open(){this.showModal=!0;try{animationTo(this.modalContainer,KEYFRAMES.fadeIn,{duration:200}).addEventListener("finish",(()=>{this.attemptFocus(this.getFirstFocusableElement()),this.ifxModalOpen.emit()})),this.hostElement.addEventListener("keydown",this.handleKeypress)}catch(err){this.ifxModalOpen.emit()}}close(){try{animationTo(this.modalContainer,KEYFRAMES.fadeOut,{duration:200}).addEventListener("finish",(()=>{this.showModal=!1,this.ifxModalClose.emit()})),this.hostElement.removeEventListener("keydown",this.handleKeypress)}catch(err){this.showModal=!1,this.ifxModalClose.emit()}}doBeforeClose(trigger){const triggers=[];triggers.push(trigger);triggers.some((event=>event.defaultPrevented))||(this.opened=!1)}openedChanged(newValue){!0===newValue?this.open():this.close()}handleOverlayClick(){this.closeOnOverlayClick&&this.doBeforeClose("BACKDROP")}handleButtonsSlotChange(e){var _a;(null===(_a=e.currentTarget.assignedElements()[0])||void 0===_a?void 0:_a.childElementCount)>0?this.slotButtonsPresent=!0:this.slotButtonsPresent=!1}render(){const isAlertVariant="default"!==this.variant;return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.a,{key:"36c8e6906da525c0f4375fb8b61df275aa1144f9"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"3f1dfdef35b666f4b9ab82ffd18e500e48c84830",ref:el=>this.modalContainer=el,class:"modal-container "+(this.showModal?"open":"")},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"9d5bcc17a929b79f149428127fc0b696a137c1ca",class:"modal-overlay",onClick:()=>this.handleOverlayClick()}),(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"5ec369a810437a72ed7328a087a8d6531e69af0b","data-focus-trap-edge":!0,onFocus:this.handleTopFocus,tabindex:"0"}),(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"fbec208304a7b1d0318da5cf38b9b2da85a26a2a",class:`modal-content-container ${this.width}`,role:"dialog","aria-modal":"true","aria-label":this.caption},isAlertVariant?(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"modal-icon-container "+("alert-brand"===this.variant?"":"danger")},this.alertIcon?(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:this.alertIcon}):null):null,(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"a74f7625bed8350d071f415f90860036f2688fb9",class:"modal-content"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"177c628121be4556159ca6b6acc37c25aed1bc25",class:"modal-header"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("h2",{key:"6e94caeea13a57e266de5d0853a230aae3f21cd0",class:"modal-caption"},this.caption),this.showCloseButton&&(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon-button",{class:"modal-close-button",ref:el=>this.closeButton=el,icon:"cross-24",variant:"tertiary",onClick:()=>this.doBeforeClose("CLOSE_BUTTON")})),(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"ecd6dbea922bf3973682a2fb01ed9196e8213d6a",class:"modal-body"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"50877e2c0f04c9a188af5910f7db31bdec209ae5",name:"content"})),(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"6685d796bdab74c3d171cd7a1738fffda51f3a0a",class:"modal-footer "+(this.slotButtonsPresent?"buttons-present":"")},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"05f446ac148cb8e405a99bcaf3976c5ebd043d25",name:"buttons",onSlotchange:e=>this.handleButtonsSlotChange(e)})))),(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"b820a7e6155be1043b95ec57c0d892867578a9f6","data-focus-trap-edge":!0,onFocus:this.handleBottomFocus,tabindex:"0"})))}get hostElement(){return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{opened:["openedChanged"]}}};IfxModal.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:block}.modal-container{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1060;overflow-y:auto;font-family:var(--ifx-font-family)}.modal-container.open{display:block}.modal-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1D1D1D;opacity:0.5;z-index:0}.modal-content-container{position:absolute;display:flex;justify-content:center;top:50%;left:50%;transform:translate(-50%, -50%);width:90%;min-height:218px;background-color:#fff;border-radius:0;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);overflow:hidden;box-sizing:border-box;align-items:stretch}@media screen and (min-width: 768px){.modal-content-container{width:540px;min-height:132px}}@media screen and (min-width: 1024px){.modal-content-container.s{width:47vw}.modal-content-container.m{width:63vw}.modal-content-container.l{width:90%}}.modal-content{display:flex;flex-direction:column;width:100%;max-height:90vh}.modal-icon-container{display:flex;align-items:center;justify-content:center;width:32px;background-color:#0A8276;align-self:stretch}.modal-icon-container.danger{background-color:#CD002F}.modal-icon-container ifx-icon{color:#FFFFFF}.modal-header{display:flex;justify-content:space-between;align-items:center;padding:24px;min-height:76px;max-height:105px;box-sizing:border-box;border-radius:1px 1px 0px 0px;border-bottom:1px solid #EEEDED}.modal-caption{max-height:56px;display:-webkit-box;overflow:hidden;white-space:pre-wrap;word-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical}.modal-header h2{margin:0;font-weight:600;font-size:1.25rem;line-height:28px}.modal-header button{background:none;border:none;font-size:1.5em;padding:0;cursor:pointer}.modal-close-button{align-self:flex-start;margin-right:-8px}.modal-body{padding:16px 24px;min-height:56px;box-sizing:border-box;flex:1;overflow-y:auto}.modal-footer.buttons-present ::slotted(*){display:flex;justify-content:flex-end;gap:16px;padding:16px 24px 32px 16px}.modal-border{display:flex;align-items:center;justify-content:center;width:100%;font-size:1.5em;flex-grow:1}.modal-border.primary{background-color:#0A8276}.modal-border.secondary{background-color:#575352}.modal-border.danger{background-color:#CD002F}.modal-border.success{background-color:#4CA460}.modal-border.warning{background-color:#E16B25}.modal-border.orange{background-color:#E16B25}.modal-border.ocean{background-color:#0A8276}.modal-border.grey{background-color:#575352}.modal-border.grey-200{background-color:#EEEDED}.modal-border.red{background-color:#CD002F}.modal-border.green{background-color:#4CA460}.modal-border.berry{background-color:#9C216E}'}}]);