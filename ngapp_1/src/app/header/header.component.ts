import { Component, Input, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  show_user:boolean = true;
  show_contact:boolean = false;
  show_signup:boolean = true;
  new_username: string  = "";




 
 

 
  constructor(private _user_service: MyserviceService) {

    this._user_service.user_data.subscribe(res => {
      this.new_username = res;
      this.show_user = true;
      this.show_signup  = false;
     });
    //  this._user_service.show_user.subscribe(res=>{
    //   this.show_user = res;
    //  })
  }
 
  ngOnInit(): void {
  }




}
