import { Component, input } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

import { Type } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseFormModel } from '../_models/base-form';

export enum InputTextComponentType {
	TEXT = 'text',
	PASSWORD = 'password',
	EMAIL = 'email',
	SEARCH = 'search'
}

export class InputTextComponentModel extends BaseFormModel {
	placeholder: string;
	value: string;
	label: string;
	type: InputTextComponentType;
	icon?: Type<Component>;

	constructor(data: Partial<InputTextComponentModel> = {}) {
		super();
		Object.assign(this, data);
		this.placeholder = data.placeholder || '';
		this.value = data.value || '';
		this.label = data.label || '';
		this.type = data.type || InputTextComponentType.TEXT;
	}
}

@Component({
	selector: 'app-input',
	standalone: true,
	imports: [InputTextModule, FloatLabelModule, ReactiveFormsModule],
	templateUrl: './input.component.html',
	styleUrl: './input.component.scss'
})
export class InputComponent {
	public input = input<InputTextComponentModel>(new InputTextComponentModel({}));
}
