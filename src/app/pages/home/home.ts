import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product';
import { HomeBannerComponent } from '../../pages/home/home-banner/home-banner';
import { ProductCarouselComponent } from '../../pages/home/product-carousel/product-carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  imports: [CommonModule, HomeBannerComponent, ProductCarouselComponent, AsyncPipe],
})
export class HomeComponent implements OnInit {
  productOffers$: Observable<Product[]>;
  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.productOffers$ = this.productService.getOffers().pipe(map((products) => products ?? []));

    this.products$ = this.productService.getAll().pipe(map((products) => products ?? []));
  }

  ngOnInit() {}
}
