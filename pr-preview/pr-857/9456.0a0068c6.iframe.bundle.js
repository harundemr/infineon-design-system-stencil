"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[9456],{"./dist/esm/ifx-pagination.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_pagination:()=>Pagination});var _index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-34963df7.js");const Pagination=class{constructor(hostRef){(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxPageChange=(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxPageChange",7),this.ifxNextPage=(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxNextPage",7),this.ifxPrevPage=(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxPrevPage",7),this.CLASS_DISABLED="disabled",this.CLASS_ACTIVE="active",this.CLASS_SIBLING_ACTIVE="active-sibling",this.DATA_KEY="pagination",this.currentPage=0,this.internalPage=1,this.itemsPerPage=10,this.numberOfPages=[],this.total=1}setItemsPerPage(e){this.itemsPerPage=parseInt(e.detail.label)}componentDidLoad(){this.calculateVisiblePageIndices();let leftArrow=this.el.shadowRoot.querySelector(".pagination").querySelector(".prev");this.navigateSinglePage(leftArrow,!0)}calculateNumberOfPages(){isNaN(this.currentPage)&&(this.currentPage=1);const total=this.total<=this.itemsPerPage?this.itemsPerPage:this.total,itemsPerPage=this.itemsPerPage,totalPageNumber=Math.ceil(total/itemsPerPage);this.currentPage<=0?this.internalPage=1:this.currentPage>totalPageNumber?this.internalPage=totalPageNumber:this.internalPage=this.currentPage,this.numberOfPages=Array.from({length:totalPageNumber},((_,index)=>index+1))}componentWillLoad(){this.calculateNumberOfPages()}componentDidUpdate(){var paginationElement=this.el.shadowRoot.querySelector(".pagination"),listItems=paginationElement.querySelectorAll("li");this.addEventListenersToPageItems(listItems,paginationElement),paginationElement.dataset[this.DATA_KEY]<this.numberOfPages?paginationElement.dataset[this.DATA_KEY]=paginationElement.dataset[this.DATA_KEY]:paginationElement.dataset[this.DATA_KEY]=0,this.changePage(paginationElement,!1)}componentWillUpdate(){this.calculateNumberOfPages()}handleEventEmission(currActive){let currentPage=currActive+1,totalPages=this.numberOfPages.length,prevPage=0===currActive?null:currActive,nextPage=currActive+2>totalPages?null:currActive+2,itemsPerPage=this.itemsPerPage;this.ifxPageChange.emit({currentPage,totalPages,prevPage,nextPage,itemsPerPage})}addEventListenersToPageItems(listItems,paginationContainer){listItems.forEach((item=>{item.addEventListener("click",(e=>{var parent=paginationContainer;let listItems=parent.querySelectorAll("li");parent.dataset[this.DATA_KEY]=Array.from(listItems).indexOf(e.currentTarget),this.changePage(parent,!1)}))}))}initPagination(paginationContainer){var listItems=paginationContainer.querySelectorAll("li");paginationContainer.dataset[this.DATA_KEY]=Array.from(listItems).indexOf(paginationContainer.querySelector(".active")),paginationContainer.querySelector(".prev").addEventListener("click",(e=>this.navigateSinglePage(e,!1))),paginationContainer.querySelector(".next").addEventListener("click",(e=>this.navigateSinglePage(e,!1))),this.addEventListenersToPageItems(listItems,paginationContainer)}navigateSinglePage(e,initialValue){let el=e;if("object"==typeof e.target&&(el=e.target),!el.classList.contains(this.CLASS_DISABLED)){var parent=el.closest(".pagination"),currActive=parseInt(parent.dataset[this.DATA_KEY],10);-1===(currActive+=1*(el.classList.contains("prev")?-1:1))&&(currActive=0),parent.dataset[this.DATA_KEY]=currActive,this.changePage(parent,initialValue)}}changePage(pagination,initialValue){const paginationContainer=pagination;var listItems=paginationContainer.querySelectorAll("li"),currActive=parseInt(paginationContainer.dataset[this.DATA_KEY],10);listItems.forEach((item=>{item.classList.remove(this.CLASS_ACTIVE),item.classList.remove(this.CLASS_SIBLING_ACTIVE)})),initialValue&&this.internalPage>1&&(currActive=Math.floor(this.internalPage-1),paginationContainer.dataset[this.DATA_KEY]=currActive),this.handleEventEmission(currActive),listItems[currActive].classList.add(this.CLASS_ACTIVE),0===currActive?(paginationContainer.querySelector(".prev").classList.add(this.CLASS_DISABLED),paginationContainer.querySelector(".prev").disabled=!0):(listItems[currActive-1].classList.add(this.CLASS_SIBLING_ACTIVE),paginationContainer.querySelector(".prev").classList.remove(this.CLASS_DISABLED),paginationContainer.querySelector(".prev").disabled=!1),currActive===listItems.length-1?(paginationContainer.querySelector(".next").classList.add(this.CLASS_DISABLED),paginationContainer.querySelector(".next").disabled=!0):(paginationContainer.querySelector(".next").classList.remove(this.CLASS_DISABLED),paginationContainer.querySelector(".next").disabled=!1)}calculateVisiblePageIndices(){var paginationElement=this.el.shadowRoot.querySelector(".pagination");this.initPagination(paginationElement)}render(){return(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{"aria-label":"a pagination","aria-value":this.currentPage,class:"container"},(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"items__per-page-wrapper"},(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"items__per-page-label"},"Results per Page"),(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"items__per-page-field"},(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-select",{type:"single",value:"undefined","ifx-size":"s",placeholder:"false","search-enabled":"false","search-placeholder-value":"Search...","ifx-disabled":"false","ifx-error":"false","ifx-error-message":"Error","ifx-label":"","ifx-placeholder-value":"Placeholder","ifx-options":'[{"value":"ten","label":"10","selected":true}, {"value":"Twenty","label":"20","selected":false}, {"value":"Thirty","label":"30","selected":false}]'}))),(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"items__total-wrapper"},(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"page__numbers-wrapper"},(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"pagination"},(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon-button",{variant:"secondary",class:"prev",color:"primary",icon:"arrow-left-24"}),(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ol",null,this.numberOfPages.map((item=>(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",{class:""+(this.internalPage===item?"active":"")},(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{href:void 0},item))))),(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon-button",{class:"next",variant:"secondary",color:"primary",icon:"arrow-right-24"})))))}get el(){return(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Pagination.style='@charset "UTF-8";:root{--ifx-font-family:tokens.$ifxFontFamilyBody}*{font-family:var(--ifx-font-family)}:host{display:inline-flex}.container{display:inline-flex;justify-content:center;align-items:center;gap:32px}.container .items__per-page-wrapper{display:flex;align-items:center;gap:16px}.container .items__per-page-wrapper .items__per-page-label{color:#1D1D1D;font-family:Source Sans 3;font-size:14px;font-style:normal;font-weight:600;line-height:20px}.container .items__per-page-wrapper .items__per-page-field{display:flex;flex-direction:column;align-items:flex-start}.container .items__per-page-wrapper .items__per-page-field ifx-select{width:92px}.container .items__total-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .items__total-button{display:flex;width:40px;height:40px;justify-content:center;align-items:center;border-radius:100px;border:1px solid #BFBBBB;background:#FFF}.container .items__total-wrapper .page__numbers-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item{display:flex;padding:6px;flex-direction:column;justify-content:center;align-items:center;gap:10px;border-radius:100px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active{background-color:#0A8276}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active span{color:#fff}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover{cursor:pointer}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover:not(.active){background-color:#ddd}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:active:not(.active){background-color:#575352}.container .items__total-wrapper .page__numbers-wrapper .page__number-item span{display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-family:Source Sans 3;font-size:13px;font-style:normal;font-weight:400;line-height:20px}.pagination{display:flex}.pagination ifx-icon-button:first-of-type{margin-right:12px}.pagination ifx-icon-button:last-of-type{margin-left:12px}a{padding:6px;border-radius:100px}ol{list-style-type:none;padding:0;margin:0;display:inline-flex;align-items:center;gap:12px}li{display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:100px}li:hover:not(.active) a{background-color:#EEEDED}li:active:not(.active) a{background-color:#575352;color:#fff}li.active{background-color:#0A8276}li.active a{color:#fff}li:hover{cursor:pointer}li a{text-decoration:none;display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-family:"Source Sans 3";font-size:13px;font-style:normal;font-weight:400;line-height:20px}.prev.disabled,.next.disabled{cursor:default}.prev.disabled:hover,.next.disabled:hover{cursor:default;text-decoration:none}.prev{margin-right:2.5px}.next{margin-left:2.5px}@media (min-width: 400px){li:first-child,li.active-sibling,li.active,li.active+li,li:last-child{display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8)~li{display:none}li:first-child:nth-last-child(n+8)~li.active-sibling:before{content:"…";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li.active+li:after{content:"…";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+5){display:inline-flex;flex-direction:row}li:first-child:nth-last-child(n+8)~li:nth-last-child(5):before{content:"…";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):after,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):after,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):before,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):after{display:none !important}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5){display:none}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5):before,li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5):before{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+5){display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+4):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+4):after{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(5):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(5):after{content:"…";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8).active:before,li:first-child:nth-last-child(n+8).active:after,li:first-child:nth-last-child(n+8)~li.active:before,li:first-child:nth-last-child(n+8)~li.active:after{display:none}}'}}]);