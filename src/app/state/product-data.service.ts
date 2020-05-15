import { Injectable } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { Product } from './product.model';
import { guid } from '@datorama/akita';

const products: Array<Product> = [
    {
        "id": guid(), // Unique Id of the product
        "image": "https://picsum.photos/200", // image of the product
        "name": "Coffee beans - 1kg Dark Roast", // name of product
        "price": "116" // price of item
    },
    {
        "id": guid(), // Unique Id of the product
        "image": "https://picsum.photos/200", // image of the product
        "name": "Yorkshire tea - 100 tea bags", // name of product
        "price": "75" // price of item
    },
    {
        "id": guid(), // Unique Id of the product
        "image": "https://picsum.photos/200", // image of the product
        "name": "Altered Carbon Season 2", // name of product
        "price": "180" // price of item
    },
    {
        "id": guid(), // Unique Id of the product
        "image": "https://picsum.photos/200", // image of the product
        "name": "Sony WF-1000XM3 True Wireless Noise Canceling", // name of product
        "price": "1200" // price of item
    },
    {
        "id": guid(), // Unique Id of the product
        "image": "https://picsum.photos/200", // image of the product
        "name": "Macbook Pro 2019 Model 16gb RAM", // name of product
        "price": "45000" // price of item
    },
    {
        "id": guid(), // Unique Id of the product
        "image": "https://picsum.photos/200", // image of the product
        "name": "Asus GL752 gaming laptop", // name of product
        "price": "27000" // price of item
    },
    {
        "id": guid(), // Unique Id of the product
        "image": "https://picsum.photos/200", // image of the product
        "name": "Guinness Draught Cans 440ml 2x Six Packs", // name of product
        "price": "178.95" // price of item
    },
    {
        "id": guid(), // Unique Id of the product
        "image": "https://picsum.photos/200", // image of the product
        "name": "6 Man Tent - Dark blue", // name of product
        "price": "13000" // price of item
    }];

    @Injectable({
        providedIn: 'root'
      })
      export class ProductDataService {
      
        constructor() { }
      
        getProducts(): Observable<Array<Product>> {
          return timer(200).pipe(mapTo(products));
        }
      }