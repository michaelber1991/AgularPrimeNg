import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from '@shared/layouts/main-layout/main-layout.component';
import { ThemeSwitcherService } from '@shared/services/theme-switcher.service';
import { Languages } from 'assets/i18n/languages';
import { TranslationService } from 'assets/i18n/translation.service';
import { ThemeSwitcherType } from 'assets/styles/themes/_base.model';
import { PrimeNGConfig } from 'primeng/api';
import { Aura } from 'primeng/themes/aura';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [MainLayoutComponent, CommonModule, RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
	public isAuthenticated = true;
	private themeSwitcherService = inject(ThemeSwitcherService);
	private _translationService = inject(TranslationService);
	private _config = inject(PrimeNGConfig);

	constructor() {
		this._config.theme.set({ preset: Aura });
	}

	async ngOnInit(): Promise<void> {
		this._translationService.setTranslationLanguage(Languages.SPANISH);
		this.themeSwitcherService.setTheme(ThemeSwitcherType.LIGHT);
	}
}
