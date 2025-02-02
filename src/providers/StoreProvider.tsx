'use client'

import { type PropsWithChildren, useRef } from 'react'
import { Provider } from 'react-redux'
import { type AppStore, makeStore } from '@/store/store'

export function StoreProvider({ children }: PropsWithChildren) {
    const storeRef = useRef<AppStore | null>(null)

    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore()
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}
