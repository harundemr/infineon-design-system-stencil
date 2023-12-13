"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[6861],{"./dist/esm/ifx-accordion_3.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_accordion:()=>Accordion,ifx_accordion_item:()=>IfxAccordionItem,ifx_icon:()=>InfineonIconStencil});var _index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-34963df7.js"),_icons_af2bd2c4_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/icons-af2bd2c4.js");const Accordion=class{constructor(hostRef){(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.autoCollapse=!1}async onItemOpen(event){if(this.autoCollapse){const items=Array.from(this.el.querySelectorAll("ifx-accordion-item"));for(const item of items){const itemElement=item;itemElement!==event.target&&await itemElement.isOpen()&&itemElement.close()}}}render(){return(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"accordion-wrapper"},(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}get el(){return(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Accordion.style='*{font-family:"Source Sans 3"}:host{display:block}.accordion-wrapper{display:flex;flex-direction:column;gap:8px}';const IfxAccordionItem=class{constructor(hostRef){(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxItemOpen=(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxItemOpen",7),this.ifxItemClose=(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxItemClose",7),this.caption=void 0,this.initialCollapse=!0,this.open=!1}toggleOpen(){this.open=!this.open,this.open?this.ifxItemOpen.emit():this.ifxItemClose.emit()}openAccordionItem(){this.open?this.contentEl.style.maxHeight=`${this.contentEl.scrollHeight}px`:this.contentEl.style.maxHeight="0"}componentWillLoad(){this.initialCollapse||(this.open=!0,this.ifxItemOpen.emit())}componentDidLoad(){this.openAccordionItem()}componentDidUpdate(){this.openAccordionItem()}async close(){this.open=!1,this.ifxItemClose.emit()}async isOpen(){return this.open}render(){return(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{"aria-label":this.caption,class:"accordion-item "+(this.open?"open":"")},(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"accordion-title",onClick:()=>this.toggleOpen()},(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"accordion-icon"},(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:"chevron-down-12"})),(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"accordion-caption"},this.caption)),(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"accordion-content",ref:el=>this.contentEl=el},(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"inner-content"},(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))))}};IfxAccordionItem.style='*{font-family:"Source Sans 3"}.accordion-item{border-radius:3px;overflow:hidden;transition:all 0.3s}.accordion-title:hover{border:1px solid #EEEDED;color:#08665C}.accordion-title{display:flex;align-items:center;padding:12px 16px;gap:12px;color:#0A8276;background-color:#FFFFFF;border:1px solid #EEEDED;cursor:pointer}.accordion-caption{font-weight:600;font-size:1.125rem}.accordion-content{gap:8px;max-height:0;overflow:hidden;transition:max-height 0.3s ease-in-out;line-height:24px;font-size:1rem;font-weight:400;font-family:"Source Sans 3"}.inner-content{background-color:#FFFFFF;padding:24px;word-wrap:break-word;overflow-wrap:anywhere;align-self:stretch;}.accordion-icon{font-weight:bold;display:inline-block;transition:transform 0.3s}.accordion-icon:hover{color:#08665C}.accordion-item.open .accordion-icon{transform:rotate(-180deg)}';const InfineonIconStencil=class{constructor(hostRef){(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.consoleError=(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"consoleError",7),this.icon="",this.ifxIcon=void 0}convertStringToHtml(htmlString){const div=document.createElement("div");return div.innerHTML=htmlString,div.firstChild}convertHtmlToObject(htmlElement){return Array.from(htmlElement.attributes,(({name,value})=>({name,value}))).reduce(((acc,current)=>(acc[current.name]=current.value,acc)),{})}convertPathsToVnode(htmlPath){let svgPaths=[];const parentPath=this.convertHtmlToObject(htmlPath),parentPathToVnode=(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",parentPath);if(svgPaths.push(parentPathToVnode),htmlPath.firstChild){const paths=htmlPath.querySelectorAll("path"),pathLength=htmlPath.querySelectorAll("path").length;for(let i=0;i<pathLength;i++){let pathToObject=this.convertHtmlToObject(paths[i]),objToVnode=(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",pathToObject);svgPaths.push(objToVnode)}}return svgPaths}getSVG(svgPath){return(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"inline-svg",width:this.ifxIcon.width,height:this.ifxIcon.height,xmlns:"http://www.w3.org/2000/svg",fill:this.ifxIcon.fill,viewBox:this.ifxIcon.viewBox},...svgPath)}constructIcon(){if(this.ifxIcon){const htmlPath=this.convertStringToHtml(this.ifxIcon.svgContent),svgPath=this.convertPathsToVnode(htmlPath),SVG=this.getSVG(svgPath);return this.consoleError.emit(!1),SVG}return console.error("Icon not found!"),this.consoleError.emit(!0),""}componentWillLoad(){this.ifxIcon=(0,_icons_af2bd2c4_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.icon.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,((_m,chr)=>chr)))}render(){return(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.a,null,this.constructIcon())}};InfineonIconStencil.style="ifx-icon{display:inline-flex;justify-content:center}ifx-icon:empty{display:none}"}}]);