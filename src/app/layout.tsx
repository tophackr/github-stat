import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'
import { AppLayout } from '@/components/layout/app/App.layout'
import {
    SITE_DESCRIPTION,
    SITE_NAME,
    SITE_URL
} from '@/constants/seo.constants'
import '@/styles/globals.css'

export const metadata: Metadata = {
    title: {
        default: SITE_NAME,
        template: `%s | ${SITE_NAME}`
    },
    description: SITE_DESCRIPTION,
    icons: '/favicon.png',

    openGraph: {
        type: 'website',
        url: SITE_URL,
        title: {
            default: SITE_NAME,
            template: `%s | ${SITE_NAME}`
        },
        description: SITE_DESCRIPTION,
        siteName: SITE_NAME,
        images: `${SITE_URL}/banner`
    },

    twitter: {
        card: 'summary_large_image',
        title: {
            default: SITE_NAME,
            template: `%s | ${SITE_NAME}`
        },
        description: SITE_DESCRIPTION,
        images: `${SITE_URL}/banner`
    }
}

export default function Layout({ children }: PropsWithChildren) {
    return <AppLayout>{children}</AppLayout>
}
