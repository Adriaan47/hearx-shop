import { Component } from '@angular/core';
import { DataService } from './state/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hearx-shop';

  public productList: any[] = this.dataServ.initialProductList;
  public cartProductList: any[] = JSON.parse(localStorage.getItem("my_cart_items"));

  constructor(
    public dataServ: DataService
  ) { }

  public addProductToCart(product) {
    const productExistInCart = this.cartProductList.find(({ name }) => name === product.name); // find product by name
    if (!productExistInCart) {
      this.cartProductList.push({ ...product, quantity: 1 }); // enhance "product" object with "quantity" property
      return;
    }
    productExistInCart.quantity += 1;
  }

  public removeProductFromCart(product) {
    const productExistInCart = this.cartProductList.find(({ name }) => name === product.name); // find product by name
    if (productExistInCart) {
      this.cartProductList.push({ ...product, quantity: productExistInCart.quantity }); // enhance "product" object with "quantity" property
      return;
    }
    productExistInCart.quantity -= 1;
  }

  public removeProduct(product) {
    this.cartProductList = this.cartProductList.filter(({ name }) => name !== product.name)
  }

}
