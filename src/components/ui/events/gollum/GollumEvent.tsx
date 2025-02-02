import { BookIcon } from '@primer/styled-octicons'
import Link from 'next/link'
import { Content } from '@/components/ui/content/Content'
import type { EventsProps } from '@/store/types/event.types'
import { formatDateAgo } from '@/utils/date-format'
import { toTitleCase } from '@/utils/toTitleCase'
import { RepoLink } from '../RepoLink'
import type { GollumEvent } from './GollumEvent.interface'

export function GollumEvent({ e }: EventsProps<GollumEvent>) {
    const wikiPage = e.payload.pages[0]

    return (
        <Content.Row
            before={
                <BookIcon
                    className={
                        wikiPage.action === 'created'
                            ? 'text-green-500'
                            : 'text-slate-500'
                    }
                />
            }
            after={formatDateAgo(e.created_at)}
        >
            {toTitleCase(wikiPage.action)} a wiki page{' '}
            <Link
                className={'text-primary'}
                href={wikiPage.html_url}
            >
                {wikiPage.title}
            </Link>{' '}
            in <RepoLink e={e} />
        </Content.Row>
    )
}
