import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { USERS_API_PROVIDER } from '@data-access/users/infrastructure/users-api.provider';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';

export const HttpLoaderFactory = (http: HttpClient): TranslateHttpLoader => {
	return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
};

// const keycloakProvider = (): EnvironmentProviders => {
// 	const keycloakConfig: ProvideKeycloakOptions = {
// 		config: {
// 			url: 'http://localhost:8080',
// 			realm: 'EC',
// 			clientId: 'EC_Admin'
// 		},
// 		initOptions: {
// 			onLoad: 'login-required',
// 			flow: 'standard',
// 			silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
// 			checkLoginIframe: false
// 		}
// 	};
// 	return provideKeycloak(keycloakConfig);
// };

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideClientHydration(),
		provideAnimations(),
		provideHttpClient(withFetch()),
		// keycloakProvider(),
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		}).providers!,
		USERS_API_PROVIDER,
		provideZoneChangeDetection({ eventCoalescing: true }),
		providePrimeNG({
			theme: {
				preset: Aura
			}
		})
	]
};
