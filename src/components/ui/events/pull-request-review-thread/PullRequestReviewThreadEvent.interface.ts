import type { PullRequest } from '../Events.interface'

interface Thread {
    id: string
    comments: Comment[]
    is_commentable: boolean
}

export interface PullRequestReviewThreadEvent {
    action: string
    thread: Thread
    pull_request: PullRequest
}
