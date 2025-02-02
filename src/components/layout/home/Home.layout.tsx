import clsx from 'clsx'
import type { PropsWithChildren } from 'react'

export function HomeLayout({ children }: PropsWithChildren) {
    return (
        <main
            className={clsx(
                'hero',
                'min-h-[calc(100vh-120px)] sm:min-h-[calc(100vh-88px)]'
            )}
        >
            <div className={'hero-content text-center'}>
                <div className={'max-w-md'}>{children}</div>
            </div>
        </main>
    )
}
