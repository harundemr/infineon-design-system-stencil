"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[3157],{3157:(l,s,i)=>{i.r(s),i.d(s,{ifx_switch:()=>t});var e=i(5472);const t=class{constructor(a){(0,e.r)(this,a),this.ifxChange=(0,e.c)(this,"ifxChange",7),this.value=!1,this.name="",this.disabled=!1,this.internalValue=!1}componentWillLoad(){this.internalValue=this.value}valueChanged(a,r){a!==r&&(this.internalValue=a)}toggle(){this.disabled||(this.internalValue=!this.internalValue,this.ifxChange.emit(this.internalValue))}handleKeyDown(a){this.disabled||("Enter"===a.key||" "===a.key)&&this.toggle()}render(){return(0,e.h)("div",{key:"c34da613d119e4ca8303ae471c2f87e4c93e36ee",class:`container ${this.internalValue?"checked":""} ${this.disabled?"disabled":""}`,role:"switch",tabindex:"0","aria-checked":this.internalValue?"true":"false","aria-label":this.name,onClick:()=>this.toggle(),onKeyDown:a=>this.handleKeyDown(a)},(0,e.h)("div",{key:"fe6cbbff5afb88038780f250184302f739cd37c7",class:"switch_checkbox-wrapper"},(0,e.h)("input",{key:"875b6fe58dc0afff3743ecd8a38e1eb1369a2481",type:"checkbox",hidden:!0,name:this.name,disabled:this.disabled,value:`${this.internalValue}`}),(0,e.h)("div",{key:"c98a48700647b959db677cdc0b1dcc08ab6ffa55",class:`switch ${this.internalValue?"checked":""} ${this.disabled?"disabled":""}`})),(0,e.h)("div",{key:"f6762c0ad1dc1d74563a2798582db68dfeab9e8f",class:"switch_label-wrapper "+(this.disabled?"disabled":"")},(0,e.h)("label",{key:"a35181cdbcb343e85ff37a5d1687168cf4900b0e",htmlFor:"switch"},(0,e.h)("slot",{key:"b61252d9073a94655191667ed9903d06834d146c"}))))}static get watchers(){return{value:["valueChanged"]}}};t.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block;user-select:none}.container{padding:4px;display:flex;align-items:center;position:relative;width:32px;height:16px;background-color:#FFFFFF;border:1px solid #575352;border-radius:20px;cursor:pointer;transition:background-color 0.3s ease;outline:none}.container:focus{outline:4px solid #0A8276;outline-offset:2px}.container:focus:not(:focus-visible){outline:none}.container:focus-visible{outline:2px solid #0A8276;outline-offset:2px}.container.disabled{cursor:default;border-color:#BFBBBB}.switch_label-wrapper{margin-left:46px}.switch_label-wrapper label:hover{cursor:pointer}.switch_label-wrapper.disabled{color:#BFBBBB}.switch_checkbox-wrapper .switch{width:16px;height:16px;background-color:#575352;border-radius:50%;transition:transform 0.3s ease, background-color 0.3s ease}.switch_checkbox-wrapper .switch.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}.switch_checkbox-wrapper .switch.checked{transform:translateX(16px);background-color:#FFFFFF}.switch_checkbox-wrapper .switch.checked.disabled{cursor:default}.container:hover .toggle-switch{box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}.container.checked{background-color:#0A8276;border-color:#0A8276}.container.checked.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}'}}]);