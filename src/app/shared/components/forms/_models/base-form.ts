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

	constructor(
		data: Omit<Partial<FormPropertiesModel>, 'form' | 'formControl'> & {
			form: FormGroup;
			formControl: string;
		}
	) {
		Object.assign(this, data);
		this.form = data.form;
		this.formControl = data.formControl;

		this.addFormControl(this.formControl, this.validators);
	}

	public addFormControl(controlName: string, validators: ValidatorFn[] = []): void {
		if (!this.form.contains(controlName)) {
			this.form.addControl(controlName, new FormControl('', validators));
		}
	}
}
