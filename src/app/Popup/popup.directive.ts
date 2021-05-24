import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[bgPopup]'
})
export class PopupDirective {
  @HostBinding('class.open')
  open = false;

  constructor(private element: ElementRef<HTMLElement>) {
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    // @ts-ignore
    if (this.element.nativeElement.contains(event.target)) {
      this.open = !this.open;
    } else {
      this.open = false;
    }
  }
}
