import { Component } from '@angular/core';
import { HomeBannerComponent } from './home-banner/home-banner';

@Component({
  selector: 'app-home',
  imports: [HomeBannerComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
