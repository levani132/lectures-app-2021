import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'return',
})
export class ReturnPipe implements PipeTransform {
  transform(value: string) {
    let reverseString = '';
    for (let i = value.length - 1; i >= 0; i--) {
      reverseString += value[i];
    }
    return reverseString;
  }
}
