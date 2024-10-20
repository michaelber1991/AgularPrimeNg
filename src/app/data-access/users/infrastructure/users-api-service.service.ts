import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BasePaginatorResponse } from 'app/data-access/_entities/base-paginator-response';
import { environment } from 'environments/environment.development';
import { map, Observable } from 'rxjs';
import { IUserApiResponse } from './entities/users';

@Injectable({
	providedIn: 'root'
})
export class UsersApiService {
	private _httpClient = inject(HttpClient);
	private readonly URL_BASE_USERS = environment.BASE_API_URL + '/users';

	getUsers(): Observable<BasePaginatorResponse<IUserApiResponse>> {
		return this._httpClient
			.get<BasePaginatorResponse<IUserApiResponse>>(this.URL_BASE_USERS)
			.pipe(map((response) => response));
	}
}
