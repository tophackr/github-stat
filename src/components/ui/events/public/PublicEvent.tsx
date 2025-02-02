import type { EventsProps } from '@/store/types/event.types'
import type { PublicEvent } from './PublicEvent.interface'

export function PublicEvent({}: EventsProps<PublicEvent>) {
    return <div>If you see this message, please contact me.</div>
}
