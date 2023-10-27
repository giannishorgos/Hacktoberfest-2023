import { Component, OnInit, Input } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css'],
})
export class FormModalComponent implements OnInit {
  displayForm: boolean = false;
  showTags: boolean = true;
  tags: { name: string; isSelected: boolean }[] = [
    { name: 'UX/UI', isSelected: false },
    { name: 'FrontEnd', isSelected: false },
    { name: 'BackEnd', isSelected: false },
    { name: 'Full Stack', isSelected: false },
    { name: 'Product', isSelected: false },
  ];

  constructor(private dataSharingService: DataSharingService) {
    this.dataSharingService.displayFormChange.subscribe((value: boolean) => {
      this.displayForm = value;
    });
  }

  ngOnInit(): void {}

  closeForm() {
    this.dataSharingService.toggleForm();
  }

  toggleShowTags() {
    this.showTags = !this.showTags;
  }

  toggleSelectedTag(index: number) {
    this.tags[index].isSelected = !this.tags[index].isSelected;
  }
}
