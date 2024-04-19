import{r as y,c as h,h as o,H as x,g as E}from"./index-CkrPgG6F.js";function l(e,t,s,a=20,r=0){const i=[];if(r>=a)return i;const p=n=>{const f=n.assignedNodes().filter(c=>c.nodeType===1);if(f.length>0){const c=f[0].parentElement;return l(c,t,s,a,r+1)}return[]},g=Array.from(e.children||[]);for(const n of g)t(n)||(s(n)&&i.push(n),n.shadowRoot!=null?i.push(...l(n.shadowRoot,t,s,a,r+1)):n.tagName==="SLOT"?i.push(...p(n)):i.push(...l(n,t,s,a,r+1)));return i}function m(e){return e.hasAttribute("hidden")||e.hasAttribute("aria-hidden")&&e.getAttribute("aria-hidden")!=="false"||e.style.display==="none"||e.style.opacity==="0"||e.style.visibility==="hidden"||e.style.visibility==="collapse"}function k(e){return e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&e.getAttribute("aria-disabled")!=="false"}function v(e){return e.getAttribute("tabindex")==="-1"||m(e)||k(e)?!1:e.hasAttribute("tabindex")||(e instanceof HTMLAnchorElement||e instanceof HTMLAreaElement)&&e.hasAttribute("href")||e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLIFrameElement}function b(e,t,s){const a=e.animate(t,Object.assign(Object.assign({},s),{fill:"both"}));return a.addEventListener("finish",()=>{a.commitStyles(),a.cancel()}),a}const d={easing:"cubic-bezier(0.390, 0.575, 0.565, 1.000)"},u={fadeIn:[Object.assign(Object.assign({offset:0},d),{opacity:0}),Object.assign(Object.assign({offset:1},d),{opacity:1})],fadeOut:[Object.assign(Object.assign({offset:0},d),{opacity:1}),Object.assign(Object.assign({offset:1},d),{opacity:0})]},w=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:block}.modal-container{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1060;overflow-y:auto;font-family:var(--ifx-font-family)}.modal-container.open{display:block}.modal-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1D1D1D;opacity:0.5;z-index:0}.modal-content-container{position:absolute;display:flex;justify-content:center;top:50%;left:50%;transform:translate(-50%, -50%);width:90%;min-height:218px;background-color:#fff;border-radius:0;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);overflow:hidden;box-sizing:border-box;align-items:stretch}@media screen and (min-width: 768px){.modal-content-container{width:540px;min-height:132px}}.modal-content{display:flex;flex-direction:column;width:100%;max-height:90vh}.modal-icon-container{display:flex;align-items:center;justify-content:center;width:32px;background-color:#0A8276;align-self:stretch}.modal-icon-container.danger{background-color:#CD002F}.modal-icon-container ifx-icon{color:#FFFFFF}.modal-header{display:flex;justify-content:space-between;align-items:center;padding:24px;min-height:76px;max-height:105px;box-sizing:border-box;border-radius:1px 1px 0px 0px;border-bottom:1px solid #EEEDED}.modal-caption{max-height:56px;display:-webkit-box;overflow:hidden;white-space:pre-wrap;word-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical}.modal-header h2{margin:0;font-weight:600;font-size:1.25rem;line-height:28px}.modal-header button{background:none;border:none;font-size:1.5em;padding:0;cursor:pointer}.modal-close-button{align-self:flex-start;margin-right:-8px}.modal-body{padding:16px 24px;min-height:56px;box-sizing:border-box;flex:1;overflow-y:auto}.modal-footer.buttons-present ::slotted(*){display:flex;justify-content:flex-end;gap:16px;padding:16px 24px 32px 16px}.modal-border{display:flex;align-items:center;justify-content:center;width:100%;font-size:1.5em;flex-grow:1}.modal-border.primary{background-color:#0A8276}.modal-border.secondary{background-color:#575352}.modal-border.danger{background-color:#CD002F}.modal-border.success{background-color:#4CA460}.modal-border.warning{background-color:#E16B25}.modal-border.orange{background-color:#E16B25}.modal-border.ocean{background-color:#0A8276}.modal-border.grey{background-color:#575352}.modal-border.grey-200{background-color:#EEEDED}.modal-border.red{background-color:#CD002F}.modal-border.green{background-color:#4CA460}.modal-border.berry{background-color:#9C216E}',C=w,F=class{constructor(e){y(this,e),this.ifxModalOpen=h(this,"ifxModalOpen",7),this.ifxModalClose=h(this,"ifxModalClose",7),this.focusableElements=[],this.handleTopFocus=()=>{this.attemptFocus(this.getLastFocusableElement())},this.handleBottomFocus=()=>{this.attemptFocus(this.getFirstFocusableElement())},this.handleKeypress=t=>{this.showModal&&t.key==="Escape"&&this.doBeforeClose("ESCAPE_KEY")},this.opened=!1,this.showModal=this.opened||!1,this.caption="Modal Title",this.closeOnOverlayClick=!0,this.variant="default",this.alertIcon="",this.okButtonLabel="OK",this.cancelButtonLabel="Cancel",this.slotButtonsPresent=!1,this.showCloseButton=!0}componentDidLoad(){this.focusableElements=l(this.hostElement.shadowRoot,e=>m(e)||e.matches("[data-focus-trap-edge]"),v)}getFirstFocusableElement(){return this.focusableElements[0]}getLastFocusableElement(){return this.focusableElements[this.focusableElements.length-1]}attemptFocus(e){if(e==null){setTimeout(()=>{this.closeButton.focus()});return}setTimeout(()=>{e.focus()},0)}open(){this.showModal=!0;try{b(this.modalContainer,u.fadeIn,{duration:200}).addEventListener("finish",()=>{this.attemptFocus(this.getFirstFocusableElement()),this.ifxModalOpen.emit()}),this.hostElement.addEventListener("keydown",this.handleKeypress)}catch{this.ifxModalOpen.emit()}}close(){try{b(this.modalContainer,u.fadeOut,{duration:200}).addEventListener("finish",()=>{this.showModal=!1,this.ifxModalClose.emit()}),this.hostElement.removeEventListener("keydown",this.handleKeypress)}catch{this.showModal=!1,this.ifxModalClose.emit()}}doBeforeClose(e){const t=[];t.push(e),t.some(a=>a.defaultPrevented)||(this.opened=!1)}openedChanged(e){e===!0?this.open():this.close()}handleOverlayClick(){this.closeOnOverlayClick&&this.doBeforeClose("BACKDROP")}handleButtonsSlotChange(e){var t;((t=e.currentTarget.assignedElements()[0])===null||t===void 0?void 0:t.childElementCount)>0?this.slotButtonsPresent=!0:this.slotButtonsPresent=!1}render(){const e=this.variant!=="default";return o(x,{key:"f0813d1a7e4f67c3c0a5cdd223a3b2ff15599b74"},o("div",{key:"e7afd81ae3c34606fec4964f4d064a4a5d4639ef",ref:t=>this.modalContainer=t,class:`modal-container ${this.showModal?"open":""}`},o("div",{key:"f76ab35c1d23f8c85ef8f25c839a785c48d69b5d",class:"modal-overlay",onClick:()=>this.handleOverlayClick()}),o("div",{key:"c43a7f61d549ad93d5577d49ac4cbc420622f43b","data-focus-trap-edge":!0,onFocus:this.handleTopFocus,tabindex:"0"}),o("div",{key:"bac5195ac2880f7fa258f6ce8d7626a15c210085",class:"modal-content-container",role:"dialog","aria-modal":"true","aria-label":this.caption},e?o("div",{class:`modal-icon-container ${this.variant==="alert-brand"?"":"danger"}`},this.alertIcon?o("ifx-icon",{icon:this.alertIcon}):null):null,o("div",{key:"90e5a23f42dc008172db58a6367a061a643cd5c0",class:"modal-content"},o("div",{key:"2d40f525434ffdb9a0147f3f2b6e574a9f36bfcd",class:"modal-header"},o("h2",{key:"5cba0fa055e6f577b00db23c9ea5fbb5258b978e",class:"modal-caption"},this.caption),this.showCloseButton&&o("ifx-icon-button",{class:"modal-close-button",ref:t=>this.closeButton=t,icon:"cross-24",variant:"tertiary",onClick:()=>this.doBeforeClose("CLOSE_BUTTON")})),o("div",{key:"b424926417a92bf80a2118cccb3ecceb51661710",class:"modal-body"},o("slot",{key:"d658802533066be28f5f7ecfd98df0f52cce86a6",name:"content"})),o("div",{key:"d2bbc9e119f08bdb63d107304f60d46607e26d23",class:`modal-footer ${this.slotButtonsPresent?"buttons-present":""}`},o("slot",{key:"1ed1c4d49d506cc62c3722a9f2c25d032c5cd6d6",name:"buttons",onSlotchange:t=>this.handleButtonsSlotChange(t)})))),o("div",{key:"bf9623ceab205d2276764183a504bfe45c2e0662","data-focus-trap-edge":!0,onFocus:this.handleBottomFocus,tabindex:"0"})))}get hostElement(){return E(this)}static get watchers(){return{opened:["openedChanged"]}}};F.style=C;export{F as ifx_modal};
