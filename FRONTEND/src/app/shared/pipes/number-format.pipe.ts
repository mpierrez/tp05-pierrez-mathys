import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat',
  standalone: true,
})
export class NumberFormatPipe implements PipeTransform {
  transform(value: number): string {
    if (isNaN(value)) {
      return '';
    }
    // Formater le nombre avec des espaces comme séparateur
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
}
