import { Injectable, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { PermissionsMap } from '@core/permissions/_permissions-map';
import { AppRoutes } from '@core/routes/routes';

interface DecodedToken {
	exp: number;
	roles: string[];
	[key: string]: unknown;
}

@Injectable({
	providedIn: 'root'
})
export class AuthorizationService {
	private tokenKey = 'auth_token';
	private userRoles = signal<string[]>([]);
	private _router = inject(Router);

	constructor() {
		const token = this.getToken();
		if (token) {
			const payload = this.decodeToken(token);
			this.userRoles.set(payload?.roles || []);
		}
	}

	login(token: string): void {
		localStorage.setItem(this.tokenKey, token);
		document.cookie = `access_token=${token}; path=/; secure; samesite=None`;
		const payload = this.decodeToken(token);
		this.userRoles.set(payload?.roles || []);
	}

	logout(): void {
		localStorage.removeItem(this.tokenKey);
		document.cookie = 'access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; secure; samesite=None';
		this.userRoles.set([]);
		this._router.navigate([AppRoutes.LOGIN]);
	}

	getToken(): string | null {
		return localStorage.getItem(this.tokenKey);
	}

	isLoggedIn(): boolean | null {
		const token = this.getToken();
		if (!token) return false;

		const payload = this.decodeToken(token);
		return payload && payload.exp * 1000 > Date.now();
	}

	getUser(): unknown {
		const token = this.getToken();
		return token ? this.decodeToken(token) : null;
	}

	getRoles(): string[] {
		return this.userRoles();
	}

	hasRole(role: string): boolean {
		return this.userRoles().includes(role);
	}

	canAccess<T extends keyof typeof PermissionsMap, A extends keyof (typeof PermissionsMap)[T]>(scope: T, action: A) {
		return computed(() => {
			const requiredRoles = PermissionsMap[scope][action] as readonly string[];
			return requiredRoles.some((role) => this.userRoles().includes(role));
		});
	}

	private decodeToken(token: string): DecodedToken | null {
		try {
			const payload = token.split('.')[1];
			return JSON.parse(atob(payload));
		} catch (e) {
			return null;
		}
	}
}
