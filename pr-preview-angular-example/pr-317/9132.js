"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[9132],{9132:(g,c,i)=>{i.r(c),i.d(c,{ifx_icon:()=>h});var s=i(6050),l=i(4987);const h=class{constructor(t){(0,s.r)(this,t),this.consoleError=(0,s.c)(this,"consoleError",7),this.icon="",this.ifxIcon=void 0}convertStringToHtml(t){const n=document.createElement("div");return n.innerHTML=t,n.firstChild}convertHtmlToObject(t){return Array.from(t.attributes,({name:e,value:o})=>({name:e,value:o})).reduce((e,o)=>(e[o.name]=o.value,e),{})}convertPathsToVnode(t){let n=[];const e=this.convertHtmlToObject(t),o=(0,s.h)("path",e);if(n.push(o),t.firstChild){const f=t.querySelectorAll("path"),u=t.querySelectorAll("path").length;for(let r=0;r<u;r++){let d=this.convertHtmlToObject(f[r]),v=(0,s.h)("path",d);n.push(v)}}return n}getSVG(t){return(0,s.h)("svg",{class:"inline-svg",width:this.ifxIcon.width,height:this.ifxIcon.height,xmlns:"http://www.w3.org/2000/svg",fill:this.ifxIcon.fill,viewBox:this.ifxIcon.viewBox},...t)}constructIcon(){if(this.ifxIcon){const t=this.convertStringToHtml(this.ifxIcon.svgContent),n=this.convertPathsToVnode(t),e=this.getSVG(n);return this.consoleError.emit(!1),e}return console.error("Icon not found!"),this.consoleError.emit(!0),""}componentWillLoad(){this.ifxIcon=(0,l.g)(this.icon.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(e,o)=>o))}render(){return(0,s.h)(s.a,null,this.constructIcon())}};h.style="ifx-icon{display:inline-flex;justify-content:center}"}}]);