import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [
        context.getHandler(),
        context.getClass(),
      ],
    );

    if (!requiredRoles) {
      return true; // no @Roles means open access
    }

    const req = context.switchToHttp().getRequest();

    // If a previous guard (e.g. OwnershipGuard) marked the request to skip
    // the roles check, allow the request.
    if (req && req.skipRolesCheck) {
      console.log('RolesGuard: skipping roles check due to ownership');
      return true;
    }

    const { user } = req;
    if (!user) return false;

    console.log('User role in guard:', user.role);
    return requiredRoles.includes(user.role);
  }
}