import React from 'react'

export default function Loading() {
    return (
        <div className="h-screen w-full grid place-items-center text-white text-lg font-bold fs-125">
            <span class="animate-ping absolute inline-flex h-20 w-20 rounded-full bg-sky-400 opacity-75">
            </span>
            Initializing...
        </div>

    )
}
