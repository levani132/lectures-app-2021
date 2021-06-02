import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'sortList'
})
export class sortList implements PipeTransform{
    transform(value: any[]){
        return value.sort((a,b) => a>b ? 1 : -1);
    }
}
