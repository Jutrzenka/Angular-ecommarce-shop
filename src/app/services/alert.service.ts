import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type AlertType = 'success' | 'error' | 'info';

export interface AlertState {
  visible: boolean;
  message: string;
  type: AlertType;
}

@Injectable({ providedIn: 'root' })
export class AlertService {
  private readonly initial: AlertState = { visible: false, message: '', type: 'info' };
  private readonly state$ = new BehaviorSubject<AlertState>(this.initial);
  alertState$ = this.state$.asObservable();

  show(message: string, type: AlertType = 'success', autoHideMs = 2000) {
    this.state$.next({ visible: true, message, type });
    if (autoHideMs > 0) {
      setTimeout(() => this.hide(), autoHideMs);
    }
  }

  hide() {
    this.state$.next({ ...this.initial });
  }

  success(message: string, autoHideMs = 2000) {
    this.show(message, 'success', autoHideMs);
  }

  error(message: string, autoHideMs = 3000) {
    this.show(message, 'error', autoHideMs);
  }

  info(message: string, autoHideMs = 2000) {
    this.show(message, 'info', autoHideMs);
  }
}
