import { Injectable, inject } from '@angular/core';
import type { BasePaginatorRequest, BasePaginatorResponse } from '@data-access/_entities/base-paginator-response';

import type { Observable } from 'rxjs';
import type { IAuthEntity, ICredentialsLogin } from '../domain/auth.entity';
import type { IAuthApiService } from '../infrastructure/auth-api.interface';
import { HTTP_AUTH_SERVICE } from '../infrastructure/auth-api.provider';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private _authApiService = inject<IAuthApiService>(HTTP_AUTH_SERVICE);

	getAuth(basePaginatorRequest: BasePaginatorRequest): Observable<BasePaginatorResponse<IAuthEntity>> {
		return this._authApiService.getAuth(basePaginatorRequest);
	}
	credentialsLogin(username: string, password: string): Observable<ICredentialsLogin> {
		return this._authApiService.credentialsLogin(username, password);
	}
}
