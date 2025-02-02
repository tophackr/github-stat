class PAGES {
    HOME = '/'
    userId = (username: string) => `/${username}`
    userAvatar = (username: string) => `${this.userId(username)}/avatar`
}

export const pagesUrl = new PAGES()
