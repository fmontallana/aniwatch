import React from 'react'

function Navbar() {
    return (
        <nav
            className='h-12 bg-gray-900 text-white'
        >
            <div className='container px-2 sm:px-0 mx-auto flex justify-between items-center h-full '>
                <div className='flex justify-start items-center'>

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
                    <h1 className='hidden sm:block  text-lg text-900-125'>menu</h1>
                </div>

                <h1 className='text-2xl text-900-125'>aniwatch</h1>

                <div className='flex justify-end items-center' >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ionicon"
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
                    <h1 className='hidden sm:block text-lg text-900-125'>search</h1>
                </div>
            </div>
        </nav>
    )
}

export default Navbar