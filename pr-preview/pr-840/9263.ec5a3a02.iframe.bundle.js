"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[9263],{"./dist/esm/ifx-modal.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_modal:()=>IfxModal});var _index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-34963df7.js");function queryShadowRoot(root,skipNode,isMatch,maxDepth=20,depth=0){const matches=[];if(depth>=maxDepth)return matches;const traverseSlot=$slot=>{const assignedNodes=$slot.assignedNodes().filter((node=>1===node.nodeType));if(assignedNodes.length>0){return queryShadowRoot(assignedNodes[0].parentElement,skipNode,isMatch,maxDepth,depth+1)}return[]},children=Array.from(root.children||[]);for(const $child of children)skipNode($child)||(isMatch($child)&&matches.push($child),null!=$child.shadowRoot?matches.push(...queryShadowRoot($child.shadowRoot,skipNode,isMatch,maxDepth,depth+1)):"SLOT"===$child.tagName?matches.push(...traverseSlot($child)):matches.push(...queryShadowRoot($child,skipNode,isMatch,maxDepth,depth+1)));return matches}function isHidden($elem){return $elem.hasAttribute("hidden")||$elem.hasAttribute("aria-hidden")&&"false"!==$elem.getAttribute("aria-hidden")||"none"===$elem.style.display||"0"===$elem.style.opacity||"hidden"===$elem.style.visibility||"collapse"===$elem.style.visibility}function isFocusable($elem){return"-1"!==$elem.getAttribute("tabindex")&&!isHidden($elem)&&!function isDisabled($elem){return $elem.hasAttribute("disabled")||$elem.hasAttribute("aria-disabled")&&"false"!==$elem.getAttribute("aria-disabled")}($elem)&&($elem.hasAttribute("tabindex")||($elem instanceof HTMLAnchorElement||$elem instanceof HTMLAreaElement)&&$elem.hasAttribute("href")||$elem instanceof HTMLButtonElement||$elem instanceof HTMLInputElement||$elem instanceof HTMLTextAreaElement||$elem instanceof HTMLSelectElement||$elem instanceof HTMLIFrameElement)}function animationTo(element,keyframes,options){const animated=element.animate(keyframes,Object.assign(Object.assign({},options),{fill:"both"}));return animated.addEventListener("finish",(()=>{animated.commitStyles(),animated.cancel()})),animated}const keyframeDefaults={easing:"cubic-bezier(0.390, 0.575, 0.565, 1.000)"},KEYFRAMES={fadeIn:[Object.assign(Object.assign({offset:0},keyframeDefaults),{opacity:0}),Object.assign(Object.assign({offset:1},keyframeDefaults),{opacity:1})],fadeOut:[Object.assign(Object.assign({offset:0},keyframeDefaults),{opacity:1}),Object.assign(Object.assign({offset:1},keyframeDefaults),{opacity:0})]},IfxModal=class{constructor(hostRef){(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxModalOpen=(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxModalOpen",7),this.ifxModalClose=(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxModalClose",7),this.focusableElements=[],this.handleTopFocus=()=>{this.attemptFocus(this.getLastFocusableElement())},this.handleBottomFocus=()=>{this.attemptFocus(this.getFirstFocusableElement())},this.handleKeypress=event=>{this.showModal&&"Escape"===event.key&&this.doBeforeClose("ESCAPE_KEY")},this.opened=!1,this.showModal=this.opened||!1,this.caption="Modal Title",this.closeOnOverlayClick=!0,this.variant="default",this.alertIcon="",this.okButtonLabel="OK",this.cancelButtonLabel="Cancel"}componentDidLoad(){this.focusableElements=queryShadowRoot(this.hostElement.shadowRoot,(el=>isHidden(el)||el.matches("[data-focus-trap-edge]")),isFocusable)}getFirstFocusableElement(){return this.focusableElements[0]}getLastFocusableElement(){return this.focusableElements[this.focusableElements.length-1]}attemptFocus(element){null!=element?setTimeout((()=>{element.focus()}),0):setTimeout((()=>{this.closeButton.focus()}))}open(){this.showModal=!0,console.log("attempt focus");try{animationTo(this.modalContainer,KEYFRAMES.fadeIn,{duration:200}).addEventListener("finish",(()=>{this.attemptFocus(this.getFirstFocusableElement()),this.ifxModalOpen.emit()})),this.hostElement.addEventListener("keydown",this.handleKeypress)}catch(err){this.ifxModalOpen.emit()}}close(){try{animationTo(this.modalContainer,KEYFRAMES.fadeOut,{duration:200}).addEventListener("finish",(()=>{this.showModal=!1,this.ifxModalClose.emit()})),this.hostElement.removeEventListener("keydown",this.handleKeypress)}catch(err){this.showModal=!1,this.ifxModalClose.emit()}}doBeforeClose(trigger){const triggers=[];triggers.push(trigger);triggers.some((event=>event.defaultPrevented))||(this.opened=!1)}openedChanged(newValue){!0===newValue?this.open():this.close()}handleOverlayClick(){this.closeOnOverlayClick&&this.doBeforeClose("BACKDROP")}render(){const isAlertVariant="default"!==this.variant;return(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.a,null,(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{ref:el=>this.modalContainer=el,class:"modal-container "+(this.showModal?"open":"")},(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"modal-overlay",onClick:()=>this.handleOverlayClick()}),(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{"data-focus-trap-edge":!0,onFocus:this.handleTopFocus,tabindex:"0"}),(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"modal-content-container",role:"dialog","aria-modal":"true","aria-label":this.caption},isAlertVariant?(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"modal-icon-container "+("alert-brand"===this.variant?"":"danger")},this.alertIcon?(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:this.alertIcon}):null):null,(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"modal-content"},(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"modal-header"},(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("h2",null,this.caption),(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon-button",{ref:el=>this.closeButton=el,icon:"cross-24",variant:"tertiary",onClick:()=>this.doBeforeClose("CLOSE_BUTTON")})),(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"modal-body"},(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"content"})),(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"modal-footer"},(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"buttons"},(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-button",{"aria-label":this.okButtonLabel},this.okButtonLabel),(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-button",{variant:"secondary","aria-label":this.cancelButtonLabel},this.cancelButtonLabel))))),(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{"data-focus-trap-edge":!0,onFocus:this.handleBottomFocus,tabindex:"0"})))}get hostElement(){return(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{opened:["openedChanged"]}}};IfxModal.style='*{font-family:"Source Sans 3"}:host{display:block}.modal-container{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1060}.modal-container.open{display:block}.modal-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1D1D1D;opacity:0.5;z-index:0}.modal-content-container{position:absolute;display:flex;align-items:center;justify-content:center;top:50%;left:50%;transform:translate(-50%, -50%);width:90%;height:218px;background-color:#fff;border-radius:0;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);overflow:hidden;box-sizing:border-box;font-family:"Source Sans 3"}@media screen and (min-width: 768px){.modal-content-container{width:540px;height:220px}}.modal-content{display:flex;flex-direction:column;width:100%;height:100%}.modal-icon-container{display:flex;align-items:center;justify-content:center;width:32px;background-color:#0A8276;height:100%}.modal-icon-container.danger{background-color:#CD002F}.modal-icon-container ifx-icon{color:#FFFFFF}.modal-header{display:flex;justify-content:space-between;align-items:center;padding:24px;height:76px;box-sizing:border-box;border-radius:1px 1px 0px 0px;border-bottom:1px solid #EEEDED}.modal-header h2{margin:0;font-weight:600;font-size:1.25rem;line-height:28px}.modal-header button{background:none;border:none;font-size:1.5em;padding:0;cursor:pointer}.modal-body{padding:16px 24px;height:56px;box-sizing:border-box;flex:1}.modal-body slot[name=content]{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.modal-footer{display:flex;align-items:center;padding-top:16px;padding-bottom:32px;padding-right:24px;gap:1em;height:88px;box-sizing:border-box;margin-left:auto}.modal-footer ::slotted(*){display:flex;gap:24px}.modal-border{display:flex;align-items:center;justify-content:center;width:100%;font-size:1.5em;flex-grow:1}.modal-border.primary{background-color:#0A8276}.modal-border.secondary{background-color:#575352}.modal-border.danger{background-color:#CD002F}.modal-border.success{background-color:#4CA460}.modal-border.warning{background-color:#E16B25}.modal-border.orange{background-color:#E16B25}.modal-border.ocean{background-color:#0A8276}.modal-border.grey{background-color:#575352}.modal-border.grey-200{background-color:#EEEDED}.modal-border.red{background-color:#CD002F}.modal-border.green{background-color:#4CA460}.modal-border.berry{background-color:#9C216E}'}}]);