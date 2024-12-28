import { Component, input, signal, Signal, Type } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { BaseFormModel } from '../_models/base-form';

export enum InputTextComponentType {
	TEXT = 'text',
	PASSWORD = 'password',
	EMAIL = 'email',
	SEARCH = 'search'
}

export class InputSelectComponentModel extends BaseFormModel {
	placeholder: Signal<string>;
	optionLabel: string;
	optionValue: string;
	type: InputTextComponentType;
	icon?: Type<Component>;
	options: InputSelectComponentOptionsModel[];
	onChange: (event: unknown) => void;

	constructor(data: Partial<InputSelectComponentModel> = {}) {
		super();
		Object.assign(this, data);
		this.optionLabel = data.optionLabel || 'label';
		this.optionValue = data.optionValue || 'value';
		this.placeholder = data.placeholder || signal<string>('');
		this.type = data.type || InputTextComponentType.TEXT;
		this.options = data.options || [];
		this.onChange = data.onChange || ((): void => {});
	}
}

export interface InputSelectComponentOptionsModel {
	label: string;
	value: string;
}

@Component({
	selector: 'app-select',
	imports: [ReactiveFormsModule, SelectModule],
	templateUrl: './select.component.html',
	styleUrl: './select.component.scss'
})
export class SelectComponent {
	public input = input<InputSelectComponentModel>(new InputSelectComponentModel({}));
}
