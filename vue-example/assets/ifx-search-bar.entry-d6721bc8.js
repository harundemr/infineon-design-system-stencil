import{r as t,c as r,h as a}from"./index-2a30b1e7.js";const i='*{font-family:"Source Sans 3"}.search-bar{box-sizing:border-box;height:40px;background-color:#FFFFFF;display:flex;flex-direction:row;align-items:center;width:100%}.search-bar.closed{display:flex;width:auto;justify-content:flex-start}.search-bar .search-bar-wrapper{display:flex;align-items:center;gap:16px;width:100%}.search-bar .search-bar-wrapper a{text-decoration:none;font-size:1rem;font-style:normal;font-weight:600;line-height:1.5rem;color:#0A8276;cursor:pointer}.search-bar .search-bar-wrapper ifx-search-field{width:100%}.search-bar .search-bar__icon-wrapper{display:none;flex-direction:row;align-items:center}.search-bar .search-bar__icon-wrapper ifx-icon:hover{cursor:pointer}.search-bar.closed .search-bar__icon-wrapper{display:flex}.search-bar.closed .search-bar-wrapper{display:none}',s=class{constructor(e){t(this,e),this.ifxInput=r(this,"ifxInput",7),this.handleCloseButton=()=>{this.internalState=!this.internalState},this.handleFocus=()=>{this.internalState=!0},this.showCloseButton=!0,this.isOpen=!0,this.disabled=!1,this.internalState=void 0,this.value=void 0}handlePropChange(){this.internalState=this.isOpen}handleSearchInput(e){console.log("search field event in search bar",e),this.value=e.detail.detail,this.ifxInput.emit(e.detail)}setInitialState(){this.internalState=this.isOpen}componentWillLoad(){this.setInitialState()}handleInput(e){this.value=e.detail}render(){return a("div",{class:`search-bar ${this.internalState?"open":"closed"}`},this.internalState?a("div",{class:"search-bar-wrapper"},a("ifx-search-field",{disabled:this.disabled,value:this.value,onIfxInput:this.handleInput.bind(this)},a("ifx-icon",{icon:"search-16",slot:"search-icon"})),this.showCloseButton&&a("a",{href:"javascript:void(0)",onClick:this.handleCloseButton},"Close")):a("div",{class:"search-bar__icon-wrapper",onClick:this.handleCloseButton},a("ifx-icon",{icon:"search-16"})))}static get watchers(){return{isOpen:["handlePropChange"]}}};s.style=i;export{s as ifx_search_bar};
