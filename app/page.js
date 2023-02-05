import { AnimeSection, Ranking, Slider } from "@/components"
import StoreInitializer from "@/components/StoreInitializer"
import { useAnimeStore } from "@/store/animeStore"

export default async function Home() {

  //refactor to use zustand
  const { results: popular } = await useAnimeStore.getState().fetchAnimeList('popular')
  const { results: trending } = await useAnimeStore.getState().fetchAnimeList('trending', 'perPage=15')
  const { results: recent } = await useAnimeStore.getState().fetchAnimeList('recent-episodes', 'perPage=15')

  // const { results: popular } = await getAnimeList('popular')
  // const { results: trending } = await getAnimeList('trending', 'perPage=15')
  // const { results: recent } = await getAnimeList('recent-episodes', 'perPage=15')

  return (
    <main className="pb-5 w-full px-2 sm:px-0 ">
      {/* pass props in StoreInitializer to make it visible in client side redering */}
      <StoreInitializer />

      <div className="container h-full w-full mx-auto  rounded-lg overflow-hidden">
        <Slider data={trending} />
        <br />
        <section className="flex flex-col-reverse sm:flex-row w-full">
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
