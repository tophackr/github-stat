import { CodeSquareIcon } from '@primer/styled-octicons'
import { useContext } from 'react'
import { Content } from '@/components/ui/content/Content'
import { useFetchGistsQuery } from '@/store/api/gists.api'
import { UserNameContext } from '@/context/UserName.context'

export function Gists() {
    const { username } = useContext(UserNameContext)
    const { data, isLoading } = useFetchGistsQuery(username)

    return (
        <Content
            isLoading={isLoading}
            data={data}
            render={gist => (
                <Content.Cell
                    key={gist.id}
                    before={<CodeSquareIcon className={'text-slate-500'} />}
                    url={gist.html_url}
                >
                    {Object.keys(gist.files)[0]}
                </Content.Cell>
            )}
            noData={'No Gists'}
            viewGitLink={`https://gist.github.com/${username}`}
        />
    )
}
