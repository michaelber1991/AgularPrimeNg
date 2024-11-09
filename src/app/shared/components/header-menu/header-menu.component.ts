import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { AvatarComponent, AvatarComponentModel, AvatarShape } from '@shared/components/avatar/avatar.component';
import {
	ButtonComponent,
	ButtonComponentModel,
	ButtonComponentModelType,
	ButtonComponentType
} from '@shared/components/forms/button/button.component';
import { HomeIconComponent } from '@shared/icons/home-icon.component';
import { SettingsIconComponent } from '@shared/icons/settings-icon.component';
import { StringFormatter } from '@shared/utils/string-formater';
import { Languages } from 'assets/i18n/languages';
import { TranslationService } from 'assets/i18n/translation.service';
import { FormPropertiesModel } from '../forms/_models/base-form';
import { InputComponent, InputTextComponentModel } from '../forms/input/input.component';
import { InputSelectComponentModel, SelectComponent } from '../forms/select/select.component';

enum FormControls {
	NAME = 'name',
	COMPONENTS = 'components',
	LANGUAGE = 'language'
}

interface FormItems {
	name: InputTextComponentModel;
	components: ButtonComponentModel;
	home: ButtonComponentModel;
	languague: InputSelectComponentModel;
	avatar: AvatarComponentModel;
}

@Component({
	selector: 'app-header-menu',
	standalone: true,
	imports: [CommonModule, ButtonComponent, InputComponent, SelectComponent, AvatarComponent],
	templateUrl: './header-menu.component.html',
	styleUrl: './header-menu.component.scss'
})
export class HeaderMenuComponent implements OnInit {
	public form = new FormGroup({});
	public formItems!: FormItems;
	private _translationService = inject(TranslationService);

	ngOnInit(): void {
		this.formItems = this.setFormItems(this.form);
	}

	private setFormItems(form: FormGroup): FormItems {
		return {
			home: this.setHomeButton(),
			components: this.setComponents(form),
			name: this.setName(form),
			languague: this.setLanguage(form),
			avatar: this.setAvatar()
		};
	}

	private setHomeButton(): ButtonComponentModel {
		return new ButtonComponentModel({
			icon: HomeIconComponent,
			model: ButtonComponentModelType.PRIMARY
		});
	}

	private setComponents(form: FormGroup): ButtonComponentModel {
		return new ButtonComponentModel({
			label: computed(() =>
				StringFormatter.capitalizeFirstLetter(this._translationService.translationBook().configuration)
			),
			icon: SettingsIconComponent,
			model: ButtonComponentModelType.SECONDARY,
			type: ButtonComponentType.SUBMIT,
			formProperties: new FormPropertiesModel({
				form: form,
				formControl: FormControls.COMPONENTS
			})
		});
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

	private setLanguage(form: FormGroup): InputSelectComponentModel {
		const options = [
			{ label: 'English', value: Languages.ENGLISH },
			{ label: 'Spanish', value: Languages.SPANISH }
		];
		const defaultValue = this._translationService?.getCurrentLanguage();
		return new InputSelectComponentModel({
			placeholder: computed(
				() => `${StringFormatter.capitalizeFirstLetter(this._translationService.translationBook().language)}`
			),
			options,
			formProperties: new FormPropertiesModel({
				form: form,
				formControl: FormControls.LANGUAGE,
				defaultValue
			}),
			onChange: async (event: unknown): Promise<void> => {
				await this._translationService.setTranslationLanguage(event as Languages);
			}
		});
	}

	private setAvatar(): AvatarComponentModel {
		return new AvatarComponentModel({
			src: 'https://reqres.in/img/faces/11-image.jpg',
			width: '40px',
			height: '40px',
			shape: AvatarShape.CIRCLE,
			onClick: (): void => {}
		});
	}
}
