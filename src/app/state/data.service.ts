import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public product: any = {
        "id": 11, // Unique Id of the product
        "image": "https://picsum.photos/200", // image of the product
        "name": "6 Man Tent", // name of product
        "price": 13000 // price of item
    }

    public cart: any[] = [{
        "product_id": 11, // Unique Id of the product
        "name": "6 Man Tent", // name of product
        "price": 13000, // price of item
        "quantity": 2 // the amount of the product is in the cart
    }];

    public initialProductList: any[] = [{
        "id": 1, // Unique Id of the product
        "image": "https://picsum.photos/200", // image of the product
        "name": "Coffee beans - 1kg Dark oast", // name of product
        "price": 116 // price of item
    },
    {
        "id": 2, // Unique Id of the product
        "image": "https://picsum.photos/200", // image of the product
        "name": "Yorkshire tea - 100 tea bags", // name of product
        "price": 75 // price of item
    },
    {
        "id": 3, // Unique Id of the product
        "image": "https://picsum.photos/200", // image of the product
        "name": "Altered Carbon Season 2", // name of product
        "price": 180 // price of item
    },
    {
        "id": 4, // Unique Id of the product
        "image": "https://picsum.photos/200", // image of the product
        "name": "Sony WF-1000XM3 True Wireless Noise Canceling", // name of product
        "price": 1200 // price of item
    },
    {
        "id": 5, // Unique Id of the product
        "image": "https://picsum.photos/200", // image of the product
        "name": "Macbook Pro 2019 Model 16gb AM", // name of product
        "price": 45000 // price of item
    },
    {
        "id": 6, // Unique Id of the product
        "image": "https://picsum.photos/200", // image of the product
        "name": "Asus GL752 gaming laptop", // name of product
        "price": 27000 // price of item
    },
    {
        "id": 7, // Unique Id of the product
        "image": "https://picsum.photos/200", // image of the product
        "name": "Guinness Draught Cans 440ml 2x Six Packs", // name of product
        "price": 178.95 // price of item
    },
    {
        "id": 8, // Unique Id of the product
        "image": "https://picsum.photos/200", // image of the product
        "name": "6 Man Tent - Dark blue", // name of product
        "price": 13000 // price of item
    }];
}