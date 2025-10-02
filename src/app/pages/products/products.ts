import { Component } from '@angular/core';
import { ProductOfferComponent } from '../../pages/home/product-offer/product-offer';
import { map, Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [ProductOfferComponent, AsyncPipe],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  productOffers$: Observable<Product[]>;
  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.productOffers$ = this.productService.getOffers().pipe(map((products) => products ?? []));

    this.products$ = this.productService.getAll().pipe(map((products) => products ?? []));
  }

  ngOnInit() {}
}
