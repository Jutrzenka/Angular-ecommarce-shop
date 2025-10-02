import { Component, input, output } from '@angular/core';
import { CartProduct } from '../../../models/cart-product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-product',
  standalone: true,
  templateUrl: './cart-product.html',
  styleUrls: ['./cart-product.scss'],
  imports: [CurrencyPipe],
})
export class CartProductComponent {
  cartProduct = input.required<CartProduct>();
  updateCartEvent = output<void>();

  increaseQuantity() {
    this.cartProduct().quantity++;
    this.save();
  }

  decreaseQuantity() {
    if (this.cartProduct().quantity > 1) {
      this.cartProduct().quantity--;
      this.save();
    }
  }

  remove() {
    const products: CartProduct[] =
      JSON.parse(localStorage.getItem('cart-products') as string) || [];
    const updated = products.filter((p) => p.product.id !== this.cartProduct().product.id);
    localStorage.setItem('cart-products', JSON.stringify(updated));
    this.updateCartEvent.emit();
  }

  private save() {
    const products: CartProduct[] =
      JSON.parse(localStorage.getItem('cart-products') as string) || [];
    const idx = products.findIndex((p) => p.product.id === this.cartProduct().product.id);
    if (idx !== -1) {
      products[idx].quantity = this.cartProduct().quantity;
    }
    localStorage.setItem('cart-products', JSON.stringify(products));
    this.updateCartEvent.emit();
  }
}
