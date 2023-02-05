"use client"

import { useRef } from 'react'


//adapted from Jack Herrington's zustand tutorial. https://www.youtube.com/watch?v=OpMAH2hzKi8&t=446s
function StoreInitializer(props) {
    const initialize = useRef(false)
    if (!initialize.current) {
        initialize.current = true
    }

    return null
}

export default StoreInitializer