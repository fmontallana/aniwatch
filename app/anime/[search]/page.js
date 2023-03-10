import { Card } from '@/components'
import { useAnimeStore } from '@/store/animeStore'
import React from 'react'

export default async function page({ params }) {

    //refactor to use zustand
    // const { results: searchResults, currentPage, hasNextPage } = await getAnimeList(params.search)
    const { results: searchResults, currentPage, hasNextPage } = await useAnimeStore.getState().fetchAnimeList(params.search)

    return (
        <div className='container h-96 sm:h-full w-full mx-auto space-y-2 px-2 sm:px-0'>
            <h1 className='text-slate-100 capitalize'>search results:</h1>
            {/* <h1>Current Page: {currentPage}</h1>
            <h1>Next Page: {JSON.stringify(hasNextPage)}</h1> */}
            <div className='flex justify-start items-start sm:flex-wrap gap-2 mx-auto overflow-x-scroll sm:overflow-x-hidden'>
                {searchResults.map(item => (<Card className="scale-95" key={item.id} data={item} />))}
            </div>
        </div>
    )
}
