import { rgbDataURL } from "@/functions/dynamicPlaceholder"
import { getAnimeInfo } from "@/functions/getAnimeFn"
import { useGlobalStore } from "@/store/globalStore"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"

async function Card({ data }) {
    const titleLanguage = await useGlobalStore.getState().titleLanguage
    const filteredTitleFn = await useGlobalStore.getState().filterTitleLanguage
    const { id, title, image, type, episodeId, episodeTitle, episodeNumber } = data
    const { color } = await getAnimeInfo(id)

    const filteredTitle = filteredTitleFn(title)


    return (
        <div className="group flex-shrink-0  max-w-[180px] rounded-lg ">
            <Link href={`/info/${id}`}  >
                {/* <h1 className="absolute top-5 left-5 font-black text-9xl text-white fs-125 italic">{rank}</h1> */}
                <div style={{ borderColor: color }} className="relative flex justify-center rounded-lg overflow-hidden h-[255px] w-full border-b ">
                    <h1 style={{ backgroundColor: color }} className="absolute rounded right-0 text-white text-xs px-2 m-1 z-20 transition ease-in-out shadow">{episodeNumber ? "EP " + episodeNumber : type}</h1>
                    <Image
                        className="transition-all ease-in-out group-hover:scale-105 group-hover:grayscale"
                        src={image}
                        placeholder={"blur"}
                        blurDataURL={rgbDataURL("#1f2937")}
                        width={190}
                        height={280}
                        // fill
                        // sizes="11rem"

                        style={{ objectFit: "cover" }}
                        alt={title + " thumbnail"}
                    />

                    <p className=" absolute bottom-0 left-0 h-20 w-full text-xs text-white px-2 py-1 bg-gradient-to-t from-gray-900 flex items-end">{filteredTitle}</p>

                </div>
            </Link>
        </div>
    )
}

export default Card