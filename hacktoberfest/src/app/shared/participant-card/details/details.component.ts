import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  seeDetails: boolean = false;
  @Output() seeDetailsChange: EventEmitter<null> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleDetails() {
    this.seeDetails = !this.seeDetails;
    this.seeDetailsChange.emit();
  }
}
