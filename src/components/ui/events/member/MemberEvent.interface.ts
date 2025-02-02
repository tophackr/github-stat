import type { ChangesFromTo, User } from '../Events.interface'

interface Changes {
    role?: ChangesFromTo
}

export interface MemberEvent {
    action: string
    member: User
    changes?: Changes
}
