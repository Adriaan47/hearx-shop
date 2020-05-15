import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {
  @Input() product: any;
  @Output() productRemoved = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  public modelChanged() {
    if (this.product.quantity === 0) {
      this.productRemoved.emit(this.product)
    }
  }
}
