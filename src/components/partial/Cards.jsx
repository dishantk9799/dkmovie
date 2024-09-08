import React from 'react'
import { Link } from 'react-router-dom';
import noimage from '/noimage.jpg';
function Cards({tdata,title}) {
  return (
   <>
   <div className='cardmainnav w-full h-[40%] gap-4 overflow-x-auto flex-wrap flex-col  px-5 flex justify-start items-start  sm:h-[35%] sm:px-8'>
    {tdata.map((item,index)=>(
      <Link to={`/${item.media_type || title}/details/${item.id}`} key={index} className='cardnav w-40 h-52 bg-zinc-800 mt-5 overflow-x-auto rounded-md shadow-md flex flex-col justify-start items-start p-2'>
      <img className='w-full h-1/2 object-cover rounded-sm' src={item.backdrop_path || item.poster_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path}` : noimage} alt="" />
      <div className='w-full h-1/2'>
      <h1 className='overflow-hidden text-ellipsis line-clamp-2 mt-1 text-lg font-medium text-white'>{item.name || item.original_title || item.title || item.original_name}</h1>
      <p className='text-white text-[3vw] sm:text-[.8vw]'>{item.overview.slice(0,40)}<Link to={`/${item.media_type || title}/details/${item.id}`} className='text-blue-400'>...more</Link></p>
      </div>
    </Link>
    ))}
   </div>
   </>
  )
}

export default Cards;
