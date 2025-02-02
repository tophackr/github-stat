import { SparklesFillIcon } from '@primer/styled-octicons'
import clsx from 'clsx'
import { Theme } from '@/shared/enums/theme.enum'
import { useTheme } from '@/store/theme/use-theme'
import { ThemeCell } from './ThemeCell'

export function ThemeChanger() {
    const { theme, setThemeWithCookie } = useTheme()

    return (
        <div className={'dropdown dropdown-top'}>
            <div
                tabIndex={0}
                role={'button'}
                className={'btn btn-square btn-ghost'}
            >
                <SparklesFillIcon />
            </div>
            <div
                tabIndex={0}
                className={clsx(
                    'dropdown-content',
                    'bg-base-200 text-base-content rounded-box',
                    'h-[28.6rem] max-h-[calc(100vh-10rem)] w-56 overflow-y-auto',
                    'border border-base-content shadow-2xl'
                )}
            >
                <div className={'grid grid-cols-1 gap-3 p-3'}>
                    {Object.values(Theme).map(t => (
                        <ThemeCell
                            key={t}
                            item={t}
                            theme={theme}
                            setTheme={setThemeWithCookie}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
