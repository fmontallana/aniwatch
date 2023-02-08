"use client"
import useDebounceValue from '@/functions/useDebounceValue'
import Link from 'next/link'
import SearchList from './SearchList'
import { useToggle } from '@/functions/useToggle'
import { useGlobalStore } from '@/store/globalStore'
import { useRouter } from 'next/navigation'
import { IoMenu, IoSearch } from 'react-icons/io5'

function Navbar() {


  const searchTerm = useGlobalStore((state) => state.searchTerm)
  const setSearchTerm = useGlobalStore((state) => state.setSearchTerm)
  const setDebounce = useGlobalStore((state) => state.setDebouncedSearchTerm)
  const [showSearch, setShowSearch] = useToggle()
  setDebounce(useDebounceValue(searchTerm, 1000))
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSearchTerm("")
    router.push(`/anime/${searchTerm}`)
  }

  return (
    <nav className='h-auto flex flex-col  space-y-3 py-3 text-white'>
      <div className='container px-2 sm:px-0 mx-auto flex justify-between items-center h-full '>
        <div className='flex flex-1 justify-start items-center gap-1 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]'>
          <IoMenu size="2em" />
          {/* <h1 className='hidden sm:block  text-lg  drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]'>menu</h1> */}
        </div>

        <Link href={'/'} className='flex font-black fs-125 gap-0 text-2xl z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]'>
          <span className=' text-transparent bg-clip-text bg-gradient-to-t from-blue-500  to-blue-300 drop-shadow-[0_2px_2px_rgb(255, 255, 255)]'>a</span>
          <span className='fs-125 '>flix</span>
        </Link>

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
                <IoSearch size="2em" />
              </button>

            </div>

            <button className='sm:hidden'
              onClick={setShowSearch}
              type='button'>
              <IoSearch size="2em" />
            </button>

          </form>
        </div>
      </div>

      {/* search input for mobile */}
      {showSearch ? <div>
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
          <SearchList setShowSearch={setShowSearch} />
        </div>
      </div> : null}
    </nav>
  )
}

export default Navbar