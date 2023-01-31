import { AnimeSection, Card } from "@/components"
import { getAnimeCoverImage, getAnimeList } from "@/functions/getAnimeFn"
import Image from "next/image"



function Hero({ anime }) {
  const { title, cover, description, color } = anime
  return (
    <div className="flex flex-shrink-0  items-start h-full w-full">

      <div className="relative h-full flex-1 rounded-lg ">
        {/* <img className="rounded" src="https://placewaifu.com/image/900/400" /> */}
        <Image
          src={cover}
          fill
          style={{ objectFit: "cover" }}
        />
        <div>
          <div className="absolute bottom-0 left-0 flex flex-col justify-end items-start gap-3 h-5/6 w-full text-white p-5  bg-gradient-to-t from-gray-900 z-10">
            <h1 className={`w-3/6 font-black text-5xl fs-125 line-clamp-2`}>{`${title.userPreferred}`}</h1>
            <p className="w-3/6 line-clamp-4">{description}</p>
            <button className="bg-blue-600 py-2 px-4 font-semibold fs-100 rounded">Watch Now</button>
          </div>
          <div className="absolute right-0 h-full w-3/12">

            <Image src={anime.image} fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>
    </div>
  )
}


export default async function Home() {

  const popular = await getAnimeList('popular')
  const trending = await getAnimeList('trending')
  const random = [await getAnimeList('random-anime')]
  const recent = await getAnimeList('recent-episodes')

  const randomNumber = Math.floor(Math.random() * trending.length)

  if (popular.length === 0 && trending.length === 0 && recent.length === 0) {
    return (
      <div className="grid place-items-center">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main className="bg-gray-900 pb-5 w-full">
      <div className="container h-full w-full mx-auto  rounded-lg overflow-hidden">
        <section className="flex  items-center gap-5 h-96 w-full border-4 border-gray-100 rounded-lg ">

          {trending.map((anime, index) => {
            if (index !== randomNumber) return
            return (
              <Hero key={anime.id} anime={anime} />
            )
          })}
        </section>
        <br />
        <section className="flex w-full">

          <div className="w-9/12">
            <AnimeSection section={"Trending"} anime={trending} />
            <br />
            <AnimeSection section={"Recently Added"} anime={recent} />
          </div>


          {/* anime ranking */}
          <section className="flex-1  rounded-lg px-3 py-2 space-y-3">
            <h1 className="text-white text-lg font-bold fs-125">Popular Anime</h1>
            {/* list */}
            <ul className=" space-y-2 text-white">
              {popular.map((anime, index) => {
                return (
                  <li key={anime.id} className={`relative flex justify-center items-center h-16 px-2  gap-1 rounded overflow-hidden group  z-10`}>
                    <div className="absolute w-full h-full grayscale group-hover:grayscale-0 transition-all ease-in-out ">
                      <Image src={anime.cover} fill style={{ backdropFilter: "grayscale(100%)" }} />
                      <div className="absolute h-full w-full bg-gradient-to-l from-gray-900"></div>
                    </div>
                    <span className="relative w-1/12 z-10 text-5xl font-black fs-125 italic drop-shadow-[4px_4px_rgba(0,0,0)] ">{index + 1}</span>
                    <div className=" relative w-2/12 h-full flex-shrink-0 rounded overflow-hidden">
                      <Image src={anime.image} fill style={{ objectFit: "cover" }} />
                    </div>
                    <p className="flex-1 z-10 drop-shadow-[2px_2px_rgba(0,0,0)] text-slate-100 font-black fs-125">{anime.title.userPreferred}</p>
                  </li>
                )
              })}
            </ul>
          </section>
        </section>

      </div>
    </main>
  )
}
