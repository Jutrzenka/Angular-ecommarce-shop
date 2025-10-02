import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-offer',
  templateUrl: './product-offer.html',
  styleUrls: ['./product-offer.scss'],
  standalone: true,
  imports: [],
})
export class ProductOfferComponent {
  product = input.required<Product>();
  seeMore = output<Product>();
}
