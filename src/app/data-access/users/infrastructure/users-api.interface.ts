import { BasePaginatorRequest, BasePaginatorResponse } from '@data-access/_entities/base-paginator-response';
import { Observable } from 'rxjs';
import { IUserEntity } from './entities/users.entity';

export interface IUsersApiService {
	getUsers(basePaginatorRequest: BasePaginatorRequest): Observable<BasePaginatorResponse<IUserEntity>>;
}
