import { useMemo } from 'react'
import { bindActionCreators } from 'redux'
import { useAppDispatch } from '@/store/hooks/use-app-dispatch'
import { rootActions } from '../root-actions'

export const useActions = () => {
    const dispatch = useAppDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
