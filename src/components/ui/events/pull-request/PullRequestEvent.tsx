import {
    EyeIcon,
    GitPullRequestClosedIcon,
    GitPullRequestIcon,
    PencilIcon,
    PersonIcon,
    SyncIcon,
    TagIcon
} from '@primer/styled-octicons'
import Link from 'next/link'
import type { JSX } from 'react'
import { Content } from '@/components/ui/content/Content'
import type { EventsProps } from '@/store/types/event.types'
import { formatDateAgo } from '@/utils/date-format'
import { toTitleCase } from '@/utils/toTitleCase'
import { RepoLink } from '../RepoLink'
import type { PullRequestEvent } from './PullRequestEvent.interface'

export function PullRequestEvent({ e }: EventsProps<PullRequestEvent>) {
    const iconData: Record<string, JSX.Element> = {
        opened: <GitPullRequestIcon className={'text-green-500'} />,
        edited: <PencilIcon className={'text-slate-500'} />,
        closed: <GitPullRequestClosedIcon className={'text-red-500'} />,
        reopened: <GitPullRequestIcon className={'text-green-500'} />,
        assigned: <PersonIcon className={'text-green-500'} />,
        unassigned: <PersonIcon className={'text-red-500'} />,
        review_requested: <EyeIcon className={'text-green-500'} />,
        review_request_removed: <EyeIcon className={'text-red-500'} />,
        labeled: <TagIcon className={'text-green-500'} />,
        unlabeled: <TagIcon className={'text-red-500'} />,
        synchronize: <SyncIcon className={'text-slate-500'} />
    }

    return (
        <Content.Row
            before={iconData[e.payload.action]}
            after={formatDateAgo(e.created_at)}
        >
            {toTitleCase(e.payload.action.replaceAll('_', ' '))} a{' '}
            <Link
                className={'text-primary'}
                href={e.payload.pull_request.html_url}
            >
                pull request
            </Link>{' '}
            in <RepoLink e={e} />
        </Content.Row>
    )
}
