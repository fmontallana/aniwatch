
import { EpisodeThumb } from "@/components"
import EpisodeSection from "@/components/EpisodeSection"
import { getAnimeInfo, getAnimeList } from "@/functions/getAnimeFn"

import Image from "next/image"
import Link from "next/link"
import Background from "./Background"



export default async function Info({ params }) {

    const data = await getAnimeInfo(params.id)

    if (data.message) {
        return <div className="h-96 grid place-items-center text-3xl font-black fs-125  text-white ">Oops... No Data Found.</div>
    }

    const {
        title,
        description,
        genres,
        releaseDate,
        image,
        subOrDub,
        status,
        type,
        episodes,
        cover,
        color
    } = data

    return (
        <>
            <div className="relative container pt-36 mx-auto h-full w-full">
                <section className=" container mx-auto relative flex flex-col justify-center sm:justify-end items-start gap-3 h-full sm:w-9/12  rounded-lg overflow-hidden px-5 pt-10 text-slate-100">
                    <h1
                        className={`text-slate-50 text-2xl sm:text-4xl font-black fs-125 line-clamp-2 sm:line-clamp-none `}> {title.romaji} </h1>
                    <div className="flex justify-center items-center gap-1">
                        <span className="h-4 w-auto px-2  rounded text-xs"
                            style={{ backgroundColor: color }}>{releaseDate}</span>
                        <span className="h-4 w-auto px-2  rounded text-xs"
                            style={{ backgroundColor: color }}>{subOrDub}</span>
                        <span className="h-4 w-auto px-2  rounded text-xs"
                            style={{ backgroundColor: color }}>{status}</span>
                        <span className="h-4 w-auto px-2  rounded text-xs"
                            style={{ backgroundColor: color }}>{type}</span>
                    </div>
                    <p className="text-xs">Category: {genres?.join(" · ")}</p>

                    <p className=" text-slate-200 line-clamp-5 ">{description}</p>
                    {/* episodes section */}
                    <EpisodeSection data={episodes} color={color} />
                </section>
                {/* <div className="h-full w-3/12 bg-gray-900 rounded-t-lg p-4 py-3">
                    <Ranking data={popular} />
                </div> */}
            </div>
            <Background cover={cover} image={image} />
        </>

    )
}

export async function generateStaticParams() {
    const popular = await getAnimeList("popular")
    const trending = await getAnimeList("trending")
    const recent = await getAnimeList("recent-episodes")
    const results = [...popular, ...trending, ...recent]

    return results.map(x => ({
        id: x.id.toString()
    }))
}