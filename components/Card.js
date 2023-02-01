import Image from "next/image"
import Link from "next/link"

function Card({ id, title, image }) {
    return (
        <div className="group flex-shrink-0  max-w-[180px] rounded-lg ">
            <Link href={`/info/${id}`} >
                {/* <h1 className="absolute top-5 left-5 font-black text-9xl text-white fs-125 italic">{rank}</h1> */}
                <div className="relative rounded-lg overflow-hidden h-[255px] border-b border-b-slate-200 ">

                    <Image
                        className="transition-all ease-in-out group-hover:scale-105 group-hover:grayscale"
                        src={image}
                        width={190}
                        height={266}
                        alt={title + " thumbnail"}
                    />
                    <p className=" absolute bottom-0 left-0 w-full text-sm text-white line-clamp-2 px-2 py-1 bg-gradient-to-t from-gray-900 ">{title}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card