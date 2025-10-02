export interface PaymentDto {
  amount: number;
  currency: string;
  paymentMethod: string;
  customerEmail: string;
  billingAddress: BillingAddress;
}

export interface BillingAddress {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}
