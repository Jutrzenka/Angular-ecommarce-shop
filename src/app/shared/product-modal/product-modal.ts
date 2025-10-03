import { Component, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';

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

  addToCart() {
    this.cart.addToCart(this.product());
  }

  onClose() {
    this.close.emit();
  }
}
