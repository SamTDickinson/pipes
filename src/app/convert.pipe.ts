import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetUnits: string): any {
    console.log(value);
    if(!value){
      return '';
    }

    switch (targetUnits) {
      case 'km':
        return parseFloat(value) * 1.60934;
      case 'm':
        return parseFloat(value) * 1.60934 * 1000;
      case 'cm':
        return parseFloat(value) * 1.60934 * 1000 * 1000;
      default:
        return "case not supported";

    }

  }

}
