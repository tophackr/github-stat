class API {
    USER = (username: string) => `/users/${username}`
    REPOS = (username: string) => `${this.USER(username)}/repos`
    EVENTS = (username: string) => `${this.USER(username)}/events`
    STARRED = (username: string) => `${this.USER(username)}/starred`
    GISTS = (username: string) => `${this.USER(username)}/gists`
    FOLLOWERS = (username: string) => `${this.USER(username)}/followers`
    FOLLOWING = (username: string) => `${this.USER(username)}/following`
}

export const apiUrl = new API()
