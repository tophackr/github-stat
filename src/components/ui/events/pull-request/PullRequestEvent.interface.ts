import type { ChangesFromTo, PullRequest } from '../Events.interface'

interface Changes {
    title?: ChangesFromTo
    body?: ChangesFromTo
}

export interface PullRequestEvent {
    action: string
    number: number
    changes?: Changes
    pull_request: PullRequest
    reason?: string
}
