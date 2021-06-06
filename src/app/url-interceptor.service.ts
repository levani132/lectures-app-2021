import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

export class UrlInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiedUrl = req.clone({
      url: 'https://bog-angular-course-api.herokuapp.com/lectures-api/' + req.url
    });
    return next.handle(modifiedUrl);
  }
}
