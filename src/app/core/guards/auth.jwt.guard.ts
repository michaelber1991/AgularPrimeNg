import { inject } from '@angular/core';
import { type CanActivateFn, Router } from '@angular/router';
import { AppRoutes } from '@core/routes/routes';
import { AuthorizationService } from '@shared/services/auth.service';

export const authJwtGuard: CanActivateFn = (route, state) => {
	const _authService = inject(AuthorizationService);
	const router = inject(Router);

	if (!_authService.isLoggedIn()) {
		router.navigate([AppRoutes.LOGIN]);
		return false;
	}

	return true;
};
