import React from 'react'
import { FaRegWindowClose } from "react-icons/fa";
import { DiHtml5Multimedia } from "react-icons/di";
function Sidetopnav({handleopen}) {
  return (
    <>
     <div className='w-full h-[10%] px-4 py-2 border-b-[2px] border-zinc-400 text-white flex justify-between items-center sm:justify-center sm:border-none '>
        <div className='logo flex gap-1'><span><DiHtml5Multimedia className='text-[7vw] sm:text-[3vw] text-[#24cfa6]' /></span><h1 className='text-[4.5vw] sm:text-[2vw] sm:font-semibold'>Dkmovie</h1></div>
        <span  onClick={()=>{handleopen()}}><FaRegWindowClose className='text-2xl text-red-600 sm:hidden' /></span>
    </div>
    </>
  )
}

export default Sidetopnav
