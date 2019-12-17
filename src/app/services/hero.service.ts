import { TodoItem } from '../models/todo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  apiurl = 'https://jsonplaceholder.typicode.com/todos/1';

  constructor(private httpClient: HttpClient) { }

  getItem(): Observable<TodoItem> {
    return (this.httpClient.get<TodoItem>(this.apiurl,));
  }

}
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