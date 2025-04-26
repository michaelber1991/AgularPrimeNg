export abstract class INotificationApiService {
	abstract startConnection(): void;
	abstract addUsersCreatedListener(): void;
}
