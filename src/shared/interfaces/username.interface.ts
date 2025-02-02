export interface IUserNameProps {
    username: string
}

export interface IUserNamePageProps {
    params: Promise<{ username: string }>
}
