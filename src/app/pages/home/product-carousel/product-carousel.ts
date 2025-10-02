import { Component, input, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductOfferComponent } from '../../../shared/product-offer/product-offer';
import { CarouselButtonComponent } from '../../../shared/carousel-button/carousel-button';
import { App } from '../../../app';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.html',
  styleUrls: ['./product-carousel.scss'],
  imports: [ProductOfferComponent, CarouselButtonComponent],
})
export class ProductCarouselComponent {
  constructor(public app: App) {}
  products = input.required<Product[]>();
  currentIndex = 0;

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.products().length;
  }

  previous(): void {
    this.currentIndex =
      this.currentIndex === 0 ? this.products().length - 1 : this.currentIndex - 1;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }
}
