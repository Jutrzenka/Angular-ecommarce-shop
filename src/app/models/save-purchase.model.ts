import { Product } from './product.model';

export interface SavePurchaseDto {
  items: Product[];
  total: number;
  customerInfo: CustomerInfo;
  shippingAddress: ShippingAddress;
}

export interface CustomerInfo {
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

export interface ShippingAddress {
  street: string;
  city: string;
  zipCode: string;
  country: string;
}
