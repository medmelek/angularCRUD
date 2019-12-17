import { Auth } from './../models/auth';
import { TodoItem } from '../models/todo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  apiurl = 'http://localhost:8080/auth';
  apiurl2= 'https://jsonplaceholder.typicode.com/todos/1'
  body = {
    username : "admin",
    password : "admin"
  };
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private httpClient: HttpClient) { }

  getItem(): Observable<HttpResponse<Auth>> {
    return this.httpClient.post<Auth>(this.apiurl,this.body,
      {headers:new HttpHeaders().set(  'Content-Type' ,  'application/json'),
    observe: 'response'});

}

}

/*
  getItem(): Observable<HttpResponse<TodoItem>> {
    return (this.httpClient.get<TodoItem>(
      this.apiurl,
      { observe: 'response' }));
  }
  
  */


/*
queryPost(body: string, req?: any) : any {

    const options = createRequestOption(req);
    return  this.http.post<ISubscriber[]>(this.searchUrl, body,
            {
                headers : new HttpHeaders({"Content-Type": "application/json"}),
                params: options,
                observe: 'response'
            });
}
*/