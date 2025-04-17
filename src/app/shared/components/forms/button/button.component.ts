import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Signal, Type, input, signal } from '@angular/core';
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
	options: ButtonComponentOptionsModel[];
	onClick: () => void;

	constructor(data: Partial<ButtonComponentModel>) {
		super();
		Object.assign(this, data);
		this.model = data.model || ButtonComponentModelType.PRIMARY;
		this.label = data.label || signal<string>('');
		this.type = data.type || ButtonComponentType.TEXT;
		this.onClick = data.onClick || ((): void => {});
		this.options = data.options || [];
	}
}

export class ButtonComponentOptionsModel {
	label: Signal<string>;
	icon?: Type<Component>;
	onClick: (data: unknown) => void;
	onClickEvent: () => void;

	constructor(data: Partial<ButtonComponentOptionsModel>) {
		Object.assign(this, data);
		this.label = data.label || signal<string>('');
		this.onClick = data.onClick || ((): void => {});
		this.onClickEvent =
			data.onClickEvent ||
			((): void => {
				this.onClick('');
			});
	}
}

@Component({
	selector: 'app-button',
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './button.component.html',
	styleUrl: './button.component.scss'
})
export class ButtonComponent {
	public input = input<ButtonComponentModel>(new ButtonComponentModel({}));
	public optionsVisible = false;

	constructor(private elementRef: ElementRef) {}

	@HostListener('document:click', ['$event'])
	public handleClickOutside(event: MouseEvent) {
		if (!this.elementRef.nativeElement.contains(event.target)) {
			this.optionsVisible = false;
		}
	}
}
