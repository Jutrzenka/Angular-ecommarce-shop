import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com/products';

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getOffers(): Observable<Product[]> {
    const numberOfOffers = 5;
    return new Observable((observer) => {
      this.getAll().subscribe({
        next: (products) => {
          observer.next(products.slice(0, numberOfOffers));
          observer.complete();
        },
        error: (error) => {
          console.error('Error:', error);
          observer.next([]);
          observer.complete();
        },
      });
    });
  }
}
