import{r as c,c as h,h as s,H as o,g as d}from"./index-D8lBEe3U.js";const f=":host{display:flex}.filter-type-group{width:260px;flex-direction:column;align-items:flex-start;gap:8px}",p=f,g=class{constructor(l){c(this,l),this.ifxFilterTypeGroupChange=h(this,"ifxFilterTypeGroupChange",7),this.handleAccordionChange=e=>{this.handleFilterChange(e)},this.handleSearchChange=e=>{this.handleFilterChange(e)},this.handleFilterChange=e=>{const t=[...this.selectedOptions];if(e.type==="ifxFilterSearchChange"){const{filterName:i,filterValue:n}=e.detail,r=t.findIndex(a=>typeof a!="string"&&a.filterGroupName===i);r!==-1?t[r].value=n:t.push({filterGroupName:i,value:n})}else if(e.type==="ifxFilterAccordionChange"){const{filterGroupName:i,selectedItems:n}=e.detail,r=t.findIndex(a=>a.filterGroupName===i);r!==-1?t[r]={filterGroupName:i,selectedItems:n}:t.push({filterGroupName:i,selectedItems:n})}this.selectedOptions=t,this.ifxFilterTypeGroupChange.emit(this.selectedOptions)},this.selectedOptions=[]}componentWillLoad(){this.el.addEventListener("ifxFilterAccordionChange",this.handleAccordionChange),this.el.addEventListener("ifxFilterSearchChange",this.handleSearchChange)}componentWillUnload(){this.el.removeEventListener("ifxFilterAccordionChange",this.handleAccordionChange),this.el.removeEventListener("ifxFilterSearchChange",this.handleSearchChange)}render(){return s(o,{key:"8713c37b0638b9c22e2e8a6af735e7ec68de3b5f"},s("div",{key:"a7820fc1fa4fe845459fa660aa52ca307340e5e2",class:"filter-type-group"},s("slot",{key:"2115fc498fb741c8c0cc4005aec4a03b523901cd",name:"filter-search"}),s("slot",{key:"bc833c8e751e3b17cc991e20e9b4a24a0e2921cb",name:"filter-accordion"})))}get el(){return d(this)}};g.style=p;export{g as ifx_filter_type_group};
