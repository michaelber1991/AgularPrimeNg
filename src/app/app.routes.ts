import { Routes } from '@angular/router';
import { AppRoutes } from '@core/routes/routes';

export const routes: Routes = [
	{ path: '', redirectTo: AppRoutes.LOGIN, pathMatch: 'full' },
	{
		path: AppRoutes.HOME,
		loadChildren: () => import('./presentation/home/pages/home.routes').then((c) => c.routes)
		// canActivate: [canActivateAuthRole],
		// data: { role: ['EC_ROLE1'] } Keycloak roles
	},
	{
		path: AppRoutes.LOGIN,
		loadChildren: () => import('./presentation/login/pages/login/login.routes').then((c) => c.routes)
	}
];
