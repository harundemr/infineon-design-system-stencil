"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[4916],{4916:(a,r,t)=>{t.r(r),t.d(r,{ifx_dropdown:()=>o});var s=t(4795),n=t(5472),l=t(7142);const o=class{constructor(e){(0,n.r)(this,e),this.ifxOpen=(0,n.c)(this,"ifxOpen",7),this.ifxClose=(0,n.c)(this,"ifxClose",7),this.ifxDropdown=(0,n.c)(this,"ifxDropdown",7),this.placement="bottom-start",this.defaultOpen=!1,this.internalIsOpen=!1,this.noAppendToBody=!1,this.disabled=void 0,this.noCloseOnOutsideClick=!1,this.noCloseOnMenuClick=!1,this.trigger=void 0,this.menu=void 0}componentWillLoad(){this.updateSlotContent(),this.watchHandlerIsOpen(this.defaultOpen,this.internalIsOpen)}watchHandlerIsOpen(e,i){e!==i&&e!==this.internalIsOpen&&(e?this.openDropdown():this.closeDropdown())}watchHandlerDisabled(e){this.trigger&&(this.trigger.disabled=e)}watchHandlerSlot(){this.updateSlotContent()}updateSlotContent(){this.trigger=this.el.querySelector("ifx-dropdown-trigger-button, ifx-dropdown-trigger"),this.trigger&&(this.trigger.disabled=this.disabled,this.trigger.removeEventListener("click",this.triggerClickHandler.bind(this)),this.trigger.addEventListener("click",this.triggerClickHandler.bind(this))),this.noAppendToBody?this.menu=this.el.querySelector("ifx-dropdown-menu"):(this.menu&&this.menu.remove(),this.menu=this.el.querySelector("ifx-dropdown-menu"),document.body.append(this.menu)),this.menu.removeEventListener("click",this.menuClickHandler.bind(this)),this.menu.addEventListener("click",this.menuClickHandler.bind(this))}menuClickHandler(){this.noCloseOnMenuClick||this.closeDropdown()}triggerClickHandler(){this.internalIsOpen?this.closeDropdown():this.openDropdown()}disconnectedCallback(){this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=null),this.menu&&this.menu.remove()}isOpen(){var e=this;return(0,s.Z)(function*(){return e.internalIsOpen})()}closeDropdown(){var e=this;return(0,s.Z)(function*(){e.internalIsOpen&&(e.internalIsOpen=!1,e.trigger.isOpen=!1,e.menu.isOpen=!1,e.ifxClose.emit()),e.popperInstance&&(e.popperInstance.destroy(),e.popperInstance=null)})()}openDropdown(){var e=this;return(0,s.Z)(function*(){!e.internalIsOpen&&!e.disabled&&(e.internalIsOpen=!0,e.trigger.isOpen=!0,e.menu.isOpen=!0,e.popperInstance=(0,l.c)(e.el,e.menu,{placement:e.placement}),e.ifxOpen.emit())})()}handleOutsideClick(e){const i=e.target;!this.noCloseOnOutsideClick&&!this.el.contains(i)&&!this.menu.contains(i)&&this.closeDropdown()}render(){return(0,n.h)("div",{key:"c796fef2344edfd5ba802d654a4ce7ffea352297","aria-label":"dropdown menu",class:"dropdown"},(0,n.h)("slot",{key:"5dbf6fc7f9ff039f8f918e696c685ab0b82aedda"}))}get el(){return(0,n.g)(this)}static get watchers(){return{defaultOpen:["watchHandlerIsOpen"],disabled:["watchHandlerDisabled"]}}};o.style=":host{display:inline-block}"}}]);