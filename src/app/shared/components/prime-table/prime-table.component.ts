import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { PrimeTableColumnType } from '@shared/components/prime-table/prime-table.component.model';
import { CardLayoutComponent } from '@shared/layouts/card-layout/card-layout.component';
import { TableModule } from 'primeng/table';
import { AvatarComponent, AvatarComponentModel } from '../avatar/avatar.component';
import { PrimeTable } from './prime-table.component.model';

@Component({
	selector: 'app-prime-table',
	standalone: true,
	imports: [TableModule, CardLayoutComponent, CommonModule, AvatarComponent],
	templateUrl: './prime-table.component.html',
	styleUrl: './prime-table.component.scss'
})
export class PrimeTableComponent {
	public input = input(new PrimeTable({}));

	public setAvatarColumnType(
		src: string,
		avatarColumnType: PrimeTableColumnType<AvatarComponentModel>
	): AvatarComponentModel {
		avatarColumnType.input.src = src;
		return avatarColumnType.input as AvatarComponentModel;
	}
}
