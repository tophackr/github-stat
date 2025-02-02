import type { PropsWithChildren } from 'react'
import { HeadProvider } from '@/providers/HeadProvider'

export function Providers({ children }: PropsWithChildren) {
    return <HeadProvider>{children}</HeadProvider>
}
