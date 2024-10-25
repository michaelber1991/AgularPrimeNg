import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BasePaginatorRequest, BasePaginatorResponse } from '@data-access/_entities/base-paginator-response';
import { environment } from 'environments/environment.development';
import { map, Observable } from 'rxjs';
import { IUserEntity } from './entities/users.entity';

@Injectable({
	providedIn: 'root'
})
export class UsersApiService {
	private _httpClient = inject(HttpClient);
	private readonly URL_BASE_USERS = environment.BASE_API_URL + '/users';

	getUsers(basePaginatorRequest: BasePaginatorRequest): Observable<BasePaginatorResponse<IUserEntity>> {
		const params = new HttpParams()
			.set('page', basePaginatorRequest.page.toString())
			.set('per_page', basePaginatorRequest.per_page.toString());
		return this._httpClient
			.get<BasePaginatorResponse<IUserEntity>>(this.URL_BASE_USERS, { params })
			.pipe(map((response) => response));
	}
}
