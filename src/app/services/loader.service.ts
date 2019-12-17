import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading = new Subject<boolean>();
  show() {
    console.log('in show');
    this.isLoading.next(true);
  }
  hide() {
    console.log('in hide');
    this.isLoading.next(false);
  }
  constructor() { }
}
