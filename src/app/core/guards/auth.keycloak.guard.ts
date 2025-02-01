import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthGuardData, createAuthGuard } from 'keycloak-angular';

export const isAccessAllowed = async (
	route: ActivatedRouteSnapshot,
	_: RouterStateSnapshot,
	authData: AuthGuardData
): Promise<boolean | UrlTree> => {
	const { authenticated, grantedRoles } = authData;

	const requiredRole = route.data['role'];
	if (!requiredRole) {
		return false;
	}

	const hasRequiredRole = (rolesAllowed: string[]): boolean =>
		Object.values(grantedRoles.resourceRoles).some((roles) => roles.some((role) => rolesAllowed.includes(role)));

	if (authenticated && hasRequiredRole(requiredRole)) {
		return true;
	}

	const router = inject(Router);
	return router.parseUrl('/forbidden');
};

export const canActivateKeyCloakAuthRole = createAuthGuard<CanActivateFn>(isAccessAllowed);
