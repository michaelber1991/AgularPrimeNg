import type { BasePaginatorRequest, BasePaginatorResponse } from '@data-access/_entities/base-paginator-response';
import type { Observable } from 'rxjs';
import type { IUserEntity } from './entities/users.entity';

export abstract class IUsersApiService {
	abstract getUsers(basePaginatorRequest: BasePaginatorRequest): Observable<BasePaginatorResponse<IUserEntity>>;
	abstract createUsers(): Observable<BasePaginatorResponse<IUserEntity>>;
}
