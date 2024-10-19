import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: 'home',
		loadChildren: () => import('./modules/home/presentation/pages/home.routes').then((c) => c.routes)
	}
];
