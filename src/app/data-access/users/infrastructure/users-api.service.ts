import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import type { BasePaginatorRequest, BasePaginatorResponse } from '@data-access/_entities/base-paginator-response';
import { environment } from 'environments/environment.development';
import { type Observable, map } from 'rxjs';
import type { IUserEntity } from './entities/users.entity';
import type { IUsersApiService } from './users-api.interface';

@Injectable({
	providedIn: 'root'
})
export class UsersApiService implements IUsersApiService {
	private _httpClient = inject(HttpClient);
	private readonly URL_BASE_USERS = `${environment.BASE_GATEWAY_API_URL}/users`;
	getUsers(basePaginatorRequest: BasePaginatorRequest): Observable<BasePaginatorResponse<IUserEntity>> {
		const params = new HttpParams()
			.set('pageNumber', basePaginatorRequest.page.toString())
			.set('pageSize', basePaginatorRequest.per_page.toString());
		return this._httpClient
			.get<BasePaginatorResponse<IUserEntity>>(this.URL_BASE_USERS, { params })
			.pipe(map((response) => response));
	}
	createUsers(): Observable<BasePaginatorResponse<IUserEntity>> {
		return this._httpClient
			.post<BasePaginatorResponse<IUserEntity>>(this.URL_BASE_USERS, { name: 'michael9', email: 'michael9@gmail.com' })
			.pipe(map((response) => response));
	}
}
