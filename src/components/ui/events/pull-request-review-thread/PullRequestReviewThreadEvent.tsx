import type { EventsProps } from '@/store/types/event.types'
import type { PullRequestReviewThreadEvent } from './PullRequestReviewThreadEvent.interface'

export function PullRequestReviewThreadEvent({}: EventsProps<PullRequestReviewThreadEvent>) {
    return <div>If you see this message, please contact me.</div>
}
