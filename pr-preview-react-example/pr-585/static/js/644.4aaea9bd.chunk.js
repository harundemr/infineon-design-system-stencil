"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[644],{644:function(e,o,r){r.r(o),r.d(o,{ifx_card:function(){return n}});var t=r(5671),a=r(3144),i=r(2458),n=function(){function e(o){(0,t.Z)(this,e),(0,i.r)(this,o),this.noBtns=void 0,this.direction="vertical",this.alignment=void 0,this.noImg=void 0,this.href="",this.target="_self"}return(0,a.Z)(e,[{key:"setImgPosition",value:function(e){this.alignment=e.detail}},{key:"handleComponentAdjustment",value:function(){var e=this.el.querySelector("ifx-card-image"),o=this.el.querySelector("ifx-card-links");this.noImg=!e,this.noBtns=!o,""===this.href.trim()&&(this.href=void 0)}},{key:"handleHovering",value:function(){var e=this,o=this.el.shadowRoot.querySelector(".card");o.addEventListener("mouseover",(function(o){e.el.querySelector("ifx-card-headline").isHovered=!0,"IFX-CARD-LINKS"===o.target.nodeName||"IFX-BUTTON"===o.target.nodeName?(e.el.shadowRoot.querySelector(".card").style.borderColor="#ebe9e9",e.el.querySelector("ifx-card-headline").isHovered=!1):e.el.shadowRoot.querySelector(".card").style.borderColor="#0A8276"})),o.addEventListener("mouseout",(function(){e.el.querySelector("ifx-card-headline").isHovered=!1,e.el.shadowRoot.querySelector(".card").style.borderColor="#ebe9e9"}))}},{key:"componentWillLoad",value:function(){this.handleComponentAdjustment()}},{key:"componentDidLoad",value:function(){this.handleHovering(),this.addEventListenersToHandleCustomFocusState()}},{key:"addEventListenersToHandleCustomFocusState",value:function(){var e=this.el.shadowRoot;if(e){var o=e.querySelector(".upper__body-wrapper");o?(e.tabIndex=-1,o.tabIndex=-1):console.error("upper body wrapper not found")}else console.error("element not found")}},{key:"componentWillUpdate",value:function(){this.handleComponentAdjustment()}},{key:"render",value:function(){return(0,i.h)(i.a,null,(0,i.h)("div",{"aria-labelledby":"label",class:"card \n          ".concat(this.noBtns?"noBtns":"","\n          ").concat(this.direction," \n          ").concat(this.alignment)},"horizontal"===this.direction&&(0,i.h)("div",{class:"horizontal"},(0,i.h)("a",{class:"card-img ".concat(this.noImg?"noImage":""),href:this.href},(0,i.h)("slot",{name:"img"})),(0,i.h)("div",{class:"lower__body-wrapper"},(0,i.h)("a",{class:"upper-body",href:this.href},(0,i.h)("slot",null)),(0,i.h)("div",null,(0,i.h)("slot",{name:"buttons"})))),"vertical"===this.direction&&(0,i.h)("div",{class:"vertical"},(0,i.h)("a",{class:"upper__body-wrapper",href:this.href,target:this.target},(0,i.h)("div",{class:"card-img ".concat(this.noImg?"noImage":"")},(0,i.h)("slot",{name:"img"})),(0,i.h)("div",{class:"upper-body"},(0,i.h)("slot",null))),(0,i.h)("div",{class:"lower__body-wrapper"},(0,i.h)("slot",{name:"buttons"})))))}},{key:"el",get:function(){return(0,i.g)(this)}}]),e}();n.style='*{font-family:"Source Sans 3"}:host{display:inline-flex}.card{position:relative;display:inline-flex;flex-direction:column;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid #ebe9e9;border-radius:1px;width:350px;height:auto}.card.noBtns .vertical .lower__body-wrapper{padding-bottom:24px}.card.noBtns .horizontal .lower__body-wrapper{padding-bottom:24px}.card:hover{cursor:pointer;border-color:#0A8276}.card .horizontal{display:flex;flex-direction:row;min-height:218px}.card .horizontal .card-img{flex:1;text-decoration:none}.card .horizontal .card-img.noImage{display:none}.card .horizontal .card-img ::slotted([slot=img]){width:100%;vertical-align:bottom}.card .horizontal .lower__body-wrapper{flex:1;display:grid;grid-template-rows:1fr auto}.card .horizontal .lower__body-wrapper .upper-body{display:flex;flex-direction:column;text-decoration:none;color:#1D1D1D;padding:24px 24px 0px 24px}.card .vertical .upper__body-wrapper{text-decoration:none;color:#1D1D1D}.card .vertical .upper__body-wrapper .card-img{height:190px}.card .vertical .upper__body-wrapper .card-img.noImage{display:none}.card .vertical .upper__body-wrapper .upper-body{padding:24px 24px 0px 24px}.card .vertical .lower__body-wrapper:hover{border-color:#ebe9e9}.card.horizontal{flex-direction:row;width:538px}.card.horizontal .card-img{flex:1;order:2}.card.horizontal .card-img ::slotted([slot=img]){width:100%;height:100%;vertical-align:bottom;object-fit:cover}.card.horizontal.left .horizontal .card-img{order:1}.card.horizontal.left .horizontal .lower__body-wrapper{order:2}.card:focus,.card:focus-visible,.focus{outline:none;border-color:#0A8276 !important}'}}]);
//# sourceMappingURL=644.4aaea9bd.chunk.js.map