import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentLayoutComponent } from '@shared/layouts/content-layout/content-layout.component';
import { ThemeSwitcherService } from '@shared/services/theme-switcher.service';
import { ThemeSwitcherType } from 'assets/styles/themes/_base.model';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [ContentLayoutComponent, CommonModule, RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
	private themeSwitcherService = inject(ThemeSwitcherService);

	ngOnInit(): void {
		this.themeSwitcherService.setTheme(ThemeSwitcherType.LIGHT);
	}
}
