import{r as i,c as n,h as t,g as l}from"./index-07208e78.js";const s=":host{flex-shrink:0}.multiSelectInput__item-container{position:relative;display:flex;justify-content:space-between;align-items:center;gap:6px;border:1px solid;border-radius:4px;padding:0 8px;flex-shrink:0}.multiSelectInput__item-container .multiSelectInput__item-content{display:flex;align-items:center;flex-shrink:0}.multiSelectInput__item-container .multiSelectInput__item-icon{display:flex;align-items:center}.multiSelectInput__item-container .multiSelectInput__item-icon ifx-icon svg{width:10px}",c=class{constructor(e){i(this,e),this.closed=n(this,"closed",3),this.content=""}handleCloseButton(){this.closed.emit(this.el)}handleSelectItem(e){e.stopPropagation()}render(){return t("div",{class:"multiSelectInput__item-container",onClick:this.handleSelectItem.bind(this)},t("div",{class:"multiSelectInput__item-content"},this.content),t("div",{class:"multiSelectInput__item-icon"},t("ifx-icon",{onClick:this.handleCloseButton.bind(this),icon:"cross-12"})))}get el(){return l(this)}};c.style=s;export{c as ifx_multi_select_input_item};
