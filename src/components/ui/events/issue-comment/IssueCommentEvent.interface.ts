import type { ChangesFromTo, Comment, Issue } from '../Events.interface'

interface Changes {
    body?: ChangesFromTo
}

export interface IssueCommentEvent {
    action: string
    changes?: Changes
    comment: Comment
    issue: Issue
}
