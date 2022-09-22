import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMystyle]'
})
export class MystyleDirective {

  constructor(private el:ElementRef,private renderer :Renderer2) { }

  @HostListener('click') myclick()
{
  alert('hi iam arjun');
}

@HostListener('mouseover') hover(){

  this.renderer.setStyle(this.el.nativeElement,'backgroundColor','darkcyan  ')

  
}

@HostListener('mouseout') mouseout(){

  this.renderer.setStyle(this.el.nativeElement,'backgroundColor','white')

  
}


}
