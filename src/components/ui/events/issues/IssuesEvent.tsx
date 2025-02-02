import {
    IssueClosedIcon,
    IssueOpenedIcon,
    IssueReopenedIcon,
    PencilIcon,
    PersonIcon,
    TagIcon
} from '@primer/styled-octicons'
import Link from 'next/link'
import type { JSX } from 'react'
import { Content } from '@/components/ui/content/Content'
import type { EventsProps } from '@/store/types/event.types'
import { formatDateAgo } from '@/utils/date-format'
import { toTitleCase } from '@/utils/toTitleCase'
import { RepoLink } from '../RepoLink'
import type { IssuesEvent } from './IssuesEvent.interface'

export function IssuesEvent({ e }: EventsProps<IssuesEvent>) {
    const iconData: Record<string, JSX.Element> = {
        opened: <IssueOpenedIcon className={'text-green-500'} />,
        edited: <PencilIcon className={'text-slate-500'} />,
        closed: <IssueClosedIcon className={'text-red-500'} />,
        reopened: <IssueReopenedIcon className={'text-purple-500'} />,
        assigned: <PersonIcon className={'text-green-500'} />,
        unassigned: <PersonIcon className={'text-red-500'} />,
        labeled: <TagIcon className={'text-green-500'} />,
        unlabeled: <TagIcon className={'text-red-500'} />
    }

    return (
        <Content.Row
            before={iconData[e.payload.action]}
            after={formatDateAgo(e.created_at)}
        >
            {toTitleCase(e.payload.action)} an{' '}
            <Link
                className={'text-primary'}
                href={e.payload.issue.html_url}
            >
                issue
            </Link>{' '}
            in <RepoLink e={e} />
        </Content.Row>
    )
}
