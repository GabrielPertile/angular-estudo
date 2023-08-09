import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environment';

@Injectable()
export class BrandHttpRequestService {
  private uri = '/brands';
  constructor(private _http: HttpClient) { }

  public index() {
    return this._http.get(environment.apiUrl + this.uri);
  }
}
