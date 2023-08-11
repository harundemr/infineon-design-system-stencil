"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[4917],{4917:(s,n,t)=>{t.r(n),t.d(n,{ifx_modal:()=>a});var l=t(5861),o=t(4881);const a=class{constructor(e){(0,o.r)(this,e),this.modalOpen=(0,o.c)(this,"modalOpen",7),this.modalClose=(0,o.c)(this,"modalClose",7),this.okButtonClick=(0,o.c)(this,"okButtonClick",7),this.cancelButtonClick=(0,o.c)(this,"cancelButtonClick",7),this.showModal=!1,this.caption="Modal Title",this.closeOnOverlayClick=!0,this.alertColor="",this.alertIcon=""}open(){var e=this;return(0,l.Z)(function*(){e.showModal=!0,e.modalOpen.emit()})()}close(){var e=this;return(0,l.Z)(function*(){e.showModal=!1,e.modalClose.emit()})()}handleOverlayClick(){this.closeOnOverlayClick&&this.close()}handleOkButtonClick(){this.okButtonClick.emit()}handleCancelButtonClick(){this.cancelButtonClick.emit()}render(){return(0,o.h)("div",{class:"modal-container "+(this.showModal?"open":"")},(0,o.h)("div",{class:"modal-overlay",onClick:()=>this.handleOverlayClick()}),(0,o.h)("div",{class:"modal-content-container"},this.alertColor&&this.alertIcon?(0,o.h)("div",{class:`modal-border ${this.alertColor}`},(0,o.h)("ifx-icon",{icon:this.alertIcon})):null,(0,o.h)("div",{class:"modal-content"},(0,o.h)("div",{class:"modal-header"},(0,o.h)("h2",null,this.caption),(0,o.h)("button",{onClick:()=>this.close()},"\xd7")),(0,o.h)("div",{class:"modal-body"},(0,o.h)("slot",{name:"content"})),(0,o.h)("div",{class:"modal-footer"},(0,o.h)("slot",{name:"buttons"},(0,o.h)("ifx-button",{variant:"outline",onClick:()=>this.handleOkButtonClick()},"OK"),(0,o.h)("ifx-button",{onClick:()=>this.handleCancelButtonClick()},"Cancel"))))))}};a.style=":host{display:block}.modal-container{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000}.modal-container.open{display:block}.modal-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1D1D1D;opacity:0.5}.modal-content{width:100%;flex:1}.modal-content-container{position:absolute;display:flex;align-items:stretch;top:50%;left:50%;transform:translate(-50%, -50%);width:80%;max-width:500px;background-color:#fff;border-radius:0;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);overflow:hidden}.modal-header{display:flex;justify-content:space-between;align-items:center;padding:15px;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;border-bottom:1px solid #eee}.modal-header h2{margin:0;font-weight:600;font-size:1.25rem;line-height:1rem}.modal-header button{background:none;border:none;font-size:1.5em;padding:0;cursor:pointer}.modal-body{padding:15px}.modal-footer{display:flex;justify-content:flex-end;padding:15px;gap:1em}.modal-border{display:flex;align-items:center;justify-content:center;width:40px;font-size:1.5em}.modal-border.primary{background-color:#0A8276}.modal-border.secondary{background-color:#575352}.modal-border.danger{background-color:#CD002F}.modal-border.success{background-color:#4CA460}.modal-border.warning{background-color:#E16B25}"}}]);