"use client"
import { useAnimeStore } from "@/store/animeStore";
import { useGlobalStore } from "@/store/globalStore";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const ReactPlayer = dynamic(() => import("react-player/file"), { ssr: false });
// const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false });



export default function HLSPlayer({ src, poster }) {


    return (
        <>

            <ReactPlayer
                config={{
                    file: {
                        forceHLS: true,
                    },
                }}
                url={src}
                // light={poster}
                width="100%"
                height="100%"
                playing={true}
                controls={true}
                muted={true}
            />
        </>
    )
}
