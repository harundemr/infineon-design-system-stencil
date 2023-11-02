import{r as t,h as e,H as i,g as a}from"./index-80eae1a3.js";const d='*{font-family:"Source Sans 3"}:host{display:inline-flex}.card{position:relative;display:inline-flex;flex-direction:column;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid #ebe9e9;border-radius:1px;width:350px;height:auto}.card.noBtns .vertical .lower__body-wrapper{padding-bottom:24px}.card.noBtns .horizontal .lower__body-wrapper{padding-bottom:24px}.card:hover{cursor:pointer;border-color:#0A8276}.card .horizontal{display:flex;flex-direction:row;min-height:218px}.card .horizontal .card-img{flex:1;text-decoration:none}.card .horizontal .card-img.noImage{display:none}.card .horizontal .card-img ::slotted([slot=img]){width:100%;vertical-align:bottom}.card .horizontal .lower__body-wrapper{flex:1;display:grid;grid-template-rows:1fr auto}.card .horizontal .lower__body-wrapper .upper-body{display:flex;flex-direction:column;text-decoration:none;color:#1D1D1D;padding:24px 24px 0px 24px}.card .vertical .upper__body-wrapper{text-decoration:none;color:#1D1D1D}.card .vertical .upper__body-wrapper .card-img{height:190px}.card .vertical .upper__body-wrapper .card-img.noImage{display:none}.card .vertical .upper__body-wrapper .upper-body{padding:24px 24px 0px 24px}.card .vertical .lower__body-wrapper:hover{border-color:#ebe9e9}.card.horizontal{flex-direction:row;width:538px}.card.horizontal .card-img{flex:1;order:2}.card.horizontal .card-img ::slotted([slot=img]){width:100%;height:100%;vertical-align:bottom;object-fit:cover}.card.horizontal.left .horizontal .card-img{order:1}.card.horizontal.left .horizontal .lower__body-wrapper{order:2}.card:focus,.card:focus-visible,.focus{outline:none;border-color:#0A8276 !important}',n=class{constructor(r){t(this,r),this.noBtns=void 0,this.direction="vertical",this.alignment=void 0,this.noImg=void 0,this.href="",this.target="_self"}setImgPosition(r){this.alignment=r.detail}handleComponentAdjustment(){const r=this.el.querySelector("ifx-card-image"),o=this.el.querySelector("ifx-card-links");r?this.noImg=!1:this.noImg=!0,o?this.noBtns=!1:this.noBtns=!0,this.href.trim()===""&&(this.href=void 0)}handleHovering(){const r=this.el.shadowRoot.querySelector(".card");r.addEventListener("mouseover",o=>{this.el.querySelector("ifx-card-headline").isHovered=!0,o.target.nodeName==="IFX-CARD-LINKS"||o.target.nodeName==="IFX-BUTTON"?(this.el.shadowRoot.querySelector(".card").style.borderColor="#ebe9e9",this.el.querySelector("ifx-card-headline").isHovered=!1):this.el.shadowRoot.querySelector(".card").style.borderColor="#0A8276"}),r.addEventListener("mouseout",()=>{this.el.querySelector("ifx-card-headline").isHovered=!1,this.el.shadowRoot.querySelector(".card").style.borderColor="#ebe9e9"})}componentWillLoad(){this.handleComponentAdjustment()}componentDidLoad(){this.handleHovering(),this.addEventListenersToHandleCustomFocusState()}addEventListenersToHandleCustomFocusState(){const r=this.el.shadowRoot;if(!r){console.error("element not found");return}const o=r.querySelector(".upper__body-wrapper");if(!o){console.error("upper body wrapper not found");return}r.tabIndex=-1,o.tabIndex=-1}componentWillUpdate(){this.handleComponentAdjustment()}render(){return e(i,null,e("div",{class:`card 
          ${this.noBtns?"noBtns":""}
          ${this.direction} 
          ${this.alignment}`},this.direction==="horizontal"&&e("div",{class:"horizontal"},e("a",{class:`card-img ${this.noImg?"noImage":""}`,href:this.href},e("slot",{name:"img"})),e("div",{class:"lower__body-wrapper"},e("a",{class:"upper-body",href:this.href},e("slot",null)),e("div",null,e("slot",{name:"buttons"})))),this.direction==="vertical"&&e("div",{class:"vertical"},e("a",{class:"upper__body-wrapper",href:this.href,target:this.target},e("div",{class:`card-img ${this.noImg?"noImage":""}`},e("slot",{name:"img"})),e("div",{class:"upper-body"},e("slot",null))),e("div",{class:"lower__body-wrapper"},e("slot",{name:"buttons"})))))}get el(){return a(this)}};n.style=d;export{n as ifx_card};
