import { Component, input, computed, Signal, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-button.html',
  styleUrls: ['./carousel-button.scss'],
})
export class CarouselButtonComponent {
  // 1. Sygnał wejściowy zamiast @Input()
  direction = input<'prev' | 'next'>();

  // 2. Obliczone sygnały dla ścieżki SVG i aria-label
  path: Signal<string> = computed(() =>
    this.direction() === 'prev' ? 'M5 1 1 5l4 4' : 'm1 9 4-4-4-4'
  );
  ariaLabel: Signal<string> = computed(() =>
    this.direction() === 'prev' ? 'Poprzedni produkt' : 'Następny produkt'
  );

  // 3. Zwykły Output do emiterowania kliknięcia
  @Output() navigate = new EventEmitter<void>();

  onClick() {
    this.navigate.emit();
  }
}
