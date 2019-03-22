import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tiempopublicado'
})
export class TiempopublicadoPipe implements PipeTransform {

  transform(value: number): any {
    
    return null;
  }

}
