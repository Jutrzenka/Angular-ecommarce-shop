import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer';

@Component({
  selector: 'app-cart',
  imports: [FooterComponent],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {}
