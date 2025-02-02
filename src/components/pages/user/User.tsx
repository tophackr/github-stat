'use client'

import dynamic from 'next/dynamic'
import { Footer } from '@/components/ui/Footer'
import { RightBarSkeleton } from './right-bar/RIghtBar.skeleton'
import { StatsSkeleton } from './stats/Stats.skeleton'

const DynamicStats = dynamic(
    () => import('./stats/Stats').then(mod => mod.Stats),
    {
        loading: () => <StatsSkeleton />,
        ssr: false
    }
)
const DynamicRightBar = dynamic(
    () => import('./right-bar/RightBar').then(mod => mod.RightBar),
    {
        loading: () => <RightBarSkeleton />,
        ssr: false
    }
)
const DynamicThemeChanger = dynamic(
    () =>
        import('@/components/ui/theme-changer/ThemeChanger').then(
            mod => mod.ThemeChanger
        ),
    {
        ssr: false
    }
)

export function User() {
    return (
        <>
            <div className={'grid lg:grid-cols-3 gap-6'}>
                <div>
                    <DynamicStats />
                </div>
                <div className={'lg:col-span-2'}>
                    <DynamicRightBar />
                </div>
            </div>

            <footer
                className={'footer grid-flow-col items-center justify-between'}
            >
                <nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
                    <DynamicThemeChanger />
                </nav>
                <Footer className={'grid-flow-col items-center'} />
            </footer>
        </>
    )
}
