import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag-option',
  templateUrl: './tag-option.component.html',
  styleUrls: ['./tag-option.component.css'],
})
export class TagOptionComponent {
  @Input() isSelected!: boolean;
  @Input() tagName!: string;
}
