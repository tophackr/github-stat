import type { ChangesFromTo } from '../Events.interface'

interface Changes {
    tier?: ChangesFromTo<object>
    privacy_level?: ChangesFromTo
}

export interface SponsorshipEvent {
    action: string
    effective_date: string
    changes?: Changes
}
