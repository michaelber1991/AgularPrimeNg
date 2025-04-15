import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { type ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { AUTH_API_PROVIDER } from '@data-access/auth/infrastructure/auth-api.provider';
import { USERS_API_PROVIDER } from '@data-access/users/infrastructure/users-api.provider';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';

export const HttpLoaderFactory = (http: HttpClient): TranslateHttpLoader => {
	return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
};

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideClientHydration(),
		provideAnimations(),
		provideHttpClient(withFetch()),
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		}).providers ?? [],
		USERS_API_PROVIDER,
		AUTH_API_PROVIDER,
		provideZoneChangeDetection({ eventCoalescing: true }),
		providePrimeNG({
			theme: {
				preset: Aura
			}
		})
	]
};
