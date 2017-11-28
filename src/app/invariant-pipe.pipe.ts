import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'invariant'
})
export class InvariantPipePipe implements PipeTransform {
  transform(value: string, type?: string): any {

    return value.length <= 1 ? value : this.getFirstLetter(value, type) + value.substring(1, value.length);
  }
  getFirstLetter(value: string, type?: string) {
    const upper = value.substr(0, 1).toUpperCase();
    const lower = value.substr(0, 1).toLowerCase();
    return (type) ? type === 'upper' ? upper : lower : upper;
  }
}
