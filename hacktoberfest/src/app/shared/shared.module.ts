import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ParticipantsComponent } from './participants/participants.component';
import { FormModalComponent } from './form-modal/form-modal.component';

@NgModule({
  declarations: [HeaderComponent, ParticipantsComponent, FormModalComponent],
  exports: [HeaderComponent, ParticipantsComponent, FormModalComponent],
  imports: [CommonModule],
})
export class SharedModule {}
