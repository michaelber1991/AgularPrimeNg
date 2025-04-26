import { inject, Injectable } from '@angular/core';
import type { BasePaginatorRequest, BasePaginatorResponse } from '@data-access/_entities/base-paginator-response';
import type { Observable } from 'rxjs';
import type { IUserModel } from '../domain/users.model';
import type { IUsersApiService } from '../infrastructure/users-api.interface';
import { HTTP_USERS_SERVICE } from '../infrastructure/users-api.provider';

@Injectable({
	providedIn: 'root'
})
export class UsersService {
	private _usersApiService = inject<IUsersApiService>(HTTP_USERS_SERVICE);

	getUsers(basePaginatorRequest: BasePaginatorRequest): Observable<BasePaginatorResponse<IUserModel>> {
		return this._usersApiService.getUsers(basePaginatorRequest);
	}
	createUsers(): Observable<BasePaginatorResponse<IUserModel>> {
		return this._usersApiService.createUsers();
	}
}
