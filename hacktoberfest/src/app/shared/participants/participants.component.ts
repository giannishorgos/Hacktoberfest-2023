import { Component, OnInit } from '@angular/core'
import { DataSharingService } from 'src/app/services/data-sharing.service'
import { ApiService } from 'src/app/services/api-service.service'

import { Participant } from '../interfaces/api-interfaces.interface'
@Component({
    selector: 'app-participants',
    templateUrl: './participants.component.html',
    styleUrls: ['./participants.component.css'],
})
export class ParticipantsComponent implements OnInit {
    participants: Participant[] = []

    constructor(
        private dataSharingService: DataSharingService,
        private apiService: ApiService
    ) {}

    ngOnInit() {
        this.apiService.getParticipants().subscribe({
            next: (participants) => {
                this.participants = participants
                console.log('Success on getting participants!')
            },
            error: (error) => {
                console.log('Error on getting participants! ' + error)
            },
            complete: () => {},
        })
    }

    openForm() {
        this.dataSharingService.toggleForm()
    }
}
