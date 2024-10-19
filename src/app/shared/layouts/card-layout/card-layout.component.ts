import { Component } from '@angular/core';

@Component({
	selector: 'app-card-layout',
	standalone: true,
	imports: [],
	template: `<div class="card-layout-container">
		<ng-content></ng-content>
	</div>`,
	styleUrl: './card-layout.component.scss'
})
export class CardLayoutComponent {}
