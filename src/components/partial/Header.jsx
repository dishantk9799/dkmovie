import React from 'react'
import { Link } from 'react-router-dom';
import { HiSpeakerphone } from "react-icons/hi";
import { MdAlbum } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
function Header({data}) {
  return (
    <>
    <div style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8) ),url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path})`,
        backgroundPosition: "start",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        
    }} className='w-full h-[70vw] text-white bg-orange-100 flex flex-col justify-end px-5 py-5 sm:h-[22vw] sm:px-8'>
        <h1 className='text-xl font-bold w-[70%] sm:text-[3vw] sm:font-semibold'>{data.name || data.original_title || data.title || data.original_name}</h1>
        <p className='text-[2vw] mt-1 w-[70%] sm:text-[1vw] sm:mt-5'>{data.overview.slice(0,200)}<Link to={`/${data.media_type}/details/${data.id}`} className='text-blue-400'>...more</Link></p>
        <div className='flex justify-start items-center gap-3 mt-1 sm:gap-5 sm:mt-3'>
            <div className='flex justify-start items-center gap-1 text-[3vw] sm:text-base'>
                <span className='text-yellow-500'><HiSpeakerphone /></span>
                <h1>{data.release_date || "No Information"}</h1>
            </div>
            <div className='flex justify-start items-center gap-1 text-[3vw] sm:text-base'>
                <span className='text-yellow-500'><MdAlbum /></span>
                <h1>{data.media_type.toUpperCase()}</h1>
            </div>
        </div>
        <Link to={`${data.media_type}/details/${data.id}/trailer`} className='bg-[#24cfa6] duration-200 hover:bg-[#136451] hover:text-zinc-400 w-24 flex justify-center items-center p-2 mt-2 text-[3vw] font-semibold rounded-md gap-1 sm:text-[1vw] sm:w-32 sm:mt-5'><span className='text-[2vw] sm:text-sm'><FaPlay /></span><h1 className=''>Watch Trailer</h1></Link>
    </div>
    </>
  )
}

export default Header;
