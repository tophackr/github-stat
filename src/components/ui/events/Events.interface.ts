export interface User {
    login: string
    id: number
    avatar_url: string
    html_url: string
    site_admin: boolean
}

export interface Repository {
    id: number
    name: string
    full_name: string
    private: boolean
    owner: User
    html_url: string
}

export interface Issue {
    url: string
    id: number
    node_id: string
    title: string
    body: string
    user: User
    created_at: string
    updated_at: string
    state: string
    html_url: string
}

export interface PullRequest {
    url: string
    id: number
    node_id: string
    title: string
    body: string
    user: User
    created_at: string
    updated_at: string
    state: string
    html_url: string
}

export interface PullRequestReview {
    id: number
    node_id: string
    user: User
    body: string
    state: string
    html_url: string
}

export interface Commit {
    id: string
    message: string
    timestamp: string
    author: User
}

export interface Release {
    id: number
    tag_name: string
    name: string
    body: string
    created_at: string
    published_at: string
    html_url: string
}

export interface Comment {
    id: number
    body: string
    user: User
    created_at: string
    updated_at: string
    html_url: string
}

export interface ChangesFromTo<T = string> {
    from: T
    to: T
}
