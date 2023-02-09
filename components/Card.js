"use client"
import { rgbDataURL } from "@/functions/dynamicPlaceholder"
import { useAnimeStore } from "@/store/animeStore"
import { useGlobalStore } from "@/store/globalStore"
import Image from "next/image"
import Link from "next/link"
import { Suspense, useEffect, useRef, useState } from "react"

function Card({ data }) {

    const [animeInfo, setAnimeInfo] = useState([])
    const [fetching, setFetching] = useState(false)
    const { titleLanguage } = useGlobalStore()
    const { filterTitleLanguage } = useGlobalStore()
    const { fetchAnimeInfo } = useAnimeStore()
    const { formatDate } = useGlobalStore()
    const { formatNumber } = useGlobalStore()
    const { id, title, image, type, episodeId, episodeTitle, episodeNumber, relationType } = data
    const filteredTitle = filterTitleLanguage(title)
    const loading = useRef(false)

    useEffect(() => {
        fetchAnimeInfo(id).then(data => {
            if (loading.current) return
            loading.current = true
            setFetching(true)
            setAnimeInfo(data)
        }).finally(() => {
            loading.current = false
            setFetching(false)
        })
    }, [loading])

    const { color, popularity, status, genres, duration, studios, synonyms, startDate, endDate } = animeInfo
    const start = formatDate(startDate)
    const end = formatDate(endDate)
    const formattedPopularity = formatNumber(popularity)


    return (
        <div className="snap-start relative group flex-shrink-0 max-w-[180px] rounded-lg overflow-hidden">
            <div style={{ borderColor: color }} className="flex-shrink-0 relative flex justify-center rounded-lg overflow-hidden h-[255px] w-full border-b ">
                {relationType && <h1 style={{ backgroundColor: color }} className="absolute rounded left-0 text-white text-xs px-2 m-1 z-20 transition ease-in-out shadow">{relationType}</h1>}
                <h1 style={{ backgroundColor: color }} className="absolute rounded right-0 text-white text-xs px-2 m-1 z-20 transition ease-in-out shadow">{episodeNumber ? "EP " + episodeNumber : type}</h1>
                <Image
                    className="transition-all ease-in-out group-hover:scale-105 group-hover:grayscale"
                    src={image}
                    placeholder={"blur"}
                    blurDataURL={rgbDataURL("#1f2937")}
                    width={190}
                    height={280}
                    style={{ objectFit: "cover" }}
                    alt={title + " thumbnail"}
                />
                <p className="group-hover:hidden absolute bottom-0 left-0 h-20 w-full text-xs text-white px-2 py-1 bg-gradient-to-t from-gray-900 flex items-end">{filteredTitle}</p>
            </div>

            {fetching && <div style={{ borderColor: color }} className="absolute link-focus:bg-gray-900/[0.9] bg-gray-900/[0.8] top-0 left-0 px-2 pt-5 h-full w-full text-xs border  z-10 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 rounded-lg "><p>fetching data...</p></div>}

            {!fetching && <Link className="link justify-self-end " href={episodeNumber ? `/watch/${id}?${episodeId}` : `/info/${id}`}  >
                <div style={{ borderColor: color }} className="absolute link-focus:bg-gray-900/[0.9] bg-gray-900/[0.8] top-0 left-0 px-2 pt-5 h-full w-full text-xs border  z-10 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 rounded-lg ">
                    <p className="text-white">
                        <span style={{ color }} className="text-slate-100 font-bold">Other names: </span>
                        {synonyms?.slice(0, 2).join(" · ") || "-"}</p>
                    <p className="text-white">
                        <span style={{ color }} className="text-slate-100 font-bold">Studio/s: </span>
                        {studios?.join(" · ") || "-"}</p>
                    <p className="text-white">
                        <span style={{ color }} className="text-slate-100 font-bold">Genre/s: </span>{genres?.join(" · ") || "-"}</p>
                    <p className="text-white">
                        <span style={{ color }} className="text-slate-100 font-bold">Popularity: </span>{formattedPopularity}</p>
                    <p className="text-white">
                        <span style={{ color }} className="text-slate-100 font-bold">Date aired: </span>{start} to {end}</p>
                    <p className="text-white">
                        <span style={{ color }} className="text-slate-100 font-bold">Duration: </span>{duration} min</p>
                    <p className="text-white">
                        <span style={{ color }} className="text-slate-100 font-bold">Status: </span>{status}</p>

                    {/* <p className="text-slate-300 line-clamp-3"><span className="text-slate-100 font-bold">Description: </span>{description}</p> */}
                </div>
            </Link>}
        </div>

    )
}

export default Card