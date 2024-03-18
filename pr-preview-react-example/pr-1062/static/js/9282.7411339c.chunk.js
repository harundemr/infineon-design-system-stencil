"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[9282],{9282:(e,t,i)=>{i.r(t),i.d(t,{ifx_pagination:()=>l});var a=i(4742);const l=class{constructor(e){(0,a.r)(this,e),this.ifxPageChange=(0,a.c)(this,"ifxPageChange",7),this.ifxNextPage=(0,a.c)(this,"ifxNextPage",7),this.ifxPrevPage=(0,a.c)(this,"ifxPrevPage",7),this.CLASS_DISABLED="disabled",this.CLASS_ACTIVE="active",this.CLASS_SIBLING_ACTIVE="active-sibling",this.DATA_KEY="pagination",this.currentPage=0,this.internalPage=1,this.itemsPerPage=10,this.numberOfPages=[],this.total=1}setItemsPerPage(e){this.itemsPerPage=parseInt(e.detail.label)}componentDidLoad(){this.calculateVisiblePageIndices();let e=this.el.shadowRoot.querySelector(".pagination").querySelector(".prev");this.navigateSinglePage(e,!0)}calculateNumberOfPages(){isNaN(this.currentPage)&&(this.currentPage=1);const e=this.total<=this.itemsPerPage?this.itemsPerPage:this.total,t=this.itemsPerPage,i=Math.ceil(e/t);this.currentPage<=0?this.internalPage=1:this.currentPage>i?this.internalPage=i:this.internalPage=this.currentPage,this.numberOfPages=Array.from({length:i},((e,t)=>t+1))}componentWillLoad(){this.calculateNumberOfPages()}componentDidUpdate(){var e=this.el.shadowRoot.querySelector(".pagination"),t=e.querySelectorAll("li");this.addEventListenersToPageItems(t,e),e.dataset[this.DATA_KEY]<this.numberOfPages?e.dataset[this.DATA_KEY]=e.dataset[this.DATA_KEY]:e.dataset[this.DATA_KEY]=0,this.changePage(e,!1)}componentWillUpdate(){this.calculateNumberOfPages()}handleEventEmission(e){let t=e+1,i=this.numberOfPages.length,a=0===e?null:e,l=e+2>i?null:e+2,n=this.itemsPerPage;this.ifxPageChange.emit({currentPage:t,totalPages:i,prevPage:a,nextPage:l,itemsPerPage:n})}addEventListenersToPageItems(e,t){e.forEach((e=>{e.addEventListener("click",(e=>{var i=t;let a=i.querySelectorAll("li");i.dataset[this.DATA_KEY]=Array.from(a).indexOf(e.currentTarget),this.changePage(i,!1)}))}))}initPagination(e){var t=e.querySelectorAll("li");e.dataset[this.DATA_KEY]=Array.from(t).indexOf(e.querySelector(".active")),e.querySelector(".prev").addEventListener("click",(e=>this.navigateSinglePage(e,!1))),e.querySelector(".next").addEventListener("click",(e=>this.navigateSinglePage(e,!1))),this.addEventListenersToPageItems(t,e)}navigateSinglePage(e,t){let i=e;if("object"===typeof e.target&&(i=e.target),!i.classList.contains(this.CLASS_DISABLED)){var a=i.closest(".pagination"),l=parseInt(a.dataset[this.DATA_KEY],10);-1===(l+=1*(i.classList.contains("prev")?-1:1))&&(l=0),a.dataset[this.DATA_KEY]=l,this.changePage(a,t)}}changePage(e,t){const i=e;var a=i.querySelectorAll("li"),l=parseInt(i.dataset[this.DATA_KEY],10);a.forEach((e=>{e.classList.remove(this.CLASS_ACTIVE),e.classList.remove(this.CLASS_SIBLING_ACTIVE)})),t&&this.internalPage>1&&(l=Math.floor(this.internalPage-1),i.dataset[this.DATA_KEY]=l),this.handleEventEmission(l),a[l].classList.add(this.CLASS_ACTIVE),0===l?(i.querySelector(".prev").classList.add(this.CLASS_DISABLED),i.querySelector(".prev").disabled=!0):(a[l-1].classList.add(this.CLASS_SIBLING_ACTIVE),i.querySelector(".prev").classList.remove(this.CLASS_DISABLED),i.querySelector(".prev").disabled=!1),l===a.length-1?(i.querySelector(".next").classList.add(this.CLASS_DISABLED),i.querySelector(".next").disabled=!0):(i.querySelector(".next").classList.remove(this.CLASS_DISABLED),i.querySelector(".next").disabled=!1)}calculateVisiblePageIndices(){var e=this.el.shadowRoot.querySelector(".pagination");this.initPagination(e)}render(){return(0,a.h)("div",{key:"ca822ebe7191b3f5ef7aa7231b7812c0ac98bd8a","aria-label":"a pagination","aria-value":this.currentPage,class:"container"},(0,a.h)("div",{key:"6dda5fee0dde3dc5592e70554e6576a4b7e35822",class:"items__per-page-wrapper"},(0,a.h)("div",{key:"fc94f38dfe7a2b25e5df79b6d325aaf359d3e5f4",class:"items__per-page-label"},"Results per Page"),(0,a.h)("div",{key:"0f9c39d494599e5534c8908555402de9dd520a19",class:"items__per-page-field"},(0,a.h)("ifx-select",{key:"dbdceb645f80e6216ed92199b53781c0aeb2235c",type:"single",value:"undefined","ifx-size":"s",placeholder:"false","search-enabled":"false","search-placeholder-value":"Search...","ifx-disabled":"false","ifx-error":"false","ifx-error-message":"Error","ifx-label":"","ifx-placeholder-value":"Placeholder","ifx-options":'[{"value":"ten","label":"10","selected":true}, {"value":"Twenty","label":"20","selected":false}, {"value":"Thirty","label":"30","selected":false}]'}))),(0,a.h)("div",{key:"5ef3d59e1904031ef0bcee9cbc32470d4a6e40c1",class:"items__total-wrapper"},(0,a.h)("div",{key:"d21051389f531f9b1cde1b6257a2a93d95687fd1",class:"page__numbers-wrapper"},(0,a.h)("div",{key:"ec4c3bb27a73ef519fe12a8bbe8a4f7551217fb4",class:"pagination"},(0,a.h)("ifx-icon-button",{key:"d83b8702e78fb190ebd320f503345fb9c082ac6c",variant:"secondary",class:"prev",color:"primary",icon:"arrow-left-24"}),(0,a.h)("ol",{key:"0d34a7fa3f55bf7d6cfc79e001ed8b0e93660a3a"},this.numberOfPages.map((e=>(0,a.h)("li",{class:"".concat(this.internalPage===e?"active":"")},(0,a.h)("a",{href:void 0},e))))),(0,a.h)("ifx-icon-button",{key:"578074f67a03d6815f9da6ec4633e83c10199659",class:"next",variant:"secondary",color:"primary",icon:"arrow-right-24"})))))}get el(){return(0,a.g)(this)}};l.style='@charset "UTF-8";:root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.container{display:inline-flex;justify-content:center;align-items:center;gap:32px;font-family:var(--ifx-font-family)}.container .items__per-page-wrapper{display:flex;align-items:center;gap:16px}.container .items__per-page-wrapper .items__per-page-label{color:#1D1D1D;font-size:14px;font-style:normal;font-weight:600;line-height:20px}.container .items__per-page-wrapper .items__per-page-field{display:flex;flex-direction:column;align-items:flex-start}.container .items__per-page-wrapper .items__per-page-field ifx-select{width:92px}.container .items__total-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .items__total-button{display:flex;width:40px;height:40px;justify-content:center;align-items:center;border-radius:100px;border:1px solid #BFBBBB;background:#FFF}.container .items__total-wrapper .page__numbers-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item{display:flex;padding:6px;flex-direction:column;justify-content:center;align-items:center;gap:10px;border-radius:100px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active{background-color:#0A8276}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active span{color:#fff}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover{cursor:pointer}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover:not(.active){background-color:#ddd}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:active:not(.active){background-color:#575352}.container .items__total-wrapper .page__numbers-wrapper .page__number-item span{display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-size:13px;font-style:normal;font-weight:400;line-height:20px}.pagination{display:flex}.pagination ifx-icon-button:first-of-type{margin-right:12px}.pagination ifx-icon-button:last-of-type{margin-left:12px}a{padding:6px;border-radius:100px}ol{list-style-type:none;padding:0;margin:0;display:inline-flex;align-items:center;gap:12px}li{display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:100px}li:hover:not(.active) a{background-color:#EEEDED}li:active:not(.active) a{background-color:#575352;color:#fff}li.active{background-color:#0A8276}li.active a{color:#fff}li:hover{cursor:pointer}li a{text-decoration:none;display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-size:13px;font-style:normal;font-weight:400;line-height:20px}.prev.disabled,.next.disabled{cursor:default}.prev.disabled:hover,.next.disabled:hover{cursor:default;text-decoration:none}.prev{margin-right:2.5px}.next{margin-left:2.5px}@media (min-width: 400px){li:first-child,li.active-sibling,li.active,li.active+li,li:last-child{display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8)~li{display:none}li:first-child:nth-last-child(n+8)~li.active-sibling:before{content:"\u2026";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li.active+li:after{content:"\u2026";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+5){display:inline-flex;flex-direction:row}li:first-child:nth-last-child(n+8)~li:nth-last-child(5):before{content:"\u2026";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):after,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):after,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):before,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):after{display:none !important}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5){display:none}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5):before,li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5):before{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+5){display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+4):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+4):after{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(5):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(5):after{content:"\u2026";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8).active:before,li:first-child:nth-last-child(n+8).active:after,li:first-child:nth-last-child(n+8)~li.active:before,li:first-child:nth-last-child(n+8)~li.active:after{display:none}}'}}]);
//# sourceMappingURL=9282.7411339c.chunk.js.map