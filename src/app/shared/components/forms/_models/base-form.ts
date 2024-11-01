import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';

export class BaseFormModel {
	public formProperties: FormPropertiesModel;
	constructor(data: Partial<BaseFormModel> = {}) {
		Object.assign(this, data);
		this.formProperties = data.formProperties || new FormPropertiesModel({ form: new FormGroup({}), formControl: '' });
	}
}

export class FormPropertiesModel {
	public isValid?: boolean;
	public errors?: string[];
	public validators?: ValidatorFn[];
	form: FormGroup;
	formControl: string;
	defaultValue?: unknown;

	constructor(
		data: Omit<Partial<FormPropertiesModel>, 'form' | 'formControl'> & {
			form: FormGroup;
			formControl: string;
		}
	) {
		Object.assign(this, data);
		this.form = data.form;
		this.formControl = data.formControl;

		// Agrega el FormControl con el valor predeterminado opcional
		this.addFormControl(this.formControl, this.validators, data.defaultValue);
	}

	// Modificación para aceptar un valor predeterminado
	public addFormControl(controlName: string, validators: ValidatorFn[] = [], defaultValue: unknown = ''): void {
		if (!this.form.contains(controlName)) {
			this.form.addControl(controlName, new FormControl(defaultValue, validators));
		}
	}
}
