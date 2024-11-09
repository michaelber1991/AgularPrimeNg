import { Component, computed, inject, OnInit, Signal, signal } from '@angular/core';
import { UsersService } from '@data-access/users/application/users.service';
import { IUserModel } from '@data-access/users/domain/users.model';
import { AvatarComponentModel, AvatarShape } from '@shared/components/avatar/avatar.component';
import { PrimeTableComponent } from '@shared/components/prime-table/prime-table.component';
import {
	PrimeTable,
	PrimeTableColumn,
	PrimeTableColumnType,
	PrimeTableColumnTypes,
	PrimeTableSelectionMode
} from '@shared/components/prime-table/prime-table.component.model';
import { StringFormatter } from '@shared/utils/string-formater';
import { TranslationService } from 'assets/i18n/translation.service';
import { firstValueFrom } from 'rxjs';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [PrimeTableComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
	public tableInput!: Signal<PrimeTable<IUserModel>>;

	private _usersService = inject(UsersService);
	public _translationService = inject(TranslationService);

	ngOnInit(): void {
		this.tableInput = this.setTableInput();
	}

	private setTableInput(): Signal<PrimeTable<IUserModel>> {
		return signal<PrimeTable<IUserModel>>(
			new PrimeTable<IUserModel>({
				title: 'Users ',
				columns: this.setTableColumns(),
				rowsPerPageOptions: [10, 20, 50],
				dataKey: 'email',
				selectionMode: PrimeTableSelectionMode.Multiple,
				onLazyload: async ({ first, rows }): Promise<void> => {
					const users = await firstValueFrom(
						this._usersService.getUsers({ page: first && rows ? first / rows + 1 : 1, per_page: rows ? rows : 10 })
					);
					this.tableInput().values.update(() => {
						return {
							data: users.data,
							totalRecords: users.total
						};
					});
				}
			})
		);
	}

	private setTableColumns(): PrimeTableColumn<unknown>[] {
		return [
			new PrimeTableColumn<AvatarComponentModel>({
				property: 'avatar',
				header: computed(() =>
					StringFormatter.capitalizeFirstLetter(this._translationService.translationBook().user?.avatar)
				),
				isFrozen: true,
				type: new PrimeTableColumnType({
					type: PrimeTableColumnTypes.AVATAR,
					input: new AvatarComponentModel({
						width: '70px',
						height: '70px',
						shape: AvatarShape.SQUARE,
						onClick: (): void => {}
					})
				})
			}),
			new PrimeTableColumn({
				property: 'first_name',
				header: computed(() =>
					StringFormatter.capitalizeFirstLetter(this._translationService.translationBook().user?.name)
				),
				isFrozen: false
			}),
			new PrimeTableColumn({
				property: 'last_name',
				header: computed(() =>
					StringFormatter.capitalizeFirstLetter(this._translationService.translationBook().user?.lastName)
				),
				isFrozen: false
			}),
			new PrimeTableColumn({
				property: 'email',
				header: computed(() =>
					StringFormatter.capitalizeFirstLetter(this._translationService.translationBook().user?.email)
				),
				isFrozen: false
			})
		];
	}
}
