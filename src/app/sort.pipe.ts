import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform{
  transform(value: { owner: string, status: string, createDat: Date }[], field: any = 'owner' ) {
    return value.sort((a, b) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
// if ესე იმიტო დავწერე რო სხვანაირად გადაწერილს გავდა
