import{r as a,c as f,h as i,H as p}from"./index-2ca59af7.js";import{g as u}from"./icons-cf35332f-d315bfe3.js";const v="ifx-icon{display:inline-flex;justify-content:center}ifx-icon:empty{display:none}",d=class{constructor(t){a(this,t),this.consoleError=f(this,"consoleError",7),this.icon="",this.ifxIcon=void 0}convertStringToHtml(t){const e=document.createElement("div");return e.innerHTML=t,e.firstChild}convertHtmlToObject(t){return Array.from(t.attributes,({name:o,value:n})=>({name:o,value:n})).reduce((o,n)=>(o[n.name]=n.value,o),{})}convertPathsToVnode(t){let e=[];const o=this.convertHtmlToObject(t),n=i("path",o);if(e.push(n),t.firstChild){const r=t.querySelectorAll("path"),c=t.querySelectorAll("path").length;for(let s=0;s<c;s++){let h=this.convertHtmlToObject(r[s]),l=i("path",h);e.push(l)}}return e}getSVG(t){return i("svg",{class:"inline-svg",width:this.ifxIcon.width,height:this.ifxIcon.height,xmlns:"http://www.w3.org/2000/svg",fill:this.ifxIcon.fill,viewBox:this.ifxIcon.viewBox},...t)}constructIcon(){if(this.ifxIcon){const t=this.convertStringToHtml(this.ifxIcon.svgContent),e=this.convertPathsToVnode(t),o=this.getSVG(e);return this.consoleError.emit(!1),o}else return console.error("Icon not found!"),this.consoleError.emit(!0),""}componentWillLoad(){const t=e=>e.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(o,n)=>n);this.ifxIcon=u(t(this.icon))}render(){return i(p,null,this.constructIcon())}};d.style=v;export{d as ifx_icon};
