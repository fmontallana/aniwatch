'use client'

import HLSPlayer from "./HLSPlayer"


export default function PlayerSection({ src }) {

    return (
        <div className="absolute top-0 left-0 h-[100dvh] w-full">
            <HLSPlayer src={src} />
        </div>
    )
}
