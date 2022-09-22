import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  new_username: string = '';
  show_user : boolean;


  constructor(private _user_service: MyserviceService) {

  }

  // accessing the form values using viewchild()

@ViewChild('formdata') myform:NgForm; // Ngform is the directive here..

  ngOnInit(): void {
   
  }

  user_signup(uname) {

    this._user_service.user_data.next(uname.value);
    this._user_service.show_user.next(true);


  }

  // function for submitting the contact form
  form_submit(){
   console.log(this.myform);
  console.log(this.myform.value)


  }



}
