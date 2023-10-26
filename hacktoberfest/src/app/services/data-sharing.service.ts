import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  displayForm: boolean = false;
  displayFormChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.displayFormChange.subscribe((value) => (this.displayForm = value));
  }

  toggleForm() {
    console.log('fdfdf');
    this.displayFormChange.next(!this.displayForm);
  }
}
