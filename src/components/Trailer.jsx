import React from 'react'
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ImCross } from "react-icons/im";
import Error from './Error';

function Trailer() {
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const category = pathname.includes('movie') ? 'movie' : 'tv';
    const video = useSelector((state) => state[category].info.videos);
    
    
  return (
    <>
    <div className=' absolute top-0 left-0 w-full h-screen flex justify-center items-start py-44 px-2 gap-1 sm:p-24 sm:gap-2'>
        {video ? <ReactPlayer controls height="80%" width="75%" url={`https://www.youtube.com/watch?v=${video.key}`}/> : <Error/>}
        <Link onClick={() => navigate(-1)} className='hover:text-[#24cfa6] duration-300 text-lg'><ImCross /></Link>
    </div>
    </>
  )
}

export default Trailer;
