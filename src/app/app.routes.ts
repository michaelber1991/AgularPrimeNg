import { Routes } from '@angular/router';
import { AppRoutes } from '@shared/routes/routes';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: AppRoutes.HOME,
		loadChildren: () => import('./presentation/home/pages/home.routes').then((c) => c.routes)
	}
];
