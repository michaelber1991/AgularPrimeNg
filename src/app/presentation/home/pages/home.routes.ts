import type { Routes } from '@angular/router';
import { roleGuard } from '@core/guards/role.guard';

export const routes: Routes = [
	{
		path: '',
		canActivate: [roleGuard],
		data: { roles: ['Admin'] },
		loadComponent: () => import('./home.component').then((c) => c.HomeComponent)
	}
];
