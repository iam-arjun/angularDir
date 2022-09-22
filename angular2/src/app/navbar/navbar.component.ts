import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../appService/myservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
gallery_status:boolean = true;
gallery_item_status:boolean = false;
home_status:boolean = true;
products_status:boolean = true;
user_status:boolean  = true;


  constructor(private _gallery_status:MyserviceService) { 
    this._gallery_status.gallery_status.subscribe(res=>{
      this.gallery_item_status = res
    })
    this._gallery_status.home_status.subscribe(res=>{
      this.home_status = res;
    })
    this._gallery_status.products_status.subscribe(res=>{
      this.products_status = res;
    })
    this._gallery_status.user_status.subscribe(res=>{
      this.user_status = res;
    })
    this._gallery_status.gallery_parent_status.subscribe(res=>{
      this.gallery_status = res;
    })

    
  }

  ngOnInit(): void {
   
  }





}

