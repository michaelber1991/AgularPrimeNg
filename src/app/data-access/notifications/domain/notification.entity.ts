export interface INotificationEntity {
	readonly id: number;
	readonly email: string;
	readonly first_name: string;
	readonly last_name: string;
	readonly avatar: string;
}

export interface ICredentialsLogin {
	token: string;
}
