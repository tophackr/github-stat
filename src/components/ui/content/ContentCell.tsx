import Link from 'next/link'
import type { PropsWithChildren, ReactNode } from 'react'
import type { Url } from 'url'
import { ListItem } from '@/components/ui/list/ListItem'
import { ContentRow } from './ContentRow'

interface ContentCellProps {
    before: ReactNode
    url: Url | string
}

export function ContentCell({
    before,
    url,
    children
}: PropsWithChildren<ContentCellProps>) {
    return (
        <ListItem>
            <ContentRow before={before}>
                <Link
                    className={'text-primary'}
                    href={url}
                >
                    {children}
                </Link>
            </ContentRow>
        </ListItem>
    )
}
