import Link from 'next/link'
import type { ReactNode } from 'react'
import type { Url } from 'url'
import { LoaderItem } from '@/components/ui/loader/LoaderItem'
import { ListItem } from '../list/ListItem'
import { ContentCell } from './ContentCell'
import { ContentRow } from './ContentRow'
import { NoData } from './NoData'

interface ContentProps<T> {
    isLoading: boolean
    data?: T[]
    render: (item: T) => ReactNode
    noData: string
    viewGitLink: Url | string
}

export function Content<T>({
    isLoading,
    data,
    render,
    noData,
    viewGitLink
}: ContentProps<T>) {
    if (isLoading) {
        return <LoaderItem />
    }

    if (!data?.length) {
        return <NoData>{noData}</NoData>
    }

    const ViewLink = (
        <ListItem
            key={'git-stat-view-link'}
            className={'flex items-center justify-center'}
        >
            <Link
                className={'text-primary'}
                href={viewGitLink}
            >
                View on GitHub
            </Link>
        </ListItem>
    )

    const mappedData = data.map(i => render(i))

    if (data.length >= 30) {
        mappedData.push(ViewLink)
    }

    return mappedData
}

Content.Cell = ContentCell
Content.Row = ContentRow
