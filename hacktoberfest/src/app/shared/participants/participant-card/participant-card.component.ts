import { Component, Input } from '@angular/core'
import { Participant } from '../../interfaces/api-interfaces.interface'

@Component({
    selector: 'app-participant-card',
    templateUrl: './participant-card.component.html',
    styleUrls: ['./participant-card.component.css'],
})
export class ParticipantCardComponent {
    @Input() participant!: Participant
    arrow_down = true

    changeArrowPosition() {
        this.arrow_down = !this.arrow_down
    }
}
