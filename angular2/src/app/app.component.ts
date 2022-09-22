import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
   
  }
  title = 'angular2';

  ngAfterViewInit() {



  }
}
