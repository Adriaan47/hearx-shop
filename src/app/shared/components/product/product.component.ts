import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { DataService } from 'src/app/state/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: any;
  @Input() products: any[];
  @Input() productsOfCart: any[];
  @Output() productAdded = new EventEmitter();
  @Output() productRemoved = new EventEmitter();

  public count: number = 0;
  public qty: number;
  public btnText: string = "Add to cart";
  public btnState: String = "A";
  public showBtn: boolean = true;
  public showQtyInCart: boolean = false;

  constructor(
    public dataServ: DataService
  ) { }

  ngOnInit() {
  }

  public addProductToCart(product) {
    this.productAdded.emit(product);
  }
  public removeProductFromCart(product) {
    this.productRemoved.emit(product)
  }
  public modelChanged() {
    if (this.product.quantity === 0) {
      this.productRemoved.emit(this.product)
    }
  }
  public SetBtnState() {
    this.btnStateLoading();
  }

  public btnStateLoading() {
    this.btnState = "B";
    this.showBtn = true;
    this.showQtyInCart = false;
    if (this.btnState == "B") {
      this.btnText = "loading";
      setTimeout(() => {
      this.btnStateInput();
      },
        1500);    
    }
  }

  public btnStateAdd() {
    if (this.btnState == "A") {
      this.btnText = "Add to cart";
    }
  }

  public btnStateInput() {
    this.btnState = "C";
    if (this.btnState == "C") {
      this.showBtn = false;
      this.showQtyInCart = true;
    }
  }

}
