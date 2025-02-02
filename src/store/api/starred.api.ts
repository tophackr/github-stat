import { apiUrl } from '@/config/api-url.config'
import type { IStarredResponse } from '../types/all.types'
import { ApiTags } from '../types/api-tags.types'
import { api } from './api'

export const starredApi = api
    .injectEndpoints({
        endpoints: build => ({
            fetchStarred: build.query<IStarredResponse[], string>({
                query: (username: string) => apiUrl.STARRED(username)
            })
        })
    })
    .enhanceEndpoints({
        endpoints: {
            fetchStarred: {
                providesTags: () => [ApiTags.User, ApiTags.Starred]
            }
        }
    })

export const { useFetchStarredQuery, useLazyFetchStarredQuery } = starredApi
