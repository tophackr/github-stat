import { ListItem } from '@/components/ui/list/ListItem'
import { formatDateString } from '@/utils/date-format'
import type { StatsDataProps } from './Stats.interface'

export function Info({
    data: { created_at, updated_at, location }
}: StatsDataProps) {
    return (
        <ListItem className={'flex flex-col gap-y-4'}>
            <div>
                <small className={'text-secondary'}>Joined</small>
                <p>{formatDateString(created_at)}</p>
            </div>

            {location && (
                <div>
                    <small className={'text-secondary'}>Location</small>
                    <p className={'text-primary'}>{location}</p>
                </div>
            )}

            <div className={'text-secondary'}>
                Last updated on {formatDateString(updated_at)}
            </div>
        </ListItem>
    )
}
