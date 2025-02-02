import type { PropsWithChildren } from 'react'
import { ListItem } from '@/components/ui/list/ListItem'

export function NoData({ children }: PropsWithChildren) {
    return (
        <ListItem className={'flex items-center justify-center h-64'}>
            {children}
        </ListItem>
    )
}
