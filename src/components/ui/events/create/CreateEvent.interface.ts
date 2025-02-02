export interface CreateEvent {
    ref: string
    ref_type: string
    master_branch: string
    description: string | null
    pusher_type: string
}
