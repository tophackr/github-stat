import { type UseDispatch, useDispatch } from 'react-redux'
import type { AppDispatch } from '@/store/store'

export const useAppDispatch: UseDispatch<AppDispatch> =
    useDispatch.withTypes<AppDispatch>()
