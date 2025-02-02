import { RepoPushIcon } from '@primer/styled-octicons'
import Link from 'next/link'
import { Content } from '@/components/ui/content/Content'
import type { EventsProps } from '@/store/types/event.types'
import { formatDateAgo } from '@/utils/date-format'
import { repoUrl } from '../Events.utils'
import { RepoLink } from '../RepoLink'
import type { PushEvent } from './PushEvent.interface'

export function PushEvent({ e }: EventsProps<PushEvent>) {
    return (
        <Content.Row
            before={<RepoPushIcon className={'text-green-500'} />}
            after={formatDateAgo(e.created_at)}
        >
            Pushed{' '}
            <Link
                className={'text-primary'}
                href={repoUrl(
                    e,
                    'commits',
                    e.payload.ref.split('/').pop() || 'main'
                )}
            >
                {e.payload.commits.length}{' '}
                {e.payload.commits.length > 1 ? 'commits' : 'commit'}
            </Link>{' '}
            to <RepoLink e={e} />
        </Content.Row>
    )
}
