import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class DataSharingService {
    display_form: boolean = false
    display_form_change: Subject<boolean> = new Subject<boolean>()

    new_participant: boolean = false
    new_participant_change: Subject<boolean> = new Subject<boolean>()

    constructor() {
        this.display_form_change.subscribe(
            (value) => (this.display_form = value)
        )
    }

    toggleForm() {
        this.display_form_change.next(!this.display_form)
    }

    setNewParticipant(value: boolean) {
        this.new_participant_change.next(value)
    }
}
