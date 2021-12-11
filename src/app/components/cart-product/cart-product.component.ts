import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss'],
})
export class CartProductComponent {
  @Input() product: any;
  @Output() productRemoved = new EventEmitter();

  constructor() {}

  removeProductFromCart(product) {
    this.productRemoved.emit(product);
  }

  changQuantity(product, eventName, number) {
    if (eventName == 'add') {
      product.quantity++;
    }
    if (eventName == 'remove' && product.quantity > 1) {
      product.quantity--;
    }
    if (eventName == 'change' && number >= 1) {
      product.quantity = Number(number);
    }
  }
}
