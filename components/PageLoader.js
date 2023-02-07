import React from 'react'

export default function PageLoader() {
    return (
        <div className="absolute top-0 left-0 h-[100dvh] w-full grid place-items-center text-white text-lg font-bold fs-125">
            <span className="animate-ping inline-flex h-24 w-24 rounded-full bg-sky-400 opacity-75">
            </span>
        </div>
    )
}
