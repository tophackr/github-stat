'use client'

import { notFound } from 'next/navigation'
import { useContext } from 'react'
import { ListGroup } from '@/components/ui/list/ListGroup'
import { useFetchUserQuery } from '@/store/api/user.api'
import { Bio } from './Bio'
import { Counts } from './Counts'
import { Info } from './Info'
import { Profile } from './Profile'
import { StatsSkeleton } from './Stats.skeleton'
import { UserNameContext } from '@/context/UserName.context'

export function Stats() {
    const { username } = useContext(UserNameContext)
    const { data, isLoading, isError } = useFetchUserQuery(username)

    if (isError) {
        notFound()
    }

    if (isLoading || !data) {
        return <StatsSkeleton />
    }

    return (
        <ListGroup>
            <Profile data={data} />

            <Bio data={data} />

            <Counts data={data} />

            {/* // todo: Languages  */}

            <Info data={data} />
        </ListGroup>
    )
}
