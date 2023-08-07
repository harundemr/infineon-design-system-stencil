"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[8191],{8191:(d,p,r)=>{r.r(p),r.d(p,{ifx_multiselect:()=>n});var t=r(4881);const n=class{constructor(i){(0,t.r)(this,i),this.ifxSelect=(0,t.c)(this,"ifxSelect",7),this.ifxMultiselectIsOpen=(0,t.c)(this,"ifxMultiselectIsOpen",7),this.handleDocumentClick=e=>{e.composedPath().includes(this.dropdownElement)||(this.dropdownOpen=!1,document.removeEventListener("click",this.handleDocumentClick),this.ifxMultiselectIsOpen.emit(this.dropdownOpen))},this.options=void 0,this.size="medium (40px)",this.disabled=!1,this.error=!1,this.errorMessage="Error",this.label="",this.persistentSelectedOptions=[],this.listOfOptions=[],this.dropdownOpen=!1,this.dropdownFlipped=!1,this.maxItemCount=10,this.zIndex=1}handleOptionsChange(){this.listOfOptions="string"==typeof this.options?this.options.split(",").map(e=>({value:e.trim(),label:e.trim(),selected:!1})):this.options.map(e=>Object.assign({},e));const i=this.listOfOptions.filter(e=>e.selected);this.persistentSelectedOptions=[...this.persistentSelectedOptions,...i]}componentDidLoad(){setTimeout(()=>{this.positionDropdown()},500)}componentWillLoad(){this.handleOptionsChange()}handleOptionClick(i){if(this.persistentSelectedOptions.length>=this.maxItemCount&&!this.persistentSelectedOptions.some(s=>s.value===i.value))return void console.error("Max item count reached");let e=this.persistentSelectedOptions.some(s=>s.value===i.value);this.persistentSelectedOptions=e?this.persistentSelectedOptions.filter(s=>s.value!==i.value):[...this.persistentSelectedOptions,Object.assign(Object.assign({},i),{selected:!0})],this.listOfOptions=this.listOfOptions.map(s=>s.value===i.value?Object.assign(Object.assign({},s),{selected:!e}):s),this.ifxSelect.emit(this.persistentSelectedOptions)}getSizeClass(){return"small (36px)"==`${this.size}`?"small-select":"medium-select"}toggleDropdown(){this.dropdownOpen=!this.dropdownOpen,setTimeout(()=>{this.dropdownOpen&&document.addEventListener("click",this.handleDocumentClick),this.ifxMultiselectIsOpen.emit(this.dropdownOpen)},0),this.zIndex=n.globalZIndex++}clearSelection(){this.persistentSelectedOptions=[],this.listOfOptions=this.listOfOptions.map(i=>Object.assign(Object.assign({},i),{selected:!1})),this.ifxSelect.emit(this.persistentSelectedOptions)}positionDropdown(){const i=this.el.shadowRoot.querySelector(".dropdown-menu"),e=this.el.shadowRoot.querySelector(".ifx-multiselect-wrapper");if(!i||!e)return;const s=i.getBoundingClientRect(),l=e.getBoundingClientRect(),o=l.top,c=window.innerHeight-l.bottom;e.classList.remove("is-flipped"),o>c&&s.height>c&&e.classList.add("is-flipped")}renderOption(i,e){const s=this.persistentSelectedOptions.some(c=>c.value===i.value),l=!s&&this.persistentSelectedOptions.length>=this.maxItemCount,o=`checkbox-${i.value}-${e}`;return(0,t.h)("div",{class:`option ${s?"selected":""} \n      ${this.getSizeClass()}`,onClick:()=>!l&&this.handleOptionClick(i),tabindex:"0"},(0,t.h)("ifx-checkbox",{id:o,value:s,disabled:l}),(0,t.h)("label",{htmlFor:o},i.label),"  ")}render(){const i=this.persistentSelectedOptions.map(e=>e.label).join(", ");return(0,t.h)("div",{class:`ifx-multiselect-container ${this.getSizeClass()}`,tabindex:"0",ref:e=>this.dropdownElement=e},this.label?(0,t.h)("div",{class:"ifx-label-wrapper"},(0,t.h)("span",null,this.label)):null,(0,t.h)("div",{class:`ifx-multiselect-wrapper \n        ${this.getSizeClass()} \n        ${this.dropdownOpen?"active":""} \n        ${this.dropdownFlipped?"is-flipped":""}\n        ${this.error?"error":""}\n        ${this.disabled?"disabled":""}`,onClick:()=>this.positionDropdown()},(0,t.h)("div",{class:"ifx-multiselect-input",onClick:this.disabled?void 0:()=>this.toggleDropdown()},this.persistentSelectedOptions.length>0?i:"Placeholder"),this.dropdownOpen&&(0,t.h)("div",{class:"ifx-multiselect-dropdown-menu",style:{"--dynamic-z-index":this.zIndex.toString()}},this.listOfOptions.map((e,s)=>this.renderOption(e,s))),(0,t.h)("div",{class:"ifx-multiselect-icon-container"},this.persistentSelectedOptions.length>0&&(0,t.h)("div",{class:"ifx-clear-button",onClick:()=>this.clearSelection()},(0,t.h)("ifx-icon",{key:"icon-clear",icon:"deletex16"})),(0,t.h)("div",{class:"icon-wrapper-up",onClick:this.disabled?void 0:()=>this.toggleDropdown()},(0,t.h)("ifx-icon",{key:"icon-up",icon:"chevronup-16"})),(0,t.h)("div",{class:"icon-wrapper-down",onClick:this.disabled?void 0:()=>this.toggleDropdown()},(0,t.h)("ifx-icon",{key:"icon-down",icon:"chevron-down-16"})))),this.error?(0,t.h)("div",{class:"ifx-error-message-wrapper"},(0,t.h)("span",null,this.errorMessage)):null)}get el(){return(0,t.g)(this)}static get watchers(){return{options:["handleOptionsChange"]}}};n.globalZIndex=1,n.style='.ifx-multiselect-container{position:relative;box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start}.ifx-multiselect-container.small-select{height:36px}.ifx-multiselect-container.medium-select{height:40px}.ifx-multiselect-container:focus-visible:not(.active,:active){outline:none}.ifx-multiselect-container:focus-visible:not(.active,:active)::before{content:"";position:absolute;width:calc(100% + 4px);height:calc(100% + 4px);top:50%;left:50%;transform:translate(-50%, -50%);border:2px solid #0A8276}.ifx-multiselect-container .ifx-label-wrapper{font-size:16px;line-height:24px}.ifx-multiselect-container .ifx-error-message-wrapper{color:#CD002F;font-size:12px;line-height:16px}.ifx-multiselect-container .ifx-multiselect-wrapper{box-sizing:border-box;position:relative;display:flex;align-items:center;border:1px solid #8D8786;width:100%}.ifx-multiselect-container .ifx-multiselect-wrapper.small-select{line-height:20px;padding:8px 12px;font-size:14px}.ifx-multiselect-container .ifx-multiselect-wrapper.medium-select{line-height:24px;padding:8px 16px;font-size:16px}.ifx-multiselect-container .ifx-multiselect-wrapper.disabled{background:#EEEDED;color:#575352;border-color:#575352;cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ifx-multiselect-container .ifx-multiselect-wrapper.error{border-color:#CD002F}.ifx-multiselect-container .ifx-multiselect-wrapper:hover:not(.focus,:focus){border-color:#8D8786}.ifx-multiselect-container .ifx-multiselect-wrapper.active{border:2px solid #0A8276 !important}.ifx-multiselect-container .ifx-multiselect-wrapper.active .icon-wrapper-up{display:block}.ifx-multiselect-container .ifx-multiselect-wrapper.active .icon-wrapper-down{display:none}.ifx-multiselect-container .ifx-multiselect-wrapper .icon-wrapper-up{display:none}.ifx-multiselect-container .ifx-multiselect-wrapper .icon-wrapper-down{display:block}.ifx-multiselect-container .ifx-multiselect-wrapper.is-flipped .dropdown-menu{top:auto;bottom:100%}.ifx-multiselect-container .ifx-multiselect-input{flex-grow:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ifx-multiselect-container .ifx-multiselect-icon-container{margin-left:auto;align-items:center;display:flex}.ifx-multiselect-container .ifx-clear-button{margin-right:10px}.ifx-multiselect-container .ifx-multiselect-dropdown-menu{position:absolute;top:100%;left:0;width:100%;border:1px solid #ddd;margin-top:2px;background-color:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);max-height:300px;overflow-y:auto;z-index:var(--dynamic-z-index, 1)}.ifx-multiselect-container .option{position:relative;padding:8px 16px;gap:8px;align-items:center;display:flex;font-style:normal;font-weight:400}.ifx-multiselect-container .option.small-select{line-height:20px;font-size:14px}.ifx-multiselect-container .option.medium-select{line-height:24px;font-size:16px}.ifx-multiselect-container .option:hover{background-color:#EEEDED}.ifx-multiselect-container .option:focus{background-color:#BFBBBB;outline:none;box-shadow:0 0 0 2px rgba(0, 0, 0, 0.1)}'}}]);