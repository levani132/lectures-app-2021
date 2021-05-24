import { Directive, ElementRef,HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[bgPopup]'
})
export class PopupDirective {
  @HostBinding("class.open")
  open = false;

  constructor(private elementRef : ElementRef<HTMLElement>) { }

  @HostListener('window:click', ['$event'])
  ClickListener(event : Event){
    //@ts-ignore
    if(this.elementRef.nativeElement.contains(event.target)){
      if(this.open == false)
        this.open = true;
      else 
        this.open = false;
    }
    else this.open = false;
  }

 



  

 

}
