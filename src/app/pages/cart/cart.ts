import { Component, OnInit } from '@angular/core';
import { CartProductComponent } from './cart-product/cart-product';
import { CurrencyPipe } from '@angular/common';
import { CartProduct } from '../../models/cart-product.model';
import { FooterComponent } from '../../shared/footer/footer';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartProductComponent, CurrencyPipe, FooterComponent],
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss'],
})
export class CartComponent implements OnInit {
  cartProducts: CartProduct[] = [];
  total: number = 0;

  ngOnInit(): void {
    this.updateCart();
  }

  updateCart() {
    const storagedProducts: CartProduct[] =
      JSON.parse(localStorage.getItem('cart-products') as string) || [];

    this.cartProducts = storagedProducts;

    this.total = this.cartProducts.reduce((acc, val) => acc + val.product.price * val.quantity, 0);
  }
}
