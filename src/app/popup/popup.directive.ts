import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[bgPopup]'
})
export class PopupDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

}
