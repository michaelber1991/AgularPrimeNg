import { BasePaginatorResponse } from 'app/data-access/_entities/base-paginator-response';
import { Observable } from 'rxjs';
import { IUserApiResponse } from './entities/users.entity';

export interface IUsersApiService {
	getUsers(): Observable<BasePaginatorResponse<IUserApiResponse>>;
}
