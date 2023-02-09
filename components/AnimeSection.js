import { useAnimeStore } from "@/store/animeStore"
import Link from "next/link"
import Card from "./Card"

function AnimeSection({ section }) {
    const { recent, trending } = useAnimeStore.getState()

    const animeList = section === "Recent Episodes" ? recent : trending

    const trim = section.split(" ").length > 1 ? section.split(" ").join("-") : section

    return (
        <section className=" w-full">
            <div className="flex justify-between text-white py-2 mr-2">
                <p className="flex-1 text-lg font-bold fs-125">{section}</p>
                <Link href={`/anime/${trim.toLowerCase()}`} className="self-end text-sm bg-gray-800 mx-1 py-1 px-2 rounded ">View All</Link>
            </div>
            <div className="snap-mandatory snap-x flex  sm:flex-wrap gap-3 overflow-x-scroll sm:overflow-x-hidden">
                {animeList?.map((anime) => {
                    return (
                        <Card key={anime.id} data={anime} />
                    )
                })}
            </div>
        </section>
    )
}

export default AnimeSection