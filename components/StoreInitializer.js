"use client"

import { useAnimeStore } from '@/store/animeStore'
import { useGlobalStore } from '@/store/globalStore'
import { useRef } from 'react'


//adapted from Jack Herrington's zustand tutorial. https://www.youtube.com/watch?v=OpMAH2hzKi8&t=446s
function StoreInitializer({ currentEp, animeInfo }) {

    const setCurrentEp = useGlobalStore(state => state.setCurrentEp)
    const setAnimeInfo = useAnimeStore(state => state.setAnimeInfo)

    const initialize = useRef(false)
    if (!initialize.current) {
        setCurrentEp(currentEp)
        setAnimeInfo(animeInfo)
        initialize.current = true
    }

    return null
}

export default StoreInitializer