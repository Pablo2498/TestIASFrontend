import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardTitle'
})
export class CardTitlePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `(${value} , ${args[0]})`;
  }

}
