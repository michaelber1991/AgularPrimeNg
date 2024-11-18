import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormPropertiesModel } from '@shared/components/forms/_models/base-form';
import {
	ButtonComponent,
	ButtonComponentModel,
	ButtonComponentModelType
} from '@shared/components/forms/button/button.component';
import {
	InputComponent,
	InputTextComponentModel,
	InputTextComponentType
} from '@shared/components/forms/input/input.component';
import { ExclamationFilledIconComponent } from '@shared/icons/exclamation-filled-icon.component';
import { HomeIconComponent } from '@shared/icons/home-icon.component';
import { StringFormatter } from '@shared/utils/string-formater';
import { TranslationService } from 'assets/i18n/translation.service';

enum FormControls {
	NAME = 'name',
	PASSWORD = 'password',
	SIGN_IN = 'sign_in'
}

interface FormItems {
	name: InputTextComponentModel;
	password: InputTextComponentModel;
	signIn: ButtonComponentModel;
	disclaimer: ButtonComponentModel;
	closeDisclaimer: ButtonComponentModel;
}

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [ButtonComponent, InputComponent, CommonModule, ExclamationFilledIconComponent],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
	public form = new FormGroup({});
	public formItems!: FormItems;
	public isDisclamer = false;
	private _translationService = inject(TranslationService);

	ngOnInit(): void {
		this.formItems = this.setFormItems(this.form);
	}

	toggleCardExpansion(): void {
		this.isDisclamer = !this.isDisclamer;
	}

	private setFormItems(form: FormGroup): FormItems {
		return {
			name: this.setName(form),
			password: this.setPassword(form),
			signIn: this.setSignIn(form),
			disclaimer: this.setDisclaimer(),
			closeDisclaimer: this.setCloseDisclaimer()
		};
	}

	private setName(form: FormGroup): InputTextComponentModel {
		return new InputTextComponentModel({
			label: computed(
				() => `${StringFormatter.capitalizeFirstLetter(this._translationService.translationBook().user?.name)}`
			),
			formProperties: new FormPropertiesModel({
				form: form,
				formControl: FormControls.NAME,
				validators: [Validators.required]
			})
		});
	}

	private setPassword(form: FormGroup): InputTextComponentModel {
		return new InputTextComponentModel({
			label: computed(
				() => `${StringFormatter.capitalizeFirstLetter(this._translationService.translationBook().user?.password)}`
			),
			type: InputTextComponentType.PASSWORD,
			formProperties: new FormPropertiesModel({
				form: form,
				formControl: FormControls.PASSWORD,
				validators: [Validators.required]
			})
		});
	}

	private setSignIn(form: FormGroup): ButtonComponentModel {
		return new ButtonComponentModel({
			label: computed(() => StringFormatter.capitalizeFirstLetter(this._translationService.translationBook().continue)),
			model: ButtonComponentModelType.PRIMARY,
			formProperties: new FormPropertiesModel({
				form: form,
				formControl: FormControls.SIGN_IN
			})
		});
	}

	private setDisclaimer(): ButtonComponentModel {
		return new ButtonComponentModel({
			label: computed(() => `Disclaimer`),
			model: ButtonComponentModelType.SECONDARY,
			onClick: (): void => {
				this.toggleCardExpansion();
			}
		});
	}

	private setCloseDisclaimer(): ButtonComponentModel {
		return new ButtonComponentModel({
			label: computed(() => ``),
			icon: HomeIconComponent,
			model: ButtonComponentModelType.PRIMARY,
			onClick: (): void => {
				this.toggleCardExpansion();
			}
		});
	}
}
