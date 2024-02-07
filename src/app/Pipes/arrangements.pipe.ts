import { Pipe, PipeTransform } from '@angular/core';

@Pipe({

  name: 'arrangements'

})
export class ArrangementsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
