import React from 'react'
import { Link } from 'react-router-dom';
import noimage from '/noimage.jpg';
function Peoplecard({data,title}) {
  return (
    <>
    <div className='w-full scroll-smooth pt-24 px-5 gap-8 flex justify-start items-center flex-wrap bg-gradient-to-r from-[#0c0c0c] from-20% to-[#0c4c3d]  text-white sm:gap-16 sm:px-12 sm:pt-36'>
            {data.map((item,index)=>(
                <Link to={`/${item.media_type || title}/details/${item.id}`} key={index} className='relative flex flex-col gap-2'>
                <img className='object-cover w-[40vw] h-[55vw] rounded-md  bg-zinc-800 shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] sm:w-[12vw] sm:h-[35vh]' src={item.poster_path || item.backdrop_path || item.profile_path ? `https://image.tmdb.org/t/p/original/${item.poster_path || item.backdrop_path || item.profile_path}` : noimage} alt="" />
                <h1 className='overflow-hidden text-ellipsis line-clamp-2 h-12 w-[40vw] font-bold sm:h-16 sm:text-xl sm:w-[12vw]'>{item.name || item.original_title || item.title || item.original_name}</h1>
                
            </Link>
            ))}
    </div>
    </>
  )
}

export default Peoplecard;
