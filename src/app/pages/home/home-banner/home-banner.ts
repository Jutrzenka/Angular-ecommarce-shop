import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.html',
  styleUrls: ['./home-banner.scss'],
})
export class HomeBannerComponent {
  constructor(private router: Router) {}

  onViewMoreClick(): void {
    this.router.navigate(['/products']);
  }
}
