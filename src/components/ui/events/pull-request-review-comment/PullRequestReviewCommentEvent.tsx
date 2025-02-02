import { Content } from '@/components/ui/content/Content'
import type { EventsProps } from '@/store/types/event.types'
import { formatDateAgo } from '@/utils/date-format'
import { toTitleCase } from '@/utils/toTitleCase'
import { CommentIcon } from '@primer/styled-octicons'
import Link from 'next/link'
import { RepoLink } from '../RepoLink'
import type { PullRequestReviewCommentEvent } from './PullRequestReviewCommentEvent.interface'

export function PullRequestReviewCommentEvent({
    e
}: EventsProps<PullRequestReviewCommentEvent>) {
    return (
        <Content.Row
            before={<CommentIcon className={'text-green-500'} />}
            after={formatDateAgo(e.created_at)}
        >
            {toTitleCase(e.payload.action)} a{' '}
            <Link
                className={'text-primary'}
                href={e.payload.comment.html_url}
            >
                comment
            </Link>{' '}
            on their pull request in <RepoLink e={e} />
        </Content.Row>
    )
}
