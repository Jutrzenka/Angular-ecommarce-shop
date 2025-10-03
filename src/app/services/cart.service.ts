import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Product } from '../models/product.model';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>(this.getCartFromStorage());
  cartItems$ = this.cartItems.asObservable();

  private getCartFromStorage(): CartItem[] {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('cart');
      return cart ? JSON.parse(cart) : [];
    }
    return [];
  }

  private saveCartToStorage(items: CartItem[]): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(items));
    }
  }

  addToCart(product: Product, quantity: number = 1): void {
    const currentItems = this.cartItems.value;
    const existingItem = currentItems.find((item) => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      currentItems.push({ product, quantity });
    }

    this.cartItems.next([...currentItems]);
    this.saveCartToStorage(currentItems);
  }

  removeFromCart(productId: number): void {
    const currentItems = this.cartItems.value.filter(
      (item) => item.product.id !== Number(productId)
    );
    this.cartItems.next([...currentItems]);
    this.saveCartToStorage(currentItems);
  }

  updateQuantity(productId: number, quantity: number): void {
    const currentItems = this.cartItems.value;
    const item = currentItems.find((item) => item.product.id === Number(productId));

    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        this.cartItems.next([...currentItems]);
        this.saveCartToStorage(currentItems);
      }
    }
  }

  clearCart(): void {
    this.cartItems.next([]);
    this.saveCartToStorage([]);
  }

  getCartItemCount(): Observable<number> {
    return this.cartItems$.pipe(
      map((items) => items.reduce((total, item) => total + item.quantity, 0))
    );
  }

  getTotalPrice(): Observable<number> {
    return this.cartItems$.pipe(
      map((items) => items.reduce((total, item) => total + item.product.price * item.quantity, 0))
    );
  }
}
