import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  @Input() products: any[];
  @Output() productRemoved = new EventEmitter();

  public counter: number = 3600; // 3600 Sec = 1 hour
  
  constructor() { }

  ngOnInit() {
    this.startTimer();
  }

 public calcTotal() {
    this.saveCartToLocalStorage(this.products);
    return this.products.reduce((acc, prod) => acc += prod.quantity, 0)
  }

  public removeProduct(product) {
    this.productRemoved.emit(product)
  }

  public saveCartToLocalStorage(Data: any) {
    if (this.counter > 0) {
      localStorage.setItem("my_cart_items", JSON.stringify(Data));
    }
  }

  public startTimer() {
    let intervalId = setInterval(() => {
      this.counter = this.counter - 1;
      if (this.counter === 0) clearInterval(intervalId)
      localStorage.setItem("my_cart_items", JSON.stringify([]));
    }, 1000)
  }
}
