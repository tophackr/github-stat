import { apiUrl } from '@/config/api-url.config'
import type { IFollowersResponse } from '../types/all.types'
import { ApiTags } from '../types/api-tags.types'
import { api } from './api'

export const followersApi = api
    .injectEndpoints({
        endpoints: build => ({
            fetchFollowers: build.query<IFollowersResponse[], string>({
                query: (username: string) => apiUrl.FOLLOWERS(username)
            })
        })
    })
    .enhanceEndpoints({
        endpoints: {
            fetchFollowers: {
                providesTags: () => [ApiTags.User, ApiTags.Followers]
            }
        }
    })

export const { useFetchFollowersQuery, useLazyFetchFollowersQuery } =
    followersApi
