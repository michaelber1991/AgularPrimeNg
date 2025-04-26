import { Injectable, inject } from '@angular/core';

import type { INotificationApiService } from '../infrastructure/notification-api.interface';
import { HTTP_NOTIFICATION_SERVICE } from '../infrastructure/notification-api.provider';

@Injectable({
	providedIn: 'root'
})
export class NotificationService {
	private _notificationApiService = inject<INotificationApiService>(HTTP_NOTIFICATION_SERVICE);

	startConnection() {
		return this._notificationApiService.startConnection();
	}
	addUsersCreatedListener() {
		return this._notificationApiService.addUsersCreatedListener();
	}
}
