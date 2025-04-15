import { InjectionToken, type Provider } from '@angular/core';
import type { IAuthApiService } from './auth-api.interface';
import { AuthApiService } from './auth-api.service';

export const HTTP_AUTH_SERVICE = new InjectionToken<IAuthApiService>('AuthApiService');

export const AUTH_API_PROVIDER: Provider = { provide: HTTP_AUTH_SERVICE, useClass: AuthApiService };
