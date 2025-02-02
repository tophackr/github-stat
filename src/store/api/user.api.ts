import { apiUrl } from '@/config/api-url.config'
import type { IUserResponse } from '../types/all.types'
import { ApiTags } from '../types/api-tags.types'
import { api } from './api'

export const userApi = api
    .injectEndpoints({
        endpoints: build => ({
            fetchUser: build.query<IUserResponse, string>({
                query: (username: string) => apiUrl.USER(username)
            })
        })
    })
    .enhanceEndpoints({
        endpoints: {
            fetchUser: {
                providesTags: () => [ApiTags.User]
            }
        }
    })

export const { useFetchUserQuery, useLazyFetchUserQuery } = userApi
