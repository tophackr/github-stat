import type { PullRequest, PullRequestReview } from '../Events.interface'

export interface PullRequestReviewEvent {
    action: string
    review: PullRequestReview
    pull_request: PullRequest
}
