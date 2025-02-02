import { ListItem } from '@/components/ui/list/ListItem'
import type { StatsDataProps } from './Stats.interface'

export function Counts({
    data: { public_repos, public_gists, followers, following }
}: StatsDataProps) {
    const data = {
        'Public Repositories': public_repos,
        'Public Gists': public_gists,
        Followers: followers,
        Following: following
    }

    return (
        <ListItem>
            {Object.entries(data).map(([key, value]) => (
                <div
                    key={key}
                    className={'flex items-center justify-between'}
                >
                    <div className={'text-secondary'}>{key}</div>
                    <div className={'font-mono'}>{value}</div>
                </div>
            ))}
        </ListItem>
    )
}
