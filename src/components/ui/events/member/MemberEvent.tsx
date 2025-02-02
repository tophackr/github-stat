import { PeopleIcon } from '@primer/styled-octicons'
import Link from 'next/link'
import { Content } from '@/components/ui/content/Content'
import type { EventsProps } from '@/store/types/event.types'
import { formatDateAgo } from '@/utils/date-format'
import { toTitleCase } from '@/utils/toTitleCase'
import { RepoLink } from '../RepoLink'
import type { MemberEvent } from './MemberEvent.interface'

export function MemberEvent({ e }: EventsProps<MemberEvent>) {
    return (
        <Content.Row
            before={
                <PeopleIcon
                    className={
                        e.payload.action === 'added'
                            ? 'text-green-500'
                            : 'text-slate-500'
                    }
                />
            }
            after={formatDateAgo(e.created_at)}
        >
            {toTitleCase(e.payload.action)}{' '}
            <Link
                className={'text-primary'}
                href={e.payload.member.html_url}
            >
                {e.payload.member.login}
            </Link>{' '}
            to <RepoLink e={e} />
        </Content.Row>
    )
}
