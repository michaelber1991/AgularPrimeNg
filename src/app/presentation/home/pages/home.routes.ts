import type { Routes } from '@angular/router';
import { roleGuard } from '@core/guards/role.guard';
import { Roles } from '@core/permissions/_roles';

export const routes: Routes = [
	{
		path: '',
		canActivate: [roleGuard],
		data: { roles: [Roles.ADMIN] },
		loadComponent: () => import('./home.component').then((c) => c.HomeComponent)
	}
];
