import{r as x,c as u,h as e,H as y,g as E}from"./index-f2d8f0f9.js";function d(t,o,a,n=20,r=0){const s=[];if(r>=n)return s;const p=i=>{const h=i.assignedNodes().filter(c=>c.nodeType===1);if(h.length>0){const c=h[0].parentElement;return d(c,o,a,n,r+1)}return[]},g=Array.from(t.children||[]);for(const i of g)o(i)||(a(i)&&s.push(i),i.shadowRoot!=null?s.push(...d(i.shadowRoot,o,a,n,r+1)):i.tagName==="SLOT"?s.push(...p(i)):s.push(...d(i,o,a,n,r+1)));return s}function m(t){return t.hasAttribute("hidden")||t.hasAttribute("aria-hidden")&&t.getAttribute("aria-hidden")!=="false"||t.style.display==="none"||t.style.opacity==="0"||t.style.visibility==="hidden"||t.style.visibility==="collapse"}function v(t){return t.hasAttribute("disabled")||t.hasAttribute("aria-disabled")&&t.getAttribute("aria-disabled")!=="false"}function k(t){return t.getAttribute("tabindex")==="-1"||m(t)||v(t)?!1:t.hasAttribute("tabindex")||(t instanceof HTMLAnchorElement||t instanceof HTMLAreaElement)&&t.hasAttribute("href")||t instanceof HTMLButtonElement||t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement||t instanceof HTMLIFrameElement}function f(t,o,a){const n=t.animate(o,Object.assign(Object.assign({},a),{fill:"both"}));return n.addEventListener("finish",()=>{n.commitStyles(),n.cancel()}),n}const l={easing:"cubic-bezier(0.390, 0.575, 0.565, 1.000)"},b={fadeIn:[Object.assign(Object.assign({offset:0},l),{opacity:0}),Object.assign(Object.assign({offset:1},l),{opacity:1})],fadeOut:[Object.assign(Object.assign({offset:0},l),{opacity:1}),Object.assign(Object.assign({offset:1},l),{opacity:0})]},w='*{font-family:"Source Sans 3"}:host{display:block}.modal-container{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000}.modal-container.open{display:block}.modal-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1D1D1D;opacity:0.5;z-index:0}.modal-content-container{position:absolute;display:flex;align-items:center;justify-content:center;top:50%;left:50%;transform:translate(-50%, -50%);width:90%;height:218px;background-color:#fff;border-radius:0;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);overflow:hidden;box-sizing:border-box;font-family:"Source Sans 3"}@media screen and (min-width: 768px){.modal-content-container{width:540px;height:220px}}.modal-content{display:flex;flex-direction:column;width:100%;height:100%}.modal-icon-container{display:flex;align-items:center;justify-content:center;width:32px;background-color:#0A8276;height:100%}.modal-icon-container.danger{background-color:#CD002F}.modal-icon-container ifx-icon{color:#FFFFFF}.modal-header{display:flex;justify-content:space-between;align-items:center;padding:24px;height:76px;box-sizing:border-box;border-radius:1px 1px 0px 0px;border-bottom:1px solid #EEEDED}.modal-header h2{margin:0;font-weight:600;font-size:1.25rem;line-height:28px}.modal-header button{background:none;border:none;font-size:1.5em;padding:0;cursor:pointer}.modal-body{padding:16px 24px;height:56px;box-sizing:border-box;flex:1}.modal-body slot[name=content]{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.modal-footer{display:flex;align-items:center;padding-top:16px;padding-bottom:32px;padding-right:24px;gap:1em;height:88px;box-sizing:border-box;margin-left:auto}.modal-footer ::slotted(*){display:flex;gap:24px}.modal-border{display:flex;align-items:center;justify-content:center;width:100%;font-size:1.5em;flex-grow:1}.modal-border.primary{background-color:#0A8276}.modal-border.secondary{background-color:#575352}.modal-border.danger{background-color:#CD002F}.modal-border.success{background-color:#4CA460}.modal-border.warning{background-color:#E16B25}.modal-border.orange{background-color:#E16B25}.modal-border.ocean{background-color:#0A8276}.modal-border.grey{background-color:#575352}.modal-border.grey-200{background-color:#EEEDED}.modal-border.red{background-color:#CD002F}.modal-border.green{background-color:#4CA460}.modal-border.berry{background-color:#9C216E}',C=class{constructor(t){x(this,t),this.ifxModalOpen=u(this,"ifxModalOpen",7),this.ifxModalClose=u(this,"ifxModalClose",7),this.focusableElements=[],this.handleTopFocus=()=>{this.attemptFocus(this.getLastFocusableElement())},this.handleBottomFocus=()=>{this.attemptFocus(this.getFirstFocusableElement())},this.handleKeypress=o=>{this.showModal&&o.key==="Escape"&&this.doBeforeClose("ESCAPE_KEY")},this.opened=!1,this.showModal=this.opened||!1,this.caption="Modal Title",this.closeOnOverlayClick=!0,this.variant="default",this.alertIcon="",this.okButtonLabel="OK",this.cancelButtonLabel="Cancel"}componentDidLoad(){this.focusableElements=d(this.hostElement.shadowRoot,t=>m(t)||t.matches("[data-focus-trap-edge]"),k)}getFirstFocusableElement(){return this.focusableElements[0]}getLastFocusableElement(){return this.focusableElements[this.focusableElements.length-1]}attemptFocus(t){if(t==null){setTimeout(()=>{this.closeButton.focus()});return}setTimeout(()=>{t.focus()},0)}open(){this.showModal=!0,console.log("attempt focus");try{f(this.modalContainer,b.fadeIn,{duration:200}).addEventListener("finish",()=>{this.attemptFocus(this.getFirstFocusableElement()),this.ifxModalOpen.emit()}),this.hostElement.addEventListener("keydown",this.handleKeypress)}catch{this.ifxModalOpen.emit()}}close(){try{f(this.modalContainer,b.fadeOut,{duration:200}).addEventListener("finish",()=>{this.showModal=!1,this.ifxModalClose.emit()}),this.hostElement.removeEventListener("keydown",this.handleKeypress)}catch{this.showModal=!1,this.ifxModalClose.emit()}}doBeforeClose(t){const o=[];o.push(t),o.some(n=>n.defaultPrevented)||(this.opened=!1)}openedChanged(t){t===!0?this.open():this.close()}handleOverlayClick(){this.closeOnOverlayClick&&this.doBeforeClose("BACKDROP")}render(){const t=this.variant!=="default";return e(y,null,e("div",{ref:o=>this.modalContainer=o,class:`modal-container ${this.showModal?"open":""}`},e("div",{class:"modal-overlay",onClick:()=>this.handleOverlayClick()}),e("div",{"data-focus-trap-edge":!0,onFocus:this.handleTopFocus,tabindex:"0"}),e("div",{class:"modal-content-container",role:"dialog","aria-modal":"true","aria-label":this.caption},t?e("div",{class:`modal-icon-container ${this.variant==="alert-brand"?"":"danger"}`},this.alertIcon?e("ifx-icon",{icon:this.alertIcon}):null):null,e("div",{class:"modal-content"},e("div",{class:"modal-header"},e("h2",null,this.caption),e("ifx-icon-button",{ref:o=>this.closeButton=o,icon:"cross-24",variant:"tertiary",onClick:()=>this.doBeforeClose("CLOSE_BUTTON")})),e("div",{class:"modal-body"},e("slot",{name:"content"})),e("div",{class:"modal-footer"},e("slot",{name:"buttons"},e("ifx-button",{"aria-label":this.okButtonLabel},this.okButtonLabel),e("ifx-button",{variant:"secondary","aria-label":this.cancelButtonLabel},this.cancelButtonLabel))))),e("div",{"data-focus-trap-edge":!0,onFocus:this.handleBottomFocus,tabindex:"0"})))}get hostElement(){return E(this)}static get watchers(){return{opened:["openedChanged"]}}};C.style=w;export{C as ifx_modal};
