import { ListItem } from '../list/ListItem'
import { Loader } from './Loader'

export function LoaderItem() {
    return (
        <ListItem className={'flex flex-col items-center justify-center h-64'}>
            <Loader />
            <p className={'text-xl'}>Loading...</p>
        </ListItem>
    )
}
