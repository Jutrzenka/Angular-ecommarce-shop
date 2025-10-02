import { Component, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.html',
  styleUrls: ['./product-modal.scss'],
  standalone: true,
  imports: [CurrencyPipe],
})
export class ProductModalComponent {
  product = input<any>();
  visible = input(false);
  close = output<void>();

  onClose() {
    this.close.emit();
  }
}
