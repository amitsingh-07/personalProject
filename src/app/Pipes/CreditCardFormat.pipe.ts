import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CreditCardFormat'
})
export class CreditCardFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const numberValue = value.replace(/\D/g, '');

    if(numberValue.length !== 16){
      throw new Error('Invalid')
    }

    const newvalue = numberValue.replace(/(.{4})/g, '$1-');

    return newvalue.slice(0, -1);
    //return newvalue;
  }

}
