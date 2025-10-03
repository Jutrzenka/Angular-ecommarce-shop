import { Component, inject, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.html',
  styleUrls: ['./product-modal.scss'],
  standalone: true,
  imports: [CurrencyPipe],
})
export class ProductModalComponent {
  constructor(private cart: CartService) {}
  product = input<any>();
  visible = input(false);
  close = output<void>();
  private alert = inject(AlertService);

  addToCart() {
    this.cart.addToCart(this.product());
    this.alert.success('Product added to cart');
  }

  onClose() {
    this.close.emit();
  }
}
