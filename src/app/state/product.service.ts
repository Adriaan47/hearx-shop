import { Injectable } from '@angular/core';
import { noop, ID } from '@datorama/akita';
import { ProductStore } from './product.store';
import { ProductQuery } from './product.query';
import { ProductDataService } from './product-data.service';
import { Product } from './product.model';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private productDataService: ProductDataService,
    private productStore: ProductStore,
    private productQuery: ProductQuery
  ) { }

  getProducts(): Observable<Array<Product>> {
    const request = this.productDataService.getProducts().pipe(
      tap(s => this.productStore.set(s))
    );
    return this.productQuery.isPristine ? request : noop(); // request
  }

  deleteProduct(id: ID) {
    this.productStore.remove(id);
  }

  updateProduct(product: Product) {
    this.productStore.createOrReplace(product.id, { ...product });
  }

}
