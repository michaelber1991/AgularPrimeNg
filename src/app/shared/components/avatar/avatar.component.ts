import { Component, input } from '@angular/core';

export class AvatarComponentModel {
	src: string;
	width: string;
	height: string;
	shape: AvatarShape;
	onClick: () => void;

	constructor(data: Partial<AvatarComponentModel>) {
		this.src = data.src || '';
		this.width = data.width || '50px';
		this.height = data.height || '50px';
		this.shape = data.shape || AvatarShape.CIRCLE;
		this.onClick = data.onClick || ((): void => {});
	}
}

export enum AvatarShape {
	CIRCLE = 'circle',
	SQUARE = 'square'
}

@Component({
	selector: 'app-avatar',
	imports: [],
	templateUrl: './avatar.component.html',
	styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
	public input = input<AvatarComponentModel>(new AvatarComponentModel({}));

	onClick(event: MouseEvent): void {
		event.stopPropagation();
		this.input().onClick();
	}
}
