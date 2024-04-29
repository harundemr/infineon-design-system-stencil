import{r as i,c as p,h as s,g as r}from"./index-DuGjDrDU.js";const a=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.stepper{display:flex;align-items:center}.stepper.compact{min-width:300px;max-width:300px;justify-content:space-between;align-items:center}.stepper.compact .stepper-wrapper{align-items:flex-end;flex-direction:column;max-width:236px;min-width:236px}.stepper-wrapper{display:flex;flex-direction:row}.stepper-progress{display:flex;justify-content:center;align-items:center;font:600 0.875rem/1.25rem "Source Sans 3";width:56px;height:56px;border-radius:9999px;background:conic-gradient(#0A8276 var(--pb, 0%), #8D8786 0)}.stepper-progress .progress-detail{display:flex;justify-content:center;align-items:center;text-align:center;width:48px;height:48px;border-radius:9999px;background:white}',n=a,c=class{constructor(e){i(this,e),this.ifxActiveStepChange=p(this,"ifxActiveStepChange",7),this.showNumber=!1,this.activeStep=1,this.internalActiveStep=void 0,this.variant="default"}activeStepHandler(){this.updateActiveStep()}updateChildren(){const e=this.el.querySelectorAll("ifx-step");for(let t=0;t<e.length;t++)e[t].stepperState={activeStep:this.internalActiveStep,showNumber:this.showNumber,variant:this.variant}}addStepIdsToStepsAndCountSteps(){const e=this.el.querySelectorAll("ifx-step");e[e.length-1].lastStep=!0;for(let t=0;t<e.length;t++)e[t].stepId=t+1;this.stepsCount=e.length}updateActiveStep(){let e=Math.max(1,Math.min(this.stepsCount+(this.variant!=="compact"?1:0),this.activeStep));(this.internalActiveStep===void 0||e!=this.internalActiveStep)&&this.ifxActiveStepChange.emit({activeStep:e,totalSteps:this.stepsCount}),this.internalActiveStep=e}componentWillLoad(){this.addStepIdsToStepsAndCountSteps(),this.updateActiveStep(),this.updateChildren()}componentWillUpdate(){this.updateChildren()}render(){return s("div",{key:"38b79ba96ae780220fb658a7f377c2e8461d7b7d",class:`stepper ${this.variant}`},this.variant==="compact"&&s("div",{class:"stepper-progress"},s("div",{class:"progress-detail"},`${Math.min(this.internalActiveStep,this.stepsCount)} of ${this.stepsCount}`)),s("div",{key:"85c3ee511fdaac1d0146835fb074b06bdefacc13",class:"stepper-wrapper"},s("slot",{key:"e9a63d8c2166c9339883975435980d279ffa734e"})))}componentDidRender(){this.variant=="compact"&&this.el.shadowRoot.querySelector(".stepper-progress").style.setProperty("--pb",`${this.internalActiveStep/this.stepsCount*100}%`)}get el(){return r(this)}static get watchers(){return{activeStep:["activeStepHandler"]}}};c.style=n;export{c as ifx_stepper};
