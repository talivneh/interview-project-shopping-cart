import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor() {}
  @Input() products: any[];
  @Output() productAdded = new EventEmitter();
  filterdProducts: any[];

  ngOnInit(): void {
    this.filterdProducts = this.products;
  }

  addProductToCart(product) {
    this.productAdded.emit(product);
  }

  sortList(sortType) {
    this.filterdProducts.sort(function (a, b) {
      if (sortType == 'price') {
        return a.price - b.price;
      }
      if (sortType == 'title') {
        let productAname = a.title.toUpperCase();
        let productBname = b.title.toUpperCase();
        if (productAname < productBname) return -1;
        if (productAname < productBname) return 1;
        if (productAname == productBname) return 0;
      }
    });
  }

  filterList(stringSearch) {
    this.filterdProducts = this.products.filter((product) => {
      return product.title.toLowerCase().includes(stringSearch.toLowerCase());
    });
  }
}
