import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import {
    Participant,
    Skill,
    InsertParticipant,
} from '../shared/interfaces/api-interfaces.interface'

import { environment } from '../../environments/environment'

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) {}

    getParticipants(): Observable<Participant[]> {
        return this.http.get<Participant[]>(
            environment.api_url + 'participants'
        )
    }

    getSkills(): Observable<Skill[]> {
        return this.http.get<Skill[]>(environment.api_url + 'skills')
    }

    postParticipant(
        participant: InsertParticipant
    ): Observable<InsertParticipant> {
        return this.http.post<InsertParticipant>(
            environment.api_url + 'participants',
            participant
        )
    }
}
