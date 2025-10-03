import { Component, OnDestroy } from '@angular/core';
import { AlertService, AlertState } from '../../services/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-alert',
  standalone: true,
  imports: [],
  templateUrl: './cart-alert.html',
  styleUrls: ['./cart-alert.scss'],
})
export class CartAlertComponent implements OnDestroy {
  visible = false;
  message = '';
  type: AlertState['type'] = 'success';

  private sub: Subscription;

  constructor(private alert: AlertService) {
    this.sub = this.alert.alertState$.subscribe((s) => {
      this.visible = s.visible;
      this.message = s.message;
      this.type = s.type;
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  close() {
    this.alert.hide();
  }
}
