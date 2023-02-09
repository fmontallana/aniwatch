"use client"
import { useAnimeStore } from "@/store/animeStore"
import { useEffect, useState } from "react"
import SliderItem from "./SliderItem"

function Slider() {

    const trending = useAnimeStore(state => state.trending)
    const data = trending?.slice(0, 6)

    const [slideCount, setSlideCount] = useState(0)

    const forward = () => {
        const isLastSlide = slideCount === data.length - 1
        const currentSlide = isLastSlide ? 0 : slideCount + 1
        setSlideCount(currentSlide)
    }

    const backward = () => {
        const isFirstSlide = slideCount === 0
        const currentSlide = isFirstSlide ? data.length - 1 : slideCount - 1
        setSlideCount(currentSlide)
    }

    useEffect(() => {
        const unsubscribe = setTimeout(forward, 5000)

        return () => clearTimeout(unsubscribe)
    }, [slideCount])


    return (
        <section className="relative flex  items-center gap-5 h-96 w-full sm:border-4 sm:border-gray-100 sm:rounded-lg ">
            <div onClick={backward} className="absolute z-[11] opacity-50 hover:opacity-100 hover:bg-gradient-to-r hover:from-gray-900 transition-all ease-in  text-white text-4xl fs-75  flex justify-start items-center cursor-pointer h-full w-1/12">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                >
                    <title>{"Chevron Back"}</title>
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={48}
                        d="M328 112 184 256l144 144"
                    />
                </svg>
            </div>
            <div onClick={forward} className="absolute z-[11] opacity-50 hover:opacity-100 hover:bg-gradient-to-l hover:from-gray-900 transition-all ease-in  text-white text-4xl fs-75  flex justify-end items-center cursor-pointer right-0 h-full w-1/12">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                >
                    <title>{"Chevron Forward"}</title>
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={48}
                        d="m184 112 144 144-144 144"
                    />
                </svg>
            </div>
            <div className="absolute z-20 flex justify-end items-center gap-1 sm:gap-2 h-10 w-6/6 px-5 sm:px-10 right-0 bottom-0">
                {data?.map((anime, index) => (<span key={index} className={`h-1  sm:h-3 ${index === slideCount ? "w-9 bg-white" : "w-3 bg-slate-400"} rounded-full transition-all ease-in-out duration-800`}></span>))}
            </div>
            <SliderItem data={data[slideCount]} />
        </section>
    )
}

export default Slider