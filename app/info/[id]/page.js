

import { Card } from "@/components"
import Actor from "@/components/Actor"
import EpisodeSection from "@/components/EpisodeSection"
import { useAnimeStore } from "@/store/animeStore"
import { useGlobalStore } from "@/store/globalStore"
import Image from "next/image"
import Link from "next/link"
import Background from "./Background"
import Description from "./Description"
import Section from "./Section"
import { IoPlay } from "react-icons/io5"
import LinkButton from "@/components/LinkButton"
import StoreInitializer from "@/components/StoreInitializer"



export default async function Info({ params }) {

    if (!params.id) return <div className="h-96 grid place-items-center text-xl font-black fs-125  text-white ">Oops. Something went wrong. Refresh the page.</div>
    //refactor to use zustand
    const data = await useAnimeStore.getState().fetchAnimeInfo(params.id)
    useAnimeStore.setState({ animeInfo: data })
    const { filterTitleLanguage } = useGlobalStore.getState()
    // const data = await getAnimeInfo(params.id)

    if (data.message) {
        return <div className="h-96 grid place-items-center text-3xl font-black fs-125  text-white ">Oops... No Data Found.</div>
    }

    const {
        id,
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
        color,
        trailer,
        recommendations,
        characters,
        studios
    } = data

    const filteredTitle = filterTitleLanguage(title)

    return (
        <>
            <StoreInitializer animeInfo={data} />
            <div className="relative container pt-36 mx-auto h-full w-full">
                <section className=" container mx-auto relative flex flex-col justify-center sm:justify-end items-start gap-3 h-full sm:w-9/12  rounded-lg overflow-hidden px-5 pt-10 text-slate-100">
                    <div className="w-full flex flex-col-reverse sm:flex-row justify-between items-center gap-2">
                        <h1 className={`flex-1 text-slate-50 text-2xl text-center sm:text-left sm:text-4xl font-black fs-125 line-clamp-2 sm:line-clamp-none `}> {filteredTitle} </h1>
                        <LinkButton href={`/watch/${id}`} prefetch={false} color={color} icon={IoPlay} >Watch</LinkButton>
                    </div>

                    <div className="flex justify-center items-center gap-1">
                        <span className="h-4 w-auto px-2  rounded shadow uppercase text-xs"
                            style={{ backgroundColor: color }}>{releaseDate}</span>
                        <span className="h-4 w-auto px-2  rounded shadow uppercase text-xs"
                            style={{ backgroundColor: color }}>{subOrDub}</span>
                        <span className="h-4 w-auto px-2  rounded shadow capitalize text-xs"
                            style={{ backgroundColor: color }}>{status}</span>
                        <span className="h-4 w-auto px-2  rounded shadow uppercase text-xs"
                            style={{ backgroundColor: color }}>{type}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-xs"><b>Category:</b> {genres?.join(" · ")}</p>
                        {studios?.length > 1 && <p className="text-xs"><b>Studio:</b> {studios?.join(" · ")}</p>}
                        {studios?.length === 1 && <p className="text-xs"><b>Studio:</b> {studios[0]}</p>}
                    </div>

                    <Description description={description} />
                    <Section color={color} title="Characters & Voice Actors">
                        {characters?.map(x => <Actor key={x.id} data={x} color={color} />)}
                    </Section>
                    <Section color={color} title="You may like">
                        {recommendations?.map(x => <Card key={x.id} data={x} />)}
                    </Section>
                    {/* episodes section */}
                    {/* <EpisodeSection data={episodes} color={color} /> */}
                </section>
            </div>

            <Background cover={cover} image={image} trailer={trailer} />
        </>

    )
}

export async function generateStaticParams() {
    //refactor to use zustand
    const { results: popular } = await useAnimeStore.getState().fetchAnimeList('popular', 'perPage=10')
    const { results: trending } = await useAnimeStore.getState().fetchAnimeList('trending', 'perPage=10')
    // const { results: recent } = await useAnimeStore.getState().fetchAnimeList('recent-episodes', 'perPage=10')
    const results = [...popular, ...trending]
    // const results = popular

    return results.map(x => ({
        id: x.id.toString()
    }))
}