"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[4140],{4140:(o,r,i)=>{i.r(r),i.d(r,{ifx_link:()=>n,ifx_search_input:()=>a});var e=i(4881),s=i(1047);const n=class{constructor(t){(0,e.r)(this,t),this.href=void 0,this.target="_self",this.color=void 0,this.bold=!0,this.underline=!0}render(){return(0,e.h)("a",{href:this.href,target:this.target,class:this.linkClassNames()},(0,e.h)("slot",null))}linkClassNames(){return(0,s.c)("link",this.color,this.bold&&"bold",this.underline&&"underline")}};n.style='*{font-family:"Source Sans Pro"}.link{display:inline-flex;align-items:center;font-weight:400;font-size:16px;text-decoration:none;color:#1d1d1d;gap:8px;line-height:1.6}.link.bold{font-weight:600}.link.primary{color:#378375}.link.secondary{color:#ab377a}.link.warning{color:#f07f3c}.link.danger{color:#cd002f}.link.success{color:#aec067}.link.underline{text-decoration:underline}';const a=class{constructor(t){(0,e.r)(this,t),this.ifxInput=(0,e.c)(this,"ifxInput",7),this.handleInput=()=>{this.value=this.inputElement.value,this.ifxInput.emit(this.value)},this.handleDelete=()=>{this.inputElement.value="",this.ifxInput.emit(null)},this.value="",this.width="100%",this.insideDropdown=!1,this.showDeleteIcon=!1,this.disabled=!1,this.borderColor=void 0,this.size=void 0}valueWatcher(t){t!==this.inputElement.value&&(this.inputElement.value=t)}render(){return(0,e.h)("div",{class:this.getClassNames()},(0,e.h)("div",{class:this.getWrapperClassNames()},(0,e.h)("slot",{name:"search-icon"}),(0,e.h)("input",{ref:t=>this.inputElement=t,type:"text",onInput:()=>this.handleInput(),placeholder:"Search...",disabled:this.disabled,value:this.value}),this.showDeleteIcon?(0,e.h)("ifx-icon",{icon:"delete-x-16",class:"delete-icon",onClick:this.handleDelete}):null))}getBorderClasses(){return`search-input__wrapper-outline-${this.borderColor}`}getSizeClass(){return"s"==`${this.size}`?"search-input__wrapper-s":""}getClassNames(){return(0,s.c)("search-input",{"inside-dropdown":this.insideDropdown})}getWrapperClassNames(){return(0,s.c)(`search-input__wrapper ${this.getBorderClasses()}`,`search-input__wrapper ${this.getSizeClass()}`,this.disabled?"disabled":"")}get el(){return(0,e.g)(this)}static get watchers(){return{value:["valueWatcher"]}}};a.style='.search-input{background:#FFFFFF;flex-direction:row;align-items:center;flex:1;width:100%}.search-input.inside-dropdown{max-width:192px}.search-input .search-input__wrapper{height:40px;box-sizing:border-box;display:flex;align-items:center;border:1px solid #8D8786;border-radius:1px;padding:12px 16px;gap:12px;flex:none;order:0;align-self:stretch;flex-grow:0;position:relative;width:100%}.search-input .search-input__wrapper.search-input__wrapper-s{height:40px}.search-input .search-input__wrapper.search-input__wrapper-outline-light{border:1px solid #8D8786}.search-input .search-input__wrapper.search-input__wrapper-outline-dark{border:1px solid #3C3A39}.search-input .search-input__wrapper.search-input__wrapper-outline-green{border:1px solid #0A8276}.search-input .search-input__wrapper ::slotted(.search-icon){left:12px}.search-input .search-input__wrapper .delete-icon{right:12px}.search-input .search-input__wrapper input[type=text]{font-family:"Source Sans Pro";font-style:normal;font-weight:400;font-size:16px;color:#8D8786;border:none;width:100%}.search-input .search-input__wrapper input[type=text]:focus{outline:none}.search-input .search-input__wrapper input[type=text]:disabled{background-color:#EEEDED}.search-input .search-input__wrapper:has(input[disabled]){background-color:#EEEDED}'}}]);