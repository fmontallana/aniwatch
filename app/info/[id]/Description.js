"use client"
import { useToggle } from '@/functions/useToggle'

export default function Description({ description }) {

    const [isShow, toggle] = useToggle(false)

    return (
        <>
            <div className={`text-slate-200 ${!isShow && 'line-clamp-3'} transition-all ease-in-out duration-500`} dangerouslySetInnerHTML={{ __html: description }} />
            <button className='text-xs text-slate-300 hover:text-slate-400' type='button' onClick={() => toggle()} >{isShow ? "Show Less" : "Read More"}</button>
        </>
    )
}
