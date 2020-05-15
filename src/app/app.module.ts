import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './shared/components/product/product.component';
import { ShoppingCartComponent } from './shared/components/shopping-cart/shopping-cart.component';
import { ProductListComponent } from './shared/components/product-list/product-list.component';
import { CartProductComponent } from './shared/components/cart-product/cart-product.component';
import { enableAkitaProdMode } from '@datorama/akita';
import { environment } from '../environments/environment';

if (environment.production) {
  enableAkitaProdMode();
}

@NgModule({
  declarations: [
    AppComponent,

    // ---------- Shared/Components ----------
    ProductComponent,
    ProductListComponent,
    CartProductComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
