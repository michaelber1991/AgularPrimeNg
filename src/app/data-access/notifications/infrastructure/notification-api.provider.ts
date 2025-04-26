import { InjectionToken, type Provider } from '@angular/core';
import type { INotificationApiService } from './notification-api.interface';
import { NotificationApiService } from './notification-api.service';

export const HTTP_NOTIFICATION_SERVICE = new InjectionToken<INotificationApiService>('NotificationApiService');

export const NOTIFICATION_API_PROVIDER: Provider = {
	provide: HTTP_NOTIFICATION_SERVICE,
	useClass: NotificationApiService
};
