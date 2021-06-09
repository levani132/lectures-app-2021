import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'bg-odd',
    templateUrl: './odd.component.html',
    styleUrls: ['./odd.component.scss']
})
export class OddComponent implements OnInit {
    @Input() Odd: number;

    constructor() {
    }

    ngOnInit(): void {
    }

}
