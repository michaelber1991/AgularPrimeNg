import { Pipe, PipeTransform } from '@angular/core';
import { StringFormatter } from '@shared/utils/string-formater';

@Pipe({
	name: 'capitalizeFirst',
	standalone: true
})
export class CapitalizeFirstPipe implements PipeTransform {
	transform(value: string): string {
		if (!value) return value;
		return StringFormatter.capitalizeFirstLetter(value);
	}
}
