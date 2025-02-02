import { RepoIcon } from '@primer/styled-octicons'
import { useContext } from 'react'
import { Content } from '@/components/ui/content/Content'
import { GIT_URL } from '@/constants/git.constants'
import { useFetchReposQuery } from '@/store/api/repo.api'
import { UserNameContext } from '@/context/UserName.context'

export function Repos() {
    const { username } = useContext(UserNameContext)
    const { data, isLoading } = useFetchReposQuery(username)

    return (
        <Content
            isLoading={isLoading}
            data={data}
            render={rep => (
                <Content.Cell
                    key={rep.id}
                    before={<RepoIcon className={'text-slate-500'} />}
                    url={rep.html_url}
                >
                    {rep.full_name}
                </Content.Cell>
            )}
            noData={'No Repositories'}
            viewGitLink={`${GIT_URL}/${username}?tab=repositories`}
        />
    )
}
