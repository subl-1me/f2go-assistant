import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Redirige al login si no está autenticado
  if (authService.isAuthenticated()) {
    return true;
  }

  return router.navigate(['/login']);
};
