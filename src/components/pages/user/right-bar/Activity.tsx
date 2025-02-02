import { useContext } from 'react'
import { Content } from '@/components/ui/content/Content'
import { eventsData } from '@/components/ui/events/Events.data'
import { ListItem } from '@/components/ui/list/ListItem'
import { GIT_URL } from '@/constants/git.constants'
import { useFetchEventsQuery } from '@/store/api/event.api'
import { UserNameContext } from '@/context/UserName.context'

export function Activity() {
    const { username } = useContext(UserNameContext)
    const { data, isLoading } = useFetchEventsQuery(username)

    return (
        <Content
            isLoading={isLoading}
            data={data}
            render={event => {
                const EventComponent = eventsData[event.type]

                return (
                    <ListItem
                        key={event.id}
                        className={'flex items-center justify-between'}
                    >
                        {EventComponent && <EventComponent e={event} />}
                    </ListItem>
                )
            }}
            noData={'No Activity'}
            viewGitLink={`${GIT_URL}/${username}?tab=overview`}
        />
    )
}
