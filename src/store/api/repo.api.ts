import { apiUrl } from '@/config/api-url.config'
import type { IRepoResponse } from '../types/all.types'
import { ApiTags } from '../types/api-tags.types'
import { api } from './api'

export const repoApi = api
    .injectEndpoints({
        endpoints: build => ({
            fetchRepos: build.query<IRepoResponse[], string>({
                query: (username: string) => apiUrl.REPOS(username)
            })
        })
    })
    .enhanceEndpoints({
        endpoints: {
            fetchRepos: {
                providesTags: () => [ApiTags.User, ApiTags.Repo]
            }
        }
    })

export const { useFetchReposQuery, useLazyFetchReposQuery } = repoApi
