import Link from "next/link"
import Image from "next/image"
import { rgbDataURL } from "@/functions/dynamicPlaceholder"
import { useGlobalStore } from "@/store/globalStore"

export default function EpisodeThumb({ data: ep, color = "#11508b" }) {
    // target={"_blank"} referrerPolicy="no-referrer"

    const { selectedAnimeId } = useGlobalStore.getState()

    return (
        <Link className="h-full group" prefetch={false} id={ep.id} href={{
            pathname: `/watch/${ep.id}`,
            query: { cover: ep.image }
        }}  >
            <div className="relative flex justify-center items-center flex-shrink-0 h-full w-52 bg-slate-900 rounded overflow-hidden border border-slate-400 "  >
                <Image
                    src={ep.image}
                    placeholder={"blur"}
                    blurDataURL={rgbDataURL(color)}
                    // sizes={'12rem'}
                    width={208}
                    height={150}
                    // fill
                    style={{ objectFit: "cover", opacity: "0.8", scale: "1.25" }}
                    alt={ep.title} />
                <p className={`absolute group-hover:animate-pulse hover:text-[${color}] px-2 right-0 top-0 text-4xl font-black fs-125`}>{ep.number.toString().padStart(2, '0')}</p>
                <p className="absolute  flex items-end px-2 h-10 w-full bg-gradient-to-t from-gray-900 bottom-0 text-xs text-left truncate overflow-x-hidden">{ep.title}</p>
            </div>
        </Link>
    )
}
