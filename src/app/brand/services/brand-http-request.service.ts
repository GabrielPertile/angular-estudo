import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environment';
import { Observable } from 'rxjs';

@Injectable()
export class BrandHttpRequestService {
  private uri = '/api/admin/brands';
  constructor(private _http: HttpClient) { }

  public index(filter: any): Observable<any> {
    return this._http.get(environment.apiUrl + this.uri, {
      params: {
        filter: JSON.stringify(filter)
      }
    });
  }

  public getById(id: number): Observable<any> {
    return this._http.get(environment.apiUrl + this.uri + "/" + id);
  }

  deleteById(id: number): Observable<any> {
    return this._http.delete(environment.apiUrl + this.uri + "/" + id);
  }
}
