'use client'

import HLSPlayer from "./HLSPlayer"


export default function PlayerSection({ sources }) {

    const url = sources.filter((src, index) => {
        return index === 0
    })
    console.log(url[0])
    return (
        <div className="absolute top-0 left-0 h-[100dvh] w-full">
            <HLSPlayer
                src={url[0].url}
            />
        </div>
    )
}
