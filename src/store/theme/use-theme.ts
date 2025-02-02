import type { Theme } from '@/shared/enums/theme.enum'
import { useActions } from '../hooks/use-actions'
import { useAppSelector } from '../hooks/use-app-selector'
import { setTheme as setThemeCookie } from './theme'
import { selectTheme } from './theme.slice'

export function useTheme() {
    const theme = useAppSelector(selectTheme)
    const { setTheme } = useActions()

    const setThemeWithCookie = (value: Theme) => {
        setTheme(value)
        setThemeCookie(value)
    }

    return { theme, setTheme, setThemeWithCookie }
}
