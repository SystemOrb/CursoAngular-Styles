import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(public dom:ElementRef) {
      console.log('directiva llamada');
  }
  // Recibir parametro
  @Input('appDirective') colour:string;

  //EVENTO MOUSE LISTENER ALA ESCUCHA
  @HostListener('mouseenter') hoverIn()
  {
    this.texture(this.colour || 'red');
  }
  @HostListener('mouseleave') hoverOut()
  {
    this.texture(null);
  }
    private texture(colour:string)
    {
      this.dom.nativeElement.style.backgroundColor = colour;
    }
}
