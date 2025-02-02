import Image from 'next/image'
import { useContext } from 'react'
import { Content } from '@/components/ui/content/Content'
import { GIT_URL } from '@/constants/git.constants'
import { useFetchFollowersQuery } from '@/store/api/followers.api'
import { UserNameContext } from '@/context/UserName.context'

export function Followers() {
    const { username } = useContext(UserNameContext)
    const { data, isLoading } = useFetchFollowersQuery(username)

    return (
        <Content
            isLoading={isLoading}
            data={data}
            render={follower => (
                <Content.Cell
                    key={follower.id}
                    before={
                        <div className={'avatar'}>
                            <div className={'mask mask-squircle h-6 w-6'}>
                                <Image
                                    src={follower.avatar_url}
                                    alt={follower.login}
                                    width={24}
                                    height={24}
                                />
                            </div>
                        </div>
                    }
                    url={follower.html_url}
                >
                    {follower.login}
                </Content.Cell>
            )}
            noData={'No Followers'}
            viewGitLink={`${GIT_URL}/${username}?tab=followers`}
        />
    )
}
