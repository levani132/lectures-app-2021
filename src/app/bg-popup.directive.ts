import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[bgBgPopup]'
})
export class BgPopupDirective {

    @HostBinding('class.open') open = false;

    @HostListener('click') setOpen() {
        this.open = !this.open;
    }

    constructor() {
    }

}
