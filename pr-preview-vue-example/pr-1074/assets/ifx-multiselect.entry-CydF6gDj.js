import{r as p,c as d,h as n,g as u}from"./index-CLxS7RNl.js";const f=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.ifx-multiselect-container{background-color:#FFFFFF;position:relative;box-sizing:border-box;font-family:var(--ifx-font-family)}.ifx-multiselect-container.small-select{height:36px}.ifx-multiselect-container.medium-select{height:40px}.ifx-multiselect-container:hover{cursor:pointer}.ifx-multiselect-container .ifx-label-wrapper{font-size:1rem;line-height:1.5rem;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;max-width:100%}.ifx-multiselect-container .ifx-error-message-wrapper{color:#CD002F;font-size:0.75rem;line-height:1rem;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;max-width:100%}.ifx-multiselect-container .ifx-multiselect-wrapper{box-sizing:border-box;position:relative;display:flex;align-items:center;border:1px solid #8D8786;border-radius:1px;width:100%;font-weight:400;font-style:normal}.ifx-multiselect-container .ifx-multiselect-wrapper.small-select{height:36px;padding:8px 12px;font-size:0.875rem;line-height:1.25rem}.ifx-multiselect-container .ifx-multiselect-wrapper.medium-select{height:40px;padding:8px 16px;font-size:1rem;line-height:1.5rem}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible{outline:none}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible:not(.active):not(:active){outline:none}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible:not(.active):not(:active)::before{content:"";position:absolute;width:calc(100% + 4px);height:calc(100% + 4px);top:50%;left:50%;transform:translate(-50%, -50%);border:2px solid #0A8276;border-radius:2px}.ifx-multiselect-container .ifx-multiselect-wrapper.disabled{background:#EEEDED;color:#575352;border-color:#575352;cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ifx-multiselect-container .ifx-multiselect-wrapper.error{border-color:#CD002F}.ifx-multiselect-container .ifx-multiselect-wrapper:hover:not(.focus,:focus){border-color:#575352}.ifx-multiselect-container .ifx-multiselect-wrapper.active{border-color:#0A8276 !important}.ifx-multiselect-container .ifx-multiselect-wrapper.active .icon-wrapper-up{display:flex;align-items:center;justify-content:center;padding-left:8px}.ifx-multiselect-container .ifx-multiselect-wrapper.active .icon-wrapper-down{display:none}.ifx-multiselect-container .ifx-multiselect-wrapper .icon-wrapper-up{display:none}.ifx-multiselect-container .ifx-multiselect-wrapper .icon-wrapper-down{display:flex;align-items:center;justify-content:center;padding-left:8px}.ifx-multiselect-container .ifx-multiselect-wrapper.is-flipped .ifx-multiselect-dropdown-menu{top:auto;bottom:100%}.ifx-multiselect-container .ifx-multiselect-input{flex-grow:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ifx-multiselect-container .ifx-multiselect-input.placeholder{opacity:0.5}.ifx-multiselect-container .ifx-multiselect-icon-container{margin-left:auto;align-items:center;display:flex}.ifx-multiselect-container .ifx-clear-button{margin-right:8px;display:flex}.ifx-multiselect-container .ifx-multiselect-dropdown-menu{position:absolute;top:100%;left:0;width:100%;margin-top:2px;background-color:#fff;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1);max-height:300px;overflow-y:auto;z-index:var(--dynamic-z-index, 1)}.ifx-multiselect-container .ifx-multiselect-dropdown-menu .search-input{width:100%;padding:8px 16px;font-size:1rem;line-height:1.5rem;font-style:normal;font-weight:400;box-sizing:border-box;background-color:#FFFFFF;border:none;border-bottom:1px solid #8D8786}.ifx-multiselect-container .ifx-multiselect-dropdown-menu .search-input:focus{outline:none;border:1px solid #0A8276}.ifx-multiselect-container .ifx-multiselect-dropdown-menu .search-input::placeholder{color:#999}.ifx-multiselect-container .option{position:relative;padding:8px 16px;gap:8px;align-items:center;display:flex;font-style:normal;font-weight:400}.ifx-multiselect-container .option.small-select{font-size:0.875rem;line-height:1.25rem}.ifx-multiselect-container .option.medium-select{font-size:1rem;line-height:1.5rem}.ifx-multiselect-container .option:hover{background-color:#EEEDED}.ifx-multiselect-container .option:focus{background-color:#BFBBBB;outline:none}.ifx-multiselect-container .option.is-highlighted{background-color:#EEEDED}.ifx-multiselect-container .option.sub-option{padding-left:30px;}',m=f;function x(e,t){let i;return function(...l){const o=()=>{clearTimeout(i),e(...l)};clearTimeout(i),i=setTimeout(o,t)}}const a=class{constructor(e){p(this,e),this.ifxSelect=d(this,"ifxSelect",7),this.ifxMultiselectIsOpen=d(this,"ifxMultiselectIsOpen",7),this.currentIndex=0,this.handleSearch=x(t=>{const i=t.value.toLowerCase();i===""?this.filteredOptions=this.loadedOptions:this.filteredOptions=this.loadedOptions.filter(s=>s.label.toLowerCase().includes(i))},300),this.handleDocumentClick=t=>{t.composedPath().includes(this.dropdownElement)||(this.dropdownOpen=!1,document.removeEventListener("click",this.handleDocumentClick),this.ifxMultiselectIsOpen.emit(this.dropdownOpen))},this.options=void 0,this.batchSize=50,this.size="medium (40px)",this.disabled=!1,this.error=!1,this.internalError=!1,this.errorMessage="Error",this.label="",this.persistentSelectedOptions=[],this.placeholder="",this.listOfOptions=[],this.dropdownOpen=!1,this.dropdownFlipped=void 0,this.maxItemCount=void 0,this.zIndex=1,this.isLoading=!1,this.loadedOptions=[],this.filteredOptions=[],this.searchEnabled=!0}async loadInitialOptions(){this.isLoading=!0,this.internalError=this.error,this.loadedOptions=await this.fetchOptions(0,this.batchSize),this.isLoading=!1}async fetchMoreOptions(){this.isLoading=!0;const e=await this.fetchOptions(this.loadedOptions.length,this.batchSize);this.loadedOptions=[...this.loadedOptions,...e],this.isLoading=!1}handleScroll(e){const t=e.target,i=Math.floor((t.scrollHeight-t.clientHeight)/2);t.scrollTop>=i&&this.fetchMoreOptions()}async fetchOptions(e,t){let i=[];if(typeof this.options=="string")try{i=JSON.parse(this.options)}catch(l){console.error("Failed to parse options:",l)}else Array.isArray(this.options)?i=this.options:console.error("Unexpected value for options:",this.options);const s=i.slice(e,e+t);if(e===0){const l=s.filter(o=>o.selected);this.persistentSelectedOptions=[...this.persistentSelectedOptions,...l]}return s}componentDidLoad(){setTimeout(()=>{this.positionDropdown()},500)}componentWillLoad(){this.loadInitialOptions(),this.filteredOptions=[...this.loadedOptions]}updateInternalError(){this.internalError=this.error}loadedOptionsChanged(){this.filteredOptions=[...this.loadedOptions]}handleOptionClick(e){if(this.internalError=!1,this.isSelectionLimitReached(e)){console.error("Max item count reached"),this.internalError=!0,this.errorMessage="Please consider the maximum number of items to choose from";return}this.updateSelection(e),this.ifxSelect.emit(this.persistentSelectedOptions)}isSelectionLimitReached(e){let t=e.children?e.children.length:1;return this.maxItemCount&&this.persistentSelectedOptions.length+t>this.maxItemCount&&!this.persistentSelectedOptions.some(i=>i.value===e.value)}updateSelection(e){const t=this.persistentSelectedOptions.some(i=>i.value===e.value);e.children&&e.children.length>0?this.handleParentOptionClick(e):this.handleChildOptionClick(e,t)}handleParentOptionClick(e){if(e.children.every(i=>this.persistentSelectedOptions.some(s=>s.value===i.value)))this.persistentSelectedOptions=[...this.persistentSelectedOptions.filter(i=>!e.children.some(s=>s.value===i.value))];else{const i=[...e.children.filter(s=>!this.persistentSelectedOptions.some(l=>l.value===s.value))];this.persistentSelectedOptions=[...this.persistentSelectedOptions,...i]}}handleChildOptionClick(e,t){t?this.persistentSelectedOptions=[...this.persistentSelectedOptions.filter(i=>i.value!==e.value)]:this.persistentSelectedOptions=[...this.persistentSelectedOptions,e]}getSizeClass(){return`${this.size}`=="s"?"small-select":"medium-select"}toggleDropdown(){this.dropdownOpen=!this.dropdownOpen,setTimeout(()=>{this.dropdownOpen&&document.addEventListener("click",this.handleDocumentClick),this.ifxMultiselectIsOpen.emit(this.dropdownOpen)},0),this.zIndex=a.globalZIndex++}waitForElement(e,t,i=50){let s=0;function l(){requestAnimationFrame(()=>{const o=e();o.length>0||s>i?t(o):(s++,l())})}l()}handleKeyDown(e){if(this.disabled)return;const t=this.dropdownElement.querySelectorAll(".option");switch(e.code){case"Enter":this.dropdownOpen?this.selectItem(t):(this.toggleDropdown(),this.waitForElement(()=>this.dropdownElement.querySelectorAll(".option"),i=>{this.updateHighlightedOption(i)}));break;case"ArrowDown":this.handleArrowDown(t),this.dropdownOpen&&this.updateHighlightedOption(t);break;case"ArrowUp":this.handleArrowUp(t),this.dropdownOpen&&this.updateHighlightedOption(t);break}}handleWrapperClick(e){this.positionDropdown(),e.currentTarget===e.target&&this.toggleDropdown()}clearSelection(){this.persistentSelectedOptions=[],this.ifxSelect.emit(this.persistentSelectedOptions)}positionDropdown(){var e;const t=(e=this.el.shadowRoot.querySelector(".ifx-multiselect-wrapper"))===null||e===void 0?void 0:e.getBoundingClientRect(),i=window.innerHeight-t.bottom;t.top>i&&t.height>i||t.bottom>window.innerHeight?this.dropdownFlipped=!0:this.dropdownFlipped=!1}updateHighlightedOption(e){e.forEach(t=>t.classList.remove("is-highlighted")),this.currentIndex>=0&&this.currentIndex<e.length&&e[this.currentIndex].classList.add("is-highlighted")}handleArrowDown(e){this.currentIndex<e.length-1?this.currentIndex++:this.currentIndex=0}handleArrowUp(e){this.currentIndex>0?this.currentIndex--:this.currentIndex=e.length-1}selectItem(e){const t=this.dropdownElement.querySelector(".option.selected");t&&t.classList.remove("selected");const i=e[this.currentIndex];i.classList.add("selected");const s=i.getAttribute("data-value"),l=typeof this.options=="string"?JSON.parse(this.options).map(r=>({value:r.value,label:r.label,children:r.children,selected:r.selected})):this.options.map(r=>Object.assign({},r)),o=this.findInOptions(l,s);this.handleOptionClick(o)}renderOption(e,t){var i;const s=this.isOptionIndeterminate(e),l=e.children?s||this.isOptionSelected(e):this.persistentSelectedOptions.some(c=>c.value===e.value),o=!l&&this.maxItemCount&&this.persistentSelectedOptions.length>=this.maxItemCount,r=`checkbox-${e.value}-${t}`;return n("div",null,n("div",{class:`option ${l?"selected":""} 
        ${this.getSizeClass()}`,"data-value":e.value,onClick:()=>!o&&this.handleOptionClick(e),tabindex:"0",role:`${((i=e.children)===null||i===void 0?void 0:i.length)>0?"treeitem":"option"}`},n("ifx-checkbox",{id:r,size:"s",value:s?!1:l,indeterminate:s,disabled:o}),n("label",{htmlFor:r},e.label)),e.children&&e.children.map((c,h)=>this.renderSubOption(c,`${t}-${h}`)))}isOptionSelected(e){return e.children?e.children.every(t=>this.persistentSelectedOptions.some(i=>i.value===t.value)):!1}isOptionIndeterminate(e){if(!e.children)return!1;const t=e.children.filter(i=>this.persistentSelectedOptions.some(s=>s.value===i.value)).length;return t>0&&t<e.children.length}findInOptions(e,t){for(const i of e){if(i.value===t)return i;if(i.children){const s=this.findInOptions(i.children,t);if(s)return s}}return null}renderSubOption(e,t){var i;const s=this.persistentSelectedOptions.some(r=>r.value===e.value),l=!s&&this.maxItemCount&&this.persistentSelectedOptions.length>=this.maxItemCount,o=`checkbox-${e.value}-${t}`;return n("div",{class:`option sub-option ${s?"selected":""} ${this.getSizeClass()}`,"data-value":e.value,role:`${((i=e.children)===null||i===void 0?void 0:i.length)>0?"option":"treeitem"}`,onClick:()=>!l&&this.handleOptionClick(e),tabindex:"0"},n("ifx-checkbox",{id:o,size:"s",value:s,disabled:l}),n("label",{htmlFor:o},e.label))}render(){const e=this.persistentSelectedOptions.filter(t=>!this.persistentSelectedOptions.some(s=>s.children&&s.children.some(l=>l.value===t.value)&&s.selected)).map(t=>t.label).join(", ");return n("div",{class:"ifx-multiselect-container",ref:t=>this.dropdownElement=t},this.label?n("div",{class:"ifx-label-wrapper"},n("span",null,this.label)):null,n("div",{class:`ifx-multiselect-wrapper 
        ${this.getSizeClass()} 
        ${this.dropdownOpen?"active":""} 
        ${this.dropdownFlipped?"is-flipped":""}
        ${this.internalError?"error":""}
        ${this.disabled?"disabled":""}`,tabindex:"0",onClick:t=>this.handleWrapperClick(t),onKeyDown:t=>this.handleKeyDown(t)},n("div",{class:`ifx-multiselect-input 
          ${this.persistentSelectedOptions.length===0?"placeholder":""}
          `,onClick:this.disabled?void 0:()=>this.toggleDropdown()},this.persistentSelectedOptions.length>0?e:this.placeholder),this.dropdownOpen&&n("div",{class:"ifx-multiselect-dropdown-menu",onScroll:t=>this.handleScroll(t),style:{"--dynamic-z-index":this.zIndex.toString()}},this.searchEnabled&&n("input",{type:"text",role:"textbox",class:"search-input",onInput:t=>this.handleSearch(t.target),placeholder:"Search..."}),this.filteredOptions.map((t,i)=>this.renderOption(t,i)),this.isLoading&&n("div",null,"Loading more options...")),n("div",{class:"ifx-multiselect-icon-container"},this.persistentSelectedOptions.length>0&&n("div",{class:"ifx-clear-button",onClick:()=>this.clearSelection()},n("ifx-icon",{icon:"cremove24"})),n("div",{class:"icon-wrapper-up",onClick:this.disabled?void 0:()=>this.toggleDropdown()},n("ifx-icon",{key:"icon-up",icon:"chevronup-16"})),n("div",{class:"icon-wrapper-down",onClick:this.disabled?void 0:()=>this.toggleDropdown()},n("ifx-icon",{key:"icon-down",icon:"chevron-down-16"})))),this.internalError?n("div",{class:"ifx-error-message-wrapper"},n("span",null,this.errorMessage)):null)}get el(){return u(this)}static get watchers(){return{error:["updateInternalError"],loadedOptions:["loadedOptionsChanged"]}}};a.globalZIndex=1;a.style=m;export{a as ifx_multiselect};
