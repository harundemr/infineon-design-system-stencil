"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[4152],{"./dist/esm/ifx-multiselect.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_multiselect:()=>Multiselect});var _index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-7f04a2f1.js");const Multiselect=class{constructor(hostRef){(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxSelect=(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxSelect",7),this.ifxMultiselectIsOpen=(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxMultiselectIsOpen",7),this.currentIndex=0,this.handleDocumentClick=event=>{event.composedPath().includes(this.dropdownElement)||(this.dropdownOpen=!1,document.removeEventListener("click",this.handleDocumentClick),this.ifxMultiselectIsOpen.emit(this.dropdownOpen))},this.options=void 0,this.size="medium (40px)",this.disabled=!1,this.error=!1,this.errorMessage="Error",this.label="",this.persistentSelectedOptions=[],this.listOfOptions=[],this.dropdownOpen=!1,this.dropdownFlipped=!1,this.maxItemCount=10,this.zIndex=1}handleOptionsChange(){this.listOfOptions="string"==typeof this.options?JSON.parse(this.options).map((option=>({value:option.value,label:option.label,children:option.children,selected:option.selected}))):this.options.map((option=>Object.assign({},option)));const initiallySelected=this.listOfOptions.filter((option=>option.selected));this.persistentSelectedOptions=[...this.persistentSelectedOptions,...initiallySelected]}componentDidLoad(){setTimeout((()=>{this.positionDropdown()}),500)}componentWillLoad(){this.handleOptionsChange()}handleOptionClick(option){if(this.persistentSelectedOptions.length>=this.maxItemCount&&!this.persistentSelectedOptions.some((selectedOption=>selectedOption.value===option.value)))return void console.error("Max item count reached");const wasSelected=this.persistentSelectedOptions.some((selectedOption=>selectedOption.value===option.value));if(option.children&&option.children.length>0)this.persistentSelectedOptions=wasSelected?this.persistentSelectedOptions.filter((selectedOption=>selectedOption.value!==option.value&&!option.children.some((child=>child.value===selectedOption.value)))):[...this.persistentSelectedOptions,option,...option.children];else{wasSelected?this.persistentSelectedOptions=this.persistentSelectedOptions.filter((selectedOption=>selectedOption.value!==option.value)):this.persistentSelectedOptions.push(option);const parentOption=this.listOfOptions.find((opt=>opt.children&&opt.children.some((child=>child.value===option.value))));if(parentOption){const allChildrenSelected=parentOption.children.every((child=>this.persistentSelectedOptions.some((selectedOption=>selectedOption.value===child.value))));parentOption.children.some((child=>this.persistentSelectedOptions.some((selectedOption=>selectedOption.value===child.value))));allChildrenSelected?this.persistentSelectedOptions.some((selectedOption=>selectedOption.value===parentOption.value))||this.persistentSelectedOptions.push(parentOption):this.persistentSelectedOptions=this.persistentSelectedOptions.filter((selectedOption=>selectedOption.value!==parentOption.value))}}this.listOfOptions=this.listOfOptions.map((opt=>{if(opt.value===option.value)return Object.assign(Object.assign({},opt),{selected:!wasSelected});if(opt.children){const isParentSelected=this.persistentSelectedOptions.includes(opt);return opt.children=opt.children.map((child=>child.value===option.value||isParentSelected?Object.assign(Object.assign({},child),{selected:!0}):child)),Object.assign(Object.assign({},opt),{children:opt.children})}return opt})),this.persistentSelectedOptions=this.persistentSelectedOptions.map((pOpt=>{const matchingOption=this.listOfOptions.find((loOpt=>loOpt.value===pOpt.value))||this.listOfOptions.flatMap((loOpt=>loOpt.children||[])).find((child=>child.value===pOpt.value));return matchingOption?Object.assign(Object.assign({},pOpt),{selected:matchingOption.selected}):pOpt}));const emittedOptions=this.persistentSelectedOptions.map((pOpt=>{const parent=this.listOfOptions.find((loOpt=>loOpt.children&&loOpt.children.some((child=>child.value===pOpt.value))));return parent&&this.persistentSelectedOptions.some((selectedOption=>selectedOption.value===parent.value))?Object.assign(Object.assign({},pOpt),{selected:!0}):pOpt})).filter((pOpt=>{const parent=this.listOfOptions.find((loOpt=>loOpt.children&&loOpt.children.some((child=>child.value===pOpt.value))));return!parent||!this.persistentSelectedOptions.some((selectedOption=>selectedOption.value===parent.value))}));this.ifxSelect.emit(emittedOptions)}getSizeClass(){return"small (36px)"==`${this.size}`?"small-select":"medium-select"}toggleDropdown(){this.dropdownOpen=!this.dropdownOpen,setTimeout((()=>{this.dropdownOpen&&document.addEventListener("click",this.handleDocumentClick),this.ifxMultiselectIsOpen.emit(this.dropdownOpen)}),0),this.zIndex=Multiselect.globalZIndex++}waitForElement(querySelectorFunc,callback,maxTries=50){let tries=0;!function request(){requestAnimationFrame((()=>{const elements=querySelectorFunc();elements.length>0||tries>maxTries?callback(elements):(tries++,request())}))}()}handleKeyDown(event){if(this.disabled)return;const options=this.dropdownElement.querySelectorAll(".option");switch(event.code){case"Enter":this.dropdownOpen?this.selectItem(options):(this.toggleDropdown(),this.waitForElement((()=>this.dropdownElement.querySelectorAll(".option")),(options=>{this.updateHighlightedOption(options)})));break;case"ArrowDown":this.handleArrowDown(options),this.dropdownOpen&&this.updateHighlightedOption(options);break;case"ArrowUp":this.handleArrowUp(options),this.dropdownOpen&&this.updateHighlightedOption(options)}}handleWrapperClick(event){this.positionDropdown(),event.currentTarget===event.target&&this.toggleDropdown()}clearSelection(){this.persistentSelectedOptions=[],this.listOfOptions=this.listOfOptions.map((option=>Object.assign(Object.assign({},option),{selected:!1}))),this.ifxSelect.emit(this.persistentSelectedOptions)}positionDropdown(){const dropdown=this.el.shadowRoot.querySelector(".dropdown-menu"),wrapper=this.el.shadowRoot.querySelector(".ifx-multiselect-wrapper");if(!dropdown||!wrapper)return;const dropdownRect=dropdown.getBoundingClientRect(),wrapperRect=wrapper.getBoundingClientRect(),spaceAbove=wrapperRect.top,spaceBelow=window.innerHeight-wrapperRect.bottom;wrapper.classList.remove("is-flipped"),spaceAbove>spaceBelow&&dropdownRect.height>spaceBelow&&wrapper.classList.add("is-flipped")}updateHighlightedOption(options){options.forEach((option=>option.classList.remove("is-highlighted"))),this.currentIndex>=0&&this.currentIndex<options.length&&options[this.currentIndex].classList.add("is-highlighted")}handleArrowDown(options){this.currentIndex<options.length-1?this.currentIndex++:this.currentIndex=0}handleArrowUp(options){this.currentIndex>0?this.currentIndex--:this.currentIndex=options.length-1}selectItem(options){const previouslySelected=this.dropdownElement.querySelector(".option.selected");previouslySelected&&previouslySelected.classList.remove("selected");const currentOptionElement=options[this.currentIndex];currentOptionElement.classList.add("selected");const currentOptionValue=currentOptionElement.getAttribute("data-value"),currentListOfOptions="string"==typeof this.options?JSON.parse(this.options).map((option=>({value:option.value,label:option.label,children:option.children,selected:option.selected}))):this.options.map((option=>Object.assign({},option))),currentOption=this.findInOptions(currentListOfOptions,currentOptionValue);this.handleOptionClick(currentOption)}renderOption(option,index){const isSelected=this.persistentSelectedOptions.some((selectedOption=>selectedOption.value===option.value)),disableCheckbox=!isSelected&&this.persistentSelectedOptions.length>=this.maxItemCount,uniqueId=`checkbox-${option.value}-${index}`,isIndeterminate=this.isOptionIndeterminate(option);return(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`option ${isSelected?"selected":""} \n        ${this.getSizeClass()}`,"data-value":option.value,onClick:()=>!disableCheckbox&&this.handleOptionClick(option),tabindex:"0",role:`${option.children}?.length > 0 ? "option" : "treeitem"`},(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-checkbox",{id:uniqueId,value:isSelected,indeterminate:isIndeterminate,disabled:disableCheckbox}),(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:uniqueId},option.label)),option.children&&option.children.map(((child,childIndex)=>this.renderSubOption(child,`${index}-${childIndex}`))))}isOptionIndeterminate(option){if(!option.children)return!1;const selectedChildren=option.children.filter((child=>this.persistentSelectedOptions.some((persistentOption=>persistentOption.value===child.value)))).length;return selectedChildren>0&&selectedChildren<option.children.length}findInOptions(options,searchTerm){for(const option of options){if(option.value===searchTerm)return option;if(option.children){const foundInChildren=this.findInOptions(option.children,searchTerm);if(foundInChildren)return foundInChildren}}return null}renderSubOption(option,index){const isSelected=this.persistentSelectedOptions.some((selectedOption=>selectedOption.value===option.value)),uniqueId=`checkbox-${option.value}-${index}`;return(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`option sub-option ${isSelected?"selected":""} ${this.getSizeClass()}`,"data-value":option.value,role:`${option.children}?.length > 0 ? "option" : "treeitem"`,onClick:()=>this.handleOptionClick(option),tabindex:"0"},(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-checkbox",{id:uniqueId,value:isSelected}),(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:uniqueId},option.label))}render(){const selectedOptionsLabels=this.persistentSelectedOptions.map((option=>option.label)).join(", ");return(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`ifx-multiselect-container ${this.getSizeClass()}`,ref:el=>this.dropdownElement=el},this.label?(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"ifx-label-wrapper"},(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",null,this.label)):null,(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`ifx-multiselect-wrapper \n        ${this.getSizeClass()} \n        ${this.dropdownOpen?"active":""} \n        ${this.dropdownFlipped?"is-flipped":""}\n        ${this.error?"error":""}\n        ${this.disabled?"disabled":""}`,tabindex:"0",onClick:event=>this.handleWrapperClick(event),onKeyDown:event=>this.handleKeyDown(event)},(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"ifx-multiselect-input",onClick:this.disabled?void 0:()=>this.toggleDropdown()},this.persistentSelectedOptions.length>0?selectedOptionsLabels:"Placeholder"),this.dropdownOpen&&(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"ifx-multiselect-dropdown-menu",style:{"--dynamic-z-index":this.zIndex.toString()}},this.listOfOptions.map(((option,index)=>this.renderOption(option,index)))),(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"ifx-multiselect-icon-container"},this.persistentSelectedOptions.length>0&&(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"ifx-clear-button",onClick:()=>this.clearSelection()},(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"icon-clear",icon:"deletex16"})),(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"icon-wrapper-up",onClick:this.disabled?void 0:()=>this.toggleDropdown()},(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"icon-up",icon:"chevronup-16"})),(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"icon-wrapper-down",onClick:this.disabled?void 0:()=>this.toggleDropdown()},(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"icon-down",icon:"chevron-down-16"})))),this.error?(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"ifx-error-message-wrapper"},(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",null,this.errorMessage)):null)}get el(){return(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{options:["handleOptionsChange"]}}};Multiselect.globalZIndex=1,Multiselect.style='.ifx-multiselect-container{position:relative;box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start}.ifx-multiselect-container.small-select{height:36px}.ifx-multiselect-container.medium-select{height:40px}.ifx-multiselect-container .ifx-label-wrapper{font-size:16px;line-height:24px}.ifx-multiselect-container .ifx-error-message-wrapper{color:#CD002F;font-size:12px;line-height:16px}.ifx-multiselect-container .ifx-multiselect-wrapper{box-sizing:border-box;position:relative;display:flex;align-items:center;border:1px solid #8D8786;width:100%}.ifx-multiselect-container .ifx-multiselect-wrapper.small-select{line-height:20px;padding:8px 12px;font-size:14px}.ifx-multiselect-container .ifx-multiselect-wrapper.medium-select{line-height:24px;padding:8px 16px;font-size:16px}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible{outline:none}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible:not(.active):not(:active)::before{content:"";position:absolute;width:calc(100% + 4px);height:calc(100% + 4px);top:50%;left:50%;transform:translate(-50%, -50%);border:2px solid #0A8276}.ifx-multiselect-container .ifx-multiselect-wrapper.disabled{background:#EEEDED;color:#575352;border-color:#575352;cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ifx-multiselect-container .ifx-multiselect-wrapper.error{border-color:#CD002F}.ifx-multiselect-container .ifx-multiselect-wrapper:hover:not(.focus,:focus){border-color:#8D8786}.ifx-multiselect-container .ifx-multiselect-wrapper.active{border:2px solid #0A8276 !important}.ifx-multiselect-container .ifx-multiselect-wrapper.active .icon-wrapper-up{display:block}.ifx-multiselect-container .ifx-multiselect-wrapper.active .icon-wrapper-down{display:none}.ifx-multiselect-container .ifx-multiselect-wrapper .icon-wrapper-up{display:none}.ifx-multiselect-container .ifx-multiselect-wrapper .icon-wrapper-down{display:block}.ifx-multiselect-container .ifx-multiselect-wrapper.is-flipped .dropdown-menu{top:auto;bottom:100%}.ifx-multiselect-container .ifx-multiselect-input{flex-grow:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ifx-multiselect-container .ifx-multiselect-icon-container{margin-left:auto;align-items:center;display:flex}.ifx-multiselect-container .ifx-clear-button{margin-right:10px}.ifx-multiselect-container .ifx-multiselect-dropdown-menu{position:absolute;top:100%;left:0;width:100%;border:1px solid #ddd;margin-top:2px;background-color:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);max-height:300px;overflow-y:auto;z-index:var(--dynamic-z-index, 1)}.ifx-multiselect-container .option{position:relative;padding:8px 16px;gap:8px;align-items:center;display:flex;font-style:normal;font-weight:400}.ifx-multiselect-container .option.small-select{line-height:20px;font-size:14px}.ifx-multiselect-container .option.medium-select{line-height:24px;font-size:16px}.ifx-multiselect-container .option:hover{background-color:#EEEDED}.ifx-multiselect-container .option:focus{background-color:#BFBBBB;outline:none;box-shadow:0 0 0 2px rgba(0, 0, 0, 0.1)}.ifx-multiselect-container .option.is-highlighted{background-color:#EEEDED}.ifx-multiselect-container .option.sub-option{padding-left:30px;}'}}]);