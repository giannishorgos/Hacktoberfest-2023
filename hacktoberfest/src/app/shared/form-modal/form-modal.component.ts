import { Component, OnInit } from '@angular/core'
import { DataSharingService } from 'src/app/services/data-sharing.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ApiService } from 'src/app/services/api.service'

@Component({
    selector: 'app-form-modal',
    templateUrl: './form-modal.component.html',
    styleUrls: ['./form-modal.component.css'],
})
export class FormModalComponent implements OnInit {
    participant_form: FormGroup
    display_form: boolean = false
    show_tags: boolean = true
    tags: { id: number; name: string; is_selected: boolean }[] = []

    constructor(
        private data_sharing_service: DataSharingService,
        private api_service: ApiService
    ) {
        this.data_sharing_service.display_form_change.subscribe(
            (value: boolean) => {
                this.display_form = value
            }
        )

        this.participant_form = new FormBuilder().group({
            name: ['', Validators.required],
            last_name: ['', Validators.required],
            gitlab_id: ['', Validators.required],
            kaggle_id: ['', Validators.required],
            bio: [''],
            birth_date: [''],
            skills: [],
        })
    }

    ngOnInit() {
        this.api_service.getSkills().subscribe({
            next: (skills) => {
                skills.forEach((skill) => {
                    this.tags.push({
                        id: skill.id,
                        name: skill.name,
                        is_selected: false,
                    })
                })
                console.log('Success on getting skills!')
            },
            error: (error) => {
                console.log('Error on getting skills! ' + error)
            },
        })
    }

    closeForm() {
        this.data_sharing_service.toggleForm()
    }

    toggleShowTags() {
        this.show_tags = !this.show_tags
    }

    toggleSelectedTag(index: number) {
        this.tags[index].is_selected = !this.tags[index].is_selected
    }

    onSubmit() {
        if (this.participant_form.valid) {
            const formData = this.participant_form.value
            formData.skills = []
            this.tags.forEach((tag) => {
                if (tag.is_selected) {
                    formData.skills.push(tag.id)
                }
            })

            this.api_service.postParticipant(formData).subscribe({
                next: () => {
                    console.log('Success!')
                    this.participant_form.reset()

                    this.tags.forEach((tag) => {
                        tag.is_selected = false
                    })
                    this.data_sharing_service.setNewParticipant(true)
                    this.toggleShowTags()
                    this.closeForm()
                },
                error: (error) => {
                    console.log('Error posting data ' + error)
                },
            })
        } else {
            alert('Please fill all the required fields!')
        }
    }
}
