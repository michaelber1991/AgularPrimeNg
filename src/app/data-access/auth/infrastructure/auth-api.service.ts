import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import type { BasePaginatorRequest, BasePaginatorResponse } from '@data-access/_entities/base-paginator-response';
import { environment } from 'environments/environment.development';
import { type Observable, map } from 'rxjs';
import type { IAuthEntity, ICredentialsLogin } from '../domain/auth.entity';
import type { IAuthApiService } from './auth-api.interface';

@Injectable({
	providedIn: 'root'
})
export class AuthApiService implements IAuthApiService {
	private _httpClient = inject(HttpClient);
	private readonly URL_BASE_AUTH = `${environment.BASE_AUTH_API_URL}/Auth`;
	getAuth(basePaginatorRequest: BasePaginatorRequest): Observable<BasePaginatorResponse<IAuthEntity>> {
		const params = new HttpParams()
			.set('page', basePaginatorRequest.page.toString())
			.set('per_page', basePaginatorRequest.per_page.toString());
		return this._httpClient
			.get<BasePaginatorResponse<IAuthEntity>>(this.URL_BASE_AUTH, { params })
			.pipe(map((response) => response));
	}

	credentialsLogin(username: string, password: string): Observable<ICredentialsLogin> {
		return this._httpClient
			.post<ICredentialsLogin>(`${this.URL_BASE_AUTH}/credentials/login`, {
				username,
				password
			})
			.pipe(map((response) => response));
	}
}
