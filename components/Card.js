import { rgbDataURL } from "@/functions/dynamicPlaceholder"
import { useAnimeStore } from "@/store/animeStore"
import { useGlobalStore } from "@/store/globalStore"
import Image from "next/image"
import Link from "next/link"

async function Card({ data }) {
    const titleLanguage = await useGlobalStore.getState().titleLanguage
    const filteredTitleFn = await useGlobalStore.getState().filterTitleLanguage
    const { id, title, image, type, episodeId, episodeTitle, episodeNumber } = data

    //refactor to use zustand
    // const { color } = await getAnimeInfo(id)
    const { color, popularity, status, genres, duration, studios, synonyms, startDate, endDate } = await useAnimeStore.getState().fetchAnimeInfo(id)

    const filteredTitle = filteredTitleFn(title)
    const start = useGlobalStore.getState().formatDate(startDate)
    const end = useGlobalStore.getState().formatDate(endDate)
    const formattedPopularity = useGlobalStore.getState().formatNumber(popularity)

    return (
        <>
            <div className="relative group flex-shrink-0 max-w-[180px] rounded-lg overflow-hidden">
                <div style={{ borderColor: color }} className="flex-shrink-0 relative flex justify-center rounded-lg overflow-hidden h-[255px] w-full border-b ">
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


                <Link className="justify-self-end" href={episodeNumber ? `/watch/${id}/${episodeId}` : `/info/${id}`}  >
                    <div style={{ borderColor: color }} className="absolute bg-gray-900/[0.8] top-0 left-0 px-2 pt-5 h-full w-full text-xs border  z-10 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 rounded-lg ">
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
                </Link>
            </div>

        </ >
    )
}

export default Card