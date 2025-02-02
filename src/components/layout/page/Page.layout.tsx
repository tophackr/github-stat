import type { PropsWithChildren } from 'react'
import { Header } from '@/components/ui/Header'

export function PageLayout({ children }: PropsWithChildren) {
    return (
        <main className={'container mx-auto px-4'}>
            <Header />

            {children}
        </main>
    )
}
