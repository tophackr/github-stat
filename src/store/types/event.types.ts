import type { Endpoints } from '@octokit/types'
import type { CommitCommentEvent } from '@/components/ui/events/commit-comment/CommitCommentEvent.interface'
import type { CreateEvent } from '@/components/ui/events/create/CreateEvent.interface'
import type { DeleteEvent } from '@/components/ui/events/delete/DeleteEvent.interface'
import type { ForkEvent } from '@/components/ui/events/fork/ForkEvent.interface'
import type { GollumEvent } from '@/components/ui/events/gollum/GollumEvent.interface'
import type { IssueCommentEvent } from '@/components/ui/events/issue-comment/IssueCommentEvent.interface'
import type { IssuesEvent } from '@/components/ui/events/issues/IssuesEvent.interface'
import type { MemberEvent } from '@/components/ui/events/member/MemberEvent.interface'
import type { PublicEvent } from '@/components/ui/events/public/PublicEvent.interface'
import type { PullRequestReviewCommentEvent } from '@/components/ui/events/pull-request-review-comment/PullRequestReviewCommentEvent.interface'
import type { PullRequestReviewThreadEvent } from '@/components/ui/events/pull-request-review-thread/PullRequestReviewThreadEvent.interface'
import type { PullRequestReviewEvent } from '@/components/ui/events/pull-request-review/PullRequestReviewEvent.interface'
import type { PullRequestEvent } from '@/components/ui/events/pull-request/PullRequestEvent.interface'
import type { PushEvent } from '@/components/ui/events/push/PushEvent.interface'
import type { ReleaseEvent } from '@/components/ui/events/release/ReleaseEvent.interface'
import type { SponsorshipEvent } from '@/components/ui/events/sponsorship/SponsorshipEvent.interface'
import type { WatchEvent } from '@/components/ui/events/watch/WatchEvent.interface'
import type { Events } from '@/shared/enums/events.enum'

type EventsPayload =
    | CommitCommentEvent
    | CreateEvent
    | DeleteEvent
    | ForkEvent
    | GollumEvent
    | IssueCommentEvent
    | IssuesEvent
    | MemberEvent
    | PublicEvent
    | PullRequestEvent
    | PullRequestReviewEvent
    | PullRequestReviewCommentEvent
    | PullRequestReviewThreadEvent
    | PushEvent
    | ReleaseEvent
    | SponsorshipEvent
    | WatchEvent

interface EventReassign<T extends EventsPayload = object> {
    type: Events
    payload: T
}

export type IEventResponse<T extends EventsPayload = object> = Omit<
    Endpoints['GET /users/{username}/events']['response']['data'][0],
    'payload' | 'type'
> &
    EventReassign<T>

export interface EventsProps<T extends EventsPayload = object> {
    e: IEventResponse<T>
}
