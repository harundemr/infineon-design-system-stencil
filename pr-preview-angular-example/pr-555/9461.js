"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[9461],{9461:(f,o,r)=>{r.r(o),r.d(o,{ifx_pagination:()=>c});var a=r(5544);const c=class{constructor(e){(0,a.r)(this,e),this.ifxPageChange=(0,a.c)(this,"ifxPageChange",7),this.ifxNextPage=(0,a.c)(this,"ifxNextPage",7),this.ifxPrevPage=(0,a.c)(this,"ifxPrevPage",7),this.CLASS_DISABLED="disabled",this.CLASS_ACTIVE="active",this.CLASS_SIBLING_ACTIVE="active-sibling",this.DATA_KEY="pagination",this.currentPage=0,this.internalPage=1,this.itemsPerPage=10,this.numberOfPages=[],this.total=1}setItemsPerPage(e){this.itemsPerPage=parseInt(e.detail.label)}componentDidLoad(){this.calculateVisiblePageIndices();let l=this.el.shadowRoot.querySelector(".pagination").querySelector(".prev");this.navigateSinglePage(l,!0)}calculateNumberOfPages(){isNaN(this.currentPage)&&(this.currentPage=1);const t=(this.total<=this.itemsPerPage?this.itemsPerPage:this.total)/this.itemsPerPage;this.internalPage=this.currentPage<=0?1:this.currentPage>t?t:this.currentPage,this.numberOfPages=Array.from({length:t},(n,i)=>i+1)}componentWillLoad(){this.calculateNumberOfPages()}componentDidUpdate(){var e=this.el.shadowRoot.querySelector(".pagination"),l=e.querySelectorAll("li");this.addEventListenersToPageItems(l,e),e.dataset[this.DATA_KEY]=e.dataset[this.DATA_KEY]<this.numberOfPages?e.dataset[this.DATA_KEY]:0,this.changePage(e,!1)}componentWillUpdate(){this.calculateNumberOfPages()}handleEventEmission(e){let t=this.numberOfPages.length;this.ifxPageChange.emit({currentPage:e+1,totalPages:t,prevPage:0===e?null:e,nextPage:e+2>t?null:e+2,itemsPerPage:this.itemsPerPage})}addEventListenersToPageItems(e,l){e.forEach(t=>{t.addEventListener("click",n=>{var i=l;let s=i.querySelectorAll("li");i.dataset[this.DATA_KEY]=Array.from(s).indexOf(n.currentTarget),this.changePage(i,!1)})})}initPagination(e){var l=e.querySelectorAll("li");e.dataset[this.DATA_KEY]=Array.from(l).indexOf(e.querySelector(".active")),e.querySelector(".prev").addEventListener("click",t=>this.navigateSinglePage(t,!1)),e.querySelector(".next").addEventListener("click",t=>this.navigateSinglePage(t,!1)),this.addEventListenersToPageItems(l,e)}navigateSinglePage(e,l){let t=e;if("object"==typeof e.target&&(t=e.target),!t.classList.contains(this.CLASS_DISABLED)){var n=t.closest(".pagination"),i=parseInt(n.dataset[this.DATA_KEY],10);-1===(i+=1*(t.classList.contains("prev")?-1:1))&&(i=0),n.dataset[this.DATA_KEY]=i,this.changePage(n,l)}}changePage(e,l){const t=e;var n=t.querySelectorAll("li"),i=parseInt(t.dataset[this.DATA_KEY],10);n.forEach(s=>{s.classList.remove(this.CLASS_ACTIVE),s.classList.remove(this.CLASS_SIBLING_ACTIVE)}),l&&this.internalPage>1&&(i=Math.floor(this.internalPage-1),t.dataset[this.DATA_KEY]=i),this.handleEventEmission(i),n[i].classList.add(this.CLASS_ACTIVE),0===i?(t.querySelector(".prev").classList.add(this.CLASS_DISABLED),t.querySelector(".prev").disabled=!0):(n[i-1].classList.add(this.CLASS_SIBLING_ACTIVE),t.querySelector(".prev").classList.remove(this.CLASS_DISABLED),t.querySelector(".prev").disabled=!1),i===n.length-1?(t.querySelector(".next").classList.add(this.CLASS_DISABLED),t.querySelector(".next").disabled=!0):(t.querySelector(".next").classList.remove(this.CLASS_DISABLED),t.querySelector(".next").disabled=!1)}calculateVisiblePageIndices(){var e=this.el.shadowRoot.querySelector(".pagination");this.initPagination(e)}render(){return(0,a.h)("div",{class:"container"},(0,a.h)("div",{class:"items__per-page-wrapper"},(0,a.h)("div",{class:"items__per-page-label"},"Results per Page"),(0,a.h)("div",{class:"items__per-page-field"},(0,a.h)("ifx-select",{type:"single",value:"undefined","ifx-size":"s",placeholder:"false","search-enabled":"false","search-placeholder-value":"Search...","ifx-disabled":"false","ifx-error":"false","ifx-error-message":"Error","ifx-label":"","ifx-placeholder-value":"Placeholder","ifx-options":'[{"value":"ten","label":"10","selected":true}, {"value":"Twenty","label":"20","selected":false}, {"value":"Thirty","label":"30","selected":false}]'}))),(0,a.h)("div",{class:"items__total-wrapper"},(0,a.h)("div",{class:"page__numbers-wrapper"},(0,a.h)("div",{class:"pagination"},(0,a.h)("ifx-icon-button",{variant:"secondary",class:"prev",color:"primary",icon:"arrow-left-24"}),(0,a.h)("ol",null,this.numberOfPages.map(e=>(0,a.h)("li",{class:this.internalPage===e?"active":""},(0,a.h)("a",{href:void 0},e)))),(0,a.h)("ifx-icon-button",{class:"next",variant:"secondary",color:"primary",icon:"arrow-right-24"})))))}get el(){return(0,a.g)(this)}};c.style='@charset "UTF-8";@font-face{font-family:"Source Sans 3";font-style:normal;font-weight:400;src:url("~@infineon/design-system-tokens/dist/fonts/source-sans-3/SourceSans3-Regular.ttf.woff2") format("woff2"), url("~@infineon/design-system-tokens/dist/fonts/source-sans-3/SourceSans3-Regular.ttf.woff") format("woff")}@font-face{font-family:"Source Sans 3";font-style:normal;font-weight:600;src:url("~@infineon/design-system-tokens/dist/fonts/source-sans-3/SourceSans3-Semibold.ttf.woff2") format("woff2"), url("~@infineon/design-system-tokens/dist/fonts/source-sans-3/SourceSans3-Semibold.ttf.woff") format("woff")}@font-face{font-family:"Source Sans 3";font-style:italic;font-weight:400;src:url("~@infineon/design-system-tokens/dist/fonts/source-sans-3/SourceSans3-It.ttf.woff2") format("woff2"), url("~@infineon/design-system-tokens/dist/fonts/source-sans-3/SourceSans3-It.ttf.woff") format("woff")}*{font-family:"Source Sans 3", sans-serif}.container{display:inline-flex;justify-content:center;align-items:center;gap:32px}.container .items__per-page-wrapper{display:flex;align-items:center;gap:16px}.container .items__per-page-wrapper .items__per-page-label{color:#1D1D1D;font-family:Source Sans 3;font-size:14px;font-style:normal;font-weight:600;line-height:20px}.container .items__per-page-wrapper .items__per-page-field{display:flex;flex-direction:column;align-items:flex-start}.container .items__per-page-wrapper .items__per-page-field ifx-select{width:92px}.container .items__total-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .items__total-button{display:flex;width:40px;height:40px;justify-content:center;align-items:center;border-radius:100px;border:1px solid #BFBBBB;background:#FFF}.container .items__total-wrapper .page__numbers-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item{display:flex;padding:6px;flex-direction:column;justify-content:center;align-items:center;gap:10px;border-radius:100px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active{background-color:#0A8276}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active span{color:#fff}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover{cursor:pointer}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover:not(.active){background-color:#ddd}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:active:not(.active){background-color:#575352}.container .items__total-wrapper .page__numbers-wrapper .page__number-item span{display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-family:Source Sans 3;font-size:13px;font-style:normal;font-weight:400;line-height:20px}.pagination{display:flex}.pagination ifx-icon-button:first-of-type{margin-right:12px}.pagination ifx-icon-button:last-of-type{margin-left:12px}a{padding:6px;border-radius:100px}ol{list-style-type:none;padding:0;margin:0;display:inline-flex;align-items:center;gap:12px}li{display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:100px}li:hover:not(.active) a{background-color:#EEEDED}li:active:not(.active) a{background-color:#575352;color:#fff}li.active{background-color:#0A8276}li.active a{color:#fff}li:hover{cursor:pointer}li a{text-decoration:none;display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-family:"Source Sans 3";font-size:13px;font-style:normal;font-weight:400;line-height:20px}.prev.disabled,.next.disabled{cursor:default}.prev.disabled:hover,.next.disabled:hover{cursor:default;text-decoration:none}.prev{margin-right:2.5px}.next{margin-left:2.5px}@media (min-width: 400px){li:first-child,li.active-sibling,li.active,li.active+li,li:last-child{display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8)~li{display:none}li:first-child:nth-last-child(n+8)~li.active-sibling:before{content:"\u2026";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li.active+li:after{content:"\u2026";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+5){display:inline-flex;flex-direction:row}li:first-child:nth-last-child(n+8)~li:nth-last-child(5):before{content:"\u2026";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):after,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):after,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):before,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):after{display:none !important}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5){display:none}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5):before,li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5):before{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+5){display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+4):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+4):after{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(5):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(5):after{content:"\u2026";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8).active:before,li:first-child:nth-last-child(n+8).active:after,li:first-child:nth-last-child(n+8)~li.active:before,li:first-child:nth-last-child(n+8)~li.active:after{display:none}}'}}]);