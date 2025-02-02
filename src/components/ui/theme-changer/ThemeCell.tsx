'use client'

import { CheckIcon } from '@primer/styled-octicons'
import clsx from 'clsx'
import type { Theme } from '@/shared/enums/theme.enum'

interface ThemeCellProps {
    item: Theme
    theme: Theme
    setTheme: (value: Theme) => void
}

export function ThemeCell({ item, theme, setTheme }: ThemeCellProps) {
    return (
        <button
            className={'outline-base-content text-start outline-offset-4'}
            onClick={() => setTheme(item)}
        >
            <span
                className={
                    'bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans'
                }
                data-theme={item}
            >
                <span className={'grid grid-cols-5 grid-rows-3'}>
                    <span
                        className={
                            'col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3'
                        }
                    >
                        <CheckIcon
                            className={clsx(
                                'h-3 w-3 shrink-0',
                                theme !== item && 'invisible'
                            )}
                        />

                        <span className={'flex-grow text-sm'}>{item}</span>
                        <span
                            className={'flex h-full shrink-0 flex-wrap gap-1'}
                        >
                            {[
                                'bg-primary',
                                'bg-secondary',
                                'bg-accent',
                                'bg-neutral'
                            ].map(i => (
                                <span
                                    key={i}
                                    className={clsx('rounded-badge w-2', i)}
                                />
                            ))}
                        </span>
                    </span>
                </span>
            </span>
        </button>
    )
}
