import { Component, input, Type } from '@angular/core';
import { BaseFormModel } from '../_models/base-form';

export enum ButtonComponentModelType {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	DANGER = 'danger',
	WARNING = 'warning',
	SUCCESS = 'success',
	INFO = 'info'
}
export class ButtonComponentModel extends BaseFormModel {
	public label?: string;
	type: ButtonComponentModelType;
	icon?: Type<Component>;

	constructor(data: Partial<ButtonComponentModel>) {
		super();
		Object.assign(this, data);
		this.type = data.type || ButtonComponentModelType.PRIMARY;
	}
}

@Component({
	selector: 'app-button',
	standalone: true,
	imports: [],
	templateUrl: './button.component.html',
	styleUrl: './button.component.scss'
})
export class ButtonComponent {
	public input = input<ButtonComponentModel>(new ButtonComponentModel({}));
}
