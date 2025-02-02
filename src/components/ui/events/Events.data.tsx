import type { FC } from 'react'
import { Events } from '@/shared/enums/events.enum'
import { CommitCommentEvent } from './commit-comment/CommitCommentEvent'
import { CreateEvent } from './create/CreateEvent'
import { DeleteEvent } from './delete/DeleteEvent'
import { ForkEvent } from './fork/ForkEvent'
import { GollumEvent } from './gollum/GollumEvent'
import { IssueCommentEvent } from './issue-comment/IssueCommentEvent'
import { IssuesEvent } from './issues/IssuesEvent'
import { MemberEvent } from './member/MemberEvent'
import { PublicEvent } from './public/PublicEvent'
import { PullRequestReviewCommentEvent } from './pull-request-review-comment/PullRequestReviewCommentEvent'
import { PullRequestReviewThreadEvent } from './pull-request-review-thread/PullRequestReviewThreadEvent'
import { PullRequestReviewEvent } from './pull-request-review/PullRequestReviewEvent'
import { PullRequestEvent } from './pull-request/PullRequestEvent'
import { PushEvent } from './push/PushEvent'
import { ReleaseEvent } from './release/ReleaseEvent'
import { SponsorshipEvent } from './sponsorship/SponsorshipEvent'
import { WatchEvent } from './watch/WatchEvent'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const eventsData: Record<Events, FC<any>> = {
    [Events.CommitCommentEvent]: CommitCommentEvent,
    [Events.CreateEvent]: CreateEvent,
    [Events.DeleteEvent]: DeleteEvent,
    [Events.ForkEvent]: ForkEvent,
    [Events.GollumEvent]: GollumEvent,
    [Events.IssueCommentEvent]: IssueCommentEvent,
    [Events.IssuesEvent]: IssuesEvent,
    [Events.MemberEvent]: MemberEvent,
    [Events.PublicEvent]: PublicEvent,
    [Events.PullRequestEvent]: PullRequestEvent,
    [Events.PullRequestReviewEvent]: PullRequestReviewEvent,
    [Events.PullRequestReviewCommentEvent]: PullRequestReviewCommentEvent,
    [Events.PullRequestReviewThreadEvent]: PullRequestReviewThreadEvent,
    [Events.PushEvent]: PushEvent,
    [Events.ReleaseEvent]: ReleaseEvent,
    [Events.SponsorshipEvent]: SponsorshipEvent,
    [Events.WatchEvent]: WatchEvent
}
