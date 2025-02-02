import Link from 'next/link'
import type { EventsProps } from '@/store/types/event.types'
import { repoUrl } from './Events.utils'

export function RepoLink({ e }: EventsProps) {
    return (
        <Link
            className={'text-primary'}
            href={repoUrl(e)}
        >
            {e.repo.name}
        </Link>
    )
}
