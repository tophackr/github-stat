import clsx from 'clsx'
import type { PropsWithChildren, ReactNode } from 'react'

interface ContentRowProps {
    before?: ReactNode
    after?: ReactNode
}

export function ContentRow({
    before,
    children,
    after
}: PropsWithChildren<ContentRowProps>) {
    return (
        <>
            <div className={'flex flex-1 items-center'}>
                {before}
                <div
                    className={clsx(
                        'flex flex-wrap gap-2 break-words break-all text-sm sm:text-base',
                        before && 'ml-4'
                    )}
                >
                    {children}
                </div>
            </div>
            {after && (
                <div className={'opacity-50 shrink-0 text-sm sm:text-base'}>
                    {after}
                </div>
            )}
        </>
    )
}
