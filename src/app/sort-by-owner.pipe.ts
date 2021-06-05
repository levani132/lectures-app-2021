import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByOwner'
})
export class SortByOwnerPipe implements PipeTransform {

  transform(value: {owner:string, status:string,createdAt:Date}[]) {
    return value.sort((x,y)=> x < y ? 1: -1);
  }

}
