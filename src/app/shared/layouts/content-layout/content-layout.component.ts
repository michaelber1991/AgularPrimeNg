import { Component } from '@angular/core';

@Component({
	selector: 'app-content-layout',
	imports: [],
	template: `<div class="content-layout-container">
		<ng-content></ng-content>
	</div>`,
	styleUrl: './content-layout.component.scss'
})
export class ContentLayoutComponent {}
