import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SavePurchaseDto } from '../models/save-purchase.model';
import { Product } from '../models/product.model';

export interface Purchase {
  id: string;
  date: Date;
  items: Product[];
  total: number;
  status: 'completed' | 'pending' | 'cancelled';
}

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  private readonly storageKey = 'purchases';

  save(savePurchaseDto: SavePurchaseDto): Observable<{ message: string }> {
    const purchases = this.getPurchasesFromStorage();
    const newPurchase: Purchase = {
      id: this.generateId(),
      date: new Date(),
      items: savePurchaseDto.items,
      total: savePurchaseDto.total,
      status: 'completed',
    };

    purchases.push(newPurchase);
    this.savePurchasesToStorage(purchases);

    return of({ message: 'Purchase saved successfully' });
  }

  getPurchaseHistory(): Purchase[] {
    return this.getPurchasesFromStorage();
  }

  private getPurchasesFromStorage(): Purchase[] {
    if (typeof window !== 'undefined') {
      const purchases = localStorage.getItem(this.storageKey);
      return purchases ? JSON.parse(purchases) : [];
    }
    return [];
  }

  private savePurchasesToStorage(purchases: Purchase[]): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.storageKey, JSON.stringify(purchases));
    }
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}
