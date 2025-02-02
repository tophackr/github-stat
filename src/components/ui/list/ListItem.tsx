import clsx from 'clsx'
import type { JSX, PropsWithChildren } from 'react'

export function ListItem({
    children,
    className,
    ...rest
}: PropsWithChildren<JSX.IntrinsicElements['li']>) {
    return (
        <li
            className={clsx('p-3', className)}
            {...rest}
        >
            {children}
        </li>
    )
}
