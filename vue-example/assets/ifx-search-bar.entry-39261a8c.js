import{r,c as t,h as e}from"./index-5092075e.js";const i='*{font-family:"Source Sans 3"}:host{width:100%}.search-bar{box-sizing:border-box;height:40px;background-color:#FFFFFF;display:flex;flex-direction:row;align-items:center;width:100%}.search-bar.closed{display:flex;width:auto;justify-content:flex-start}.search-bar .search-bar-wrapper{display:flex;align-items:center;gap:16px;width:100%}.search-bar .search-bar-wrapper a{text-decoration:none;font-size:1rem;font-style:normal;font-weight:600;line-height:1.5rem;color:#0A8276;cursor:pointer}.search-bar .search-bar-wrapper ifx-search-field{width:100%}.search-bar .search-bar__icon-wrapper{display:none;flex-direction:row;align-items:center}.search-bar .search-bar__icon-wrapper ifx-icon:hover{cursor:pointer}.search-bar.closed .search-bar__icon-wrapper{display:flex}.search-bar.closed .search-bar-wrapper{display:none}',s=class{constructor(a){r(this,a),this.ifxInput=t(this,"ifxInput",7),this.ifxSearchBarIsOpen=t(this,"ifxSearchBarIsOpen",7),this.handleCloseButton=()=>{this.internalState=!this.internalState,this.ifxSearchBarIsOpen.emit(this.internalState)},this.handleFocus=()=>{this.internalState=!0},this.isOpen=!0,this.disabled=!1,this.internalState=void 0,this.value=void 0}handlePropChange(){this.internalState=this.isOpen}setInitialState(){this.internalState=this.isOpen}componentWillLoad(){this.setInitialState()}handleInput(a){this.value=a.detail}render(){return e("div",{class:`search-bar ${this.internalState?"open":"closed"}`},this.internalState?e("div",{class:"search-bar-wrapper"},e("ifx-search-field",{disabled:this.disabled,value:this.value,onIfxInput:this.handleInput.bind(this)},e("ifx-icon",{icon:"search-16",slot:"search-icon"})),e("a",{href:"javascript:void(0)",onClick:this.handleCloseButton},"Close")):e("div",{class:"search-bar__icon-wrapper",onClick:this.handleCloseButton},e("ifx-icon",{icon:"search-16"})))}static get watchers(){return{isOpen:["handlePropChange"]}}};s.style=i;export{s as ifx_search_bar};
