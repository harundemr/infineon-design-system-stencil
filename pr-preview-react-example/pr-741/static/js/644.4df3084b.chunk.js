"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[644],{644:(e,r,o)=>{o.r(r),o.d(r,{ifx_card:()=>a});var t=o(3739);const a=class{constructor(e){(0,t.r)(this,e),this.noBtns=void 0,this.direction="vertical",this.alignment=void 0,this.noImg=void 0,this.href="",this.target="_self"}setImgPosition(e){this.alignment=e.detail}handleComponentAdjustment(){var e;const r=this.el.querySelector("ifx-card-image"),o=this.el.querySelector("ifx-card-links");this.noImg=!r,this.noBtns=!o,this.href&&""===(null===(e=this.href)||void 0===e?void 0:e.trim())&&(this.href=void 0)}handleClassList(e,r,o){e.classList[r](o)}handleHovering(){const e=this.el.shadowRoot.querySelector(".card");let r=this.el.querySelector("ifx-card-headline");e.addEventListener("mouseover",(o=>{"IFX-CARD-LINKS"===o.target.nodeName||"IFX-BUTTON"===o.target.nodeName?this.handleClassList(e,"add","linkHovered"):(this.handleClassList(e,"add","cardHovered"),r&&(r.isHovered=!0))})),e.addEventListener("mouseout",(()=>{r&&(r.isHovered=!1),this.handleClassList(e,"remove","cardHovered"),this.handleClassList(e,"add","linkHovered")}))}componentWillLoad(){this.handleComponentAdjustment()}componentDidLoad(){this.handleHovering(),this.addEventListenersToHandleCustomFocusState()}addEventListenersToHandleCustomFocusState(){const e=this.el.shadowRoot;if(!e)return void console.error("element not found");const r=e.querySelector(".upper__body-wrapper");r?(e.tabIndex=-1,r.tabIndex=-1):console.error("upper body wrapper not found")}componentWillUpdate(){this.handleComponentAdjustment()}render(){return(0,t.h)(t.a,null,(0,t.h)("div",{"aria-labelledby":"label",class:"card \n          ".concat(this.noBtns?"noBtns":"","\n          ").concat(this.direction," \n          ").concat(this.alignment)},"horizontal"===this.direction&&(0,t.h)("div",{class:"horizontal"},(0,t.h)("a",{class:"card-img ".concat(this.noImg?"noImage":""),href:this.href},(0,t.h)("slot",{name:"img"})),(0,t.h)("div",{class:"lower__body-wrapper"},(0,t.h)("a",{class:"upper-body",href:this.href},(0,t.h)("slot",null)),(0,t.h)("div",null,(0,t.h)("slot",{name:"buttons"})))),"vertical"===this.direction&&(0,t.h)("div",{class:"vertical"},(0,t.h)("a",{class:"upper__body-wrapper",href:this.href,target:this.target},(0,t.h)("div",{class:"card-img ".concat(this.noImg?"noImage":"")},(0,t.h)("slot",{name:"img"})),(0,t.h)("div",{class:"upper-body"},(0,t.h)("slot",null))),(0,t.h)("div",{class:"lower__body-wrapper"},(0,t.h)("slot",{name:"buttons"})))))}get el(){return(0,t.g)(this)}};a.style='*{font-family:"Source Sans 3"}:host{display:inline-flex}.card{position:relative;display:inline-flex;flex-direction:column;word-wrap:break-word;background-color:#FFFFFF;background-clip:border-box;border:1px solid #EEEDED;border-radius:1px;width:350px;height:auto}.card.linkHovered{border-color:#EEEDED}.card.cardHovered{border-color:#0A8276}.card.noBtns .vertical .lower__body-wrapper{padding-bottom:24px}.card.noBtns .horizontal .lower__body-wrapper{padding-bottom:24px}.card:hover{cursor:pointer}.card .horizontal{display:flex;flex-direction:row;min-height:218px}.card .horizontal .card-img{flex:1;text-decoration:none}.card .horizontal .card-img.noImage{display:none}.card .horizontal .card-img ::slotted([slot=img]){width:100%;vertical-align:bottom}.card .horizontal .lower__body-wrapper{flex:1;display:grid;grid-template-rows:1fr auto}.card .horizontal .lower__body-wrapper .upper-body{display:flex;flex-direction:column;text-decoration:none;color:#1D1D1D;padding:24px 24px 0px 24px}.card .vertical .upper__body-wrapper{text-decoration:none;color:#1D1D1D}.card .vertical .upper__body-wrapper .card-img{height:190px}.card .vertical .upper__body-wrapper .card-img.noImage{display:none}.card .vertical .upper__body-wrapper .upper-body{padding:24px 24px 0px 24px}.card .vertical .lower__body-wrapper:hover{border-color:#EEEDED}.card.horizontal{flex-direction:row;width:538px}.card.horizontal .card-img{flex:1;order:2}.card.horizontal .card-img ::slotted([slot=img]){width:100%;height:100%;vertical-align:bottom;object-fit:cover}.card.horizontal.left .horizontal .card-img{order:1}.card.horizontal.left .horizontal .lower__body-wrapper{order:2}.card:focus,.card:focus-visible,.focus{outline:none;border-color:#0A8276 !important}'}}]);
//# sourceMappingURL=644.4df3084b.chunk.js.map