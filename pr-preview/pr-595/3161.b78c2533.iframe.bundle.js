"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[3161],{"./dist/esm/ifx-breadcrumb.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_breadcrumb:()=>Breadcrumb});var _index_f31c492a_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-f31c492a.js");const Breadcrumb=class{constructor(hostRef){(0,_index_f31c492a_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef)}componentDidLoad(){const element=this.el.shadowRoot.firstChild;this.addEventListenersToHandleCustomFocusState(element)}addEventListenersToHandleCustomFocusState(element){if(!element)return void console.error("element not found");element.tabIndex=-1;const slot=element.querySelector("slot");if(slot){const assignedNodes=slot.assignedNodes();for(let i=0;i<assignedNodes.length;i++){const node=assignedNodes[i];if("IFX-BREADCRUMB-ITEM"===node.nodeName){const breadcrumbLabel=node;breadcrumbLabel.hasAttribute("url")||(breadcrumbLabel.tabIndex=-1,breadcrumbLabel.addEventListener("focus",(()=>{breadcrumbLabel.hasAttribute("url")&&breadcrumbLabel.blur()})))}}}}render(){return(0,_index_f31c492a_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{"aria-label":"Page navigation breadcrumb"},(0,_index_f31c492a_js__WEBPACK_IMPORTED_MODULE_0__.h)("ol",{class:"breadcrumb"},(0,_index_f31c492a_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))}get el(){return(0,_index_f31c492a_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Breadcrumb.style='*{font-family:"Source Sans 3"}:host{display:flex}.breadcrumb{list-style:none;padding:0px;margin:0px;display:flex;flex-direction:row;font-family:"Source Sans 3";font-size:0.875rem;align-items:flex-start}'}}]);