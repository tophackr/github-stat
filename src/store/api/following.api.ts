import { apiUrl } from '@/config/api-url.config'
import type { IFollowingResponse } from '../types/all.types'
import { ApiTags } from '../types/api-tags.types'
import { api } from './api'

export const followingApi = api
    .injectEndpoints({
        endpoints: build => ({
            fetchFollowing: build.query<IFollowingResponse[], string>({
                query: (username: string) => apiUrl.FOLLOWING(username)
            })
        })
    })
    .enhanceEndpoints({
        endpoints: {
            fetchFollowing: {
                providesTags: () => [ApiTags.User, ApiTags.Following]
            }
        }
    })

export const { useFetchFollowingQuery, useLazyFetchFollowingQuery } =
    followingApi
