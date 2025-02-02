'use client'

import dynamic from 'next/dynamic'

const DynamicImage = dynamic(() => import('next/image'), { ssr: false })

export function Loader() {
    return (
        <DynamicImage
            src={'/animated-chart.webp'}
            alt={'Animated Chart'}
            width={512}
            height={512}
            className={'w-32 h-32'}
            unoptimized={true}
            priority={true}
        />
    )
}
