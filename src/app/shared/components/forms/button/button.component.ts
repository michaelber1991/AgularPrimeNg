import { Component, input } from '@angular/core';

export enum ButtonComponentModelType {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	DANGER = 'danger',
	WARNING = 'warning',
	SUCCESS = 'success',
	INFO = 'info'
}
export class ButtonComponentModel {
	public label?: string;
	type: ButtonComponentModelType;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	icon: any;

	constructor(data: Partial<ButtonComponentModel>) {
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
