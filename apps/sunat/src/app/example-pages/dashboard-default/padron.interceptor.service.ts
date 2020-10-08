import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { PadronService } from './padron.service';

@Injectable()
export class InterceptorService implements HttpInterceptor 
{
    private count = 0;

    constructor(private serv: PadronService) 
    {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
    {
        if (this.count === 0) {
            this.serv.setHttpProgressStatus(true);
        }

        this.count++;
        return next.handle(request).pipe(
            finalize(() => {
              this.count--;
              if (this.count === 0) {
                this.serv.setHttpProgressStatus(false);
              }
        }));
        // return next.handle(request).pipe(tap(
        //     event => {
        //         console.log(event);
        //         if (event.type === HttpEventType.DownloadProgress) 
        //         {
        //             this.serv.returnProgress(event.loaded/event.total);
        //         }
        //         // if (event.type === HttpEventType.Response) 
        //         // {
        //         //     console.log("Content downloaded completely");
        //         // }
        //         // if (event.type === HttpEventType.Sent) 
        //         // {
        //         //     console.log("Request sent");
        //         // }
        //     }))
    }
}