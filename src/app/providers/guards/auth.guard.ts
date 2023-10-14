import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // const authSvc = inject(AuthService)
  // const router  = inject(Router)

  // if (authSvc.access_token !== '') return true

  // router.navigate(['/login'], { queryParams: { returnUrl: state.url } })
  // return false
  return true
};
