import { ImageResponse } from 'next/og'
import type { IUserNamePageProps } from '@/shared/interfaces/username.interface'

export async function GET(_: Request, { params }: IUserNamePageProps) {
    const { username } = await params

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 64,
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {username.charAt(0).toUpperCase()}
            </div>
        ),
        {
            width: 128,
            height: 128
        }
    )
}
