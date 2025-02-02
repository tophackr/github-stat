'use client'

import { GitBranchIcon } from '@primer/styled-octicons'
import clsx from 'clsx'
import Link from 'next/link'
import type { DetailedHTMLProps, HTMLAttributes } from 'react'
import { GIT_SOURCE, GIT_URL } from '@/constants/git.constants'

export function Footer({
    className,
    ...rest
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
    return (
        <aside
            className={clsx('flex my-5', className)}
            {...rest}
        >
            <GitBranchIcon /> Code on{' '}
            <Link
                className={'text-primary'}
                href={`${GIT_URL}/${GIT_SOURCE}`}
            >
                {GIT_SOURCE}
            </Link>
        </aside>
    )
}
