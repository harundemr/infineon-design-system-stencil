"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[6577],{6577:(t,e,i)=>{i.r(e),i.d(e,{ifx_stepper:()=>a});var s=i(7770);const a=class{constructor(t){(0,s.r)(this,t),this.ifxActiveStepChange=(0,s.c)(this,"ifxActiveStepChange",7),this.showNumber=!1,this.activeStep=1,this.internalActiveStep=void 0,this.variant="default"}activeStepHandler(){this.updateActiveStep()}updateChildren(){const t=this.el.querySelectorAll("ifx-step");for(let e=0;e<t.length;e++)t[e].stepperState={activeStep:this.internalActiveStep,showNumber:this.showNumber,variant:this.variant}}addStepIdsToStepsAndCountSteps(){const t=this.el.querySelectorAll("ifx-step");t[t.length-1].lastStep=!0;for(let e=0;e<t.length;e++)t[e].stepId=e+1;this.stepsCount=t.length}updateActiveStep(){let t=Math.max(1,Math.min(this.stepsCount+("compact"!==this.variant?1:0),this.activeStep));void 0!==this.internalActiveStep&&t==this.internalActiveStep||this.ifxActiveStepChange.emit({activeStep:t,totalSteps:this.stepsCount}),this.internalActiveStep=t}componentWillLoad(){this.addStepIdsToStepsAndCountSteps(),this.updateActiveStep(),this.updateChildren()}componentWillUpdate(){this.updateChildren()}render(){return(0,s.h)("div",{key:"5c66e4796b57e5e0ba84f4f7234015376f51f68d",class:"stepper ".concat(this.variant)},"compact"===this.variant&&(0,s.h)("div",{class:"stepper-progress"},(0,s.h)("div",{class:"progress-detail"},"".concat(Math.min(this.internalActiveStep,this.stepsCount)," of ").concat(this.stepsCount))),(0,s.h)("div",{key:"dc727f9b76ca44572e7d416c572fc1117fd467bf",class:"stepper-wrapper"},(0,s.h)("slot",{key:"8209f92674a17e919da9c3335b3fcccea02267eb"})))}componentDidRender(){if("compact"==this.variant){this.el.shadowRoot.querySelector(".stepper-progress").style.setProperty("--pb","".concat(this.internalActiveStep/this.stepsCount*100,"%"))}}get el(){return(0,s.g)(this)}static get watchers(){return{activeStep:["activeStepHandler"]}}};a.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.stepper{display:flex;align-items:center}.stepper.compact{min-width:300px;max-width:300px;justify-content:space-between;align-items:center}.stepper.compact .stepper-wrapper{align-items:flex-end;flex-direction:column;max-width:236px;min-width:236px}.stepper-wrapper{display:flex;flex-direction:row}.stepper-progress{display:flex;justify-content:center;align-items:center;font:600 0.875rem/1.25rem "Source Sans 3";width:56px;height:56px;border-radius:9999px;background:conic-gradient(#0A8276 var(--pb, 0%), #8D8786 0)}.stepper-progress .progress-detail{display:flex;justify-content:center;align-items:center;text-align:center;width:48px;height:48px;border-radius:9999px;background:white}'}}]);
//# sourceMappingURL=6577.8ac51e85.chunk.js.map