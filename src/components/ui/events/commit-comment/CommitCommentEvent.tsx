import type { EventsProps } from '@/store/types/event.types'
import type { CommitCommentEvent } from './CommitCommentEvent.interface'

export function CommitCommentEvent({}: EventsProps<CommitCommentEvent>) {
    return <div>If you see this message, please contact me.</div>
}
