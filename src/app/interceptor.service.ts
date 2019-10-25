import { Injectable, Injector  } from '@angular/core';
import { AuthService} from '../app/auth/auth.service';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    const  authService = this.injector.get(AuthService);

    const tokenizedReq = req.clone({
      setHeaders: {
       Authorization: `Bearer ${authService.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
