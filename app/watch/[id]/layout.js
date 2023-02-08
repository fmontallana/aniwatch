import React, { Suspense } from 'react'
import WatchLoading from './loading'

export default function WatchLayout({ children }) {
    return (
        <div>
            <Suspense fallback={<WatchLoading />}>
                {children}
            </Suspense>
        </div>
    )
}
