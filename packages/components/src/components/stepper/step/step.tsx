import { Component, h, Prop, State, Watch } from "@stencil/core";
import { StepperState } from "../interfaces";
@Component({
    tag     : 'ifx-step',
    styleUrl: 'step.scss',
    shadow  : true
})

export class Step {

    @Prop() complete: boolean = false;
    @Prop() error   : boolean = false;
    @Prop() stepId  : number  = 1;

    @Prop({ reflect: false }) lastStep    : boolean      = false;
    @Prop({ reflect: false }) stepperState: StepperState = {activeStep: 1, showStepNumber: false, variant: 'default', indicatorPosition: 'left'};

    @State() active: boolean;

    @Watch('stepperState')
    updateCurrentStep(newStepperState) {
        this.active = (newStepperState.activeStep === this.stepId)
    }

    handleStepClick() {
        if(this.stepperState.variant === 'default' && this.complete) {
            this.stepperState.setActiveStep(this.stepId)
        } 
    }

    handleStepKeyDown(event: KeyboardEvent) {
        if(this.stepperState.variant === 'default' && this.complete && event.key === 'Enter') {
            this.stepperState.setActiveStep(this.stepId)
        } 
    }

    render() {
        return (
            <div aria-current = {this.active ? 'step': false}
                aria-disabled = {this.active || this.complete ? false : true}
                class = {`step-wrapper ${this.stepId === 1 ? 'first-step': ''} 
                        ${this.error ? 'error': ''}
                        ${this.stepperState.variant}
                        ${this.complete ? 'complete': ''}
                        ${this.lastStep ? 'last-step': ''}
                        indicator-${this.stepperState.indicatorPosition}
                        ${this.active ? 'active' : ''}`}>

                <div class = 'step-icon-wrapper'>
                    {/* Left connector */}
                    {this.stepperState.variant === 'default' && <span class = 'step-connector-l'/>}

                    {
                        // Active, complete or incomplete
                        (this.stepperState.variant === 'default' && (!this.error || (this.error && this.active))) && 
                        <div class = 'step-icon'>
                            {(this.stepperState.showStepNumber && (!this.complete || (this.complete && this.active))) ? this.stepId : ''}
                            {(this.complete && !this.active) && <ifx-icon icon='check16'></ifx-icon>}
                            {(!this.stepperState.showStepNumber && this.active) && <span class = 'active-indic'></span>}
                        </div>
                    }

                    {/* Special error state */}
                    {(this.stepperState.variant ==='default' && this.error && !this.active) && <ifx-icon icon='warningf24'></ifx-icon>}
                    
                    {/* Right connector */}
                    {this.stepperState.variant === 'default' && <span class = {`step-connector-r ${this.active ? 'active' : ''}`}/>}
                </div>

                {
                    // Step labels
                    (this.stepperState.variant === 'default' || (this.stepperState.variant === 'compact' && (this.active || this.stepId === this.stepperState.activeStep+1))) && 
                    <div tabIndex={this.complete && !this.active ? 0 : -1} 
                        class = {`step-label ${this.stepperState.variant === 'compact' ? (this.active ? 'curr-label' : 'next-label') : ''}`} 
                        onClick={() => { this.handleStepClick() }} 
                        onKeyDown={(e) => { this.handleStepKeyDown(e) }}>
                        {this.stepperState.variant === 'compact' &&  !this.active  ? 'Next: ' : ''}<slot/>
                    </div>
                }

            </div>
        );
    };
}
