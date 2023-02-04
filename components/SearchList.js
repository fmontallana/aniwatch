'use client'
import { getAnimeList } from '@/functions/getAnimeFn'
import { useGetAnimeList } from '@/functions/useAnimeAPI'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SearchList({ query, setSearchTerm }) {

    if (query.length === 0) return null


    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (query.length < 3) return
        getSearchResult(query)
    }, [query])


    const getSearchResult = async (query) => {

        setLoading(true)
        // const data = await useGetAnimeList(query)
        try {
            const data = await getAnimeList(query)
            if (data) {
                setSearchResults(data)
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleClearSearch = () => {
        setSearchTerm("")
        setSearchResults([])
    }

    if (loading) return <p>Searching for {query}...</p>

    return (
        <div className=' flex flex-col flex-shrink-0 gap-2  h-96 w-full overflow-y-scroll  '>
            {searchResults?.results?.map((anime) => {
                return (
                    <Link key={anime.id}
                        href={`/info/${anime.id}`}
                        prefetch={false}
                        onClick={handleClearSearch}
                        className="flex justify-start items-center flex-shrink-0 gap-2 h-20 w-full text-xs border border-slate-100 rounded bg-gradient-to-r from-gray-900 overflow-hidden">
                        <div className='flex-shrink-0 relative h-full w-3/12'>
                            <Image
                                src={anime.image}
                                alt={anime.title.romaji}
                                sizes={'10%'}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className='h-full flex flex-col justify-around w-9/12 p-2'>
                            <p className=' text-sm font-bold fs-125 shadow line-clamp-2'
                                style={{ color: anime.color }}>{anime.title.romaji}</p>
                            <div className='flex justify-start items-center gap-1'>
                                <p style={{ backgroundColor: anime.color }}
                                    className='  text-xs text-center rounded lowercase px-2'>{anime.type}</p>

                                <p> &#183; </p>
                                <p>{anime.releaseDate}</p>
                                <p> &#183; </p>
                                <p>{anime.status}</p>

                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}
