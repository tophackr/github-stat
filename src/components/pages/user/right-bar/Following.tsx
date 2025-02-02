import Image from 'next/image'
import { useContext } from 'react'
import { Content } from '@/components/ui/content/Content'
import { GIT_URL } from '@/constants/git.constants'
import { useFetchFollowingQuery } from '@/store/api/following.api'
import { UserNameContext } from '@/context/UserName.context'

export function Following() {
    const { username } = useContext(UserNameContext)
    const { data, isLoading } = useFetchFollowingQuery(username)

    return (
        <Content
            isLoading={isLoading}
            data={data}
            render={following => (
                <Content.Cell
                    key={following.id}
                    before={
                        <div className={'avatar'}>
                            <div className={'mask mask-squircle h-6 w-6'}>
                                <Image
                                    src={following.avatar_url}
                                    alt={following.login}
                                    width={24}
                                    height={24}
                                />
                            </div>
                        </div>
                    }
                    url={following.html_url}
                >
                    {following.login}
                </Content.Cell>
            )}
            noData={'No Following'}
            viewGitLink={`${GIT_URL}/${username}?tab=following`}
        />
    )
}
