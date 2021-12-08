import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }
  @Input() products: any[];

  calcTotal() {
    return this.products.reduce((acc, prod) => acc+= prod.num ,0);
  }

  ngOnInit(): void {
  }

}
