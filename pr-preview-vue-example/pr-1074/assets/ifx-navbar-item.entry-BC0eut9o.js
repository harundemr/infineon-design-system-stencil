import{r as i,h as e,g as a}from"./index-CLxS7RNl.js";const o=".navbar__container-left-content-navigation-item{display:flex;flex-direction:row;align-items:center;padding:0px 8px;gap:8px;flex:none;order:0;flex-grow:0;font-family:var(--ifx-font-family)}.navbar__container-left-content-navigation-item.hideElement{display:none}.navbar__container-left-content-navigation-item:hover{color:#0A8276}.navbar__container-left-content-navigation-item:hover a{color:#0A8276}.navbar__container-left-content-navigation-item.remove{display:none}.navbar__container-left-content-navigation-item a{display:flex;align-items:center;font-weight:400;font-size:16px;color:#1D1D1D;text-decoration:none;flex:none;order:0;flex-grow:0}.navbar__container-left-content-navigation-item.removeLabel a{display:none}.navbar__container-left-content-navigation-item .navbar__container-right-content-navigation-item-icon-wrapper{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px;gap:8px;flex:none;order:0;flex-grow:0}.navbar__container-left-content-navigation-item .navbar__container-right-content-navigation-item-icon-wrapper.removeWrapper{display:none}.navbar__container-left-content-navigation-item .navbar__container-right-content-navigation-item-icon-wrapper.hide{display:none}.navbar__container-left-content-navigation-item .navbar__container-right-content-navigation-item-navigation-profile{position:relative;width:24px;height:24px;background:#0A8276;border-radius:100px;flex:none;order:0;flex-grow:0;display:none}.navbar__container-left-content-navigation-item .navbar__container-right-content-navigation-item-navigation-profile.show{display:flex}.navbar__container-left-content-navigation-item .navbar__container-right-content-navigation-item-navigation-profile a{position:absolute;width:22px;height:20px;left:calc(50% - 11px);top:calc(50% - 10px);font-style:normal;font-weight:600;font-size:14px;line-height:20px;text-decoration:none;display:flex;align-items:center;justify-content:center;text-align:center;color:#FFFFFF}",r=o,c=class{constructor(n){i(this,n),this.isProfile=!1,this.hideLabel=!1,this.icon="",this.href="",this.target="_self",this.hideComponent=!1}componentWillLoad(){const t=this.el.getAttribute("slot");t&&(t.toLowerCase()==="right-menu-profile-item"?this.isProfile=!0:this.isProfile=!1)}render(){return e("div",{key:"00b62ef0d7a3ecf9360801963abe949cd5947218",class:`navbar__container-left-content-navigation-item ${this.hideLabel?"removeLabel":""} ${this.hideComponent?"hideElement":""}`},e("div",{key:"d20bec200823830ec2e15e9c7483daa073f32618",class:`navbar__container-right-content-navigation-item-icon-wrapper ${!this.icon&&!this.isProfile?"removeWrapper":""} ${this.isProfile?"hide":""}`},this.icon&&e("ifx-icon",{icon:this.icon})),e("div",{key:"58018fbec4a61cf9679be37d3c850f46d30f1cfe",class:`navbar__container-right-content-navigation-item-navigation-profile ${this.isProfile?"show":""}`},e("a",{key:"a65ad139707fb5ee33f45e0d198d7f5707924375",href:"javascript:void(0)"},"AA")),e("a",{key:"ebb5d9ada5b172eaad1ad332d719d20e3fc9ea5e",href:this.href,target:this.target},e("slot",{key:"2414cf29e5009745e770c7a2b092fe6ecc145178"})))}get el(){return a(this)}};c.style=r;export{c as ifx_navbar_item};
