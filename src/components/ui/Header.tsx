'use client'

import { MarkGithubIcon } from '@primer/styled-octicons'
import Link from 'next/link'
import { useContext } from 'react'
import { SITE_NAME } from '@/constants/seo.constants'
import { pagesUrl } from '@/config/pages-url.config'
import { SearchForm } from '../shared/SearchForm'
import { UserNameContext } from '@/context/UserName.context'

export function Header() {
    const { username } = useContext(UserNameContext)

    return (
        <header
            className={
                'navbar bg-base-100 text-base-content py-5 flex-col sm:flex-row'
            }
        >
            <div className={'flex-none sm:flex-1'}>
                <Link
                    className={'btn btn-ghost text-xl'}
                    href={pagesUrl.HOME}
                >
                    <MarkGithubIcon size={20} />
                    {SITE_NAME}
                </Link>
            </div>
            <div className={'flex-none gap-2'}>
                <SearchForm
                    orientation={'horizontal'}
                    username={username}
                />
            </div>
        </header>
    )
}
