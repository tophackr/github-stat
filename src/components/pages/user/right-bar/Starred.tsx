import { StarFillIcon } from '@primer/styled-octicons'
import { useContext } from 'react'
import { Content } from '@/components/ui/content/Content'
import { GIT_URL } from '@/constants/git.constants'
import { useFetchStarredQuery } from '@/store/api/starred.api'
import { UserNameContext } from '@/context/UserName.context'

export function Starred() {
    const { username } = useContext(UserNameContext)
    const { data, isLoading } = useFetchStarredQuery(username)

    return (
        <Content
            isLoading={isLoading}
            data={data}
            render={starred =>
                'id' in starred && (
                    <Content.Cell
                        key={starred.id}
                        before={<StarFillIcon className={'text-yellow-500'} />}
                        url={starred.html_url}
                    >
                        {starred.full_name}
                    </Content.Cell>
                )
            }
            noData={'No Starred Repositories'}
            viewGitLink={`${GIT_URL}/${username}?tab=stars`}
        />
    )
}
