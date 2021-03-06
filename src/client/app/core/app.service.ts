import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  test(): Observable<{}> {
    return this.http.get<{}>('/api/test');
  }
}
