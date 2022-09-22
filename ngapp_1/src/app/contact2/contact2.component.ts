import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact2',
  templateUrl: './contact2.component.html',
  styleUrls: ['./contact2.component.css']
})
export class Contact2Component implements OnInit,AfterViewInit {
  userNotallowed :boolean= false;

  reactiveform: FormGroup;

  user_Nallowed = ['john@gmail.com', 'arjun@gmail.com'];

  @ViewChild('s1') style1 : ElementRef;

  




  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {

    

    this.reactiveform = new FormGroup({

      'user_detail': new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email, this.nallowed_names.bind(this)]),
        'password': new FormControl(null, Validators.required)


      })

    })
  }

  onsubmit() {
    console.log(this.reactiveform);
  }

  nallowed_names(form_value: FormControl) {
    if (this.user_Nallowed.indexOf(form_value.value) !== -1) {
      return {
        'user_valid':true
      }
        
      

    }
    else return false;
  }


  ngAfterViewInit(): void {
    console.log(this.style1);
    // this.renderer.setStyle(this.style1.nativeElement,'color', 'white');
    // this.renderer.setStyle(this.style1.nativeElement,'backgroundColor', 'cyan');

    // this.renderer.setStyle(this.style1.nativeElement,'padding', '5px');



    


  
    
    
  }


}
