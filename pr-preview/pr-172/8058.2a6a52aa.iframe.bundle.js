"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[8058],{"./dist/esm/ifx-icon.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_icon:()=>InfineonIconStencil});var _index_6c912e7e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-6c912e7e.js"),_icons_4163e6b2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/icons-4163e6b2.js");const InfineonIconStencil=class{constructor(hostRef){(0,_index_6c912e7e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icon="",this.ifxIcon=void 0}convertStringToHtml(htmlString){const div=document.createElement("div");return div.innerHTML=htmlString,div.firstChild}convertHtmlToObject(htmlElement){return Array.from(htmlElement.attributes,(({name,value})=>({name,value}))).reduce(((acc,current)=>(acc[current.name]=current.value,acc)),{})}convertPathsToVnode(htmlPath){let svgPaths=[];const parentPath=this.convertHtmlToObject(htmlPath),parentPathToVnode=(0,_index_6c912e7e_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",parentPath);if(svgPaths.push(parentPathToVnode),htmlPath.firstChild){const paths=htmlPath.querySelectorAll("path"),pathLength=htmlPath.querySelectorAll("path").length;for(let i=0;i<pathLength;i++){let pathToObject=this.convertHtmlToObject(paths[i]),objToVnode=(0,_index_6c912e7e_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",pathToObject);svgPaths.push(objToVnode)}}return svgPaths}getSVG(svgPath){return(0,_index_6c912e7e_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"inline-svg",width:this.ifxIcon.width,height:this.ifxIcon.height,xmlns:"http://www.w3.org/2000/svg",fill:this.ifxIcon.fill,viewBox:this.ifxIcon.viewBox},...svgPath)}constructIcon(){if(this.ifxIcon){const htmlPath=this.convertStringToHtml(this.ifxIcon.svgContent),svgPath=this.convertPathsToVnode(htmlPath);return this.getSVG(svgPath)}return console.error("Icon not found!"),""}componentWillLoad(){this.ifxIcon=(0,_icons_4163e6b2_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.icon.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,((_m,chr)=>chr)))}render(){return(0,_index_6c912e7e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6c912e7e_js__WEBPACK_IMPORTED_MODULE_0__.H,null,this.constructIcon())}};InfineonIconStencil.style="ifx-icon{display:inline-flex;justify-content:center}"}}]);