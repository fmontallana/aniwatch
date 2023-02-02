import React, { Suspense } from 'react'
import InfoLoading from './loading'

export default function InfoLayout({ children }) {
    return (
        <div>
            <Suspense fallback={<InfoLoading />}>
                {children}
            </Suspense>
        </div>
    )
}
