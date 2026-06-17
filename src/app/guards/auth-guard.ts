import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const localData = localStorage.getItem('LoggedUserId'); // could use session storage
  //alert('LocalData=(' + localData + ')')
  // token

  //debugger
  if (localData == null) {
    //alert('LocalDataCheck=(' + localData + ')')
    router.navigateByUrl("/login")
    //debugger
    return false;
  } else {
    //debugger
    //router.navigateByUrl("/signal")
    return true;
  }
};
