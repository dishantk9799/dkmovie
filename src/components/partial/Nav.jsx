import React, { useEffect, useState } from 'react';
import axios from "../../utils/axios";
import { DiHtml5Multimedia } from "react-icons/di";
import { IoMenu } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import noimage from '/noimage.jpg';
function Nav({handleopen}) {
  const [query,setquery] = useState("");
  const [searchs,setsearchs] = useState([]);
  const Getsearch = async ()=>{
    try{
        const {data} = await axios.get(`/search/multi?query=${query}`);
        setsearchs(data.results);
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    Getsearch();
  },[query]);

  return (
    <>
    <div className='relative w-full h-[10%] bg-gradient-to-r from-[#24cfa70b] to-[#0c0c0c] border-b-[2px] border-zinc-400 sm:border-none'>
      <div className='w-full h-full px-4 py-2 flex items-center justify-between text-white sm:justify-center'>
        <div className='logo flex gap-1 sm:hidden'><span><DiHtml5Multimedia className='text-[7vw] text-[#24cfa6]' /></span><h1 className='text-[4.5vw]'>Dkmovie</h1></div>
        <div className='w-48 h-8 px-2 py-1 bg-zinc-800 rounded-md flex justify-center items-center gap-2 sm:w-1/2 sm:gap-2 sm:h-12'>
         <div className='flex justify-start items-center gap-2 w-full h-full'> 
          <span className='sm:text-xl'><IoMdSearch /></span>
          <input onChange={(e)=>setquery(e.target.value)} value={query} type="text" placeholder='Search anything' className='outline-none border-none bg-transparent w-full h-full'/>
         </div>
          {query.length > 0 && (<span onClick={()=>setquery("")} className='sm:text-xl'><IoMdClose /></span>)}
        </div>
        <span onClick={()=>{handleopen()}} className='menu sm:hidden'><IoMenu className='text-2xl text-[#24cfa6]' /></span>
      </div>
      <div className='absolute w-1/2 max-h-[40vw] overflow-auto bg-zinc-800 top-[90%] left-[34.3%] rounded-md font-medium text-zinc-100 sm:max-h-[20vw] sm:left-[25%] '>
        {searchs.map((item,index)=>(
           <Link to={`/${item.media_type}/details/${item.id}`} key={index} className='w-full h-1/2 px-3 py-3 gap-3 border-b-[2px] text-sm border-white hover:text-black hover:bg-zinc-100 duration-300  flex justify-start items-center sm:px-4 sm:py-4 sm:text-lg sm:gap-5'>
           <img className='w-2/5 h-full shadow-lg object-cover rounded-sm' src={item.backdrop_path || item.profile_path || item.poster_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path || item.poster_path}` : noimage} alt="" />
           <span className='sm:border-b-[2px] sm:border-[#24cfa6]'>{item.name || item.title || item.original_name || item.original_title}</span>
           </Link>
        ))} 
      </div>
    </div>
    </>
  )
}

export default Nav;
