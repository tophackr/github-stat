import { GitPullRequestIcon } from '@primer/styled-octicons'
import Link from 'next/link'
import { Content } from '@/components/ui/content/Content'
import type { EventsProps } from '@/store/types/event.types'
import { formatDateAgo } from '@/utils/date-format'
import { toTitleCase } from '@/utils/toTitleCase'
import { RepoLink } from '../RepoLink'
import type { PullRequestReviewEvent } from './PullRequestReviewEvent.interface'

export function PullRequestReviewEvent({
    e
}: EventsProps<PullRequestReviewEvent>) {
    return (
        <Content.Row
            before={<GitPullRequestIcon className={'text-green-500'} />}
            after={formatDateAgo(e.created_at)}
        >
            {toTitleCase(e.payload.action)} a{' '}
            <Link
                className={'text-primary'}
                href={e.payload.review.html_url}
            >
                pull request review
            </Link>{' '}
            in <RepoLink e={e} />
        </Content.Row>
    )
}
