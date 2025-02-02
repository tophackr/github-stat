import type { PropsWithChildren } from 'react'
import { StoreProvider } from './StoreProvider'

export function HeadProvider({ children }: PropsWithChildren) {
    return <StoreProvider>{children}</StoreProvider>
}
