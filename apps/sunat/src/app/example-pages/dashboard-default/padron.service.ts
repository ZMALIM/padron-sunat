import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class PadronService 
{

    private progressSub=new BehaviorSubject(0);
    private httpLoading$ = new ReplaySubject<boolean>(1);

    /**
     * @description
     *
     * Constructor
     * @param {HttClient} httpClient
     */
    constructor(
        public httpClient: HttpClient
    ) 
    {
    }
    
    returnProgressObservable()
    {
        return this.progressSub.asObservable();
    }

    returnProgress(data)
    {
        this.progressSub.next(data);
    }

    httpProgress(): Observable<boolean> 
    {
        return this.httpLoading$.asObservable();
    }

    setHttpProgressStatus(inprogess: boolean) 
    {
        this.httpLoading$.next(inprogess);
    }

    /**
     * @description
     *
     * Download File of SUNAT
     */
    public download(): Observable<any> 
    {
        return this.httpClient.get<any>('api/v1/taxpayer/download', {
            reportProgress: true
        });
    }

    public extractZip(): Observable<any>
    {
        return this.httpClient.get<any>('api/v1/taxpayer/extract', {
            reportProgress: true
        });
    }

    public loadData(): Observable<any>
    {
        return this.httpClient.get<any>('api/v1/taxpayer/load', {
            reportProgress: true
        });
    }
}
