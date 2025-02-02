import { apiUrl } from '@/config/api-url.config'
import type { IGistsResponse } from '../types/all.types'
import { ApiTags } from '../types/api-tags.types'
import { api } from './api'

export const gistsApi = api
    .injectEndpoints({
        endpoints: build => ({
            fetchGists: build.query<IGistsResponse[], string>({
                query: (username: string) => apiUrl.GISTS(username)
            })
        })
    })
    .enhanceEndpoints({
        endpoints: {
            fetchGists: {
                providesTags: () => [ApiTags.User, ApiTags.Gists]
            }
        }
    })

export const { useFetchGistsQuery, useLazyFetchGistsQuery } = gistsApi
