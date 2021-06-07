import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting',
})
export class SortPipe implements PipeTransform {
  transform(value: { owner: string; status: string; created: Date }[]) {
    return value.sort((obj1, obj2) => {
      let name1 = obj1.owner
      let name2 = obj2.owner
      if (name1 > name2) return 1;
      if (name1 < name2) return -1;
      return 0;
    });
  }
}
