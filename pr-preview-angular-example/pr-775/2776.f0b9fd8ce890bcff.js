"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[2776],{2776:(m,u,d)=>{d.r(u),d.d(u,{ifx_multiselect:()=>h});var p=d(5861),o=d(1252);const h=class{constructor(e){(0,o.r)(this,e),this.ifxSelect=(0,o.c)(this,"ifxSelect",7),this.ifxMultiselectIsOpen=(0,o.c)(this,"ifxMultiselectIsOpen",7),this.currentIndex=0,this.handleDocumentClick=t=>{t.composedPath().includes(this.dropdownElement)||(this.dropdownOpen=!1,document.removeEventListener("click",this.handleDocumentClick),this.ifxMultiselectIsOpen.emit(this.dropdownOpen))},this.options=void 0,this.batchSize=50,this.size="medium (40px)",this.disabled=!1,this.error=!1,this.errorMessage="Error",this.label="",this.persistentSelectedOptions=[],this.placeholder="",this.listOfOptions=[],this.dropdownOpen=!1,this.dropdownFlipped=void 0,this.maxItemCount=void 0,this.zIndex=1,this.isLoading=!1,this.loadedOptions=[]}loadInitialOptions(){var e=this;return(0,p.Z)(function*(){e.isLoading=!0,e.loadedOptions=yield e.fetchOptions(0,e.batchSize),e.isLoading=!1})()}fetchMoreOptions(){var e=this;return(0,p.Z)(function*(){e.isLoading=!0;const t=yield e.fetchOptions(e.loadedOptions.length,e.batchSize);e.loadedOptions=[...e.loadedOptions,...t],e.isLoading=!1})()}handleScroll(e){const t=e.target,s=Math.floor((t.scrollHeight-t.clientHeight)/2);t.scrollTop>=s&&this.fetchMoreOptions()}fetchOptions(e,t){var s=this;return(0,p.Z)(function*(){let r=[];if("string"==typeof s.options)try{r=JSON.parse(s.options)}catch(l){console.error("Failed to parse options:",l)}else Array.isArray(s.options)?r=s.options:console.error("Unexpected value for options:",s.options);const i=r.slice(e,e+t);if(0===e){const l=i.filter(n=>n.selected);s.persistentSelectedOptions=[...s.persistentSelectedOptions,...l]}return i})()}handleOptionsChange(){if("string"==typeof this.options)try{this.listOfOptions=JSON.parse(this.options)}catch(t){console.error("Failed to parse options:",t)}else Array.isArray(this.options)||"object"==typeof this.options?this.listOfOptions=this.options:console.error("Unexpected value for options:",this.options);const e=this.listOfOptions.filter(t=>t.selected);this.persistentSelectedOptions=[...this.persistentSelectedOptions,...e]}componentDidLoad(){setTimeout(()=>{this.positionDropdown()},500)}componentWillLoad(){this.loadInitialOptions()}handleOptionClick(e){if(this.error=!1,this.maxItemCount&&this.persistentSelectedOptions.length+(e.children?e.children.length:1)>this.maxItemCount&&!this.persistentSelectedOptions.some(i=>i.value===e.value))return console.error("Max item count reached"),this.error=!0,void(this.errorMessage="Please consider the maximum number of items to choose from");const s=this.persistentSelectedOptions.some(i=>i.value===e.value);if(e.children&&e.children.length>0)this.persistentSelectedOptions=s?this.persistentSelectedOptions.filter(i=>i.value!==e.value&&!e.children.some(l=>l.value===i.value)):[...this.persistentSelectedOptions,e,...e.children];else{s?this.persistentSelectedOptions=this.persistentSelectedOptions.filter(l=>l.value!==e.value):this.persistentSelectedOptions.push(e);const i=this.listOfOptions.find(l=>l.children&&l.children.some(n=>n.value===e.value));if(i){const l=i.children.every(c=>this.persistentSelectedOptions.some(a=>a.value===c.value));i.children.some(c=>this.persistentSelectedOptions.some(a=>a.value===c.value)),l?this.persistentSelectedOptions.some(c=>c.value===i.value)||this.persistentSelectedOptions.push(i):this.persistentSelectedOptions=this.persistentSelectedOptions.filter(c=>c.value!==i.value)}}this.listOfOptions=this.listOfOptions.map(i=>{if(i.value===e.value)return Object.assign(Object.assign({},i),{selected:!s});if(i.children){const l=this.persistentSelectedOptions.includes(i);return i.children=i.children.map(n=>n.value===e.value||l?Object.assign(Object.assign({},n),{selected:!0}):n),Object.assign(Object.assign({},i),{children:i.children})}return i}),this.persistentSelectedOptions=this.persistentSelectedOptions.map(i=>{const l=this.listOfOptions.find(n=>n.value===i.value)||this.listOfOptions.flatMap(n=>n.children||[]).find(n=>n.value===i.value);return l?Object.assign(Object.assign({},i),{selected:l.selected}):i});const r=this.persistentSelectedOptions.map(i=>{const l=this.listOfOptions.find(n=>n.children&&n.children.some(c=>c.value===i.value));return l&&this.persistentSelectedOptions.some(n=>n.value===l.value)?Object.assign(Object.assign({},i),{selected:!0}):i}).filter(i=>{const l=this.listOfOptions.find(n=>n.children&&n.children.some(c=>c.value===i.value));return!(l&&this.persistentSelectedOptions.some(n=>n.value===l.value))});this.ifxSelect.emit(r)}getSizeClass(){return"s"==`${this.size}`?"small-select":"medium-select"}toggleDropdown(){this.dropdownOpen=!this.dropdownOpen,setTimeout(()=>{this.dropdownOpen&&document.addEventListener("click",this.handleDocumentClick),this.ifxMultiselectIsOpen.emit(this.dropdownOpen)},0),this.zIndex=h.globalZIndex++}waitForElement(e,t,s=50){let r=0;!function i(){requestAnimationFrame(()=>{const l=e();l.length>0||r>s?t(l):(r++,i())})}()}handleKeyDown(e){if(this.disabled)return;const t=this.dropdownElement.querySelectorAll(".option");switch(e.code){case"Enter":this.dropdownOpen?this.selectItem(t):(this.toggleDropdown(),this.waitForElement(()=>this.dropdownElement.querySelectorAll(".option"),s=>{this.updateHighlightedOption(s)}));break;case"ArrowDown":this.handleArrowDown(t),this.dropdownOpen&&this.updateHighlightedOption(t);break;case"ArrowUp":this.handleArrowUp(t),this.dropdownOpen&&this.updateHighlightedOption(t)}}handleWrapperClick(e){this.positionDropdown(),e.currentTarget===e.target&&this.toggleDropdown()}clearSelection(){this.persistentSelectedOptions=[],this.listOfOptions=this.listOfOptions.map(e=>Object.assign(Object.assign({},e),{selected:!1})),this.ifxSelect.emit(this.persistentSelectedOptions)}positionDropdown(){var e;const t=null===(e=this.el.shadowRoot.querySelector(".ifx-multiselect-wrapper"))||void 0===e?void 0:e.getBoundingClientRect(),s=window.innerHeight-t.bottom;this.dropdownFlipped=t.top>s&&t.height>s||t.bottom>window.innerHeight}updateHighlightedOption(e){e.forEach(t=>t.classList.remove("is-highlighted")),this.currentIndex>=0&&this.currentIndex<e.length&&e[this.currentIndex].classList.add("is-highlighted")}handleArrowDown(e){this.currentIndex<e.length-1?this.currentIndex++:this.currentIndex=0}handleArrowUp(e){this.currentIndex>0?this.currentIndex--:this.currentIndex=e.length-1}selectItem(e){const t=this.dropdownElement.querySelector(".option.selected");t&&t.classList.remove("selected");const s=e[this.currentIndex];s.classList.add("selected");const r=s.getAttribute("data-value"),i="string"==typeof this.options?JSON.parse(this.options).map(n=>({value:n.value,label:n.label,children:n.children,selected:n.selected})):this.options.map(n=>Object.assign({},n)),l=this.findInOptions(i,r);this.handleOptionClick(l)}renderOption(e,t){var s;const r=this.persistentSelectedOptions.some(c=>c.value===e.value),i=!r&&this.maxItemCount&&this.persistentSelectedOptions.length>=this.maxItemCount,l=`checkbox-${e.value}-${t}`,n=this.isOptionIndeterminate(e);return(0,o.h)("div",null,(0,o.h)("div",{class:`option ${r?"selected":""} \n        ${this.getSizeClass()}`,"data-value":e.value,onClick:()=>!i&&this.handleOptionClick(e),tabindex:"0",role:(null===(s=e.children)||void 0===s?void 0:s.length)>0?"treeitem":"option"},(0,o.h)("ifx-checkbox",{id:l,value:r,indeterminate:n,disabled:i}),(0,o.h)("label",{htmlFor:l},e.label)),e.children&&e.children.map((c,a)=>this.renderSubOption(c,`${t}-${a}`)))}isOptionIndeterminate(e){if(!e.children)return!1;const t=e.children.filter(s=>this.persistentSelectedOptions.some(r=>r.value===s.value)).length;return t>0&&t<e.children.length}findInOptions(e,t){for(const s of e){if(s.value===t)return s;if(s.children){const r=this.findInOptions(s.children,t);if(r)return r}}return null}renderSubOption(e,t){var s;const r=this.persistentSelectedOptions.some(n=>n.value===e.value),i=!r&&this.maxItemCount&&this.persistentSelectedOptions.length>=this.maxItemCount,l=`checkbox-${e.value}-${t}`;return(0,o.h)("div",{class:`option sub-option ${r?"selected":""} ${this.getSizeClass()}`,"data-value":e.value,role:(null===(s=e.children)||void 0===s?void 0:s.length)>0?"option":"treeitem",onClick:()=>!i&&this.handleOptionClick(e),tabindex:"0"},(0,o.h)("ifx-checkbox",{id:l,value:r,disabled:i}),(0,o.h)("label",{htmlFor:l},e.label))}render(){const e=this.persistentSelectedOptions.map(t=>t.label).join(", ");return(0,o.h)("div",{class:`ifx-multiselect-container ${this.getSizeClass()}`,ref:t=>this.dropdownElement=t},this.label?(0,o.h)("div",{class:"ifx-label-wrapper"},(0,o.h)("span",null,this.label)):null,(0,o.h)("div",{class:`ifx-multiselect-wrapper \n        ${this.getSizeClass()} \n        ${this.dropdownOpen?"active":""} \n        ${this.dropdownFlipped?"is-flipped":""}\n        ${this.error?"error":""}\n        ${this.disabled?"disabled":""}`,tabindex:"0",onClick:t=>this.handleWrapperClick(t),onKeyDown:t=>this.handleKeyDown(t)},(0,o.h)("div",{class:`ifx-multiselect-input \n          ${0===this.persistentSelectedOptions.length?"placeholder":""}\n          `,onClick:this.disabled?void 0:()=>this.toggleDropdown()},this.persistentSelectedOptions.length>0?e:this.placeholder),this.dropdownOpen&&(0,o.h)("div",{class:"ifx-multiselect-dropdown-menu",onScroll:t=>this.handleScroll(t),style:{"--dynamic-z-index":this.zIndex.toString()}},this.loadedOptions.map((t,s)=>this.renderOption(t,s)),this.isLoading&&(0,o.h)("div",null,"Loading more options...")),(0,o.h)("div",{class:"ifx-multiselect-icon-container"},this.persistentSelectedOptions.length>0&&(0,o.h)("div",{class:"ifx-clear-button",onClick:()=>this.clearSelection()},(0,o.h)("ifx-icon",{icon:"cremove24"})),(0,o.h)("div",{class:"icon-wrapper-up",onClick:this.disabled?void 0:()=>this.toggleDropdown()},(0,o.h)("ifx-icon",{key:"icon-up",icon:"chevronup-16"})),(0,o.h)("div",{class:"icon-wrapper-down",onClick:this.disabled?void 0:()=>this.toggleDropdown()},(0,o.h)("ifx-icon",{key:"icon-down",icon:"chevron-down-16"})))),this.error?(0,o.h)("div",{class:"ifx-error-message-wrapper"},(0,o.h)("span",null,this.errorMessage)):null)}get el(){return(0,o.g)(this)}static get watchers(){return{options:["handleOptionsChange"]}}};h.globalZIndex=1,h.style='*{font-family:"Source Sans 3"}.ifx-multiselect-container{position:relative;box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start}.ifx-multiselect-container.small-select{height:36px}.ifx-multiselect-container.medium-select{height:40px}.ifx-multiselect-container:hover{cursor:pointer}.ifx-multiselect-container .ifx-label-wrapper{font-size:16px;line-height:24px;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;max-width:100%}.ifx-multiselect-container .ifx-error-message-wrapper{color:#CD002F;font-size:12px;line-height:16px;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;max-width:100%}.ifx-multiselect-container .ifx-multiselect-wrapper{box-sizing:border-box;position:relative;display:flex;align-items:center;border:1px solid #8D8786;width:100%}.ifx-multiselect-container .ifx-multiselect-wrapper.small-select{line-height:20px;padding:8px 12px;font-size:14px}.ifx-multiselect-container .ifx-multiselect-wrapper.medium-select{line-height:24px;padding:8px 16px;font-size:16px}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible{outline:none}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible:not(.active):not(:active)::before{content:"";position:absolute;width:calc(100% + 4px);height:calc(100% + 4px);top:50%;left:50%;transform:translate(-50%, -50%);border:2px solid #0A8276}.ifx-multiselect-container .ifx-multiselect-wrapper.disabled{background:#EEEDED;color:#575352;border-color:#575352;cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ifx-multiselect-container .ifx-multiselect-wrapper.error{border-color:#CD002F}.ifx-multiselect-container .ifx-multiselect-wrapper:hover:not(.focus,:focus){border-color:#8D8786}.ifx-multiselect-container .ifx-multiselect-wrapper.active{border:2px solid #0A8276 !important}.ifx-multiselect-container .ifx-multiselect-wrapper.active .icon-wrapper-up{display:flex;align-items:center;justify-content:center}.ifx-multiselect-container .ifx-multiselect-wrapper.active .icon-wrapper-down{display:none}.ifx-multiselect-container .ifx-multiselect-wrapper .icon-wrapper-up{display:none}.ifx-multiselect-container .ifx-multiselect-wrapper .icon-wrapper-down{display:flex;align-items:center;justify-content:center}.ifx-multiselect-container .ifx-multiselect-wrapper.is-flipped .ifx-multiselect-dropdown-menu{top:auto;bottom:100%}.ifx-multiselect-container .ifx-multiselect-input{flex-grow:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ifx-multiselect-container .ifx-multiselect-input.placeholder{opacity:0.5}.ifx-multiselect-container .ifx-multiselect-icon-container{margin-left:auto;align-items:center;display:flex}.ifx-multiselect-container .ifx-clear-button{margin-right:8px;display:flex}.ifx-multiselect-container .ifx-multiselect-dropdown-menu{position:absolute;top:100%;left:0;width:100%;border:1px solid #ddd;margin-top:2px;background-color:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);max-height:300px;overflow-y:auto;z-index:var(--dynamic-z-index, 1)}.ifx-multiselect-container .option{position:relative;padding:8px 16px;gap:8px;align-items:center;display:flex;font-style:normal;font-weight:400}.ifx-multiselect-container .option.small-select{line-height:20px;font-size:14px}.ifx-multiselect-container .option.medium-select{line-height:24px;font-size:16px}.ifx-multiselect-container .option:hover{background-color:#EEEDED}.ifx-multiselect-container .option:focus{background-color:#BFBBBB;outline:none;box-shadow:0 0 0 2px rgba(0, 0, 0, 0.1)}.ifx-multiselect-container .option.is-highlighted{background-color:#EEEDED}.ifx-multiselect-container .option.sub-option{padding-left:30px;}'}}]);