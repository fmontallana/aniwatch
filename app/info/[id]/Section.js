"use client"
import { Card } from '@/components'
import React, { useRef } from 'react'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'

export default function Section({ children, title, color, data }) {



    const slider = useRef()

    const slideLeft = () => {
        slider.current.scrollBy({ left: -200, behavior: 'smooth' })
    }
    const slideRight = () => {
        slider.current.scrollBy({ left: 200, behavior: 'smooth' })
    }

    return (
        <section className={`h-full w-full space-y-2`}>
            <div className=' flex justify-between items-center'>
                <h1 className='text-slate-100 font-bold fs-100 text-transparent bg-clip-text bg-gradient-to-t from-blue-500  to-blue-300'>{title}</h1>
                <div className='flex gap-1 sm:hidden'>
                    <IoChevronBack onClick={slideLeft} size="1.5em" />
                    <IoChevronForward onClick={slideRight} size="1.5em" />
                </div>
            </div>


            <div className=' w-full flex justify-start'>
                <div ref={slider} id="slider" className='flex-1 flex justify-start items-start gap-2 overflow-x-scroll sm:overflow-hidden snap-mandatory snap-x '>
                    {children}
                </div>
                <div className='hidden  h-full w-10 sm:flex flex-col justify-start items-center gap-2  '>
                    <div className={`h-full cursor-pointer hover:scale-110 `} onClick={slideLeft}>
                        <IoChevronBack size="2em" />
                    </div>
                    <div className={`h-full cursor-pointer hover:scale-110 `} onClick={slideRight}>
                        <IoChevronForward size="2em" />
                    </div>
                </div>
            </div>
        </section>
    )
}
