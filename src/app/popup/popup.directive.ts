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
  constructor(private elementRef: ElementRef<HTMLElement>) {}

  @HostListener('document:click', ['$event'])
  clicklistener(event: Event) {
    // @ts-ignore
    if (
      this.open == false &&
      this.elementRef.nativeElement.contains(event.target)
    ) {
      this.open = true;
    } else {
      this.open = false;
    }
  }
}
