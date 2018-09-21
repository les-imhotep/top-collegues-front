import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'super'
})
export class SuperPipe implements PipeTransform {
  transform(value: any, a1, a2, a3): any {
    console.log(a1, a2, a3);
    return `<span class="text-danger">SUPER VALEUR ${value}</span>`;
  }
}
