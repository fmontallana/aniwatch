"use client"
import { useAnimeStore } from "@/store/animeStore";
import { useGlobalStore } from "@/store/globalStore";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
// const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false });



export default function HLSPlayer({ src, provider, poster }) {

    const ReactPlayer = provider === 'yt' ? dynamic(() => import("react-player/youtube"), { ssr: false }) :
        dynamic(() => import("react-player/file"), { ssr: false })

    const searchParams = useSearchParams()
    const cover = searchParams.get('cover')

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
                light={cover}
                playing={true}
                controls={true}
                muted={true}
            />
        </>
    )
}
