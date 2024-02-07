import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor( private _http: HttpClient) { }

  getInfo(): Observable<any>{
    const url:String = "http://localhost:8080/value";
    return this._http.get("http://localhost:8080/value");
  }

  postDate(data : any):Observable<any>{

    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post("http://localhost:7070/submit", data, {headers});
  }
}
