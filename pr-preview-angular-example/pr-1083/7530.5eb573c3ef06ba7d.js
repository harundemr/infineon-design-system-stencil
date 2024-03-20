"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[7530],{7530:(l,n,s)=>{s.r(n),s.d(n,{ifx_tabs:()=>o});var a=s(369);const o=class{constructor(e){(0,a.r)(this,e),this.ifxTabChange=(0,a.c)(this,"ifxTabChange",7),this.tabs=[],this.orientation="horizontal",this.activeTabIndex=0,this.internalOrientation=void 0,this.internalActiveTabIndex=0,this.internalFocusedTabIndex=0,this.tabRefs=[],this.tabHeaderRefs=[],this.disabledTabs=[],this.tabObjects=[]}setActiveAndFocusedTab(e){this.internalActiveTabIndex=e,this.internalFocusedTabIndex=e}activeTabIndexChanged(e,t){e!==t&&this.setActiveAndFocusedTab(e)}componentWillLoad(){this.internalOrientation="vertical"===this.orientation.toLowerCase()?"vertical":"horizontal",this.internalActiveTabIndex!==this.activeTabIndex&&this.ifxTabChange.emit({previousTab:this.internalActiveTabIndex,currentTab:this.activeTabIndex}),this.internalFocusedTabIndex=this.internalActiveTabIndex,this.updateTabStyles(),this.onSlotChange()}updateTabStyles(){this.tabHeaderRefs.forEach((e,t)=>{e.classList.toggle("active",t===this.internalActiveTabIndex),e.setAttribute("aria-selected",t===this.internalActiveTabIndex?"true":"false")})}reRenderBorder(){const e=this.el.shadowRoot.querySelector(".active-border");e&&this.tabHeaderRefs[this.internalActiveTabIndex]&&("horizontal"===this.orientation?(e.style.left=`${this.tabHeaderRefs[this.internalActiveTabIndex].offsetLeft}px`,e.style.width=`${this.tabHeaderRefs[this.internalActiveTabIndex].offsetWidth}px`,e.style.top="",e.style.height=""):(e.style.top=`${this.tabHeaderRefs[this.internalActiveTabIndex].offsetTop}px`,e.style.height=`${this.tabHeaderRefs[this.internalActiveTabIndex].offsetHeight}px`,e.style.left="",e.style.width=""))}onSlotChange(){const e=this.el.querySelectorAll("ifx-tab");this.tabObjects=Array.from(e).map(t=>({header:t?.header,disabled:!0===t?.disabled})),this.tabRefs=Array.from(e),this.tabRefs.forEach((t,i)=>{t.setAttribute("slot",`tab-${i}`)})}setDefaultOrientation(){const t=this.orientation.toLowerCase();this.internalOrientation=["horizontal","vertical"].includes(t)?this.orientation:"horizontal"}componentDidLoad(){this.updateBorderAndFocus(),this.tabHeaderRefs.forEach((e,t)=>{e.addEventListener("focus",this.onTabFocus(t))})}onTabFocus(e){return()=>{this.internalFocusedTabIndex=e}}disconnectedCallback(){this.tabHeaderRefs.forEach((e,t)=>{e.removeEventListener("focus",this.onTabFocus(t))})}componentDidUpdate(){this.updateBorderAndFocus()}updateBorderAndFocus(){this.reRenderBorder(),this.updateTabFocusability()}updateTabFocusability(){this.tabHeaderRefs.forEach((e,t)=>{e.tabIndex=t===this.internalActiveTabIndex?0:-1})}focusNextTab(){let e=this.internalFocusedTabIndex+1;for(;e<this.tabHeaderRefs.length&&this.tabObjects[e].disabled;)e++;e>=0&&e<this.tabHeaderRefs.length&&(this.internalFocusedTabIndex=e,this.tabHeaderRefs[e].focus())}focusPreviousTab(){let e=this.internalFocusedTabIndex-1;for(;e>=0&&this.tabObjects[e].disabled;)e--;e>=0&&e<this.tabHeaderRefs.length&&(this.internalFocusedTabIndex=e,this.tabHeaderRefs[e].focus())}getTabItemClass(e){return`tab-item ${e!==this.internalActiveTabIndex||this.tabObjects[e].disabled?"":"active"} ${this.tabObjects[e].disabled?"disabled":""}`}handleClick(e,t){this.ifxTabChange.emit({previousTab:this.internalActiveTabIndex,currentTab:t}),e.disabled||(this.internalActiveTabIndex=t)}handleKeyDown(e){if("Tab"===e.key)if(e.shiftKey){if(0===this.internalFocusedTabIndex)return;e.preventDefault(),this.focusPreviousTab()}else{if(this.internalFocusedTabIndex===this.tabHeaderRefs.length-1)return;e.preventDefault(),this.focusNextTab()}else if("Enter"===e.key&&-1!==this.internalFocusedTabIndex&&!this.tabObjects[this.internalFocusedTabIndex].disabled){const t=this.internalActiveTabIndex;this.internalActiveTabIndex=this.internalFocusedTabIndex,this.ifxTabChange.emit({previousTab:t,currentTab:this.internalFocusedTabIndex})}}render(){var e;return(0,a.h)("div",{key:"7fa2b424bfdf318a46de05ddd3f1b1d040fbcd23","aria-label":"navigation tabs",class:`tabs ${this.internalOrientation}`},(0,a.h)("ul",{key:"4a346a7e607541491c21ecfe2821e6f591e5edad",role:"tablist",class:"tabs-list"},null===(e=this.tabObjects)||void 0===e?void 0:e.map((t,i)=>(0,a.h)("li",{class:this.getTabItemClass(i),ref:d=>this.tabHeaderRefs[i]=d,tabindex:"0",onClick:()=>this.handleClick(t,i),"aria-selected":i===this.internalActiveTabIndex?"true":"false","aria-disabled":t.disabled?"true":"false",role:"tab"},t?.header)),(0,a.h)("div",{key:"5f304e1134e72891b34b46fc0dfcc7e5f87264b6",class:"active-border"})),(0,a.h)("div",{key:"7acb36555ad2c9112c47ba640e06f7fb62ee8d89",class:"tab-content"},Array.from(this.tabObjects).map((t,i)=>(0,a.h)("div",{style:{display:i===this.internalActiveTabIndex?"block":"none"}},(0,a.h)("slot",{name:`tab-${i}`})))))}get el(){return(0,a.g)(this)}static get watchers(){return{activeTabIndex:["activeTabIndexChanged"]}}};o.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.tabs{display:flex;font-family:var(--ifx-font-family)}.tabs.horizontal{flex-direction:column}.tabs.vertical{flex-direction:row}.tabs-list{display:flex;list-style:none;padding:0;margin:0;position:relative;font-weight:600}.tabs-list:focus-within .active-border{display:none}.active-border{content:"";position:absolute;transition:left 0.3s ease-in-out, width 0.3s ease-in-out, top 0.3s ease-in-out, height 0.3s ease-in-out}.tabs.horizontal .active-border{bottom:0;left:0;height:2px;background-color:#0A8276}.tabs.vertical .tabs-list{flex-direction:column;border-bottom:none}.tabs.vertical .tab-content{padding-top:0px;padding-left:32px}.tab-item{padding:8px 16px;cursor:pointer;position:relative}.tab-item:hover{color:#0A8276}.tab-item:active,.tab-item.active{color:#0A8276}.tab-item:focus,.tab-item.focus{outline:none;border-radius:1px;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.tab-item:focus+.active-border,.tab-item.focus+.active-border{display:none}.tab-item.disabled{color:#BFBBBB;pointer-events:none}.tabs.vertical .tab-item{border-right:2px solid transparent;min-width:7em}.tabs.vertical .active-border{left:0;top:0;width:2px;background-color:#0A8276}.tab-content{padding-top:24px;padding-left:0px;flex-grow:1}.tabs.small .tab-item{font-size:0.875rem}'}}]);