import { ID, guid } from '@datorama/akita';

export interface Product {
    id: ID; // Unique Id of the product
    image: String; // image of the product
    name: string; // name of product
    price: String; // price of item
}

export function createProduct({
    image = '',
    name = '',
    price = '',

}: Partial<Product>): Product {
    return {
        id: guid(),
        image,
        name,
        price,
    };
}