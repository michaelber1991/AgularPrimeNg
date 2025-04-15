import type { BasePaginatorRequest, BasePaginatorResponse } from '@data-access/_entities/base-paginator-response';
import type { Observable } from 'rxjs';
import type { IAuthEntity } from '../domain/auth.entity';

export abstract class IAuthApiService {
	abstract getAuth(basePaginatorRequest: BasePaginatorRequest): Observable<BasePaginatorResponse<IAuthEntity>>;
	abstract credentialsLogin(username: string, password: string): Observable<{ token: string }>;
}
