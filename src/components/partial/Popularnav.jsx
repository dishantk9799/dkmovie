import React, { useEffect, useState } from 'react';
import axios from "../../utils/axios";
import { FaStar } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaRegWindowClose } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import noimage from '/noimage.jpg';
import Dropdown from './Dropdown';

function Popularnav({category}) {
    const [type,settype] = useState("");
    const [searchs,setsearchs] = useState([]);
    const [filter,setfilter] = useState([false]);
    const Getsearch = async ()=>{
        try{
            const {data} = await axios.get(`/search/multi?query=${type}`);
            setsearchs(data.results);
        }
        catch(err){
        console.log(err);
        }
    }
    const handlefilter = () => {
       setfilter(!filter);};
    useEffect(()=>{
    Getsearch();
    },[type]);
    const navigate = useNavigate();
  return (
   <>
   <div className='z-50 flex flex-col fixed w-full h-[10%] bg-gradient-to-r from-[#0d342b] to-[#0c0c0c] border-b-[2px] border-zinc-400 sm:border-none'>
      <div className='w-full h-full px-4 py-2 flex items-center justify-evenly text-zinc-400 gap-4 sm:gap-36'>
        <div className='trend flex justify-center items-center gap-1 '><span className='sm:text-2xl'><FaStar /></span><h1 className='text-[5vw] font-semibold sm:text-[2vw]'>Popular</h1></div>
        <div className='w-48 h-8 px-2 py-1 bg-zinc-800 rounded-md flex justify-center items-center gap-2 sm:w-1/2 sm:gap-2 sm:h-12'>
         <div className='flex justify-start items-center gap-2 w-full h-full'> 
          <span className='sm:text-xl'><IoMdSearch /></span>
          <input onChange={(e)=>settype(e.target.value)} value={type} type="text" placeholder='Search anything' className='outline-none border-none bg-transparent w-full h-full'/>
         </div>
          {type.length > 0 && (<span onClick={()=>settype("")} className='sm:text-xl'><IoMdClose /></span>)}
        </div>
        <div className='hidden sm:flex sm:justify-center sm:items-center sm:gap-5'>
            <Dropdown title="Category" option={["TV","Movie"]} onchange={(e)=> category(e.target.value)}/>
            <Link onClick={()=>navigate(-1)}><FaRegWindowClose className='text-red-800 hover:text-red-600 text-4xl' /></Link>
        </div>
        <div className='flex justify-center items-center gap-4 sm:hidden'>
            <span onClick={()=>handlefilter()}  className='text-[#24cfa6]'><FaFilter /></span>
            <Link onClick={()=>navigate(-1)}><FaRegWindowClose className='text-2xl text-red-600' /></Link>          
        </div>
      </div>
      <div className='absolute w-1/2 max-h-[40vw] overflow-auto bg-zinc-800 top-[90%] left-[28.5%] z-10 rounded-md font-medium text-zinc-100 sm:max-h-[20vw] sm:left-[21.4%] '>
        {searchs.map((item,index)=>(
           <Link to={`/${item.media_type}/details/${item.id}`} key={index} className='w-full h-1/2 px-3 py-3 gap-3 border-b-[2px] text-sm border-white hover:text-black hover:bg-zinc-100 duration-300  flex justify-start items-center sm:px-4 sm:py-4 sm:text-lg sm:gap-5'>
           <img className='w-2/5 h-full shadow-lg object-cover rounded-sm' src={item.backdrop_path || item.profile_path || item.poster_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path || item.poster_path}` : noimage} alt="" />
           <span className='sm:border-b-[2px] sm:border-[#24cfa6]'>{item.name || item.title || item.original_name || item.original_title}</span>
           </Link>
        ))} 
      </div>
      <div className={`${filter ? "hidden" : "flex"}   absolute w1/2 max-h-[40vw] top-[110%] left-[68%] z-0  overflow-auto gap-2 flex-col justify-start items-centersm:hidden`}>
      <Dropdown title="Category" option={["TV","Movie"]} onchange={(e)=> category(e.target.value)}/>
      </div>
    </div>
   </>
  )
}

export default Popularnav;
