"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[5743],{5743:(s,t,n)=>{n.r(t),n.d(t,{ifx_chip:()=>i});var o=n(1401);const i=class{constructor(e){(0,o.r)(this,e),this.ifxDropdownMenu=(0,o.c)(this,"ifxDropdownMenu",7),this.placeholder=void 0,this.selectedValue=""}handleOutsideClick(e){e.composedPath().includes(this.el)||this.closedMenu()}handleDropdownItemValueEmission(e){this.selectedValue=e.detail,this.ifxDropdownMenu.emit(e.detail),this.toggleMenu()}getDropdownMenu(){return this.el.querySelector("ifx-dropdown-menu")}closedMenu(){this.getDropdownMenu().isOpen=!1}toggleMenu(){let e=this.getDropdownMenu();e.isOpen=!e.isOpen,this.toggleCloseIcon()}toggleCloseIcon(){this.el.shadowRoot.querySelector(".wrapper-close-button").classList.toggle("show")}render(){return(0,o.h)("div",{key:"d7f9ba474f702936f6a65ae3c69f2086e6d0376a","aria-value":this.selectedValue,"aria-label":"chip with a dropdown menu",class:"dropdown container"},(0,o.h)("div",{key:"1d3b28eca94cda7fdf698462c1a84076673d4a03",class:"wrapper",onClick:()=>this.toggleMenu()},(0,o.h)("div",{key:"6446bea08e4e32218f372f36bbe6e84bdfe61f5c",class:"wrapper-label"},this.selectedValue?this.selectedValue:this.placeholder),(0,o.h)("div",{key:"1d93def5241243fd3e05913618560588a6ea19f3",class:"wrapper-close-button"},(0,o.h)("ifx-icon",{key:"fe5b173f048f0830b154c0877a0cbf3158e016c8",icon:"chevrondown12"}))),(0,o.h)("slot",{key:"3ad7157ba69ab691d0563a60b2285528ea426437",name:"menu"}))}get el(){return(0,o.g)(this)}};i.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block}.container{position:relative;font-family:var(--ifx-font-family)}.container .wrapper{display:inline-flex;flex-direction:row;align-items:center;padding:8px 16px;gap:8px;background:#FFFFFF;border:1px solid #BFBBBB;border-radius:100px}.container .wrapper:hover{cursor:pointer;border:1px solid #575352}.container .wrapper:active{border:1px solid #0A8276}.container .wrapper .wrapper-label{font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:0;flex-grow:0}.container .wrapper .wrapper-close-button ifx-icon{transition:0.3s;width:12px;height:12px}.container .wrapper .wrapper-close-button.show ifx-icon{transition:0.3s;transform:rotate(-180deg)}'}}]);