import { Component, OnInit, Input } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css'],
})
export class FormModalComponent implements OnInit {
  displayForm: boolean = false;

  constructor(private dataSharingService: DataSharingService) {
    this.dataSharingService.displayFormChange.subscribe((value: boolean) => {
      this.displayForm = value;
    });
  }

  ngOnInit(): void {}

  closeForm() {
    this.dataSharingService.toggleForm();
  }
}
