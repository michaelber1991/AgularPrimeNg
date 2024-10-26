import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponentModel, ButtonComponentModelType } from '@shared/components/forms/button/button.component';
import { HeaderMenuComponent, HeaderMenuComponentModel } from '@shared/components/header-menu/header-menu.component';
import { HomeIconComponent } from '@shared/icons/home-icon.component';
import { SettingsIconComponent } from '@shared/icons/settings-icon.component';
import { ContentLayoutComponent } from '@shared/layouts/content-layout/content-layout.component';
import { ThemeSwitcherService } from '@shared/services/theme-switcher.service';
import { ThemeSwitcherType } from 'assets/styles/themes/_base.model';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [ContentLayoutComponent, CommonModule, RouterOutlet, HeaderMenuComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
	public headerMenuInput = signal<HeaderMenuComponentModel>(
		new HeaderMenuComponentModel({
			items: [
				new ButtonComponentModel({ icon: HomeIconComponent, type: ButtonComponentModelType.SECONDARY }),
				new ButtonComponentModel({
					label: 'Components',
					icon: SettingsIconComponent,
					type: ButtonComponentModelType.SECONDARY
				})
			]
		})
	);
	private themeSwitcherService = inject(ThemeSwitcherService);

	ngOnInit(): void {
		this.themeSwitcherService.setTheme(ThemeSwitcherType.LIGHT);
	}
}
