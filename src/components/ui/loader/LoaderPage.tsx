'use server'

import { Loader } from './Loader'

export async function LoaderPage() {
    return (
        <div className={'hero min-h-screen'}>
            <div className={'hero-content text-center'}>
                <div className={'max-w-md'}>
                    <Loader />
                </div>
            </div>
        </div>
    )
}
