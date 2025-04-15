import { Roles } from './_roles';

export enum UserPermissionsScopeEnum {
	users = 'users'
}
export enum UserPermissionsActionsEnum {
	view = 'view',
	create = 'create',
	edit = 'edit',
	delete = 'delete'
}

export const UserPermissions = {
	[UserPermissionsScopeEnum.users]: {
		[UserPermissionsActionsEnum.view]: [Roles.ADMIN, 'EDITOR'],
		[UserPermissionsActionsEnum.create]: [Roles.ADMIN],
		[UserPermissionsActionsEnum.edit]: [Roles.ADMIN, 'EDITOR'],
		[UserPermissionsActionsEnum.delete]: [Roles.ADMIN]
	}
} as const;
