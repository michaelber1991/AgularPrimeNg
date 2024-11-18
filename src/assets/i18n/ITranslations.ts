export enum TranslationsRoot {
	ROOT = 'root'
}

export interface ITranslations {
	home: string;
	continue: string;
	configuration: string;
	select: string;
	language: string;
	user?: {
		avatar: string;
		name: string;
		lastName: string;
		email: string;
		password: string;
	};
}
