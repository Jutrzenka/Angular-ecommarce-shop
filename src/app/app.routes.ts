import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { Products } from './pages/products/products';
import { GiftCards } from './pages/gift-cards/gift-cards';
import { Cart } from './pages/cart/cart';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: Products },
  { path: 'gift-cards', component: GiftCards },
  { path: 'cart', component: Cart },
  { path: '**', redirectTo: '' },
];
