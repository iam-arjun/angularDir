import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { __param } from 'tslib';
import { GalleryItems } from '../appModals/gallery';
import { MyserviceService } from '../appService/myservice.service';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit,OnDestroy {
  img_items: any = []
  selected_img: any;
  img_id

  constructor(private _img_info: GalleryItems, private activated_route: ActivatedRoute, private gallery_st: MyserviceService) { }
 
  // here we have used the params observable from activated route module to get access of the id of particular img(i.e activated route img)
  ngOnInit(): void {
    this.activated_route.params.subscribe((myparams: Params) => {
      this.img_id = myparams['id'];
      console.log(this.img_id)
      this.selected_img = this._img_info.gallerys[this.img_id - 1];
      console.log(this.selected_img);
      this.gallery_st.gallery_status.next(true);
      
      this.gallery_st.home_status.next(false);
      this.gallery_st.user_status.next(false)
      this.gallery_st.products_status.next(false)
      this.gallery_st.gallery_parent_status.next(false);
      


    })



  }
  ngOnDestroy(): void {
    this.gallery_st.gallery_status.next(false);
    this.gallery_st.home_status.next(true);
    this.gallery_st.user_status.next(true)
    this.gallery_st.products_status.next(true)
    this.gallery_st.gallery_parent_status.next(true);
    

   
  }
  

}
