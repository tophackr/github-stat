import type { Metadata } from 'next'
import { NotFound } from '@/components/ui/NotFound'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
    title: 'Page not found',
    ...NO_INDEX_PAGE
}

export default function NotFoundPage() {
    return <NotFound />
}
