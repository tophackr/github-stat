'use server'

import { cookies } from 'next/headers'
import { Theme } from '@/shared/enums/theme.enum'
import { defaultTheme } from './theme.consts'

const THEME_NAME = 'theme'

export async function getTheme(): Promise<Theme> {
    const cookiesStore = await cookies()
    const value = cookiesStore.get(THEME_NAME)

    return (value?.value || defaultTheme) as Theme
}

export async function setTheme(value?: Theme) {
    const cookiesStore = await cookies()
    cookiesStore.set(THEME_NAME, value || defaultTheme)
}
