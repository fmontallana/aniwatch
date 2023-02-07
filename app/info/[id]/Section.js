import React from 'react'

export default function Section({ children, title }) {
    return (
        <section className='w-full space-y-2'>
            <h1 className='text-slate-100 font-bold fs-100 text-transparent bg-clip-text bg-gradient-to-t from-blue-500  to-blue-300'>{title}</h1>
            <div className='flex justify-start items-start gap-2 overflow-x-scroll sm:overflow-x-hidden'>
                {children}
            </div>
        </section>
    )
}
