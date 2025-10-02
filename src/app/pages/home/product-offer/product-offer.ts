import { Component, input } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-offer',
  templateUrl: './product-offer.html',
  styleUrls: ['./product-offer.scss'],
})
export class ProductOfferComponent {
  product = input.required<Product>();
}
