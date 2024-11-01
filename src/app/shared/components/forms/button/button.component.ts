import { Component, input, signal, Signal, Type } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseFormModel } from '../_models/base-form';

export enum ButtonComponentModelType {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	DANGER = 'danger',
	WARNING = 'warning',
	SUCCESS = 'success',
	INFO = 'info'
}

export enum ButtonComponentType {
	TEXT = 'text',
	SUBMIT = 'submit'
}

export class ButtonComponentModel extends BaseFormModel {
	label: Signal<string>;
	model: ButtonComponentModelType;
	icon?: Type<Component>;
	type: ButtonComponentType;
	onClick: () => void;

	constructor(data: Partial<ButtonComponentModel>) {
		super();
		Object.assign(this, data);
		this.model = data.model || ButtonComponentModelType.PRIMARY;
		this.label = data.label || signal<string>('');
		this.type = data.type || ButtonComponentType.TEXT;
		this.onClick = data.onClick || ((): void => {});
	}
}

@Component({
	selector: 'app-button',
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: './button.component.html',
	styleUrl: './button.component.scss'
})
export class ButtonComponent {
	public input = input<ButtonComponentModel>(new ButtonComponentModel({}));
}
