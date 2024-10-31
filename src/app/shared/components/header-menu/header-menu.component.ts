import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
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

@Component({
	selector: 'app-header-menu',
	standalone: true,
	imports: [CommonModule, ButtonComponent, HomeIconComponent, InputComponent, SelectComponent],
	templateUrl: './header-menu.component.html',
	styleUrl: './header-menu.component.scss'
})
export class HeaderMenuComponent {
	public form = new FormGroup({});
	public formItems = {
		name: this.setName(),
		components: this.setComponents(),
		home: this.setHomeButton(),
		languague: this.setLanguage()
	};
	private _translationService = inject(TranslationService);

	private setHomeButton(): ButtonComponentModel {
		return new ButtonComponentModel({ icon: HomeIconComponent, model: ButtonComponentModelType.PRIMARY });
	}

	private setComponents(): ButtonComponentModel {
		return new ButtonComponentModel({
			label: computed(() =>
				StringFormatter.capitalizeFirstLetter(this._translationService.translationBook().configuration)
			),
			icon: SettingsIconComponent,
			model: ButtonComponentModelType.SECONDARY,
			type: ButtonComponentType.SUBMIT,
			formProperties: new FormPropertiesModel({
				form: this.form,
				formControl: FormControls.COMPONENTS
			})
		});
	}

	private setName(): InputTextComponentModel {
		return new InputTextComponentModel({
			label: 'Name',
			formProperties: new FormPropertiesModel({
				form: this.form,
				formControl: FormControls.NAME,
				validators: [Validators.required]
			})
		});
	}

	private setLanguage(): InputSelectComponentModel {
		return new InputSelectComponentModel({
			placeholder: computed(
				() => `${StringFormatter.capitalizeFirstLetter(this._translationService.translationBook().language)}`
			),
			options: [
				{ label: 'English', value: Languages.ENGLISH },
				{ label: 'Spanish', value: Languages.SPANISH }
			],
			formProperties: new FormPropertiesModel({
				form: this.form,
				formControl: FormControls.LANGUAGE
			}),
			onChange: (event: unknown): void => {
				this._translationService.setTranslationLanguage(event as Languages);
			}
		});
	}
}
