import { TagIcon } from '@primer/styled-octicons'
import Link from 'next/link'
import { Content } from '@/components/ui/content/Content'
import type { EventsProps } from '@/store/types/event.types'
import { formatDateAgo } from '@/utils/date-format'
import { RepoLink } from '../RepoLink'
import type { ReleaseEvent } from './ReleaseEvent.interface'

export function ReleaseEvent({ e }: EventsProps<ReleaseEvent>) {
    return (
        <Content.Row
            before={<TagIcon className={'text-green-500'} />}
            after={formatDateAgo(e.created_at)}
        >
            Released a{' '}
            <Link
                className={'text-primary'}
                href={e.payload.release.html_url}
            >
                {e.payload.release.name}
            </Link>{' '}
            in <RepoLink e={e} />
        </Content.Row>
    )
}
