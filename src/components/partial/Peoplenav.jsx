import React, { useEffect, useState } from 'react';
import axios from "../../utils/axios";
import { IoPeopleSharp } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaRegWindowClose } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import noimage from '/noimage.jpg';
function Peoplenav() {
    const [type,settype] = useState("");
    const [searchs,setsearchs] = useState([]);
    const Getsearch = async ()=>{
        try{
            const {data} = await axios.get(`/search/multi?query=${type}`);
            setsearchs(data.results);
        }
        catch(err){
        console.log(err);
        }
    }
    useEffect(()=>{
    Getsearch();
    },[type]);
    const navigate = useNavigate();
  return (
    <>
    <div className='z-50 flex flex-col fixed w-full h-[10%] bg-gradient-to-r from-[#0d342b] to-[#0c0c0c] border-b-[2px] border-zinc-400 sm:border-none'>
      <div className='w-full h-full px-4 py-2 flex items-center justify-evenly text-zinc-400 gap-4 sm:gap-64'>
        <div className='trend flex justify-center items-center gap-1 '><span className='mt-1 sm:text-3xl'><IoPeopleSharp /></span><h1 className='text-[5vw] font-semibold sm:text-[2vw]'>People</h1></div>
        <div className='w-48 h-8 px-2 py-1 bg-zinc-800 rounded-md flex justify-center items-center gap-2 sm:w-1/2 sm:gap-2 sm:h-12'>
         <div className='flex justify-start items-center gap-2 w-full h-full'> 
          <span className='sm:text-xl'><IoMdSearch /></span>
          <input onChange={(e)=>settype(e.target.value)} value={type} type="text" placeholder='Search anything' className='outline-none border-none bg-transparent w-full h-full'/>
         </div>
          {type.length > 0 && (<span onClick={()=>settype("")} className='sm:text-xl'><IoMdClose /></span>)}
        </div>
        <div className='flex justify-center items-center gap-4 sm:gap-5'>
            <Link onClick={()=>navigate(-1)}><FaRegWindowClose className='text-red-800 hover:text-red-600 text-2xl sm:text-4xl' /></Link>
        </div>
      </div>
      <div className='absolute w-1/2 max-h-[40vw] overflow-auto bg-zinc-800 top-[90%] left-[32%] z-10 rounded-md font-medium text-zinc-100 sm:max-h-[20vw] sm:left-[28%] '>
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

export default Peoplenav;
