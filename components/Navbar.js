'use client'
import useDebounceValue from '@/functions/useDebounceValue'
import { useToggle } from '@/functions/useToggle'
import { useGlobalStore } from '@/store/globalStore'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import SearchList from './SearchList'

function Navbar() {
    //refactor to use zustand
    // const [searchTerm, setSearchTerm] = useState("")
    const searchTerm = useGlobalStore((state) => state.searchTerm)
    const setSearchTerm = useGlobalStore((state) => state.setSearchTerm)
    const setDebounce = useGlobalStore((state) => state.setDebouncedSearchTerm)
    const [showSearch, setShowSearch] = useToggle()
    setDebounce(useDebounceValue(searchTerm, 1000))
    const router = useRouter()

    //auto hide search input if no value
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchTerm.length === 0 && showSearch === true) setShowSearch(false)
        }, 5000)

        return () => clearTimeout(timer)
    }, [searchTerm, showSearch])

    //search input threshold
    useEffect(() => {
        const hide = setTimeout(() => {
            if (showSearch) setSearchTerm("")
        }, 10000)

        return () => clearTimeout(hide)
    }, [searchTerm])



    const handleSubmit = async (e) => {
        e.preventDefault()
        router.push(`/anime/${searchTerm}`)
        setSearchTerm("")
    }

    return (
        <nav
            className='h-auto flex flex-col  space-y-3 py-3 text-white'
        >
            <div className='container px-2 sm:px-0 mx-auto flex justify-between items-center h-full '>
                <div className='flex flex-1 justify-start items-center gap-1 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]'>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ionicon"
                        viewBox="0 0 512 512"
                        width="2em"
                        height="2em"
                    >
                        <title>{"Menu"}</title>
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeMiterlimit={10}
                            strokeWidth={32}
                            d="M80 160h352M80 256h352M80 352h352"
                        />
                    </svg>
                    <h1 className='hidden sm:block  text-lg text-900-125 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]'>menu</h1>
                </div>

                <Link href={'/'} className='text-2xl z-10 text-900-125 drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]'>aniwatch</Link>

                <div className=' flex flex-1 justify-end items-center gap-1 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]' >
                    <form onSubmit={(e) => handleSubmit(e)} className='flex justify-center items-center  gap-1 px-2 transition-all ease-in-out'>
                        <div className='flex justify-center items-center group'>
                            <input
                                className='hidden sm:block h-8 w-3/6 px-2 text-xs bg-transparent hover:bg-slate-100 focus:bg-slate-100 hover:text-gray-900 focus:text-gray-900 text-slate-100  absolute right-0    rounded-lg ring-2 ring-slate-100 hover:ring-slate-300 focus:ring-slate-300  outline-none transition-all ease-in-out  placeholder-slate-100 hover:placeholder-gray-900 shadow'
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder='search anime'
                            />

                            <button
                                className='hidden sm:block'
                                type='submit'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ionicon drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
                                    viewBox="0 0 512 512"
                                    width="1.5em"
                                    height="1.5em"
                                >
                                    <title>{"Search"}</title>
                                    <path
                                        d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeMiterlimit={10}
                                        strokeWidth={32}
                                    />
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeMiterlimit={10}
                                        strokeWidth={32}
                                        d="M338.29 338.29 448 448"
                                    />
                                </svg>
                            </button>

                        </div>

                        <button className='sm:hidden'
                            onClick={setShowSearch}
                            type='button'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ionicon drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
                                viewBox="0 0 512 512"
                                width="1.5em"
                                height="1.5em"
                            >
                                <title>{"Search"}</title>
                                <path
                                    d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeMiterlimit={10}
                                    strokeWidth={32}
                                />
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeMiterlimit={10}
                                    strokeWidth={32}
                                    d="M338.29 338.29 448 448"
                                />
                            </svg>
                        </button>

                    </form>
                </div>
            </div>

            {/* search input for mobile */}
            {showSearch && <>
                <div className='sm:hidden px-2 container flex flex-1 justify-end items-center w-full mx-auto gap-1 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] transition-all ease-in duration-1000' >
                    <input
                        className=' px-2 h-8 w-full bg-transparent hover:bg-slate-100 focus:bg-slate-100 hover:text-gray-900 focus:text-gray-900 text-slate-100   rounded ring-2 ring-slate-100 hover:ring-slate-300 focus:ring-slate-300  outline-none transition-all ease-in-out  placeholder-slate-100 hover:placeholder-gray-900 shadow  '
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder='search anime'
                    />

                </div>
                <div className='sm:hidden w-full px-2 transition-all ease-in duration-1000'>
                    <SearchList />
                </div>
            </>}
        </nav>
    )
}

export default Navbar