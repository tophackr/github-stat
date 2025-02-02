import type { Commit } from '../Events.interface'

export interface PushEvent {
    push_id: string
    size: number
    distinct_size: number
    ref: string
    head: string
    before: string
    commits: Commit[]
}
