import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from '../products/product.interface';

@Pipe({
	name: 'filterByPrice',
})
export class FilterByPricePipe implements PipeTransform {
	transform<T, P extends keyof T>(
		items: T[] | undefined | null,
		searchingProperty: P,
		searchValueMin: T[P] | null,
		searchValueMax: T[P] | null,
	) {
		if (!items?.length) {
			return items;
		}

		if (searchValueMin && searchValueMax) {
			return items.filter(
				item =>
					item[searchingProperty] > searchValueMin &&
					item[searchingProperty] < searchValueMax,
			);
		}
		if (searchValueMin) {
			return items.filter(item => item[searchingProperty] > searchValueMin);
		}
		if (searchValueMax) {
			return items.filter(item => item[searchingProperty] < searchValueMax);
		}
		return items;
	}
}
