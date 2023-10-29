export interface Participant {
    id: number
    name: string
    last_name: string
    gitlab_id: string
    kaggle_id: string
    bio: string
    birth_date: string
    registration_date: string
    skills: string
}

export interface Skill {
    id: number
    name: string
}

export interface InsertParticipant {
    name: string
    last_name: string
    gitlab_id: string
    kaggle_id: string
    bio: string
    birth_date: string
    skills: number[]
}
