import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

export class UrlInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, handler: HttpHandler) {
        const newReq = req.clone({ url: 'https://bog-angular-course-api.herokuapp.com/lectures-api/' + req.url });
        return handler.handle(newReq);
    }
}
