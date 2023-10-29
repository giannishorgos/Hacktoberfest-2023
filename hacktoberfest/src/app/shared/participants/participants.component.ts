import { Component, OnInit } from '@angular/core'
import { DataSharingService } from 'src/app/services/data-sharing.service'
import { ApiService } from 'src/app/services/api.service'

import { Participant } from '../interfaces/api-interfaces.interface'
@Component({
    selector: 'app-participants',
    templateUrl: './participants.component.html',
    styleUrls: ['./participants.component.css'],
})
export class ParticipantsComponent implements OnInit {
    participants: Participant[] = []
    have_new_participant: boolean = false

    constructor(
        private data_sharing_service: DataSharingService,
        private api_service: ApiService
    ) {
        this.data_sharing_service.new_participant_change.subscribe(() => {
            this.getParticipantsData()
        })
    }

    ngOnInit() {
        this.getParticipantsData()
    }

    getParticipantsData() {
        this.api_service.getParticipants().subscribe({
            next: (participants) => {
                participants.forEach((participant) => {
                    participant.registration_date = new Date(
                        participant.registration_date
                    ).toLocaleDateString('gr-GR')
                })

                this.participants = participants
                console.log('Success on getting participants!')
            },
            error: (error) => {
                console.log('Error on getting participants! ' + error)
            },
        })
    }

    openForm() {
        this.data_sharing_service.toggleForm()
    }
}
