import type { ChangesFromTo, Release } from '../Events.interface'

interface Changes {
    name?: ChangesFromTo
    body?: ChangesFromTo
}

export interface ReleaseEvent {
    action: string
    changes?: Changes
    release: Release
}
