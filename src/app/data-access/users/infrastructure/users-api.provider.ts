import { InjectionToken, Provider } from '@angular/core';
import { IUsersApiService } from './users-api.interface';
import { UsersApiService } from './users-api.service';

export const HTTP_USERS_SERVICE = new InjectionToken<IUsersApiService>('UsersApiService');

export const USERS_API_PROVIDER: Provider = { provide: HTTP_USERS_SERVICE, useClass: UsersApiService };
