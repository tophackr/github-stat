import Link from 'next/link'
import { HomeLayout } from '@/components/layout/home/Home.layout'
import { PageLayout } from '@/components/layout/page/Page.layout'
import { pagesUrl } from '@/config/pages-url.config'

export function NotFound() {
    return (
        <PageLayout>
            <HomeLayout>
                <h1 className={'text-4xl font-bold'}>Page Not Found</h1>

                <Link
                    className={'btn btn-primary mt-6'}
                    href={pagesUrl.HOME}
                >
                    Go to Home Page
                </Link>
            </HomeLayout>
        </PageLayout>
    )
}
