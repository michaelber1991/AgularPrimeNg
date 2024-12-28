import { Component, ElementRef, input, signal, Signal, ViewChild } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

import { CommonModule } from '@angular/common';
import { Type } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ExclamationFilledIconComponent } from '@shared/icons/exclamation-filled-icon.component';
import { BaseFormModel } from '../_models/base-form';

export enum InputTextComponentType {
	TEXT = 'text',
	PASSWORD = 'password',
	EMAIL = 'email',
	SEARCH = 'search'
}

export class InputTextComponentModel extends BaseFormModel {
	placeholder: Signal<string>;
	value: string;
	label: Signal<string>;
	type: InputTextComponentType;
	icon?: Type<Component>;

	constructor(data: Partial<InputTextComponentModel> = {}) {
		super();
		Object.assign(this, data);
		this.placeholder = data.placeholder || signal<string>('');
		this.value = data.value || '';
		this.label = data.label || signal<string>('');
		this.type = data.type || InputTextComponentType.TEXT;
	}
}

@Component({
	selector: 'app-input',
	imports: [InputTextModule, FloatLabelModule, ReactiveFormsModule, ExclamationFilledIconComponent, CommonModule],
	templateUrl: './input.component.html',
	styleUrl: './input.component.scss'
})
export class InputComponent {
	public input = input<InputTextComponentModel>(new InputTextComponentModel({}));

	@ViewChild('inputElement') inputElement!: ElementRef;

	clickInput(): void {
		this.inputElement.nativeElement.focus();
	}
}
