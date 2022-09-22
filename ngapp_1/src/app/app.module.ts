import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';





import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router'; 




// import { ServiceComponent } from './Angular_Topics/service/service.component';
// import { DesignUtiltyService } from './design-utilty.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { Contact2Component } from './contact2/contact2.component';


const routes: Routes = [
  {
    path:"" , component:HomeComponent, pathMatch:"full"

  },
  {
    path:"about" , component:AboutComponent

  },
  {
    path:"contact" , component:ContactComponent

  },
  {
    path:"contact2" , component:Contact2Component

  },
  {
    path:"**", component:PageNotFoundComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    HomeComponent,
    Contact2Component,  
    
   


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes) ,
    FormsModule,
    ReactiveFormsModule
 
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
