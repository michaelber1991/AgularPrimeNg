import { Component, input, InputSignal } from '@angular/core';

export class StepperInput {
	steps: string[];
	selectedStep: string;
	step: number;

	constructor(data: Partial<StepperInput> = {}) {
		this.steps = data.steps ?? [];
		this.step = data.step ?? 1;
		this.selectedStep = data.steps && data.steps.length > 0 ? data.steps[0] : '';
	}

	nextStep(): void {
		if (this.step < this.steps.length) {
			this.step++;
			this.selectedStep = this.steps[this.step - 1];
		}
	}

	prevStep(): void {
		if (this.step > 1) {
			this.step--;
			this.selectedStep = this.steps[this.step - 1];
		}
	}
}

@Component({
	selector: 'app-stepper',
	standalone: true,
	imports: [],
	templateUrl: './stepper.component.html',
	styleUrl: './stepper.component.scss'
})
export class StepperComponent {
	public input: InputSignal<StepperInput> = input<StepperInput>(new StepperInput());

	get stepperProgress(): string {
		return `${(100 / (this.input().steps.length - 1)) * (this.input().step - 1)}%`;
	}

	public selectStep(step: number): void {
		this.input().step = step;
		this.input().selectedStep = this.input().steps[this.input().step - 1];
	}
}
