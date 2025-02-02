'use client'

import { getTheme } from '@/store/theme/theme'
import { useTheme } from '@/store/theme/use-theme'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { type PropsWithChildren, useEffect } from 'react'
import { Toaster } from 'sonner'

export function AppContent({ children }: PropsWithChildren) {
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        getTheme().then(setTheme)
    }, [setTheme])

    return (
        <html
            lang={'en'}
            data-theme={theme}
        >
            <body>
                {children}

                <Toaster
                    theme='dark'
                    duration={1500}
                    toastOptions={{ className: 'alert flex flex-row' }}
                />

                <SpeedInsights />
            </body>
        </html>
    )
}
