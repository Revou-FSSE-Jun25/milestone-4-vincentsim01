import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class OwnershipGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const params = request.params; // e.g., { id: '3' }
    console.log('params here:', params.id);
    const user = request.user; // from JwtAuthGuard
    console.log('OwnershipGuard request.user:', user.id);


    if (!user) return false; // client not authenticated

    // If the user is requesting their own resource, allow
    if (Number(user.id) === Number(params.id)) {
      request.skipRolesCheck = true; // optional: tells RolesGuard to skip
      console.log("role is skipped");
      return true;
    }

    // Otherwise, allow RolesGuard to check admin role
    return true;
  }
}