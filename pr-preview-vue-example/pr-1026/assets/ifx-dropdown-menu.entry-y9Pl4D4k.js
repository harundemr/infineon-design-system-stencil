import{r as l,c as d,h as n,g as a}from"./index-BN5qkhuu.js";const p=":host{position:relative;z-index:1000}.dropdown-menu{display:none;visibility:hidden;flex-direction:column;width:224px;max-height:289px;min-width:224px;overflow-y:auto;background:#FFFFFF;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;padding:8px 0px;font-family:var(--ifx-font-family)}.dropdown-menu.small{max-height:266px;max-width:186px;overflow-y:auto}.dropdown-menu.hideTopPadding{padding-top:0px}.dropdown-menu.show{display:flex;visibility:visible}",h=class{constructor(e){l(this,e),this.menuSize=d(this,"menuSize",7),this.ifxDropdownMenuItem=d(this,"ifxDropdownMenuItem",7),this.isOpen=!1,this.size="l",this.hideTopPadding=!1,this.filteredItems=[]}handleMenuFilter(e){const i=e.detail;this.filterDropdownItems(i)}handleDropdownItemValueEmission(e){this.ifxDropdownMenuItem.emit(e.detail)}filterDropdownItems(e){const i=Array.from(this.el.querySelectorAll("ifx-dropdown-item"));let t,s,r=e.toUpperCase();for(let o=0;o<i.length;o++)t=i[o],s=t.textContent||t.innerText,s.toUpperCase().indexOf(r)>-1?t.setAttribute("hide",!1):t.setAttribute("hide",!0)}componentWillUpdate(){this.menuSize.emit(this.size)}componentWillLoad(){this.filteredItems=Array.from(this.el.querySelectorAll("ifx-dropdown-item"));const e=this.el.querySelector("ifx-search-field"),i=this.el.querySelector("ifx-dropdown-header");e||i?this.hideTopPadding=!0:this.hideTopPadding=!1}render(){return n("div",{class:`dropdown-menu 
      ${this.isOpen?"show":""} 
      ${this.hideTopPadding?"hideTopPadding":""}
      ${this.size==="s"?"small":""}`},n("slot",null))}get el(){return a(this)}};h.style=p;export{h as ifx_dropdown_menu};
