import{r as t,c as a,h as e,g as i}from"./index-edc952c1.js";const c=".breadcrumb-item-label-container{display:flex;align-items:center;gap:8px;text-decoration:none;color:#1D1D1D}.breadcrumb-item-label-container.margin{margin-left:16px}.breadcrumb-item-label-container ifx-icon:empty{display:none}.breadcrumb-item-label-container .label-icon-wrapper{display:inline-flex}.breadcrumb-item-label-container .menu-icon-wrapper{display:flex;justify-content:center;align-items:center;width:16px;height:16px}.breadcrumb-item-label-container .menu-icon-wrapper.hide{display:none}.breadcrumb-item-label-container .menu-icon-wrapper ifx-icon{transition:0.3s}.breadcrumb-item-label-container .menu-icon-wrapper.show ifx-icon{transition:0.3s;transform:rotate(180deg)}",o=class{constructor(r){t(this,r),this.breadcrumbMenuIconWrapper=a(this,"breadcrumbMenuIconWrapper",7),this.icon=void 0,this.url=void 0,this.target="_self"}componentDidLoad(){const n=this.el.shadowRoot.querySelector(".breadcrumb-item-label-container").querySelector(".menu-icon-wrapper");this.breadcrumbMenuIconWrapper.emit(n)}render(){return e("a",{href:this.url,target:this.target,class:"breadcrumb-item-label-container"},e("ifx-icon",{icon:this.icon}),e("span",{class:"label-wrapper"},e("slot",null)),e("span",{class:"menu-icon-wrapper"},e("ifx-icon",{icon:"chevron-down-12"})))}get el(){return i(this)}};o.style=c;export{o as ifx_breadcrumb_item_label};
