import { Component, computed, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { UsersService } from '@data-access/users/application/users.service';
import { IUserModel } from '@data-access/users/domain/users.model';
import { AvatarComponentModel, AvatarShape } from '@shared/components/avatar/avatar.component';
import { FormPropertiesModel } from '@shared/components/forms/_models/base-form';
import { InputTextComponentModel } from '@shared/components/forms/input/input.component';
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

enum FormControls {
	FIRST_NAME = 'first_name'
}

@Component({
	selector: 'app-home',
	imports: [PrimeTableComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
	public tableInput!: WritableSignal<PrimeTable<IUserModel>>;

	private _usersService = inject(UsersService);
	public _translationService = inject(TranslationService);

	ngOnInit(): void {
		this.tableInput = this.setTableInput();
	}

	private setTableInput(): WritableSignal<PrimeTable<IUserModel>> {
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

	private setTableColumns(): PrimeTableColumn[] {
		return [
			new PrimeTableColumn({
				property: 'avatar',
				header: computed(() =>
					StringFormatter.capitalizeFirstLetter(this._translationService.translationBook().user?.avatar)
				),
				isFrozen: true,
				type: new PrimeTableColumnType<AvatarComponentModel>({
					type: PrimeTableColumnTypes.AVATAR,
					input: new AvatarComponentModel({
						width: '70px',
						height: '70px',
						shape: AvatarShape.SQUARE,
						onClick: (): void => {
							this.tableInput.update(() => {
								return {
									...this.tableInput(),
									editMode: !this.tableInput().editMode
								};
							});
						}
					})
				})
			}),

			new PrimeTableColumn({
				property: 'first_name',
				header: computed(() =>
					StringFormatter.capitalizeFirstLetter(this._translationService.translationBook().user?.name)
				),
				isFrozen: false,
				type: new PrimeTableColumnType<InputTextComponentModel>({
					type: PrimeTableColumnTypes.INPUT,
					input: new InputTextComponentModel({
						label: computed(() => ``),
						formProperties: new FormPropertiesModel({
							form: new FormGroup({}),
							formControl: FormControls.FIRST_NAME,
							validators: [Validators.required]
						})
					})
				})
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
