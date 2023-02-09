"use client"
import { useAnimeStore } from "@/store/animeStore";
import { useGlobalStore } from "@/store/globalStore";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
// const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false });



export default function HLSPlayer() {

    const ReactPlayer = dynamic(() => import("react-player/file"), { ssr: false })

    const src = useGlobalStore(state => state.episodeUrl)
    const { image } = useGlobalStore(state => state.currentEp)

    return (
        <>
            <ReactPlayer
                config={{
                    file: {
                        forceHLS: true,
                    },
                }}
                width="100%"
                height="100%"
                url={src}
                light={image}
                playing={true}
                controls={true}
                muted={false}
            />
        </>
    )
}
