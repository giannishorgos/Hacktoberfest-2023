import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-tag-option',
    templateUrl: './tag-option.component.html',
    styleUrls: ['./tag-option.component.css'],
})
export class TagOptionComponent {
    @Input() is_selected!: boolean
    @Input() tag_name!: string
}
