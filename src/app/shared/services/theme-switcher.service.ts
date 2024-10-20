import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ThemeSwitcher, ThemeSwitcherType } from 'assets/styles/themes/_base.model';
import { DarkTheme } from 'assets/styles/themes/Dark';
import { LightTheme } from 'assets/styles/themes/Light';

@Injectable({
	providedIn: 'root'
})
export class ThemeSwitcherService {
	public themes: ThemeSwitcher[] = [
		new ThemeSwitcher(ThemeSwitcherType.LIGHT, LightTheme),
		new ThemeSwitcher(ThemeSwitcherType.DARK, DarkTheme)
	];
	private platformId = inject(PLATFORM_ID);

	public setTheme(type: ThemeSwitcherType): void {
		if (isPlatformBrowser(this.platformId)) {
			const themeToSet = this.themes.find((theme) => theme.type === type);
			if (themeToSet) {
				let cssVariables = '';
				themeToSet.themeSwitcherItems.forEach((item) => {
					cssVariables += `${item.property}: ${item.value}; `;
				});
				document.documentElement.style.cssText += cssVariables;
			}
		}
	}
}
