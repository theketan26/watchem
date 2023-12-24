"use client";


import { Poppins } from 'next/font/google';


const poppins_4 = Poppins({
	subsets: ['latin'],
	variable: '--font-inter',
	weight: '400'
})
const poppins_6 = Poppins({
	subsets: ['latin'],
	variable: '--font-inter',
	weight: '600'
})


export default function View(props) {
    return (
        <div className = 'h-44 border-4 rounded-xl border-stone-500 overflow-hidden flex'>
            <div>
                <img
                    className = "h-44 translate-x-[-5px]"
                    src = { props.img }
                /> 
            </div>
            <div className = "py-5 px-2 w-full flex flex-col">
                <span className = "flex-grow text-xl font-stone-200"
                ><span className = { poppins_6.className }>{ props.title }</span></span>
                <a className = "mt-2 mx-10 bg-stone-600 p-2 text-center rounded-full"
                    href = { props.url }>
                    Watch
                </a>
            </div>
        </div>
    )
}