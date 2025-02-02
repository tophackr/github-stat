'use client'

import { type PropsWithChildren, use } from 'react'
import { PageLayout } from '@/components/layout/page/Page.layout'
import type { IUserNamePageProps } from '@/shared/interfaces/username.interface'
import { UserNameContext } from '@/context/UserName.context'

export default function Layout({
    children,
    params
}: PropsWithChildren<IUserNamePageProps>) {
    const { username } = use(params)

    return (
        <UserNameContext.Provider value={{ username }}>
            <PageLayout>{children}</PageLayout>
        </UserNameContext.Provider>
    )
}
