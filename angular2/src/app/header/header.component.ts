import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() myname: any;
  @Input() my_product: string = "";
  @Output() added_item = new EventEmitter<string>();

  




  constructor() { }

  ngOnInit(): void {
  }

  added_product() {


    this.added_item.emit(this.my_product);

  }

}
