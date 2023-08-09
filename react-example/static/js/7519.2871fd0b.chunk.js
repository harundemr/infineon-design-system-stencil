"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[7519],{7519:function(o,t,e){e.r(t),e.d(t,{ifx_modal:function(){return c}});var n=e(4165),a=e(5861),i=e(5671),l=e(9466),r=e(3144),c=function(){function o(t){(0,i.Z)(this,o),(0,r.r)(this,t),this.modalOpen=(0,r.c)(this,"modalOpen",7),this.modalClose=(0,r.c)(this,"modalClose",7),this.okButtonClick=(0,r.c)(this,"okButtonClick",7),this.cancelButtonClick=(0,r.c)(this,"cancelButtonClick",7),this.showModal=!1,this.caption="Modal Title",this.closeOnOverlayClick=!0,this.alertColor="",this.alertIcon=""}return(0,l.Z)(o,[{key:"open",value:function(){var o=(0,a.Z)((0,n.Z)().mark((function o(){return(0,n.Z)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:this.showModal=!0,this.modalOpen.emit();case 2:case"end":return o.stop()}}),o,this)})));return function(){return o.apply(this,arguments)}}()},{key:"close",value:function(){var o=(0,a.Z)((0,n.Z)().mark((function o(){return(0,n.Z)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:this.showModal=!1,this.modalClose.emit();case 2:case"end":return o.stop()}}),o,this)})));return function(){return o.apply(this,arguments)}}()},{key:"handleOverlayClick",value:function(){this.closeOnOverlayClick&&this.close()}},{key:"handleOkButtonClick",value:function(){this.okButtonClick.emit()}},{key:"handleCancelButtonClick",value:function(){this.cancelButtonClick.emit()}},{key:"render",value:function(){var o=this;return(0,r.h)("div",{class:"modal-container ".concat(this.showModal?"open":"")},(0,r.h)("div",{class:"modal-overlay",onClick:function(){return o.handleOverlayClick()}}),(0,r.h)("div",{class:"modal-content-container"},this.alertColor&&this.alertIcon?(0,r.h)("div",{class:"modal-border ".concat(this.alertColor)},(0,r.h)("ifx-icon",{icon:this.alertIcon})):null,(0,r.h)("div",{class:"modal-content"},(0,r.h)("div",{class:"modal-header"},(0,r.h)("h2",null,this.caption),(0,r.h)("button",{onClick:function(){return o.close()}},"\xd7")),(0,r.h)("div",{class:"modal-body"},(0,r.h)("slot",{name:"content"})),(0,r.h)("div",{class:"modal-footer"},(0,r.h)("slot",{name:"buttons"},(0,r.h)("ifx-button",{variant:"outline",onClick:function(){return o.handleOkButtonClick()}},"OK"),(0,r.h)("ifx-button",{onClick:function(){return o.handleCancelButtonClick()}},"Cancel"))))))}}]),o}();c.style=":host{display:block}.modal-container{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000}.modal-container.open{display:block}.modal-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1d1d1d;opacity:0.5}.modal-content{width:100%;flex:1}.modal-content-container{position:absolute;display:flex;align-items:stretch;top:50%;left:50%;transform:translate(-50%, -50%);width:80%;max-width:500px;background-color:#fff;border-radius:0;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);overflow:hidden}.modal-header{display:flex;justify-content:space-between;align-items:center;padding:15px;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;border-bottom:1px solid #eee}.modal-header h2{margin:0;font-weight:600;font-size:1.25rem;line-height:1rem}.modal-header button{background:none;border:none;font-size:1.5em;padding:0;cursor:pointer}.modal-body{padding:15px}.modal-footer{display:flex;justify-content:flex-end;padding:15px;gap:1em}.modal-border{display:flex;align-items:center;justify-content:center;width:40px;font-size:1.5em}.modal-border.primary{background-color:#378375}.modal-border.secondary{background-color:#7d6f72}.modal-border.danger{background-color:#cd002f}.modal-border.success{background-color:#aec067}.modal-border.warning{background-color:#f07f3c}"}}]);
//# sourceMappingURL=7519.2871fd0b.chunk.js.map