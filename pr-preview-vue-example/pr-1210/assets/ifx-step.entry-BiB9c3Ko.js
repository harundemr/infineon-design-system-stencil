import{r as p,h as e}from"./index-DPrdDKFF.js";const s=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.step-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;max-width:160px;width:160px;font:400 1rem/1.5rem "Source Sans 3"}.step-wrapper.compact{gap:0;align-items:flex-end}.step-wrapper.compact .step-label{max-width:236px;text-align:right}.step-wrapper .step-label{max-width:144px;color:#8D8786;word-wrap:break-word}.step-wrapper .step-label.curr-label{font:600 1.25rem/1.75rem "Source Sans 3"}.step-wrapper .step-label.next-label{font:400 0.75rem/1rem "Source Sans 3"}.step-wrapper.first-step .step-connector-l{height:0px}.step-wrapper.last-step .step-connector-r{height:0px}.step-wrapper.completed .step-connector-l,.step-wrapper.completed .step-connector-r,.step-wrapper.completed .step-icon{background:#0A8276}.step-wrapper.completed .step-label{color:#1D1D1D}.step-wrapper.error{color:#CD002F}.step-wrapper.error .step-label{color:#CD002F}.active-indic{width:16px;height:16px;border-radius:9999px;background:white}.step-icon-wrapper{display:flex;flex-direction:row;justify-content:center;align-items:center}.step-icon{width:24px;height:24px;background-color:#8D8786;border-radius:9999px;display:flex;align-items:center;justify-content:center;color:white}.step-connector-r,.step-connector-l{height:2px;width:68px;background-color:#8D8786}',r=s,a=class{constructor(t){p(this,t),this.lastStep=!1,this.stepId=1,this.stepperState={activeStep:1,showNumber:!1,variant:"default"},this.error=!1}render(){return e("div",{key:"7d639916dbe54fafa1a5dee443ce35607958ad57",class:`step-wrapper ${this.stepId===1?"first-step":""} 
                        ${this.lastStep?"last-step":""}
                        ${this.stepId<=this.stepperState.activeStep?"completed":""}
                        ${this.error?"error":""}
                        ${this.stepperState.variant}`},e("div",{key:"7890fc0be8c965bed5a971fffacad7e3644ce8b5",class:"step-icon-wrapper"},this.stepperState.variant==="default"&&e("span",{class:"step-connector-l"}),this.stepperState.variant==="default"&&(!this.error||this.error&&this.stepId==this.stepperState.activeStep)&&e("div",{class:"step-icon"},this.stepperState.showNumber&&this.stepperState.activeStep<=this.stepId?this.stepId:"",this.stepId<this.stepperState.activeStep&&e("ifx-icon",{icon:"check16"}),!this.stepperState.showNumber&&this.stepId==this.stepperState.activeStep&&e("span",{class:"active-indic"})),this.stepperState.variant==="default"&&this.error&&this.stepId!=this.stepperState.activeStep&&e("ifx-icon",{icon:"warningf24"}),this.stepperState.variant==="default"&&e("span",{class:"step-connector-r"})),(this.stepperState.variant==="default"||this.stepperState.variant==="compact"&&(this.stepId===this.stepperState.activeStep||this.stepId===this.stepperState.activeStep+1))&&e("div",{class:`step-label ${this.stepperState.variant==="compact"?this.stepperState.activeStep===this.stepId?"curr-label":"next-label":""}`},e("slot",null)))}};a.style=r;export{a as ifx_step};
