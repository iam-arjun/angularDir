import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsernameComponent } from './username/username.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomStyleDirective } from './custom_directive/custom-style.directive';
import { MystyleDirective } from './mystyle.directive';
import { CustomPipePipe } from './custom_pipe/custom-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItems } from './appModals/gallery';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'username', component: UsernameComponent
  },
  {
    path: 'products', component: ProductComponent
  },
  {
    path: 'gallery', component: GalleryComponent
  },
  {
    path: 'gallery/:id', component:GalleryItemComponent
  }

]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsernameComponent,
    NavbarComponent,
    ProductComponent,
    HomeComponent,
    CustomStyleDirective,
    MystyleDirective,
    CustomPipePipe,
    GalleryComponent,
    GalleryItemComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
    
    


  ],
  providers: [GalleryItems],
  bootstrap: [AppComponent]
})
export class AppModule { }
