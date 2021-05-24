import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[bgPopup]'
})
export class PopupDirective {
  @HostBinding("class.open") open = false;
  
  constructor(private elementRef:ElementRef<HTMLElement>) { }

  @HostListener('document:click',['$event'])
  doAction(event: Event) {
    if(this.elementRef.nativeElement===event.target){
      this.open = !this.open;
    }else{
      this.open = false;
    }
  }
}
