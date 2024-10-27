import { Component, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FormPropertiesModel } from '@shared/components/forms/_models/base-form';
import { ButtonComponentModel, ButtonComponentModelType } from '@shared/components/forms/button/button.component';
import { HeaderMenuComponent, HeaderMenuComponentModel } from '@shared/components/header-menu/header-menu.component';
import { HomeIconComponent } from '@shared/icons/home-icon.component';
import { SettingsIconComponent } from '@shared/icons/settings-icon.component';
import { ContentLayoutComponent } from '@shared/layouts/content-layout/content-layout.component';

enum FormControls {
	COMPONENTS = 'components'
}

@Component({
	selector: 'app-main-layout',
	standalone: true,
	imports: [HeaderMenuComponent, ContentLayoutComponent, RouterOutlet],
	template: `<div class="main-layout-container">
		<app-header-menu [input]="headerMenuInput()" />
		<app-content-layout>
			<router-outlet></router-outlet>
		</app-content-layout>
	</div>`,
	styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
	public form = new FormGroup({});
	public headerMenuInput = signal<HeaderMenuComponentModel>(
		new HeaderMenuComponentModel({
			items: [
				new ButtonComponentModel({ icon: HomeIconComponent, type: ButtonComponentModelType.SECONDARY }),
				new ButtonComponentModel({
					label: 'Components',
					icon: SettingsIconComponent,
					type: ButtonComponentModelType.SECONDARY,
					formProperties: new FormPropertiesModel({
						form: this.form,
						formControl: FormControls.COMPONENTS
					})
				})
			]
		})
	);
}
