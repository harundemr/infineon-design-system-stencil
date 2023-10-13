"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[7519],{7519:function(o,e,t){t.r(e),t.d(e,{ifx_modal:function(){return c}});var n=t(4165),a=t(5861),i=t(5671),r=t(3144),l=t(2243),c=function(){function o(e){(0,i.Z)(this,o),(0,l.r)(this,e),this.modalOpen=(0,l.c)(this,"modalOpen",7),this.modalClose=(0,l.c)(this,"modalClose",7),this.closeButtonClick=(0,l.c)(this,"closeButtonClick",7),this.showModal=!1,this.caption="Modal Title",this.closeOnOverlayClick=!0,this.variant="default",this.alertIcon="",this.okButtonLabel="OK",this.cancelButtonLabel="Cancel"}return(0,r.Z)(o,[{key:"open",value:function(){var o=(0,a.Z)((0,n.Z)().mark((function o(){return(0,n.Z)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:this.showModal=!0,this.modalOpen.emit();case 2:case"end":return o.stop()}}),o,this)})));return function(){return o.apply(this,arguments)}}()},{key:"close",value:function(){var o=(0,a.Z)((0,n.Z)().mark((function o(){return(0,n.Z)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:this.showModal=!1,this.modalClose.emit(),this.handleCloseButtonClick();case 3:case"end":return o.stop()}}),o,this)})));return function(){return o.apply(this,arguments)}}()},{key:"handleCloseButtonClick",value:function(){this.closeButtonClick.emit()}},{key:"handleOverlayClick",value:function(){this.closeOnOverlayClick&&this.close()}},{key:"render",value:function(){var o=this,e="default"!==this.variant;return(0,l.h)("div",{"aria-label":"a modal popup covering the entire screen",class:"modal-container ".concat(this.showModal?"open":"")},(0,l.h)("div",{class:"modal-overlay",onClick:function(){return o.handleOverlayClick()}}),(0,l.h)("div",{class:"modal-content-container"},e?(0,l.h)("div",{class:"modal-icon-container ".concat("alert-brand"===this.variant?"":"danger")},this.alertIcon?(0,l.h)("ifx-icon",{icon:this.alertIcon}):null):null,(0,l.h)("div",{class:"modal-content"},(0,l.h)("div",{class:"modal-header"},(0,l.h)("h2",null,this.caption),(0,l.h)("ifx-icon-button",{icon:"cross-24",variant:"tertiary",onClick:function(){return o.close()}})),(0,l.h)("div",{class:"modal-body"},(0,l.h)("slot",{name:"content"})),(0,l.h)("div",{class:"modal-footer"},(0,l.h)("slot",{name:"buttons"},(0,l.h)("ifx-button",null,this.okButtonLabel),(0,l.h)("ifx-button",{variant:"secondary"},this.cancelButtonLabel))))))}}]),o}();c.style='*{font-family:"Source Sans 3"}:host{display:block}.modal-container{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000}.modal-container.open{display:block}.modal-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1D1D1D;opacity:0.5}.modal-content-container{position:absolute;display:flex;align-items:center;justify-content:center;top:50%;left:50%;transform:translate(-50%, -50%);width:90%;height:218px;background-color:#fff;border-radius:0;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);overflow:hidden;box-sizing:border-box;font-family:"Source Sans 3"}@media screen and (min-width: 768px){.modal-content-container{width:540px;height:220px}}.modal-content{display:flex;flex-direction:column;width:100%;height:100%}.modal-icon-container{display:flex;align-items:center;justify-content:center;width:32px;background-color:#0A8276;height:100%}.modal-icon-container.danger{background-color:#CD002F}.modal-icon-container ifx-icon{color:#FFFFFF}.modal-header{display:flex;justify-content:space-between;align-items:center;padding:24px;height:76px;box-sizing:border-box;border-radius:1px 1px 0px 0px;border-bottom:1px solid #EEEDED}.modal-header h2{margin:0;font-weight:600;font-size:1.25rem;line-height:28px}.modal-header button{background:none;border:none;font-size:1.5em;padding:0;cursor:pointer}.modal-body{padding:16px 24px;height:56px;box-sizing:border-box;flex:1}.modal-body slot[name=content]{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.modal-footer{display:flex;align-items:center;padding-top:16px;padding-bottom:32px;padding-right:24px;gap:1em;height:88px;box-sizing:border-box;margin-left:auto}.modal-footer ::slotted(*){display:flex;gap:24px}.modal-border{display:flex;align-items:center;justify-content:center;width:100%;font-size:1.5em;flex-grow:1}.modal-border.primary{background-color:#0A8276}.modal-border.secondary{background-color:#575352}.modal-border.danger{background-color:#CD002F}.modal-border.success{background-color:#4CA460}.modal-border.warning{background-color:#E16B25}.modal-border.orange{background-color:#E16B25}.modal-border.ocean{background-color:#0A8276}.modal-border.grey{background-color:#575352}.modal-border.grey-200{background-color:#EEEDED}.modal-border.red{background-color:#CD002F}.modal-border.green{background-color:#4CA460}.modal-border.berry{background-color:#9C216E}'}}]);
//# sourceMappingURL=7519.be050b8f.chunk.js.map