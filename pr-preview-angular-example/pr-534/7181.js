"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[7181],{7181:(n,a,t)=>{t.r(a),t.d(a,{ifx_card:()=>i});var e=t(2669);const i=class{constructor(r){(0,e.r)(this,r),this.noBtns=void 0,this.direction="vertical",this.alignment=void 0,this.noImg=void 0,this.href="",this.target="_self"}setImgPosition(r){this.alignment=r.detail}handleComponentAdjustment(){const r=this.el.querySelector("ifx-card-image"),o=this.el.querySelector("ifx-card-links");this.noImg=!r,this.noBtns=!o}handleHovering(){const r=this.el.shadowRoot.querySelector(".card");r.addEventListener("mouseover",o=>{this.el.querySelector("ifx-card-headline").isHovered=!0,"IFX-CARD-LINKS"===o.target.nodeName||"IFX-BUTTON"===o.target.nodeName?(this.el.shadowRoot.querySelector(".card").style.borderColor="#ebe9e9",this.el.querySelector("ifx-card-headline").isHovered=!1):this.el.shadowRoot.querySelector(".card").style.borderColor="#0A8276"}),r.addEventListener("mouseout",()=>{this.el.querySelector("ifx-card-headline").isHovered=!1,this.el.shadowRoot.querySelector(".card").style.borderColor="#ebe9e9"})}componentWillLoad(){this.handleComponentAdjustment()}componentDidLoad(){this.handleHovering(),this.addEventListenersToHandleCustomFocusState()}addEventListenersToHandleCustomFocusState(){const r=this.el.shadowRoot.firstChild;if(!r)return void console.error("element not found");const o=r.querySelector(".upper__body-wrapper");o?(r.tabIndex=-1,o.tabIndex=-1):console.error("upper body wrapper not found")}componentWillUpdate(){this.handleComponentAdjustment()}render(){return(0,e.h)(e.a,null,(0,e.h)("div",{class:`card \n          ${this.noBtns?"noBtns":""}\n          ${this.direction} \n          ${this.alignment}`},"horizontal"===this.direction&&(0,e.h)("div",{class:"horizontal"},(0,e.h)("a",{class:"card-img "+(this.noImg?"noImage":""),href:this.href},(0,e.h)("slot",{name:"img"})),(0,e.h)("div",{class:"lower__body-wrapper"},(0,e.h)("a",{class:"upper-body",href:this.href},(0,e.h)("slot",null)),(0,e.h)("div",null,(0,e.h)("slot",{name:"buttons"})))),"vertical"===this.direction&&(0,e.h)("div",{class:"vertical"},(0,e.h)("a",{class:"upper__body-wrapper",href:this.href,target:this.target},(0,e.h)("div",{class:"card-img "+(this.noImg?"noImage":"")},(0,e.h)("slot",{name:"img"})),(0,e.h)("div",{class:"upper-body"},(0,e.h)("slot",null))),(0,e.h)("div",{class:"lower__body-wrapper"},(0,e.h)("slot",{name:"buttons"})))))}get el(){return(0,e.g)(this)}};i.style='*{font-family:"Source Sans 3"}.card{position:relative;display:inline-flex;flex-direction:column;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid #ebe9e9;border-radius:1px;width:350px;height:auto}.card.noBtns .vertical .lower__body-wrapper{padding-bottom:24px}.card.noBtns .horizontal .lower__body-wrapper{padding-bottom:24px}.card:hover{cursor:pointer;border-color:#0A8276}.card .horizontal{display:flex;flex-direction:row;min-height:218px}.card .horizontal .card-img{flex:1;text-decoration:none}.card .horizontal .card-img.noImage{display:none}.card .horizontal .card-img ::slotted([slot=img]){width:100%;vertical-align:bottom}.card .horizontal .lower__body-wrapper{flex:1;display:grid;grid-template-rows:1fr auto}.card .horizontal .lower__body-wrapper .upper-body{display:flex;flex-direction:column;text-decoration:none;color:#1D1D1D;padding:24px 24px 0px 24px}.card .vertical .upper__body-wrapper{text-decoration:none;color:#1D1D1D}.card .vertical .upper__body-wrapper .card-img{height:190px}.card .vertical .upper__body-wrapper .card-img.noImage{display:none}.card .vertical .upper__body-wrapper .upper-body{padding:24px 24px 0px 24px}.card .vertical .lower__body-wrapper:hover{border-color:#ebe9e9}.card.horizontal{flex-direction:row;width:538px}.card.horizontal .card-img{flex:1;order:2}.card.horizontal .card-img ::slotted([slot=img]){width:100%;height:100%;vertical-align:bottom;object-fit:cover}.card.horizontal.left .horizontal .card-img{order:1}.card.horizontal.left .horizontal .lower__body-wrapper{order:2}.card:focus,.card:focus-visible,.focus{outline:none;border-color:#0A8276 !important}'}}]);