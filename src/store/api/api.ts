import { createApi } from '@reduxjs/toolkit/query/react'
import { ApiTags } from '../types/api-tags.types'
import { baseQueryWithReAuth } from './interceptors'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReAuth,
    tagTypes: Object.values(ApiTags),
    endpoints: () => ({})
})
