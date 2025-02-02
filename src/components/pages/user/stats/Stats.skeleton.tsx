import { ListGroup } from '@/components/ui/list/ListGroup'
import { ListItem } from '@/components/ui/list/ListItem'

export function StatsSkeleton() {
    return (
        <ListGroup>
            <ListItem className={'flex items-center gap-4'}>
                <div className={'skeleton h-20 w-20 mask mask-squircle'}></div>
                <div className={'flex flex-col gap-4'}>
                    <div className='skeleton h-4 w-40'></div>
                    <div className='skeleton h-4 w-24'></div>
                </div>
            </ListItem>

            <ListItem className={'flex items-center'}>
                <div className={'skeleton h-12 w-full'}></div>
            </ListItem>

            <ListItem className={'flex items-center'}>
                <div className={'skeleton h-28 w-full'}></div>
            </ListItem>

            <ListItem className={'flex items-center'}>
                <div className={'skeleton h-4 w-full'}></div>
            </ListItem>

            <ListItem className={'flex items-center'}>
                <div className={'skeleton h-32 w-full'}></div>
            </ListItem>
        </ListGroup>
    )
}
