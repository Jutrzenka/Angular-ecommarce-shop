import { Component, OnInit } from '@angular/core';
import { CartProductComponent } from './cart-product/cart-product';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer';
import { CartService, CartItem } from '../../services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartProductComponent, CurrencyPipe, FooterComponent, AsyncPipe],
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss'],
})
export class CartComponent implements OnInit {
  cartProducts$!: Observable<CartItem[]>;
  total$!: Observable<number>;
  constructor(private cartService: CartService) {}
  ngOnInit() {
    this.cartProducts$ = this.cartService.cartItems$;
    this.total$ = this.cartService.getTotalPrice();
  }

  remove(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  updateQuantity(productId: number, quantity: number) {
    this.cartService.updateQuantity(productId, quantity);
  }
}
