import { AnimeSection, Card, Ranking, Slider } from "@/components"
import { getAnimeCoverImage, getAnimeList } from "@/functions/getAnimeFn"
import Image from "next/image"
import { Suspense } from "react"

export default async function Home() {

  const { results: popular } = await getAnimeList('popular')
  const { results: trending } = await getAnimeList('trending')
  const { results: recent } = await getAnimeList('recent-episodes')

  return (
    <main className="pb-5 w-full px-2 sm:px-0 ">
      <div className="container h-full w-full mx-auto  rounded-lg overflow-hidden">
        <Slider data={popular} />
        <br />
        <section className="flex flex-col sm:flex-row w-full">
          <div className="sm:w-9/12">
            <AnimeSection section={"Trending"} anime={trending} />
            <br />
            <AnimeSection section={"Recent Episodes"} anime={recent} />
          </div>

          <br />
          {/* anime ranking */}
          <Ranking data={popular} />
        </section>

      </div>
    </main>

  )
}
