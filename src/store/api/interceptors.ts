import {
    type BaseQueryFn,
    type FetchBaseQueryArgs,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react'
import 'dotenv/config'
import { GIT_API_URL } from '@/constants/git.constants'

export const baseQueryArgs: FetchBaseQueryArgs = {
    baseUrl: GIT_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
}

export const baseQueryAuthArgs: FetchBaseQueryArgs = {
    ...baseQueryArgs,
    prepareHeaders: headers => {
        const gitToken = process.env['GITHUB_TOKEN']

        if (gitToken) {
            headers.set('Authorization', gitToken)
        }
    }
}

export const baseQueryWithReAuth: BaseQueryFn = async (
    args,
    api,
    extraOptions
) => {
    const result = await fetchBaseQuery(baseQueryAuthArgs)(
        args,
        api,
        extraOptions
    )

    if (
        result.error &&
        result.error.status === 401 &&
        result.meta?.response?.headers.get('x-ratelimit-remaining') === '0'
    ) {
        const resetTimeEpochSeconds =
            Number(
                result.meta?.response?.headers.get('x-ratelimit-remaining')
            ) || 0
        const currentTimeEpochSeconds = Math.floor(Date.now() / 1000)
        const secondsToWait = resetTimeEpochSeconds - currentTimeEpochSeconds

        console.log(
            `You have exceeded your rate limit. Retrying in ${secondsToWait} seconds.`
        )

        setTimeout(
            baseQueryWithReAuth,
            secondsToWait * 1000,
            args,
            api,
            extraOptions
        )
    }

    return result
}
