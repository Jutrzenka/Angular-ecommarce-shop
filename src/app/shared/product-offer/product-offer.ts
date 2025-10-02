import { Component, input, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductModalComponent } from '../product-modal/product-modal';

@Component({
  selector: 'app-product-offer',
  templateUrl: './product-offer.html',
  styleUrls: ['./product-offer.scss'],
  standalone: true,
  imports: [ProductModalComponent],
})
export class ProductOfferComponent {
  product = input.required<Product>();

  isModalOpen = signal(false);

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }
}
