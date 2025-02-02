import { ListItem } from '@/components/ui/list/ListItem'
import type { StatsDataProps } from './Stats.interface'

export function Bio({ data: { bio } }: StatsDataProps) {
    return (
        bio && (
            <ListItem>
                <small className={'text-secondary'}>Bio</small>
                <p>{bio}</p>
            </ListItem>
        )
    )
}
