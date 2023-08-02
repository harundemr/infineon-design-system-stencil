"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[3468],{3468:(d,e,o)=>{o.r(e),o.d(e,{ifx_example:()=>r});var i=o(5861),t=o(4881),s=o(6543);const r=class{constructor(n){(0,t.r)(this,n),this.variant="solid",this.color="primary",this.size="m",this.disabled=!1,this.icon=void 0,this.position="left",this.internalPosition=void 0,this.href=void 0,this.target="_self",this.type="button"}reassignPosition(n){n&&n!==this.internalPosition&&("LEFT"===n.toUpperCase()||"RIGHT"===n.toUpperCase())&&(this.internalPosition=n)}setFocus(){var n=this;return(0,i.Z)(function*(){n.focusableElement.focus()})()}componentWillLoad(){this.internalPosition="LEFT"!==this.position.toUpperCase()?"left":this.position}componentDidLoad(){"submit"===this.type&&this.el.closest("form")&&(this.nativeButton=document.createElement("button"),this.nativeButton.type="submit",this.nativeButton.style.display="none",this.el.closest("form").appendChild(this.nativeButton))}handleClick(){this.nativeButton&&this.nativeButton.click()}render(){return(0,t.h)(t.a,null,this.href?(0,t.h)("a",{ref:n=>this.focusableElement=n,class:this.getClassNames(),href:this.disabled?void 0:this.href,target:this.target,rel:"_blank"===this.target?"noopener noreferrer":void 0},this.icon&&"LEFT"===this.internalPosition.toUpperCase()&&(0,t.h)("ifx-icon",{icon:this.icon}),(0,t.h)("slot",null),this.icon&&"RIGHT"===this.internalPosition.toUpperCase()&&(0,t.h)("ifx-icon",{icon:this.icon})):(0,t.h)("button",{class:this.getClassNames(),type:"button",onClick:this.handleClick.bind(this)},this.icon&&"LEFT"===this.internalPosition.toUpperCase()&&(0,t.h)("ifx-icon",{icon:this.icon}),(0,t.h)("slot",null),this.icon&&"RIGHT"===this.internalPosition.toUpperCase()&&(0,t.h)("ifx-icon",{icon:this.icon})))}getVariantClass(){return"outline"==`${this.variant}`?`outline-${this.color}`:"outline-text"==`${this.variant}`?`${this.color}-outline-text`:`${this.color}`}getSizeClass(){return"s"==`${this.size}`?"s":""}getClassNames(){return(0,s.c)("btn",this.size&&`btn-${this.getSizeClass()}`,`btn-${this.getVariantClass()}`,this.disabled?"disabled":"")}get el(){return(0,t.g)(this)}static get watchers(){return{position:["reassignPosition"]}}};r.style='.btn{display:inline-flex;justify-content:center;align-items:center;min-width:80px;min-height:40px;padding:0px 16px;gap:8px;color:#FFFFFF;flex-direction:row;font-weight:600;border-radius:1px;line-height:24px;outline:none;font-family:"Source Sans Pro";text-align:center;text-decoration:none;vertical-align:middle;user-select:none;border:1px solid rgba(0, 0, 0, 0);font-size:1rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.btn:not(.disabled){cursor:pointer}.btn-primary{color:#ffffff;background-color:#378375;border-color:#378375}.btn-primary svg{stroke:#ffffff}.btn-outline-primary{background-color:#ffffff;color:#378375;border-color:#378375}.btn-outline-primary svg{stroke:#378375}.btn-secondary{color:#ffffff;background-color:#ab377a;border-color:#ab377a}.btn-secondary svg{stroke:#ffffff}.btn-outline-secondary{background-color:#ffffff;color:#ab377a;border-color:#ab377a}.btn-outline-secondary svg{stroke:#ab377a}.btn-success{color:#1d1d1d;background-color:#aec067;border-color:#aec067}.btn-success svg{stroke:#1d1d1d}.btn-outline-success{background-color:#ffffff;border-color:#aec067}.btn-outline-success svg{stroke:#1d1d1d}.btn-danger{color:#ffffff;background-color:#cd002f;border-color:#cd002f}.btn-danger svg{stroke:#ffffff}.btn-outline-danger{background-color:#ffffff;color:#cd002f;border-color:#cd002f}.btn-outline-danger svg{stroke:#cd002f}.btn-warning{color:#1d1d1d;background-color:#f07f3c;border-color:#f07f3c}.btn-warning svg{stroke:#1d1d1d}.btn-outline-warning{background-color:#ffffff;border-color:#f07f3c}.btn-outline-warning svg{stroke:#1d1d1d}.btn.btn-s{font-size:0.8125rem;min-width:71px;min-height:32px;line-height:16px}.btn.btn-primary:focus,.btn.btn-outline-primary:focus,.btn.btn-secondary:focus,.btn.btn-outline-secondary:focus,.btn.btn-success:focus,.btn.btn-outline-success:focus,.btn.btn-danger:focus,.btn.btn-outline-danger:focus,.btn.btn-warning:focus,.btn.btn-outline-warning:focus,.btn.btn-outline-text:focus{box-shadow:none}.btn.btn-primary:focus-visible,.btn.btn-outline-primary:focus-visible,.btn.btn-secondary:focus-visible,.btn.btn-outline-secondary:focus-visible,.btn.btn-success:focus-visible,.btn.btn-outline-success:focus-visible,.btn.btn-danger:focus-visible,.btn.btn-outline-danger:focus-visible,.btn.btn-warning:focus-visible,.btn.btn-outline-warning:focus-visible,.btn.btn-outline-text:focus-visible{box-shadow:0 0 0 3px #B4DDD8}.btn:disabled,.btn.disabled{opacity:1;background-color:#dcd5d7;border-color:#dcd5d7;color:#ffffff}.btn.btn-primary:not(:disabled,.disabled):focus{background-color:#378375;border-color:#378375}.btn.btn-primary:not(:disabled,.disabled):hover{background-color:#2d6357;border-color:#2d6357}.btn.btn-primary:not(:disabled,.disabled):active,.btn.btn-primary:not(:disabled,.disabled).active{background-color:#28594e;border-color:#28594e}.btn.btn-outline-primary:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-primary:not(:disabled,.disabled):hover{color:#ffffff;background-color:#2d6357;border-color:#2d6357}.btn.btn-outline-primary:not(:disabled,.disabled):active,.btn.btn-outline-primary:not(:disabled,.disabled).active{background-color:#28594e;border-color:#28594e}.btn.btn-secondary:not(:disabled,.disabled):focus{background-color:#ab377a;border-color:#ab377a}.btn.btn-secondary:not(:disabled,.disabled):hover{background-color:#99316d;border-color:#99316d}.btn.btn-secondary:not(:disabled,.disabled):active,.btn.btn-secondary:not(:disabled,.disabled).active{background-color:#822060;border-color:#822060}.btn.btn-outline-secondary:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-secondary:not(:disabled,.disabled):hover{color:#ffffff;background-color:#99316d;border-color:#99316d}.btn.btn-outline-secondary:not(:disabled,.disabled):active,.btn.btn-outline-secondary:not(:disabled,.disabled).active{background-color:#822060;border-color:#822060}.btn.btn-success:not(:disabled,.disabled):focus{background-color:#aec067;border-color:#aec067}.btn.btn-success:not(:disabled,.disabled):hover{background-color:#91a646;border-color:#91a646}.btn.btn-success:not(:disabled,.disabled):active,.btn.btn-success:not(:disabled,.disabled).active{background-color:#7d933c;border-color:#7d933c}.btn.btn-outline-success:not(:disabled,.disabled){color:#1d1d1d}.btn.btn-outline-success:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-success:not(:disabled,.disabled):hover{background-color:#91a646;border-color:#91a646}.btn.btn-outline-success:not(:disabled,.disabled):active,.btn.btn-outline-success:not(:disabled,.disabled).active{background-color:#7d933c;border-color:#7d933c}.btn.btn-danger:not(:disabled,.disabled):focus{background-color:#cd002f;border-color:#cd002f}.btn.btn-danger:not(:disabled,.disabled):hover{background-color:#bf0023;border-color:#bf0023}.btn.btn-danger:not(:disabled,.disabled):active,.btn.btn-danger:not(:disabled,.disabled).active{background-color:#900021;border-color:#900021}.btn.btn-outline-danger:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-danger:not(:disabled,.disabled):hover{color:#ffffff;background-color:#bf0023;border-color:#bf0023}.btn.btn-outline-danger:not(:disabled,.disabled):active,.btn.btn-outline-danger:not(:disabled,.disabled).active{background-color:#900021;border-color:#900021}.btn.btn-warning:not(:disabled,.disabled):focus{background-color:#f07f3c;border-color:#f07f3c}.btn.btn-warning:not(:disabled,.disabled):hover{background-color:#d97336;border-color:#d97336}.btn.btn-warning:not(:disabled,.disabled):active,.btn.btn-warning:not(:disabled,.disabled).active{background-color:#cc6e33;border-color:#cc6e33}.btn.btn-outline-warning:not(:disabled,.disabled){color:#1d1d1d}.btn.btn-outline-warning:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-warning:not(:disabled,.disabled):hover{background-color:#d97336;border-color:#d97336}.btn.btn-outline-warning:not(:disabled,.disabled):active,.btn.btn-outline-warning:not(:disabled,.disabled).active{background-color:#cc6e33;border-color:#cc6e33}.btn.btn-primary-outline-text{background-color:transparent;color:#378375}.btn.btn-primary-outline-text:hover{color:#2d6357}.btn.btn-primary-outline-text:hover svg{stroke:#2d6357}.btn.btn-primary-outline-text:active,.btn.btn-primary-outline-text.active{color:#28594e}.btn.btn-primary-outline-text:active svg,.btn.btn-primary-outline-text.active svg{stroke:#28594e}.btn.btn-primary-outline-text:disabled,.btn.btn-primary-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}.btn.btn-primary-outline-text:disabled svg,.btn.btn-primary-outline-text.disabled svg{stroke:#dcd5d7}.btn.btn-primary-outline-text svg{stroke:#378375}.btn.btn-secondary-outline-text{background-color:transparent;color:#ab377a}.btn.btn-secondary-outline-text:hover{color:#99316d}.btn.btn-secondary-outline-text:hover svg{stroke:#99316d}.btn.btn-secondary-outline-text:active,.btn.btn-secondary-outline-text.active{color:#822060}.btn.btn-secondary-outline-text:active svg,.btn.btn-secondary-outline-text.active svg{stroke:#822060}.btn.btn-secondary-outline-text:disabled,.btn.btn-secondary-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}.btn.btn-secondary-outline-text:disabled svg,.btn.btn-secondary-outline-text.disabled svg{stroke:#dcd5d7}.btn.btn-secondary-outline-text svg{stroke:#ab377a}.btn.btn-success-outline-text{background-color:transparent;color:#aec067}.btn.btn-success-outline-text:hover{color:#91a646}.btn.btn-success-outline-text:hover svg{stroke:#91a646}.btn.btn-success-outline-text:active,.btn.btn-success-outline-text.active{color:#7d933c}.btn.btn-success-outline-text:active svg,.btn.btn-success-outline-text.active svg{stroke:#7d933c}.btn.btn-success-outline-text:disabled,.btn.btn-success-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}.btn.btn-success-outline-text:disabled svg,.btn.btn-success-outline-text.disabled svg{stroke:#dcd5d7}.btn.btn-success-outline-text svg{stroke:#aec067}.btn.btn-danger-outline-text{background-color:transparent;color:#cd002f}.btn.btn-danger-outline-text:hover{color:#bf0023}.btn.btn-danger-outline-text:hover svg{stroke:#bf0023}.btn.btn-danger-outline-text:active,.btn.btn-danger-outline-text.active{color:#900021}.btn.btn-danger-outline-text:active svg,.btn.btn-danger-outline-text.active svg{stroke:#900021}.btn.btn-danger-outline-text:disabled,.btn.btn-danger-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}.btn.btn-danger-outline-text:disabled svg,.btn.btn-danger-outline-text.disabled svg{stroke:#dcd5d7}.btn.btn-danger-outline-text svg{stroke:#cd002f}.btn.btn-warning-outline-text{background-color:transparent;color:#f07f3c}.btn.btn-warning-outline-text:hover{color:#d97336}.btn.btn-warning-outline-text:hover svg{stroke:#d97336}.btn.btn-warning-outline-text:active,.btn.btn-warning-outline-text.active{color:#cc6e33}.btn.btn-warning-outline-text:active svg,.btn.btn-warning-outline-text.active svg{stroke:#cc6e33}.btn.btn-warning-outline-text:disabled,.btn.btn-warning-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}.btn.btn-warning-outline-text:disabled svg,.btn.btn-warning-outline-text.disabled svg{stroke:#dcd5d7}.btn.btn-warning-outline-text svg{stroke:#f07f3c}.ifx__btn-icon--before{margin-right:10px}.ifx__btn-icon--after{margin-left:10px}'}}]);