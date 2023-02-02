'use client'

import HLSPlayer from "./HLSPlayer"


export default function PlayerSection({ sources }) {

    console.log(sources);
    return (
        <div className="absolute top-0 left-0 h-screen w-full">

            <HLSPlayer
                src={sources[4].url}

            />
        </div>
    )
}
