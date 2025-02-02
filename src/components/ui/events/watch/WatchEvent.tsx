import { StarFillIcon } from '@primer/styled-octicons'
import { Content } from '@/components/ui/content/Content'
import type { EventsProps } from '@/store/types/event.types'
import { formatDateAgo } from '@/utils/date-format'
import { RepoLink } from '../RepoLink'
import type { WatchEvent } from './WatchEvent.interface'

export function WatchEvent({ e }: EventsProps<WatchEvent>) {
    return (
        <Content.Row
            before={<StarFillIcon className={'text-yellow-500'} />}
            after={formatDateAgo(e.created_at)}
        >
            Starred a repo <RepoLink e={e} />
        </Content.Row>
    )
}
