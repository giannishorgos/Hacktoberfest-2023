import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css'],
})
export class ParticipantsComponent {
  constructor(private dataSharingService: DataSharingService) {}

  openForm() {
    this.dataSharingService.toggleForm();
  }
}
