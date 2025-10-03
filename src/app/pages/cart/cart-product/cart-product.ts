import { Component, input, output } from '@angular/core';
import { CartItem } from '../../../services/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-product',
  standalone: true,
  templateUrl: './cart-product.html',
  styleUrls: ['./cart-product.scss'],
  imports: [CurrencyPipe],
})
export class CartProductComponent {
  cartProduct = input.required<CartItem>();
  remove = output<number>();
  quantityChange = output<number>();

  increase() {
    this.quantityChange.emit(this.cartProduct().quantity + 1);
  }

  decrease() {
    this.quantityChange.emit(this.cartProduct().quantity - 1);
  }

  removeItem() {
    this.remove.emit(this.cartProduct().product.id);
  }
}
