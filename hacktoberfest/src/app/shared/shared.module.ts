import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header/header.component'
import { ParticipantsComponent } from './participants/participants.component'
import { FormModalComponent } from './form-modal/form-modal.component'
import { ParticipantCardComponent } from './participants/participant-card/participant-card.component'
import { DetailsComponent } from './participants/participant-card/details/details.component'
import { TagOptionComponent } from './form-modal/tag-option/tag-option.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
    declarations: [
        HeaderComponent,
        ParticipantsComponent,
        FormModalComponent,
        ParticipantCardComponent,
        DetailsComponent,
        TagOptionComponent,
    ],
    exports: [HeaderComponent, ParticipantsComponent, FormModalComponent],
    imports: [CommonModule, ReactiveFormsModule],
})
export class SharedModule {}
