import{r as t,c as s,h as a}from"./index-BPnjqQPA.js";const r=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block;user-select:none}.container{padding:4px;display:flex;align-items:center;position:relative;width:32px;height:16px;background-color:#FFFFFF;border:1px solid #575352;border-radius:20px;cursor:pointer;transition:background-color 0.3s ease;outline:none}.container:focus{outline:4px solid #0A8276;outline-offset:2px}.container:focus:not(:focus-visible){outline:none}.container:focus-visible{outline:2px solid #0A8276;outline-offset:2px}.container.disabled{cursor:default;border-color:#BFBBBB}.switch_label-wrapper{margin-left:46px}.switch_label-wrapper label:hover{cursor:pointer}.switch_label-wrapper.disabled{color:#BFBBBB}.switch_checkbox-wrapper .switch{width:16px;height:16px;background-color:#575352;border-radius:50%;transition:transform 0.3s ease, background-color 0.3s ease}.switch_checkbox-wrapper .switch.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}.switch_checkbox-wrapper .switch.checked{transform:translateX(16px);background-color:#FFFFFF}.switch_checkbox-wrapper .switch.checked.disabled{cursor:default}.container:hover .toggle-switch{box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}.container.checked{background-color:#0A8276;border-color:#0A8276}.container.checked.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}',o=r,c=class{constructor(e){t(this,e),this.ifxChange=s(this,"ifxChange",7),this.value=!1,this.name="",this.disabled=!1,this.internalValue=!1}componentWillLoad(){this.internalValue=this.value}valueChanged(e,i){e!==i&&(this.internalValue=e)}toggle(){this.disabled||(this.internalValue=!this.internalValue,this.ifxChange.emit(this.internalValue))}handleKeyDown(e){this.disabled||(e.key==="Enter"||e.key===" ")&&this.toggle()}render(){return a("div",{key:"c09a69d9939eed284a3305032639eaa495e50d3a",class:`container ${this.internalValue?"checked":""} ${this.disabled?"disabled":""}`,role:"switch",tabindex:"0","aria-checked":this.internalValue?"true":"false","aria-label":this.name,onClick:()=>this.toggle(),onKeyDown:e=>this.handleKeyDown(e)},a("div",{key:"3151dfa10c8ea22677f7c173afb5fa04c89cf0bf",class:"switch_checkbox-wrapper"},a("input",{key:"63b0a4d977fe8359bba89b899298b058de809df6",type:"checkbox",hidden:!0,name:this.name,disabled:this.disabled,value:`${this.internalValue}`}),a("div",{key:"1ecf520c32409d50bf7dcd8edde982570029d3a6",class:`switch ${this.internalValue?"checked":""} ${this.disabled?"disabled":""}`})),a("div",{key:"65584e5eae8b7f142c996ab438302c71e6da5446",class:`switch_label-wrapper ${this.disabled?"disabled":""}`},a("label",{key:"1ec37544c26d66ceca092af668ffea9e61b64b38",htmlFor:"switch"},a("slot",{key:"9eeae44811201256a8279d2954367d1c3328a151"}))))}static get watchers(){return{value:["valueChanged"]}}};c.style=o;export{c as ifx_switch};
