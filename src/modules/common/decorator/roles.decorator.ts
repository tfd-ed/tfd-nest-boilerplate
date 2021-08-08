import { SetMetadata } from '@nestjs/common';
import { AppRoles } from '../enum/roles.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: AppRoles[]) => SetMetadata(ROLES_KEY, roles);
