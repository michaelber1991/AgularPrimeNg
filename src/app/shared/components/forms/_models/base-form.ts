import { FormGroup } from '@angular/forms';

export class FormPropertiesModel {
	public isValid?: boolean;
	public errors?: string[];
	form: FormGroup;
	constructor(data: Omit<Partial<FormPropertiesModel>, 'form'> & { form: FormGroup }) {
		Object.assign(this, data);
		this.form = data.form;
	}
}
