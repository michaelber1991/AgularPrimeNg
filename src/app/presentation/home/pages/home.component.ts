import { Component, computed, inject, OnInit, Signal, signal } from '@angular/core';
import { UsersService } from '@data-access/users/application/users.service';
import { IUserModel } from '@data-access/users/domain/users.model';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '@shared/components/forms/button/button.component';
import { PrimeTableComponent } from '@shared/components/prime-table/prime-table.component';
import { PrimeTable, PrimeTableColumn } from '@shared/components/prime-table/prime-table.component.model';
import { HomeIconComponent } from '@shared/icons/home-icon.component';
import { CapitalizeFirstPipe } from '@shared/pipes/capitalize-first.pipe';
import { StringFormatter } from '@shared/utils/string-formater';
import { TranslationService } from 'assets/i18n/translation.service';
import { firstValueFrom } from 'rxjs';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [PrimeTableComponent, ButtonComponent, HomeIconComponent, TranslateModule, CapitalizeFirstPipe],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
	public tableInput!: Signal<PrimeTable<IUserModel>>;

	private _usersService = inject(UsersService);
	private _translationService = inject(TranslationService);

	ngOnInit(): void {
		this.tableInput = this.setTableInput();
	}

	private setTableInput(): Signal<PrimeTable<IUserModel>> {
		return signal<PrimeTable<IUserModel>>(
			new PrimeTable<IUserModel>({
				title: 'Users ',
				columns: [
					new PrimeTableColumn({
						property: 'avatar',
						header: computed(() =>
							StringFormatter.capitalizeFirstLetter(this._translationService.translationBook().avatar)
						),
						isFrozen: true
					}),
					new PrimeTableColumn({
						property: 'first_name',
						header: computed(() =>
							StringFormatter.capitalizeFirstLetter(this._translationService.translationBook().name)
						),
						isFrozen: false
					}),
					new PrimeTableColumn({
						property: 'last_name',
						header: computed(() =>
							StringFormatter.capitalizeFirstLetter(this._translationService.translationBook().lastName)
						),
						isFrozen: false
					}),
					new PrimeTableColumn({
						property: 'email',
						header: computed(() =>
							StringFormatter.capitalizeFirstLetter(this._translationService.translationBook().email)
						),
						isFrozen: false
					})
				],
				rowsPerPageOptions: [3, 15, 50],
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
}
