"use client"

import { useAnimeStore } from '@/store/animeStore'
import { useGlobalStore } from '@/store/globalStore'
import { useRef } from 'react'


//adapted from Jack Herrington's zustand tutorial. https://www.youtube.com/watch?v=OpMAH2hzKi8&t=446s
function StoreInitializer({ currentEp }) {

    const setCurrentEp = useGlobalStore(state => state.setCurrentEp)

    const initialize = useRef(false)
    if (!initialize.current) {
        setCurrentEp(currentEp)
        initialize.current = true
    }

    return null
}

export default StoreInitializer