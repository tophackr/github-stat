import clsx from 'clsx'
import type { JSX, PropsWithChildren } from 'react'

export function ListGroup({
    children,
    className,
    ...rest
}: PropsWithChildren<JSX.IntrinsicElements['ul']>) {
    return (
        <ul
            className={clsx(
                'divide-y divide-base-content rounded-btn border border-base-content',
                className
            )}
            {...rest}
        >
            {children}
        </ul>
    )
}
