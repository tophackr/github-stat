import { RepoForkedIcon } from '@primer/styled-octicons'
import Link from 'next/link'
import { Content } from '@/components/ui/content/Content'
import type { EventsProps } from '@/store/types/event.types'
import { formatDateAgo } from '@/utils/date-format'
import { RepoLink } from '../RepoLink'
import type { ForkEvent } from './ForkEvent.interface'

export function ForkEvent({ e }: EventsProps<ForkEvent>) {
    return (
        <Content.Row
            before={<RepoForkedIcon className={'text-green-500'} />}
            after={formatDateAgo(e.created_at)}
        >
            Forked a repo <RepoLink e={e} /> to{' '}
            <Link
                className={'text-primary'}
                href={e.payload.forkee.html_url}
            >
                {e.payload.forkee.full_name}
            </Link>
        </Content.Row>
    )
}
