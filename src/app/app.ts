import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { ProductModalComponent } from './shared/product-modal/product-modal';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, Navbar, ProductModalComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  isModalOpen = signal(false);
  selectedProduct = signal<Product | null>(null);

  openModal(product: Product) {
    this.selectedProduct.set(product);
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.selectedProduct.set(null);
  }
}
