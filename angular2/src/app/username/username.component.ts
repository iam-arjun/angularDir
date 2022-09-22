import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MyserviceService } from '../appService/myservice.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  spinner_status: boolean = false;
  edit_status: boolean = false;
 public  edit_index:number;
  @ViewChild('input_user') edit_name: ElementRef;

  user_array = [];
  searchValue: any = '';

  selected_product: string;
  infoArr = [
    
  ]

  constructor(private data_service: MyserviceService) { }

  ngOnInit() {
    this.fetch_user();




  }




  add_user(user) {
 
    if(this.edit_status){
      this.infoArr[this.edit_index].firstname = this.edit_name.nativeElement.value;
      this.save_info();
      
    }
    else{
      if (user.value != '') {
        this.user_array.push(user.value);
      }
      else return null
  
      this.infoArr.push({
        sno: (this.infoArr.length + 1) + 1,
        firstname: user.value,
        lastname: 'lastname',
        phonenum: '5454454545'
      })
    }




  }
  edit_user(index: number) {
    this.edit_index = index;
    this.edit_name.nativeElement.value = this.infoArr[index].firstname;
    this.edit_status = true;
    





  }

  display(prod) {
    this.selected_product = prod.target.value;

  }
  save_info() {

    this.data_service.onsaveUser(this.infoArr).subscribe(res => {
      console.log(res),
        error => {
          console.log(error);
        }


    });
    alert('your data is saved ')

  }

  fetch_user() {
    this.spinner_status = true;

    this.data_service.onfetchUser().subscribe(res => {
      console.log(res);
      const user_data = JSON.stringify(res);
      this.infoArr = JSON.parse(user_data);
      this.spinner_status = false;


    })

  }

  dlt_user(index:number){
    this.infoArr.splice(index,1);


  }

  // remove(index) {
  //   this.user_array.splice(index, 1);
  //   // this.infoArr = this.user_array;
  //   this.infoArr.pop();
  // }

}


