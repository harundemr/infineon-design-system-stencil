"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[4889],{4889:(i,s,e)=>{e.r(s),e.d(s,{ifx_step:()=>p});var t=e(3415);const p=class{constructor(a){(0,t.r)(this,a),this.lastStep=!1,this.stepId=1,this.stepperState={activeStep:1,showNumber:!1,variant:"default"},this.error=!1}render(){return(0,t.h)("div",{key:"97e2ce6cc3ecb5e8113551af20aabbd37206a08a",class:`step-wrapper ${1===this.stepId?"first-step":""} \n                        ${this.lastStep?"last-step":""}\n                        ${this.stepId<=this.stepperState.activeStep?"completed":""}\n                        ${this.error?"error":""}\n                        ${this.stepperState.variant}`},(0,t.h)("div",{key:"5f2f6422c11dc8e06f4dd0e61db1a9cf9666575d",class:"step-icon-wrapper"},"default"===this.stepperState.variant&&(0,t.h)("span",{class:"step-connector-l"}),"default"===this.stepperState.variant&&(!this.error||this.error&&this.stepId==this.stepperState.activeStep)&&(0,t.h)("div",{class:"step-icon"},this.stepperState.showNumber&&this.stepperState.activeStep<=this.stepId?this.stepId:"",this.stepId<this.stepperState.activeStep&&(0,t.h)("ifx-icon",{icon:"check16"}),!this.stepperState.showNumber&&this.stepId==this.stepperState.activeStep&&(0,t.h)("span",{class:"active-indic"})),"default"===this.stepperState.variant&&this.error&&this.stepId!=this.stepperState.activeStep&&(0,t.h)("ifx-icon",{icon:"warningf24"}),"default"===this.stepperState.variant&&(0,t.h)("span",{class:"step-connector-r"})),("default"===this.stepperState.variant||"compact"===this.stepperState.variant&&(this.stepId===this.stepperState.activeStep||this.stepId===this.stepperState.activeStep+1))&&(0,t.h)("div",{class:"step-label "+("compact"===this.stepperState.variant?this.stepperState.activeStep===this.stepId?"curr-label":"next-label":"")},(0,t.h)("slot",null)))}};p.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.step-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;max-width:160px;width:160px;font:400 1rem/1.5rem "Source Sans 3"}.step-wrapper.compact{gap:0;align-items:flex-end}.step-wrapper.compact .step-label{max-width:236px;text-align:right}.step-wrapper .step-label{max-width:144px;color:#8D8786;word-wrap:break-word}.step-wrapper .step-label.curr-label{font:600 1.25rem/1.75rem "Source Sans 3"}.step-wrapper .step-label.next-label{font:400 0.75rem/1rem "Source Sans 3"}.step-wrapper.first-step .step-connector-l{height:0px}.step-wrapper.last-step .step-connector-r{height:0px}.step-wrapper.completed .step-connector-l,.step-wrapper.completed .step-connector-r,.step-wrapper.completed .step-icon{background:#0A8276}.step-wrapper.completed .step-label{color:#1D1D1D}.step-wrapper.error{color:#CD002F}.step-wrapper.error .step-label{color:#CD002F}.active-indic{width:16px;height:16px;border-radius:9999px;background:white}.step-icon-wrapper{display:flex;flex-direction:row;justify-content:center;align-items:center}.step-icon{width:24px;height:24px;background-color:#8D8786;border-radius:9999px;display:flex;align-items:center;justify-content:center;color:white}.step-connector-r,.step-connector-l{height:2px;width:68px;background-color:#8D8786}'}}]);