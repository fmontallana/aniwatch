import { Card } from '@/components'
import { getAnimeList } from '@/functions/getAnimeFn'
import React from 'react'

export default async function page({ params }) {

    // const searchResults = await getAnimeList(params.search)
    const { results: searchResults, currentPage, hasNextPage } = await getAnimeList(params.search)

    return (
        <div className='container h-full w-full mx-auto space-y-2 px-2 sm:px-0'>
            <h1 className='text-slate-100 capitalize'>search results:</h1>
            {/* <h1>Current Page: {currentPage}</h1>
            <h1>Next Page: {JSON.stringify(hasNextPage)}</h1> */}
            <div className='flex justify-start items-center flex-wrap gap-2 mx-auto'>
                {searchResults.map(item => (<Card key={item.id} data={item} />))}
            </div>
        </div>
    )
}
