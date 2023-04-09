import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[customHover]',
})
export class HoverDirective {
  constructor(private eleRef: ElementRef) {}

  @HostListener('mouseover') onMouseOver() {
    this.eleRef.nativeElement.style.backgroundColor = 'orange';
  }

  @HostListener('mouseout') onMouseOut() {
    this.eleRef.nativeElement.style.backgroundColor = 'green';
  }
}
