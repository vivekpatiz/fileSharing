import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  httpParams = new HttpParams();

  constructor(private httpClient: HttpClient) { }

  public getEntityData(): Observable<any>{
    const val  = "https://reqres.in/api/users?page=2"
    return this.httpClient.get(val)
  }
}
