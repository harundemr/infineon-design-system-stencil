"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[4867],{4867:function(t,e,i){i.r(e),i.d(e,{ifx_tabs:function(){return o}});var n=i(5671),a=i(3144),s=i(2243),o=function(){function t(e){(0,n.Z)(this,t),(0,s.r)(this,e),this.ifxTabIndex=(0,s.c)(this,"ifxTabIndex",7),this.tabs=[],this.orientation="",this.internalOrientation=void 0,this.activeTabIndex=0,this.tabRefs=[],this.tabHeaderRefs=[],this.tabTitles=[],this.disabledTabs=[],this.tabObjects=[]}return(0,a.Z)(t,[{key:"setActiveTab",value:function(t){if(!(t<0||t>=this.tabHeaderRefs.length)){var e=this.tabRefs[this.activeTabIndex];e&&this.emitEvent(e,"tabBecameInactive"),this.ifxTabIndex.emit({previousTab:this.activeTabIndex,currentTab:t}),this.activeTabIndex=t;var i=this.tabRefs[t];i&&this.emitEvent(i,"tabBecameActive")}}},{key:"emitEvent",value:function(t,e){var i=new CustomEvent(e,{bubbles:!0,composed:!0});t.dispatchEvent(i)}},{key:"reRenderBorder",value:function(){var t=this.el.shadowRoot.querySelector(".active-border");t&&this.tabHeaderRefs[this.activeTabIndex]&&("horizontal"===this.orientation?(t.style.left="".concat(this.tabHeaderRefs[this.activeTabIndex].offsetLeft,"px"),t.style.width="".concat(this.tabHeaderRefs[this.activeTabIndex].offsetWidth,"px"),t.style.top="",t.style.height=""):(t.style.top="".concat(this.tabHeaderRefs[this.activeTabIndex].offsetTop,"px"),t.style.height="".concat(this.tabHeaderRefs[this.activeTabIndex].offsetHeight,"px"),t.style.left="",t.style.width=""))}},{key:"onOrientationChange",value:function(){this.reRenderBorder()}},{key:"onSlotChange",value:function(){var t=this,e=this.el.querySelectorAll("ifx-tab");this.tabTitles=Array.from(e).map((function(t){return t.getAttribute("header")})),this.disabledTabs=Array.from(e).map((function(t){return t.getAttribute("disabled")})),this.tabObjects=this.tabTitles.map((function(e,i){return{header:e,disabled:"true"===t.disabledTabs[i]}})),this.tabRefs=Array.from(e),this.tabRefs.forEach((function(t,e){t.setAttribute("slot","tab-".concat(e))}))}},{key:"setDefaultOrientation",value:function(){var t=this.orientation.toLowerCase();["horizontal","vertical"].includes(t)?this.internalOrientation=this.orientation:this.internalOrientation="horizontal"}},{key:"componentWillLoad",value:function(){this.setDefaultOrientation(),this.onSlotChange()}},{key:"componentDidLoad",value:function(){this.reRenderBorder()}},{key:"componentDidUpdate",value:function(){this.reRenderBorder()}},{key:"render",value:function(){var t=this;return(0,s.h)("div",{class:"tabs ".concat(this.internalOrientation)},(0,s.h)("ul",{class:"tabs-list"},this.tabObjects.map((function(e,i){return(0,s.h)("li",{class:"tab-item ".concat(i===t.activeTabIndex?"active":""," ").concat(e.disabled?"disabled":""),ref:function(e){return t.tabHeaderRefs[i]=e},onClick:function(){return t.setActiveTab(i)}},e.header)})),(0,s.h)("div",{class:"active-border"})),(0,s.h)("div",{class:"tab-content"},Array.from(this.tabTitles).map((function(e,i){return(0,s.h)("div",{style:{display:i===t.activeTabIndex?"block":"none"}},(0,s.h)("slot",{name:"tab-".concat(i)}))}))))}},{key:"el",get:function(){return(0,s.g)(this)}}],[{key:"watchers",get:function(){return{orientation:["onOrientationChange"]}}}]),t}();o.style='@font-face{font-family:"Source Sans 3";font-style:normal;font-weight:400;src:url("~@infineon/design-system-tokens/dist/fonts/source-sans-3/SourceSans3-Regular.ttf.woff2") format("woff2"), url("~@infineon/design-system-tokens/dist/fonts/source-sans-3/SourceSans3-Regular.ttf.woff") format("woff")}@font-face{font-family:"Source Sans 3";font-style:normal;font-weight:600;src:url("~@infineon/design-system-tokens/dist/fonts/source-sans-3/SourceSans3-Semibold.ttf.woff2") format("woff2"), url("~@infineon/design-system-tokens/dist/fonts/source-sans-3/SourceSans3-Semibold.ttf.woff") format("woff")}@font-face{font-family:"Source Sans 3";font-style:italic;font-weight:400;src:url("~@infineon/design-system-tokens/dist/fonts/source-sans-3/SourceSans3-It.ttf.woff2") format("woff2"), url("~@infineon/design-system-tokens/dist/fonts/source-sans-3/SourceSans3-It.ttf.woff") format("woff")}*{font-family:"Source Sans 3", sans-serif}.tabs{display:flex;font-family:"Source Sans 3"}.tabs.horizontal{flex-direction:column}.tabs.vertical{flex-direction:row}.tabs-list{display:flex;list-style:none;padding:0;margin:0;position:relative;font-weight:600}.active-border{content:"";position:absolute;transition:left 0.3s ease-in-out, width 0.3s ease-in-out, top 0.3s ease-in-out, height 0.3s ease-in-out}.tabs.horizontal .active-border{bottom:0;left:0;height:2px;background-color:#0A8276}.tabs.vertical .tabs-list{flex-direction:column;border-bottom:none}.tabs.vertical .tab-content{padding-top:0px;padding-left:32px}.tab-item.active{color:#0A8276}.tab-item.disabled{padding:8px 16px;cursor:pointer;position:relative;color:#BFBBBB;pointer-events:none}.tab-item:not(:disabled,.disabled){padding:8px 16px;cursor:pointer;position:relative}.tab-item:not(:disabled,.disabled):hover{color:#0A8276}.tabs.vertical .tab-item{border-right:2px solid transparent;min-width:7em}.tabs.vertical .active-border{left:0;top:0;width:2px;background-color:#0A8276}.tab-content{padding-top:24px;padding-left:0px;flex-grow:1}.tabs.small .tab-item{font-size:0.875rem}'}}]);
//# sourceMappingURL=4867.013b227d.chunk.js.map