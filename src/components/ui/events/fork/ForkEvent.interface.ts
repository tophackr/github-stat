import type { Repository } from '../Events.interface'

export interface ForkEvent {
    forkee: Repository
}
