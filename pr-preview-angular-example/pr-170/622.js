"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[622],{3622:(p,t,o)=>{o.r(t),o.d(t,{ifx_icons_preview:()=>r});var i=o(1621),s=o(7701);const r=class{constructor(e){(0,i.r)(this,e),this.iconsArray=[],this.isCopied=!1,this.copiedIndex=void 0}handleToolTip(e){this.isCopied=!0,this.copiedIndex=e,setTimeout(()=>{this.isCopied=!1},2e3)}copyIconText(e,n){navigator.clipboard.writeText(e),this.handleToolTip(n)}componentWillLoad(){for(let e in s.i)this.iconsArray.push(e)}render(){return(0,i.h)("div",{class:"preview__container"},this.iconsArray.map((e,n)=>(0,i.h)("div",{class:"preview__container-item "+(this.isCopied&&this.copiedIndex===n?"copied":""),onClick:()=>this.copyIconText(e,n)},(0,i.h)("ifx-icon",{icon:e}))))}get el(){return(0,i.g)(this)}};r.style='.preview__container{box-sizing:border-box;display:flex;align-items:center;padding:2px;flex-wrap:wrap;gap:4px}.preview__container .preview__container-item{display:flex;justify-content:center;align-items:center;border:1px solid #f1f1f1;padding:2px;width:50px;height:50px;position:relative}.preview__container .preview__container-item:active{border-color:#378375}.preview__container .preview__container-item:hover{cursor:pointer}.preview__container .preview__container-item.copied::after{z-index:10000;content:"copied!";position:absolute;top:0;left:50px;background-color:#000;color:white;padding:3px;border-radius:4px}'}}]);