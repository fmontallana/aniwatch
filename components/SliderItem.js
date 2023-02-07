import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useGlobalStore } from '@/store/globalStore'

function SliderItem({ data }) {
    const filterTitleFn = useGlobalStore.getState().filterTitleLanguage
    const { id, title, cover, description, image } = data
    const filterTitle = filterTitleFn(title)

    return (
        <div className="flex flex-shrink-0  items-start h-full w-full ">
            <div className="relative h-full flex-1 sm:rounded-lg">
                {/* <img className="rounded" src="https://placewaifu.com/image/900/400" /> */}
                <Image
                    className='hidden sm:block sm:rounded-lg'
                    src={cover}
                    priority
                    sizes='70rem 23.5rem'
                    // sizes="(max-width: 768px) 100vw,
                    //         (max-width: 1200px) 50vw,
                    //         33vw"
                    fill
                    style={{ objectFit: "cover" }}
                    alt={title}
                />
                <div>
                    <div className="absolute bottom-0 left-0 flex flex-col justify-end items-start gap-3 h-5/6 w-full text-white pl-5 sm:pl-12 pb-10 sm:pb-5  bg-gradient-to-t from-gray-900 z-10">
                        <h1 className={`w-5/6 sm:w-3/6 font-black text-2xl sm:text-5xl fs-125 line-clamp-2`}>{filterTitle}</h1>
                        <div className="w-5/6 sm:w-3/6 text-sm line-clamp-5" dangerouslySetInnerHTML={{ __html: `${description}` }} />
                        <Link href={`/info/${id}`} >

                            <button className="bg-blue-800 ring ring-blue-100 py-2 px-4 font-semibold fs-100 rounded z-[14]">Watch now</button>
                        </Link>
                    </div>
                    <div className="absolute right-0 h-full w-full sm:w-3/12">
                        <Image
                            className='z-4'
                            priority
                            alt={title + " hero section"}
                            src={image}
                            // sizes="20rem 23.5rem"
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw"
                            fill
                            style={{ objectFit: "cover" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderItem

