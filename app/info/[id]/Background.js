"use client"
import Image from "next/image"
import { useEffect, useState } from "react";
import { HLSPlayer } from "@/components"
export default function Background({ cover, image, trailer }) {

    const [width, setWidth] = useState(641)
    const [bgImage, setBgImage] = useState(`url(${cover})`)

    useEffect(() => {
        let evt
        let onReady
        if (typeof window !== 'undefined') {
            // detect window screen width function
            evt = window.addEventListener('resize', () => {
                setWidth(window.innerWidth)
                window.innerWidth > 640 ? setBgImage(`url("${cover}")`) : setBgImage(`url("${image}")`)
            })

            onReady = window.addEventListener('DOMContentLoaded', () => {
                setWidth(window.innerWidth)
                window.innerWidth > 640 ? setBgImage(`url("${cover}")`) : setBgImage(`url("${image}")`)
            })
        }

        return () => {
            removeEventListener('resize', evt)
            removeEventListener('DOMContentLoaded', onReady)
        }
    }, [width])


    return (
        <div className={`absolute -z-10 top-0 left-0 ${width > 640 ? "h-[70vh]" : "h-[90vh]"} w-full overflow-hidden`}>
            <div style={{
                backgroundImage: bgImage,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }} className="absolute h-5/6 w-full" />
            <div className=" absolute top-0 left-0 h-5/6 w-full bg-gradient-to-t from-gray-900 " />
        </div>
    )
}
