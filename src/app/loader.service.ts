import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private isLoading = new BehaviorSubject<boolean>(false);
  private minimumShowTime = 1000; // tempo mínimo em milissegundos
  private loadingStarted: number = 0;

  show() {
    this.loadingStarted = Date.now();
    this.isLoading.next(true);
  }

  hide() {
    const loadingDuration = Date.now() - this.loadingStarted;
    if (loadingDuration < this.minimumShowTime) {
      const remainingTime = this.minimumShowTime - loadingDuration;
      timer(remainingTime).subscribe(() => this.isLoading.next(false));
    } else {
      this.isLoading.next(false);
    }
  }

  get isLoading$(): Observable<boolean> {
    return this.isLoading.asObservable();
  }
}
