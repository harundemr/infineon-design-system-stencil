"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[851],{851:(n,a,i)=>{i.r(a),i.d(a,{ifx_search_bar:()=>s});var e=i(4881);const s=class{constructor(r){(0,e.r)(this,r),this.ifxInput=(0,e.c)(this,"ifxInput",7),this.handleClick=()=>{this.isOpen=!this.isOpen},this.icon=void 0,this.showCloseButton=!0,this.isOpen=!0,this.hideLabel=!1,this.size="",this.value=""}handleInput(r){this.value=r.detail}render(){return(0,e.h)("div",{class:`search-bar ${this.isOpen?"":"closed"} ${"large"===this.size?"large":""}`},this.isOpen?(0,e.h)("div",{class:"search-bar-wrapper"},(0,e.h)("ifx-search-input",{value:this.value,onIfxInput:this.handleInput.bind(this)},(0,e.h)("ifx-icon",{icon:"search-16",slot:"search-icon"})),this.showCloseButton&&(0,e.h)("ifx-link",{onClick:this.handleClick},"Close")):(0,e.h)("div",{class:"search-bar__icon-wrapper",onClick:this.handleClick},(0,e.h)("ifx-icon",{icon:"search-16"}),(0,e.h)("a",{href:"javascript:void(0)"},"Search")))}};s.style=".search-bar{box-sizing:border-box;height:40px;background-color:#ffffff;display:flex;flex-direction:row;align-items:center;width:100%}.search-bar.large{width:362px}.search-bar.closed{display:inline-flex;width:auto}.search-bar .search-bar-wrapper{display:flex;align-items:center;gap:16px;width:100%}.search-bar .search-bar-wrapper ifx-search-input{width:100%}.search-bar .search-bar-wrapper ifx-link:hover{cursor:pointer}.search-bar .search-bar__icon-wrapper{display:inline-flex;flex-direction:row;align-items:center;justify-content:center}.search-bar .search-bar__icon-wrapper a{font-style:normal;font-weight:400;font-size:14px;line-height:20px;color:#1d1d1d;text-decoration:none;display:flex;align-items:center;flex:none;order:1;flex-grow:0;padding-left:11px}.search-bar .search-bar__icon-wrapper ifx-icon:hover{cursor:pointer}"}}]);