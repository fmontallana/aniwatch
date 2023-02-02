import React from 'react'

export default function Loading() {
    return (
        <div className="h-screen w-full grid place-items-center text-white text-lg font-bold fs-125">
            <span className="animate-ping absolute -top-8 z-[1] inline-flex h-24 w-24 rounded-full bg-sky-400 opacity-75">
            </span>
        </div>

    )
}
