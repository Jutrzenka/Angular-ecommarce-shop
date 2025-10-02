import { Component } from '@angular/core';
import { ProductOfferComponent } from '../../shared/product-offer/product-offer';
import { map, Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product';
import { AsyncPipe } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer';
import { App } from '../../app';

@Component({
  selector: 'app-products',
  imports: [ProductOfferComponent, AsyncPipe, FooterComponent],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  productOffers$: Observable<Product[]>;
  products$: Observable<Product[]>;

  constructor(private productService: ProductService, public app: App) {
    this.productOffers$ = this.productService.getOffers().pipe(map((products) => products ?? []));

    this.products$ = this.productService.getAll().pipe(map((products) => products ?? []));
  }

  ngOnInit() {}
}
