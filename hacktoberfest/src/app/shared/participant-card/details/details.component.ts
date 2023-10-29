import { Component, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
    @Output() see_details_change: EventEmitter<null> = new EventEmitter()
    see_details: boolean = false

    toggleDetails() {
        this.see_details = !this.see_details
        this.see_details_change.emit()
    }
}
