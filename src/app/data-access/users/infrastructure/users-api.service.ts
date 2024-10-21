import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BasePaginatorResponse } from 'app/data-access/_entities/base-paginator-response';
import { environment } from 'environments/environment.development';
import { map, Observable } from 'rxjs';
import { IUserEntity } from './entities/users.entity';

@Injectable({
	providedIn: 'root'
})
export class UsersApiService {
	private _httpClient = inject(HttpClient);
	private readonly URL_BASE_USERS = environment.BASE_API_URL + '/users';

	getUsers(): Observable<BasePaginatorResponse<IUserEntity>> {
		const params = new HttpParams().set('page', '1').set('per_page', '10');
		return this._httpClient
			.get<BasePaginatorResponse<IUserEntity>>(this.URL_BASE_USERS, { params })
			.pipe(map((response) => response));
	}
}
