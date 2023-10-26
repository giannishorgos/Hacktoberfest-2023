import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css'],
})
export class ParticipantsComponent implements OnInit {
  constructor(private dataSharingService: DataSharingService) {}

  ngOnInit(): void {}

  openForm() {
    this.dataSharingService.toggleForm();
  }
}
