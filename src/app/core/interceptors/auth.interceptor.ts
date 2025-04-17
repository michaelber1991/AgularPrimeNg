import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthorizationService } from '@shared/services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
	const authService = inject(AuthorizationService);
	const token = authService.getToken();

	if (token) {
		const authReq = req.clone({
			setHeaders: {
				Authorization: `Bearer ${token}`
			}
		});
		return next(authReq);
	}

	return next(req);
};
