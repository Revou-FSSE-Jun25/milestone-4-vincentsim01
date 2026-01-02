import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class OwnershipGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const client = request.client; // from JwtAuthGuard
    const params = request.params; // e.g., { id: '3' }

    if (!client) return false; // client not authenticated

    // If the user is requesting their own resource, allow
    if (client.clientId === Number(params.id)) {
      request.skipRolesCheck = true; // optional: tells RolesGuard to skip
      return true;
    }

    // Otherwise, allow RolesGuard to check admin role
    return true;
  }
}