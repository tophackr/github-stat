import { ListGroup } from '@/components/ui/list/ListGroup'
import { ListItem } from '@/components/ui/list/ListItem'

export function RightBarSkeleton() {
    return (
        <ListGroup>
            <ListItem className={'flex items-center'}>
                <div className={'skeleton h-12 w-full'}></div>
            </ListItem>

            <ListItem className={'flex items-center'}>
                <div className={'skeleton h-12 w-full'}></div>
            </ListItem>

            <ListItem className={'flex items-center'}>
                <div className={'skeleton h-32 w-full'}></div>
            </ListItem>
        </ListGroup>
    )
}
