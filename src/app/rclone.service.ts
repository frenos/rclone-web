import { UserconfigService } from './userconfig.service';
import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { RcloneStatus } from './rclone-status';
import { RcloneTransfer } from './rclone-transfer';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RcloneService {

  constructor(private http: HttpClient, private userconfigService: UserconfigService ) {

  }

  getStatus(): Observable<any> {
    const baseUrl = this.userconfigService.getValue('rcloneUrl');
    const rcloneUrl = baseUrl + 'core/stats';
    const body = {};
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post<RcloneStatus>(rcloneUrl, body, {headers: headers})
    .pipe(
      catchError(this.handleError('getStatus', []))
    );
  }

  setBwlimt(newlimit: string): Observable<any> {
    console.log('Service bwlimit');
    const baseUrl = this.userconfigService.getValue('rcloneUrl');
    const rcloneUrl = baseUrl + 'core/bwlimit';
    const body = {
      'rate': newlimit
    };
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.post<any>(rcloneUrl, body, {headers: headers})
    .pipe(
      catchError(this.handleError('setBwlimit', []))
    );
  }

      /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
  castRcloneResponse2Obj(inputjson): RcloneStatus {
    return Object.assign(new RcloneStatus(), inputjson);
  }
}
