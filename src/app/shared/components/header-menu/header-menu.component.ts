import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ButtonComponent, ButtonComponentModel } from '@shared/components/forms/button/button.component';
import { HomeIconComponent } from '@shared/icons/home-icon.component';

export class HeaderMenuComponentModel {
	public items?: ButtonComponentModel[];

	constructor(data: Partial<HeaderMenuComponentModel>) {
		Object.assign(this, data);
	}
}

@Component({
	selector: 'app-header-menu',
	standalone: true,
	imports: [CommonModule, ButtonComponent, HomeIconComponent],
	templateUrl: './header-menu.component.html',
	styleUrl: './header-menu.component.scss'
})
export class HeaderMenuComponent {
	public input = input<HeaderMenuComponentModel>(new HeaderMenuComponentModel({}));
}
