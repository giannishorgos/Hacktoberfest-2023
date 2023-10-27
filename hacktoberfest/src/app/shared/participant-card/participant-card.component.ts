import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participant-card',
  templateUrl: './participant-card.component.html',
  styleUrls: ['./participant-card.component.css'],
})
export class ParticipantCardComponent implements OnInit {
  arrow_down = true;
  constructor() {}

  ngOnInit(): void {}
  changeArrowPosition() {
    this.arrow_down = !this.arrow_down;
  }
}
