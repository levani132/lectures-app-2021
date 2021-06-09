import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {interval} from 'rxjs';

@Component({
    selector: 'bg-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
    @Output() start = new EventEmitter<number>();
    interval;
    count = 0;

    constructor() {
    }

    ngOnInit(): void {
    }

    ngStart() {
        this.interval = setInterval(() => this.start.emit(this.count++), 1000);
    }

    ngStop() {
        clearInterval(this.interval);
    }
}
