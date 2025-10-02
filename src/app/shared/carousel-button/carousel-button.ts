import { Component, input, computed, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-button.html',
  styleUrls: ['./carousel-button.scss'],
})
export class CarouselButtonComponent {
  direction = input<'prev' | 'next'>();
  path = computed(() => (this.direction() === 'prev' ? 'M5 1 1 5l4 4' : 'm1 9 4-4-4-4'));
  ariaLabel = computed(() =>
    this.direction() === 'prev' ? 'Poprzedni produkt' : 'Następny produkt'
  );
  navigate = output<void>();

  onClick() {
    this.navigate.emit();
  }
}
