import { TrashIcon } from '@primer/styled-octicons'
import { Content } from '@/components/ui/content/Content'
import type { EventsProps } from '@/store/types/event.types'
import { formatDateAgo } from '@/utils/date-format'
import { RepoLink } from '../RepoLink'
import type { DeleteEvent } from './DeleteEvent.interface'

export function DeleteEvent({ e }: EventsProps<DeleteEvent>) {
    return (
        <Content.Row
            before={<TrashIcon className={'text-red-500'} />}
            after={formatDateAgo(e.created_at)}
        >
            Deleted a {e.payload.ref_type} <code>{e.payload.ref}</code> from{' '}
            <RepoLink e={e} />
        </Content.Row>
    )
}
