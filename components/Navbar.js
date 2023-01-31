import React from 'react'

function Navbar() {
    return (
        <nav
            className='h-12 bg-gray-900 text-white'
        >
            <div className='container mx-auto flex justify-between items-center h-full '>

                <h1 className='text-lg text-900-125'>menu</h1>
                <h1 className='text-2xl text-900-125'>aniwatch</h1>
                <h1 className='text-lg text-900-125'>search</h1>
            </div>
        </nav>
    )
}

export default Navbar