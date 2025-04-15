import { inject } from '@angular/core';
import { type ActivatedRouteSnapshot, type CanActivateFn, Router, type RouterStateSnapshot } from '@angular/router';
import { AppRoutes } from '@core/routes/routes';
import { AuthorizationService } from '@shared/services/auth.service';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
	const _authService = inject(AuthorizationService);
	const router = inject(Router);

	const expectedRoles = route.data['roles'] as string[];

	if (!_authService.isLoggedIn()) {
		router.navigate([AppRoutes.LOGIN]);
		return false;
	}

	const userRoles = _authService.getRoles();

	const hasRole = expectedRoles.some((role) => userRoles.includes(role));

	if (!hasRole) {
		router.navigate([AppRoutes.LOGIN]);
		return false;
	}

	return true;
};
