import {Component} from '@angular/core';

@Component({
    selector: 'bg-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    numberList = [];
    title = 'lectures-app';


    addList(Numbers: number) {
        this.numberList.push(Numbers);
    }

}
