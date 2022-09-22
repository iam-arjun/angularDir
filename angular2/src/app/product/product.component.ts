import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title = 'angular2';

  name = "arjun";

  product_name: string = "";

  status: boolean = false;

  product_added: string = '';

  display_added_product: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  add_product(product: string) {
    this.status = true;
    this.product_name = product;

  }

  parent_product(event: string) {
    // this.display_added_product = true;

    this.product_added = event;
    if (this.product_added != "") {
      this.display_added_product = true;
    }

  }



}
