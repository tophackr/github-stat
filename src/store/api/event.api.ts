import { apiUrl } from '@/config/api-url.config'
import { ApiTags } from '../types/api-tags.types'
import type { IEventResponse } from '../types/event.types'
import { api } from './api'

export const eventApi = api
    .injectEndpoints({
        endpoints: build => ({
            fetchEvents: build.query<IEventResponse[], string>({
                query: (username: string) => apiUrl.EVENTS(username)
            })
        })
    })
    .enhanceEndpoints({
        endpoints: {
            fetchEvents: {
                providesTags: () => [ApiTags.User, ApiTags.Event]
            }
        }
    })

export const { useFetchEventsQuery, useLazyFetchEventsQuery } = eventApi
