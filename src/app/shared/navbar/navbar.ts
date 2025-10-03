import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, AsyncPipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent implements OnInit {
  cartCount$!: Observable<number>;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartCount$ = this.cartService.getCartItemCount();
  }
}
