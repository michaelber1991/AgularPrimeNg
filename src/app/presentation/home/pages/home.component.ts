import { Component, inject, Signal, signal } from '@angular/core';
import { UsersService } from '@data-access/users/application/users.service';
import { IUserResponse } from '@data-access/users/domain/users.model';
import { PrimeTableComponent } from '@shared/components/prime-table/prime-table.component';
import { PrimeTable, PrimeTableColumn } from '@shared/components/prime-table/prime-table.component.model';
import { firstValueFrom } from 'rxjs';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [PrimeTableComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent {
	public tableInput = this.setTableInput();
	private _usersService = inject(UsersService);

	private setTableInput(): Signal<PrimeTable<IUserResponse>> {
		return signal<PrimeTable<IUserResponse>>(
			new PrimeTable<IUserResponse>({
				title: 'Users',
				columns: [
					new PrimeTableColumn({ property: 'avatar', header: 'Avatar', isFrozen: true }),
					new PrimeTableColumn({ property: 'first_name', header: 'First Name', isFrozen: false }),
					new PrimeTableColumn({ property: 'last_name', header: 'Last Name', isFrozen: false }),
					new PrimeTableColumn({ property: 'email', header: 'Email', isFrozen: false })
				],
				onLazyload: async (): Promise<void> => {
					const users = await firstValueFrom(this._usersService.getUsers());
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
