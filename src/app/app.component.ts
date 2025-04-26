import { CommonModule } from '@angular/common';
import { Component, inject, type OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationService } from '@data-access/notifications/application/notification.service';
import { MainLayoutComponent } from '@shared/layouts/main-layout/main-layout.component';
import { ThemeSwitcherService } from '@shared/services/theme-switcher.service';
import { Languages } from 'assets/i18n/languages';
import { TranslationService } from 'assets/i18n/translation.service';
import { ThemeSwitcherType } from 'assets/styles/themes/_base.model';

@Component({
	selector: 'app-root',
	imports: [MainLayoutComponent, CommonModule, RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
	public isAuthenticated = true;
	private themeSwitcherService = inject(ThemeSwitcherService);
	private _translationService = inject(TranslationService);
	private _notificationService = inject(NotificationService);

	async ngOnInit(): Promise<void> {
		this._translationService.setTranslationLanguage(Languages.SPANISH);
		this.themeSwitcherService.setTheme(ThemeSwitcherType.LIGHT);
		this._notificationService.startConnection();
		this._notificationService.addUsersCreatedListener();
	}
}
