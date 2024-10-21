import { inject, Injectable } from '@angular/core';
import { BasePaginatorResponse } from '@data-access/_entities/base-paginator-response';
import { Observable } from 'rxjs';
import { IUserModel } from '../domain/users.model';
import { IUsersApiService } from '../infrastructure/users-api.interface';
import { HTTP_USERS_SERVICE } from '../infrastructure/users-api.provider';

@Injectable({
	providedIn: 'root'
})
export class UsersService {
	private _usersApiService = inject<IUsersApiService>(HTTP_USERS_SERVICE);

	getUsers(): Observable<BasePaginatorResponse<IUserModel>> {
		return this._usersApiService.getUsers();
	}
}
