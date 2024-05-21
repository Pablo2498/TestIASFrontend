import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: any) => {
        let error = '';
        if (err.message instanceof ErrorEvent) {
          error = 'Ocurrio un error';
        }
        else {
          error = err.message;
        }

        return throwError(() => new Error(error));
      })
    );
  }
}
