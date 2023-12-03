import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apidata } from './model';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  code='nfroisck'
  constructor(private http:HttpClient) { }


  get():Observable<Array<apidata>>{
    
  return this.http.get<Array<apidata>>('https://jsonplaceholder.typicode.com/albums')
  }


}
