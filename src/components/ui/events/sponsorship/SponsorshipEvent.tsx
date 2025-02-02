import type { EventsProps } from '@/store/types/event.types'
import type { SponsorshipEvent } from './SponsorshipEvent.interface'

export function SponsorshipEvent({}: EventsProps<SponsorshipEvent>) {
    return <div>If you see this message, please contact me.</div>
}
