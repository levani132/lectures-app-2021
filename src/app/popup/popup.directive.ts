import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[bgPopup]'
})
export class PopupDirective {
  @HostBinding('class.open') shoudHaveClass = false;

  constructor(private elementRef: ElementRef) { 

  }

  @HostListener('document:click',['$event'])
  //@ts-ignore
  click(event: Event) {
    if (this.elementRef.nativeElement.contains(event.target)){
      this.shoudHaveClass = !this.shoudHaveClass;
    } else {
      this.shoudHaveClass = false;
    }
  }
}
