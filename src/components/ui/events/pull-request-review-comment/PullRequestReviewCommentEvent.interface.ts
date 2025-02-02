import type { ChangesFromTo, Comment, PullRequest } from '../Events.interface'

interface Changes {
    body?: ChangesFromTo
}

export interface PullRequestReviewCommentEvent {
    action: string
    changes?: Changes
    comment: Comment
    pull_request: PullRequest
}
