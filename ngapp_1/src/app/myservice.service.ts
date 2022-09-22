import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private myhttp:HttpClient) { }


 private url = "https://jsonplaceholder.typicode.com/users";
  getData(){
   return this.myhttp.get(this.url); 
  }

  user_data = new Subject<any>();
  show_user = new Subject<any>();







}
