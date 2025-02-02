import { GitBranchIcon, RepoIcon, TagIcon } from '@primer/styled-octicons'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { Content } from '@/components/ui/content/Content'
import type { EventsProps } from '@/store/types/event.types'
import { formatDateAgo } from '@/utils/date-format'
import { repoUrl } from '../Events.utils'
import { RepoLink } from '../RepoLink'
import type { CreateEvent } from './CreateEvent.interface'

export function CreateEvent({ e }: EventsProps<CreateEvent>) {
    const iconData: Record<string, ReactNode> = {
        branch: <GitBranchIcon className={'text-green-500'} />,
        tag: <TagIcon className={'text-green-500'} />,
        repository: <RepoIcon className={'text-green-500'} />
    }
    const urlData =
        e.payload.ref_type === 'branch' ? (
            <>
                <Link
                    className={'text-primary'}
                    href={repoUrl(e, 'tree', e.payload.ref)}
                >
                    {e.payload.ref}
                </Link>{' '}
                in <RepoLink e={e} />
            </>
        ) : e.payload.ref_type === 'tag' ? (
            <>
                <Link
                    className={'text-primary'}
                    href={repoUrl(e, 'releases', 'tag', e.payload.ref)}
                >
                    {e.payload.ref}
                </Link>{' '}
                in <RepoLink e={e} />
            </>
        ) : (
            <RepoLink e={e} />
        )

    return (
        <Content.Row
            before={iconData[e.payload.ref_type]}
            after={formatDateAgo(e.created_at)}
        >
            Created a {e.payload.ref_type} {urlData}
        </Content.Row>
    )
}
