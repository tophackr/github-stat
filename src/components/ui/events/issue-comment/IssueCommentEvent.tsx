import { CommentIcon } from '@primer/styled-octicons'
import Link from 'next/link'
import { Content } from '@/components/ui/content/Content'
import type { ClassProps } from '@/shared/types/class.props'
import type { EventsProps } from '@/store/types/event.types'
import { formatDateAgo } from '@/utils/date-format'
import { toTitleCase } from '@/utils/toTitleCase'
import { RepoLink } from '../RepoLink'
import type { IssueCommentEvent } from './IssueCommentEvent.interface'

export function IssueCommentEvent({ e }: EventsProps<IssueCommentEvent>) {
    const colorData: Record<string, ClassProps> = {
        created: 'text-green-500',
        edited: 'text-slate-500',
        deleted: 'text-green-500'
    }

    return (
        <Content.Row
            before={<CommentIcon className={colorData[e.payload.action]} />}
            after={formatDateAgo(e.created_at)}
        >
            {toTitleCase(e.payload.action)}{' '}
            <Link
                className={'text-primary'}
                href={e.payload.comment.html_url}
            >
                a comment
            </Link>{' '}
            on an issue in <RepoLink e={e} />
        </Content.Row>
    )
}
