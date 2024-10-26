import { Component, inject, Signal, signal } from '@angular/core';
import { UsersService } from '@data-access/users/application/users.service';
import { IUserModel } from '@data-access/users/domain/users.model';
import { ButtonComponent, ButtonComponentModel } from '@shared/components/forms/button/button.component';
import { PrimeTableComponent } from '@shared/components/prime-table/prime-table.component';
import { PrimeTable, PrimeTableColumn } from '@shared/components/prime-table/prime-table.component.model';
import { HomeIconComponent } from '@shared/icons/home-icon.component';
import { firstValueFrom } from 'rxjs';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [PrimeTableComponent, ButtonComponent, HomeIconComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent {
	public tableInput = this.setTableInput();
	public formItems = {
		button: signal<ButtonComponentModel>(new ButtonComponentModel({ label: 'Continue' }))
	};

	private _usersService = inject(UsersService);
	private setTableInput(): Signal<PrimeTable<IUserModel>> {
		return signal<PrimeTable<IUserModel>>(
			new PrimeTable<IUserModel>({
				title: 'Users',
				columns: [
					new PrimeTableColumn({ property: 'avatar', header: 'Avatar', isFrozen: true }),
					new PrimeTableColumn({ property: 'first_name', header: 'First Name', isFrozen: false }),
					new PrimeTableColumn({ property: 'last_name', header: 'Last Name', isFrozen: false }),
					new PrimeTableColumn({ property: 'email', header: 'Email', isFrozen: false })
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
