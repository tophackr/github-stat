import type { ResolvingMetadata } from 'next'
import { User } from '@/components/pages/user/User'
import { SITE_URL } from '@/constants/seo.constants'
import type { IUserNamePageProps } from '@/shared/interfaces/username.interface'
import { userApi } from '@/store/api/user.api'
import { makeStore } from '@/store/store'

export async function generateMetadata(
    { params }: IUserNamePageProps,
    parent: ResolvingMetadata
) {
    const { username } = await params
    const { openGraph, twitter } = await parent

    const { data, isLoading } = await makeStore().dispatch(
        userApi.endpoints.fetchUser.initiate(username)
    )

    if (!isLoading && data) {
        const { name, login, bio, avatar_url } = data

        return {
            title: name ?? login,
            description: bio ?? null,

            openGraph: Object.assign(openGraph ?? {}, {
                url: `${SITE_URL}/${login}`,
                title: name ?? login,
                description: bio ?? null,
                siteName: name ?? login,
                images: avatar_url
            }),

            twitter: Object.assign(twitter ?? {}, {
                card: 'summary',
                title: name ?? login,
                description: bio ?? null,
                images: avatar_url
            })
        }
    }
}

export default function Page() {
    return <User />
}
