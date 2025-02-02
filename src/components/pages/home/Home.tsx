'use client'

import { MarkGithubIcon } from '@primer/styled-octicons'
import { SearchForm } from '@/components/shared/SearchForm'
import { Footer } from '@/components/ui/Footer'
import { SITE_NAME } from '@/constants/seo.constants'

export function Home() {
    return (
        <>
            <h1
                className={
                    'flex items-center justify-center text-5xl md:text-6xl gap-2'
                }
            >
                <MarkGithubIcon size={54} />
                {SITE_NAME}
            </h1>

            <SearchForm />

            <footer className={'absolute bottom-0 inset-x-0'}>
                <div className={'footer footer-center'}>
                    <Footer />
                </div>
            </footer>
        </>
    )
}
