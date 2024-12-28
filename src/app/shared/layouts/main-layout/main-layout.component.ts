import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderMenuComponent } from '@shared/components/header-menu/header-menu.component';
import { ContentLayoutComponent } from '@shared/layouts/content-layout/content-layout.component';

@Component({
	selector: 'app-main-layout',
	imports: [HeaderMenuComponent, ContentLayoutComponent, RouterOutlet],
	template: `<div class="main-layout-container">
		<app-header-menu />
		<app-content-layout>
			<router-outlet></router-outlet>
		</app-content-layout>
	</div>`,
	styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {}
