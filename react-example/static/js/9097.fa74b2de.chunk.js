/*! For license information please see 9097.fa74b2de.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[9097],{6385:function(e,t,n){function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function a(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}n.d(t,{c:function(){return a},g:function(){return o}})},9097:function(e,t,n){n.r(t),n.d(t,{ifx_button:function(){return l}});var o=n(4165),a=n(5861),i=n(5671),r=n(3144),d=n(9953),s=n(4464),l=function(){function e(t){(0,i.Z)(this,e),(0,d.r)(this,t),this.variant="primary",this.theme="default",this.size="m",this.disabled=!1,this.internalHref=void 0,this.href=void 0,this.target="_self",this.type="button"}return(0,r.Z)(e,[{key:"setInternalHref",value:function(e){this.internalHref=e}},{key:"setFocus",value:function(){var e=(0,a.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.focusableElement.focus();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidLoad",value:function(){this.addEventListenersToHandleCustomFocusAndActiveState()}},{key:"addEventListenersToHandleCustomFocusAndActiveState",value:function(){var e=this,t=this.el.shadowRoot.firstChild;t?(t.tabIndex=0,t.addEventListener("focus",(function(){e.disabled||t.classList.add("focus")})),t.addEventListener("blur",(function(){t.classList.remove("focus")}))):console.error("element not found")}},{key:"componentWillLoad",value:function(){this.el.closest("form")?(this.el.href&&(this.el.internalHref=void 0),this.nativeButton=document.createElement("button"),this.nativeButton.type=this.type,this.nativeButton.style.display="none",this.el.closest("form").appendChild(this.nativeButton)):this.internalHref=this.href}},{key:"handleClick",value:function(){this.nativeButton&&("reset"===this.type&&this.resetClickHandler(),this.nativeButton.click())}},{key:"resetClickHandler",value:function(){this.el.closest("form").querySelectorAll("ifx-text-field").forEach((function(e){e.reset()}))}},{key:"handleFocus",value:function(e){var t=this;this.disabled?(e.preventDefault(),this.focusableElement.blur()):this.focusableElement.addEventListener("keydown",(function(e){"Enter"===e.key&&t.handleClick()}))}},{key:"render",value:function(){var e=this;return(0,d.h)(d.a,null,(0,d.h)("a",{ref:function(t){return e.focusableElement=t},class:this.getClassNames(),href:this.disabled?void 0:this.internalHref,target:this.target,onClick:this.handleClick.bind(this),rel:"_blank"===this.target?"noopener noreferrer":void 0,onFocus:function(t){return e.handleFocus(t)},"aria-disabled":this.disabled,"aria-labelledby":"label"},(0,d.h)("slot",null)))}},{key:"getVariantClass",value:function(){return"secondary"==="".concat(this.variant)?"secondary-".concat(this.theme):"tertiary"==="".concat(this.variant)?"tertiary-".concat(this.theme):"".concat(this.theme)}},{key:"getSizeClass",value:function(){return"xs"==="".concat(this.size)?"xs":"s"==="".concat(this.size)?"s":"l"==="".concat(this.size)?"l":""}},{key:"getClassNames",value:function(){return(0,s.c)("btn",this.size&&"btn-".concat(this.getSizeClass()),"btn-".concat(this.getVariantClass()),this.disabled?"disabled":"")}},{key:"el",get:function(){return(0,d.g)(this)}}],[{key:"watchers",get:function(){return{href:["setInternalHref"]}}}]),e}();l.style='*{font-family:"Source Sans 3"}:host{vertical-align:bottom;display:inline-flex}.btn{box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;height:40px;padding:0px 16px;gap:8px;color:#FFFFFF;font-weight:600;border-radius:1px;line-height:1.5rem;font-family:"Source Sans 3";font-style:normal;text-decoration:none;user-select:none;font-size:1rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.btn:not(.disabled){cursor:pointer}.btn.disabled{pointer-events:none}.btn-default{color:#FFFFFF;background-color:#0A8276}.btn-default:disabled,.btn-default.disabled{background-color:#BFBBBB;color:#FFFFFF;pointer-events:none}.btn-secondary-default{background-color:#FFFFFF;color:#0A8276;border:1px solid #0A8276}.btn-secondary-default:disabled,.btn-secondary-default.disabled{background-color:#FFFFFF;border:1px solid #BFBBBB;color:#BFBBBB;pointer-events:none}.btn-tertiary-default{background-color:transparent;color:#0A8276}.btn-tertiary-default:disabled,.btn-tertiary-default.disabled{color:#BFBBBB;pointer-events:none}.btn-danger{color:#FFFFFF;background-color:#CD002F;border-color:#CD002F}.btn-danger:disabled,.btn-danger.disabled{background-color:#BFBBBB;color:#FFFFFF;pointer-events:none}.btn-secondary-danger{background-color:#FFFFFF;color:#CD002F;border:1px solid #CD002F}.btn-secondary-danger:disabled,.btn-secondary-danger.disabled{background-color:#FFFFFF;border:1px solid #BFBBBB;color:#BFBBBB;pointer-events:none}.btn-tertiary-danger{background-color:transparent;color:#CD002F}.btn-tertiary-danger:disabled,.btn-tertiary-danger.disabled{background-color:#FFFFFF;color:#BFBBBB;pointer-events:none}.btn-inverse{color:#0A8276;background-color:#FFFFFF}.btn-inverse:disabled,.btn-inverse.disabled{opacity:1;background-color:#FFFFFF;color:#0A8276;pointer-events:none}.btn-secondary-inverse{color:#FFFFFF;border:1px solid #FFFFFF}.btn-secondary-inverse:disabled,.btn-secondary-inverse.disabled{border:1px solid #FFFFFF;color:#FFFFFF;pointer-events:none}.btn-tertiary-inverse{color:#FFFFFF}.btn-tertiary-inverse:disabled,.btn-tertiary-inverse.disabled{color:#FFFFFF;opacity:1;pointer-events:none}.btn ifx-icon:empty{display:none}.btn.btn-xs{font-size:0.875rem;height:32px;line-height:1rem}.btn.btn-s{font-size:0.875rem;height:36px;line-height:1.25rem}.btn.btn-l{font-size:1.25rem;height:48px;line-height:1.75rem}.btn.btn-default:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.btn.btn-default:not(:disabled,.disabled):hover{background-color:#08665C}.btn.btn-default:not(:disabled,.disabled):active,.btn.btn-default:not(:disabled,.disabled).active{background-color:#06534B}.btn.btn-secondary-default:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.btn.btn-secondary-default:not(:disabled,.disabled):hover{color:#FFFFFF;background-color:#08665C}.btn.btn-secondary-default:not(:disabled,.disabled):active,.btn.btn-secondary-default:not(:disabled,.disabled).active{background-color:#06534B}.btn.btn-secondary:not(:disabled,.disabled):hover{background-color:#9C216E}.btn.btn-secondary:not(:disabled,.disabled):active,.btn.btn-secondary:not(:disabled,.disabled).active{background-color:#9C216E}.btn.btn-danger:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.btn.btn-danger:not(:disabled,.disabled):hover{background-color:#A2001E}.btn.btn-danger:not(:disabled,.disabled):active,.btn.btn-danger:not(:disabled,.disabled).active{background-color:#900021}.btn.btn-secondary-danger:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.btn.btn-secondary-danger:not(:disabled,.disabled):hover{color:#FFFFFF;background-color:#A2001E}.btn.btn-secondary-danger:not(:disabled,.disabled):active,.btn.btn-secondary-danger:not(:disabled,.disabled).active{background-color:#900021}.btn.btn-inverse:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #0A8276, 0 0 0 4px #FFFFFF}.btn.btn-inverse:not(:disabled,.disabled):hover{background-color:#EEEDED}.btn.btn-inverse:not(:disabled,.disabled):active,.btn.btn-inverse:not(:disabled,.disabled).active{background-color:#BFBBBB}.btn.btn-secondary-inverse:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #0A8276, 0 0 0 4px #FFFFFF}.btn.btn-secondary-inverse:not(:disabled,.disabled):hover{color:#0A8276;background-color:#EEEDED}.btn.btn-secondary-inverse:not(:disabled,.disabled):active,.btn.btn-secondary-inverse:not(:disabled,.disabled).active{color:#0A8276;background-color:#BFBBBB}.btn.btn-tertiary-default:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #08665C}.btn.btn-tertiary-default:not(:disabled,.disabled):hover{color:#08665C}.btn.btn-tertiary-default:not(:disabled,.disabled):active,.btn.btn-tertiary-default:not(:disabled,.disabled).active{color:#06534B}.btn.btn-tertiary-danger:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #A2001E}.btn.btn-tertiary-danger:not(:disabled,.disabled):hover{color:#A2001E}.btn.btn-tertiary-danger:not(:disabled,.disabled):active,.btn.btn-tertiary-danger:not(:disabled,.disabled).active{color:#900021}.btn.btn-tertiary-inverse:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #0A8276, 0 0 0 4px #FFFFFF}.btn.btn-tertiary-inverse:not(:disabled,.disabled):hover{color:#EEEDED}.btn.btn-tertiary-inverse:not(:disabled,.disabled):active,.btn.btn-tertiary-inverse:not(:disabled,.disabled).active{color:#BFBBBB}'},4464:function(e,t,n){n.d(t,{c:function(){return o}});var o=(0,n(6385).c)((function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],o=0;o<arguments.length;o++){var a=arguments[o];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)){if(a.length){var r=n.apply(null,a);r&&e.push(r)}}else if("object"===i){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var d in a)t.call(a,d)&&a[d]&&e.push(d)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()}))}}]);
//# sourceMappingURL=9097.fa74b2de.chunk.js.map