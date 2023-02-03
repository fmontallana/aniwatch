"use client"
import Image from "next/image"
import { useEffect, useState } from "react";

export default function Background({ cover, image }) {



    const [width, setWidth] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.innerWidth
        }
    })


    useEffect(() => {
        let evt
        if (typeof window !== 'undefined') {
            // detect window screen width function
            evt = window.addEventListener('resize', () => {
                setWidth(window.innerWidth)
            })
        }

        return () => {
            removeEventListener('resize', evt)
        }
    }, [width])


    return (
        <div className={`absolute -z-10 top-0 left-0 ${width > 640 ? "h-[70vh]" : "h-[90vh]"} w-full`}>
            <div style={{
                backgroundImage: `url("${width > 640 ? cover : image}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }} className="absolute h-5/6 w-full">
                {/* <Image
                    src={width < 640 ? image : cover}
                    alt={cover}
                    sizes="1200px"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }} /> */}

            </div>
            <div className=" absolute top-0 left-0 h-5/6 w-full bg-gradient-to-t from-gray-900 ">
            </div>

        </div>
    )
}
