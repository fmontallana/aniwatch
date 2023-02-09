'use client'

import { useGlobalStore } from "@/store/globalStore"

export default function EpisodeThumb({ id, data: ep, color }) {
    // target={"_blank"} referrerPolicy="no-referrer"
    const setCurrentEp = useGlobalStore(state => state.setCurrentEp)


    return (
        <button
            onClick={() => setCurrentEp(ep)}
            type="button"
            className=" snap-start h-auto w-full group text-slate-100"
        >
            <div style={{ borderColor: color }} className={`  relative flex justify-center items-center flex-shrink-0  max-h-32 h-20 sm:h-32 w-32 lg:w-full bg-slate-900 overflow-hidden lg:border sm:border-2 rounded-lg`}  >
                <img
                    src={ep.image}
                    // placeholder={"blur"}
                    // blurDataURL={rgbDataURL(color)}
                    // sizes={'12rem'}
                    width={208}
                    height={150}
                    // fill
                    style={{ objectFit: "contain", opacity: "0.8", scale: "1.25", }}
                    alt={ep.title} />
                <p className={`absolute group-hover:animate-pulse hover:text-[${color}] px-2 right-0 top-0 text-4xl font-black fs-125`}>{ep.number.toString().padStart(2, '0')}</p>
                <p className="absolute  flex items-end px-2 h-10 w-full bg-gradient-to-t from-gray-900 bottom-0 text-xs text-left truncate overflow-x-hidden">{ep.title}</p>
            </div>
        </button>
    )
}
