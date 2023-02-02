import Link from "next/link"
import Image from "next/image"

export default function EpisodeThumb({ data: ep }) {

    return (
        <Link className="h-full" id={ep.id} href={`/watch/${ep.id}`} >
            <div className="relative  flex-shrink-0 h-full w-52 bg-slate-900 rounded overflow-hidden">
                <Image
                    src={ep.image}
                    // placeholder={"blur"}
                    // blurDataURL={}
                    sizes={'12rem'}
                    fill
                    style={{ objectFit: "cover", opacity: "0.8" }}
                    alt={ep.title} />
                <p className="absolute px-2 right-0 top-0 text-4xl font-black fs-125">{ep.number.toString().padStart(2, '0')}</p>
                <p className="absolute px-2 bottom-0 text-xs text-left truncate">{ep.title}</p>
            </div>
        </Link>
    )
}
