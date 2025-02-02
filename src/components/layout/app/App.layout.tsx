'use client'

import { type PropsWithChildren } from 'react'
import { AppContent } from './App.content'
import { Providers } from '@/app/providers'

export function AppLayout({ children }: PropsWithChildren) {
    return (
        <Providers>
            <AppContent>{children}</AppContent>
        </Providers>
    )
}
