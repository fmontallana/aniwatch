"use client"

import { useAnimeStore } from '@/store/animeStore'
import { useGlobalStore } from '@/store/globalStore'
import { useRef } from 'react'


//adapted from Jack Herrington's zustand tutorial. https://www.youtube.com/watch?v=OpMAH2hzKi8&t=446s
function StoreInitializer({ currentEp, animeInfo, recent, popular, trending }) {

    const setCurrentEp = useGlobalStore(state => state.setCurrentEp)
    const setAnimeInfo = useAnimeStore(state => state.setAnimeInfo)
    const setRecent = useAnimeStore(state => state.setRecent)
    const setPopular = useAnimeStore(state => state.setPopular)
    const setTrending = useAnimeStore(state => state.setTrending)

    const initialize = useRef(false)
    if (!initialize.current) {
        setCurrentEp(currentEp)
        setAnimeInfo(animeInfo)
        setRecent(recent)
        setPopular(popular)
        setTrending(trending)
        initialize.current = true
    }

    return null
}

export default StoreInitializer