import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Product } from './product.model';
import { ProductState, ProductStore } from './product.store';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductQuery extends QueryEntity<ProductState, Product> {

    productsGraphData$ = this.selectAll().pipe(
        map(this.getProductGraphData.bind(this))
    );

    constructor(protected store: ProductStore) {
        super(store);
    }

    getProductGraphData(products: Array<Product>): { [key: string]: Array<string | number> } {
        return products.reduce((
            { images: iArray, names: nArray, prices: pArray },
            { name, image, price, }) => {
            return {
                images: [...nArray, image],
                names: [...nArray, name],
                prices: [...pArray, price]
            };
        }, { images: [], names: [], prices: [] });
    }

}
