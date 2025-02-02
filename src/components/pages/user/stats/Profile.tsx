import { OrganizationIcon } from '@primer/styled-octicons'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { ListItem } from '@/components/ui/list/ListItem'
import { pagesUrl } from '@/config/pages-url.config'
import { removeProtocol } from '@/utils/remove-protocol'
import type { StatsDataProps } from './Stats.interface'

export function Profile({
    data: { avatar_url, name, login, site_admin, html_url, blog, company }
}: StatsDataProps) {
    return (
        <ListItem className={'flex items-center gap-3'}>
            <div className={'avatar'}>
                <div className={'mask mask-squircle h-20 w-20'}>
                    <Image
                        src={avatar_url}
                        alt={login}
                        width={80}
                        height={80}
                        overrideSrc={pagesUrl.userAvatar(login)}
                    />
                </div>
            </div>

            <div>
                <div>
                    <Link
                        className={clsx(
                            'truncate font-bold',
                            site_admin && 'text-primary'
                        )}
                        href={html_url}
                    >
                        {name ?? login}
                    </Link>
                </div>

                {blog && (
                    <div>
                        <Link
                            className={'text-sm text-primary truncate'}
                            href={blog}
                        >
                            {removeProtocol(blog)}
                        </Link>
                    </div>
                )}

                {company && (
                    <div className={'badge badge-accent gap-1 truncate'}>
                        <OrganizationIcon />
                        {company}
                    </div>
                )}
            </div>
        </ListItem>
    )
}
