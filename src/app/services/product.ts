import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com/products';

  getAll(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.apiUrl)
      .pipe(
        map((apiProducts) =>
          apiProducts.map((apiProduct) => this.mapApiProductToProduct(apiProduct))
        )
      );
  }

  getOffers(): Observable<Product[]> {
    const numberOfOffers = 5;
    return this.getAll().pipe(map((products) => products.slice(0, numberOfOffers)));
  }

  getById(id: string): Observable<Product | undefined> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`).pipe(
      map((apiProduct) => {
        if (apiProduct) {
          return this.mapApiProductToProduct(apiProduct);
        }
        return undefined;
      })
    );
  }

  private mapApiProductToProduct(apiProduct: Product): Product {
    return {
      id: Number(apiProduct.id.toString()),
      title: apiProduct.title,
      price: apiProduct.price,
      description: apiProduct.description,
      category: apiProduct.category,
      image: apiProduct.image,
    };
  }
}
