import React, { Suspense } from 'react'
import SearchLoading from './loading'

export default function AnimeLayout({ children }) {
    return (
        <div>
            <Suspense fallback={<SearchLoading />}>
                {children}
            </Suspense>
        </div>
    )
}
