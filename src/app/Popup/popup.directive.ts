import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[bgPopup]',
})
export class PopupDirective {
  @HostBinding('class.open')
  open = false;

  constructor(private elemRef: ElementRef<HTMLElement>) {}

  @HostListener('document:click', ['$event'])
  clickListener(event: Event) {
    //@ts-ignore
    if (this.elemRef.nativeElement.contains(event.target)) {
      this.open = !this.open;
    } else {
      this.open = false;
    }
  }
}
