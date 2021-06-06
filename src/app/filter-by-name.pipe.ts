import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filterByName'
})
export class FilterByName implements PipeTransform {
    transform(value: {owner: string, status: string; createdAt: Date}[]) {
        return value.sort((a,b)=> {
            let ownerA = a.owner.substr(0, a.owner.indexOf(' '));
            let ownerB = b.owner.substr(0, b.owner.indexOf(' '));
            
            if(ownerA < ownerB) return -1;
            if(ownerA > ownerB) return 1;
            return 0;
        });
    }
}
