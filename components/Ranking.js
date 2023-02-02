import Image from "next/image"
import Link from "next/link"

export default function Ranking({ data: popular }) {
    return (
        <section className=" flex-1  rounded-lg sm:px-3 py-2 space-y-3">
            <h1 className="text-white text-lg font-bold fs-125">Popular Anime</h1>
            {/* list */}
            <ul className=" space-y-2 text-white">
                {popular.map((anime, index) => {
                    return (
                        <Link key={anime.id} className={`relative cursor-pointer flex justify-center items-center h-16 px-2  gap-1 rounded overflow-hidden group  z-10`} href={`/info/${anime.id}`}>

                            <div className="absolute w-full h-full grayscale group-hover:grayscale-0 transition-all ease-in-out ">
                                <Image src={anime.cover} fill style={{ backdropFilter: "grayscale(100%)" }} />
                                <div className="absolute h-full w-full bg-gradient-to-l from-gray-900"></div>
                            </div>
                            <span className="relative w-1/12 z-10 text-5xl font-black fs-125 italic drop-shadow-[4px_4px_rgba(0,0,0)] ">{index + 1}</span>
                            <div className=" relative w-2/12 h-full flex-shrink-0 rounded overflow-hidden">
                                <Image src={anime.image} fill style={{ objectFit: "cover" }} />
                            </div>
                            <p className="flex-1 z-10 drop-shadow-[2px_2px_rgba(0,0,0)] text-slate-100 font-black fs-125">{anime.title.userPreferred}</p>
                        </Link>
                    )
                })}
            </ul>
        </section>
    )
}
