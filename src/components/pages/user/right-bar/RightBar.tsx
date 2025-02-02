import clsx from 'clsx'
import dynamic from 'next/dynamic'
import { type ReactNode, useState } from 'react'
import { ListGroup } from '@/components/ui/list/ListGroup'
import { ListItem } from '@/components/ui/list/ListItem'
import { LoaderItem } from '@/components/ui/loader/LoaderItem'
import { Tabs } from '@/shared/enums/tabs.enum'

interface RightBarData {
    title: string
    content: ReactNode
}

const DynamicActivity = dynamic(
    () => import('./Activity').then(mod => mod.Activity),
    {
        loading: () => <LoaderItem />,
        ssr: false
    }
)
const DynamicRepos = dynamic(() => import('./Repos').then(mod => mod.Repos), {
    loading: () => <LoaderItem />,
    ssr: false
})
const DynamicStarred = dynamic(
    () => import('./Starred').then(mod => mod.Starred),
    {
        loading: () => <LoaderItem />,
        ssr: false
    }
)
const DynamicGists = dynamic(() => import('./Gists').then(mod => mod.Gists), {
    loading: () => <LoaderItem />,
    ssr: false
})
const DynamicFollowers = dynamic(
    () => import('./Followers').then(mod => mod.Followers),
    {
        loading: () => <LoaderItem />,
        ssr: false
    }
)
const DynamicFollowing = dynamic(
    () => import('./Following').then(mod => mod.Following),
    {
        loading: () => <LoaderItem />,
        ssr: false
    }
)

export function RightBar() {
    const data: Record<Tabs, RightBarData> = {
        [Tabs.activities]: {
            title: 'Latest Activities',
            content: <DynamicActivity />
        },
        [Tabs.repos]: {
            title: 'Repositories',
            content: <DynamicRepos />
        },
        [Tabs.starred]: {
            title: 'Starred',
            content: <DynamicStarred />
        },
        [Tabs.gists]: {
            title: 'Gists',
            content: <DynamicGists />
        },
        [Tabs.followers]: {
            title: 'Followers',
            content: <DynamicFollowers />
        },
        [Tabs.following]: {
            title: 'Following',
            content: <DynamicFollowing />
        }
    }

    const [tab, setTab] = useState<Tabs>(Tabs.activities)

    return (
        <ListGroup>
            <ListItem className={'text-xl'}>{data[tab].title}</ListItem>
            <ListItem>
                <div
                    role={'tablist'}
                    className={'tabs tabs-boxed flex flex-wrap justify-around'}
                >
                    {Object.entries(data).map(([key, { title }]) => (
                        <a
                            key={key}
                            role={'tab'}
                            className={clsx('tab', key === tab && 'tab-active')}
                            onClick={() => setTab(key as Tabs)}
                        >
                            {title}
                        </a>
                    ))}
                </div>
            </ListItem>

            {data[tab].content}
        </ListGroup>
    )
}
