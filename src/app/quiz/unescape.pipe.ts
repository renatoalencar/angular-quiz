import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unescape'
})
export class UnescapePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    const doc = new DOMParser().parseFromString(value, 'text/html');
    return doc.documentElement.textContent;;
  }

}
