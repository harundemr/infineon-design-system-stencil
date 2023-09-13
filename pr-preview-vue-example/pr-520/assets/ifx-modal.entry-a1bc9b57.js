import{r as n,c as t,h as o}from"./index-728f4fd4.js";const a=':host{display:block}.modal-container{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000}.modal-container.open{display:block}.modal-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1D1D1D;opacity:0.5}.modal-content-container{position:absolute;display:flex;align-items:center;justify-content:center;top:50%;left:50%;transform:translate(-50%, -50%);width:90%;height:218px;background-color:#fff;border-radius:0;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);overflow:hidden;box-sizing:border-box;font-family:"Source Sans 3"}@media screen and (min-width: 768px){.modal-content-container{width:540px;height:220px}}.modal-content{display:flex;flex-direction:column;width:100%;height:100%}.modal-icon-container{display:flex;align-items:center;justify-content:center;width:32px;background-color:#0A8276;height:100%}.modal-icon-container.danger{background-color:#CD002F}.modal-icon-container ifx-icon{color:#FFFFFF}.modal-header{display:flex;justify-content:space-between;align-items:center;padding:24px;height:76px;box-sizing:border-box;border-radius:1px 1px 0px 0px;border-bottom:1px solid #EEEDED}.modal-header h2{margin:0;font-weight:600;font-size:1.25rem;line-height:28px}.modal-header button{background:none;border:none;font-size:1.5em;padding:0;cursor:pointer}.modal-body{padding:16px 24px;height:56px;box-sizing:border-box;flex:1}.modal-footer{display:flex;justify-content:flex-end;padding-top:16px;padding-bottom:32px;padding-right:24px;gap:1em;height:88px;box-sizing:border-box}.modal-border{display:flex;align-items:center;justify-content:center;width:40px;font-size:1.5em}.modal-border.primary{background-color:#0A8276}.modal-border.secondary{background-color:#575352}.modal-border.danger{background-color:#CD002F}.modal-border.success{background-color:#4CA460}.modal-border.warning{background-color:#E16B25}.modal-border.orange{background-color:#E16B25}.modal-border.ocean{background-color:#0A8276}.modal-border.grey{background-color:#575352}.modal-border.grey-200{background-color:#EEEDED}.modal-border.red{background-color:#CD002F}.modal-border.green{background-color:#4CA460}.modal-border.berry{background-color:#9C216E}.modal-content.default .modal-header,.modal-content.default .modal-body,.modal-content.default .modal-footer{width:100%;height:auto;box-sizing:border-box}.modal-content.default .modal-icon-container{display:none}@media screen and (max-width: 767px){.modal-content.default .modal-header,.modal-content.default .modal-body,.modal-content.default .modal-footer{width:100%;height:auto;box-sizing:border-box}.modal-content.default .modal-header{padding:24px}.modal-content.default .modal-footer{padding:24px}}.modal-content.alert .modal-header,.modal-content.alert .modal-body,.modal-content.alert .modal-footer{width:100%;height:auto;box-sizing:border-box}.modal-content.alert .modal-icon-container{display:flex}.modal-content.alert .modal-content{display:flex;flex-direction:row}.modal-content.alert .modal-icon-container{width:80px;justify-content:center;align-items:center}@media screen and (max-width: 767px){.modal-content.alert .modal-content{flex-direction:column}.modal-content.alert .modal-icon-container{width:100%;justify-content:flex-start}}',l=class{constructor(e){n(this,e),this.modalOpen=t(this,"modalOpen",7),this.modalClose=t(this,"modalClose",7),this.okButtonClick=t(this,"okButtonClick",7),this.cancelButtonClick=t(this,"cancelButtonClick",7),this.showModal=!1,this.caption="Modal Title",this.closeOnOverlayClick=!0,this.variant="default",this.alertColor="",this.alertIcon=""}async open(){this.showModal=!0,this.modalOpen.emit()}async close(){this.showModal=!1,this.modalClose.emit()}handleOverlayClick(){this.closeOnOverlayClick&&this.close()}handleOkButtonClick(){this.okButtonClick.emit()}handleCancelButtonClick(){this.cancelButtonClick.emit()}render(){const e=this.variant!=="default";return o("div",{class:`modal-container ${this.showModal?"open":""}`},o("div",{class:"modal-overlay",onClick:()=>this.handleOverlayClick()}),o("div",{class:"modal-content-container"},e?o("div",{class:`modal-icon-container ${this.variant==="alert-brand"?"":"danger"}`},this.alertIcon?o("ifx-icon",{icon:this.alertIcon}):null):null,o("div",{class:"modal-content"},o("div",{class:"modal-header"},o("h2",null,this.caption),o("ifx-icon-button",{icon:"cross-24",variant:"tertiary",onClick:()=>this.close()})),o("div",{class:"modal-body"},o("slot",{name:"content"})),o("div",{class:"modal-footer"},o("slot",{name:"buttons"},o("ifx-button",{variant:"secondary",onClick:()=>this.handleOkButtonClick()},"OK"),o("ifx-button",{onClick:()=>this.handleCancelButtonClick()},"Cancel"))))))}};l.style=a;export{l as ifx_modal};
