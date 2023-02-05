'use client'

import HLSPlayer from "./HLSPlayer"


export default function PlayerSection({ src }) {

    return (
        <div className="relative top-0 left-0 lg:h-[100dvh] w-full ">
            <HLSPlayer className="relative " src={src} />

        </div>
    )
}
