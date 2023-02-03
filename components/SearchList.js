'use client'
import { getAnimeList } from '@/functions/getAnimeFn'
import React, { use } from 'react'

export default function SearchList({ query }) {


    const results = use(getAnimeList(query))
    console.log(results);
    return (
        <div>
            search result
        </div>
    )
}
