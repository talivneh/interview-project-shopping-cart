import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent {
  constructor() {}
  @Input() products: any[];
  @Output() productRemoved = new EventEmitter();

  calcTotal() {
    return this.products.reduce((acc, prod) => (acc += prod.quantity), 0);
  }

  calcTotalPrice() {
    return this.products
      .reduce((acc, prod) => (acc += prod.price * prod.quantity), 0)
      .toFixed(2);
  }

  removeProductFromCart(product) {
    this.productRemoved.emit(product);
  }
}
