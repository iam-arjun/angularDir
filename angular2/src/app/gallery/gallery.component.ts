import { Component, OnInit, ViewChild } from '@angular/core';
import { GalleryItems } from '../appModals/gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  
  gallery_I:any=[];



  constructor( private gall:GalleryItems) { }

  ngOnInit(): void {
    this.gallery_I  = this.gall.gallerys;
   
    
  }
  other_status(){
    
  }


}
