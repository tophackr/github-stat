import { useEffect } from 'react'
import { getTheme } from '../theme/theme'
import { useTheme } from '../theme/use-theme'

export function useInitStore() {
    const { setTheme } = useTheme()

    useEffect(() => {
        getTheme().then(i => {
            console.log('theme', i)
            setTheme(i)
        })
    }, [setTheme])
}
