import{r as i,h as e,g as a}from"./index-D-JbrOHt.js";const o=".navbar__container-left-content-navigation-item{display:flex;flex-direction:row;align-items:center;padding:0px 8px;gap:8px;flex:none;order:0;flex-grow:0;font-family:var(--ifx-font-family)}.navbar__container-left-content-navigation-item.hideElement{display:none}.navbar__container-left-content-navigation-item:hover{color:#0A8276}.navbar__container-left-content-navigation-item:hover a{color:#0A8276}.navbar__container-left-content-navigation-item.remove{display:none}.navbar__container-left-content-navigation-item a{display:flex;align-items:center;font-weight:400;font-size:16px;color:#1D1D1D;text-decoration:none;flex:none;order:0;flex-grow:0}.navbar__container-left-content-navigation-item.removeLabel a{display:none}.navbar__container-left-content-navigation-item .navbar__container-right-content-navigation-item-icon-wrapper{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px;gap:8px;flex:none;order:0;flex-grow:0}.navbar__container-left-content-navigation-item .navbar__container-right-content-navigation-item-icon-wrapper.removeWrapper{display:none}.navbar__container-left-content-navigation-item .navbar__container-right-content-navigation-item-icon-wrapper.hide{display:none}.navbar__container-left-content-navigation-item .navbar__container-right-content-navigation-item-navigation-profile{position:relative;width:24px;height:24px;background:#0A8276;border-radius:100px;flex:none;order:0;flex-grow:0;display:none}.navbar__container-left-content-navigation-item .navbar__container-right-content-navigation-item-navigation-profile.show{display:flex}.navbar__container-left-content-navigation-item .navbar__container-right-content-navigation-item-navigation-profile a{position:absolute;width:22px;height:20px;left:calc(50% - 11px);top:calc(50% - 10px);font-style:normal;font-weight:600;font-size:14px;line-height:20px;text-decoration:none;display:flex;align-items:center;justify-content:center;text-align:center;color:#FFFFFF}",r=o,c=class{constructor(n){i(this,n),this.isProfile=!1,this.hideLabel=!1,this.icon="",this.href="",this.target="_self",this.hideComponent=!1}componentWillLoad(){const t=this.el.getAttribute("slot");t&&(t.toLowerCase()==="right-menu-profile-item"?this.isProfile=!0:this.isProfile=!1)}render(){return e("div",{key:"f9905912b230286a5154f65cebb511598d65c65a",class:`navbar__container-left-content-navigation-item ${this.hideLabel?"removeLabel":""} ${this.hideComponent?"hideElement":""}`},e("div",{key:"255dde0f9b58c15467c7b658c1f7c61d2f923408",class:`navbar__container-right-content-navigation-item-icon-wrapper ${!this.icon&&!this.isProfile?"removeWrapper":""} ${this.isProfile?"hide":""}`},this.icon&&e("ifx-icon",{icon:this.icon})),e("div",{key:"5e7f3359ac16987632f67d12c7f412651510184c",class:`navbar__container-right-content-navigation-item-navigation-profile ${this.isProfile?"show":""}`},e("a",{key:"5e820a9d43c7567bd93ce32065b5ed8baeb88e6e",href:"javascript:void(0)"},"AA")),e("a",{key:"e9dd7588440c4f01b8b6b72e518aa6375fc6c30a",href:this.href,target:this.target},e("slot",{key:"c5315016f50991e5790e57a0a17fb56943259d95"})))}get el(){return a(this)}};c.style=r;export{c as ifx_navbar_item};
