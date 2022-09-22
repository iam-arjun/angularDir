import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  mydata: any;

  constructor(private myservice: MyserviceService) { }

  ngOnInit(): void {

    this.myservice.getData().subscribe(response => {
      this.mydata = response
    }, (error) => {
      console.log(error);
    })



  }

}
