import type { Endpoints } from '@octokit/types'

export type IUserResponse =
    Endpoints['GET /users/{username}']['response']['data']
export type IRepoResponse =
    Endpoints['GET /users/{username}/repos']['response']['data'][0]
export type IStarredResponse =
    Endpoints['GET /users/{username}/starred']['response']['data'][0]
export type IGistsResponse =
    Endpoints['GET /users/{username}/gists']['response']['data'][0]
export type IFollowersResponse =
    Endpoints['GET /users/{username}/followers']['response']['data'][0]
export type IFollowingResponse =
    Endpoints['GET /users/{username}/following']['response']['data'][0]
