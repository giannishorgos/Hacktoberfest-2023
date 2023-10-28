import { Component, OnInit } from '@angular/core'
import { DataSharingService } from 'src/app/services/data-sharing.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ApiService } from 'src/app/services/api-service.service'

@Component({
    selector: 'app-form-modal',
    templateUrl: './form-modal.component.html',
    styleUrls: ['./form-modal.component.css'],
})
export class FormModalComponent implements OnInit {
    participantForm: FormGroup
    displayForm: boolean = false
    showTags: boolean = true
    tags: { id: number; name: string; isSelected: boolean }[] = []

    constructor(
        private dataSharingService: DataSharingService,
        private apiService: ApiService
    ) {
        this.dataSharingService.displayFormChange.subscribe(
            (value: boolean) => {
                this.displayForm = value
            }
        )

        this.participantForm = new FormBuilder().group({
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
        this.apiService.getSkills().subscribe({
            next: (skills) => {
                skills.forEach((skill) => {
                    this.tags.push({
                        id: skill.id,
                        name: skill.name,
                        isSelected: false,
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
        this.dataSharingService.toggleForm()
    }

    toggleShowTags() {
        this.showTags = !this.showTags
    }

    toggleSelectedTag(index: number) {
        this.tags[index].isSelected = !this.tags[index].isSelected
    }

    onSubmit() {
        if (this.participantForm.valid) {
            const formData = this.participantForm.value
            formData.skills = []
            this.tags.forEach((tag) => {
                formData.skills.push(tag.id)
            })
            console.log(formData)

            this.apiService.postParticipant(formData).subscribe({
                next: () => {
                    console.log('Success!')
                    this.participantForm.reset()

                    this.tags.forEach((tag) => {
                        tag.isSelected = false
                    })
                    console.log(this.tags)
                    this.closeForm()
                },
                error: (error) => {
                    console.log('Error posting data ' + error)
                },
                complete: () => {},
            })
        }
    }
}
