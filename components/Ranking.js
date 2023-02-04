import { rgbDataURL } from "@/functions/dynamicPlaceholder"
import Image from "next/image"
import Link from "next/link"

export default function Ranking({ data: popular }) {
    return (
        <section className=" flex-1  rounded-lg sm:px-3 py-2 space-y-3">
            <h1 className="text-white text-lg font-bold fs-125">Popular Anime</h1>
            {/* list */}
            <ul className="flex flex-wrap justify-start items-center gap-x-2 sm:block w-full text-white">
                {popular.map((anime, index) => {
                    return (
                        <Link key={anime.id} className={`relative flex-shrink-0 cursor-pointer flex justify-center items-center h-16 w-[46vw] sm:w-full gap-1 rounded overflow-hidden group z-10`} href={`/info/${anime.id}`}>

                            <div className="absolute w-full h-full sm:grayscale sm:group-hover:grayscale-0 group-hover:grayscale transition-all ease-in-out ">
                                <Image
                                    src={anime.cover}
                                    placeholder="blur"
                                    blurDataURL={rgbDataURL("#1f2937")}
                                    fill
                                    sizes="40rem"
                                    // height={64}
                                    // width={400}
                                    style={{ objectFit: "cover", backdropFilter: "grayscale(100%)" }}
                                    alt={anime.cover} />
                                <div className="absolute h-full w-full bg-gradient-to-l from-gray-900"></div>
                            </div>
                            <span className="relative grid place-content-center  w-3/12 z-10 text-4xl fs-100 sm:text-5xl sm:font-black sm:fs-125 italic drop-shadow-[4px_4px_rgba(0,0,0)] ">{index + 1}</span>
                            <div className=" absolute left-0 w-3/12 h-full flex-shrink-0 rounded-l overflow-hidden">
                                <Image
                                    src={anime.image}
                                    placeholder="blur"
                                    blurDataURL={rgbDataURL("#1f2937")}
                                    // height={64}
                                    // width={46}
                                    sizes="30rem"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    alt={anime.image} />
                            </div>
                            <p className="relative px-2 flex-1 z-10 drop-shadow-[2px_2px_rgba(0,0,0)] text-slate-100 text-xs sm:text-sm sm:font-black sm:fs-125">{anime.title.userPreferred}</p>
                        </Link>
                    )
                })}
            </ul>
        </section>
    )
}
