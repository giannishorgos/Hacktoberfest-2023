import { Component } from '@angular/core';

@Component({
  selector: 'app-participant-card',
  templateUrl: './participant-card.component.html',
  styleUrls: ['./participant-card.component.css'],
})
export class ParticipantCardComponent {
  arrow_down = true;

  changeArrowPosition() {
    this.arrow_down = !this.arrow_down;
  }
}
