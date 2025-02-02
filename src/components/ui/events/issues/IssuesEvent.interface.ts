import type { ChangesFromTo, Issue, User } from '../Events.interface'

interface Changes {
    title?: ChangesFromTo
    body?: ChangesFromTo
}

export interface IssuesEvent {
    action: string
    issue: Issue
    changes?: Changes
    assignee?: User
    label?: string
}
