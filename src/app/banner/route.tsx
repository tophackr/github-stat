import { ImageResponse } from 'next/og'
import { SITE_NAME } from '@/constants/seo.constants'

export async function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {SITE_NAME}
            </div>
        ),
        {
            width: 1200,
            height: 600
        }
    )
}
