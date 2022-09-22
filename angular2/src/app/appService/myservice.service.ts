import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient ) { }

gallery_status = new BehaviorSubject(false);

home_status = new BehaviorSubject(true);
products_status  = new BehaviorSubject(true)

user_status = new BehaviorSubject(true);
gallery_parent_status = new BehaviorSubject(true);
url:string = 'https://arjundata-6f0c4-default-rtdb.firebaseio.com/user.json'

onsaveUser(user_detail:any[]){
  return this.http.put(this.url
  ,user_detail);
}
onfetchUser(){
  return this.http.get(this.url);

}




}
