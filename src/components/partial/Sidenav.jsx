import React from 'react'
import Sidetopnav from './Sidetopnav';
import { Link } from 'react-router-dom';
import { FaFire } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import { FaTv } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
function Sidenav({isvisible,handleopen}) {
  return (
    <div className={`${isvisible ? 'w-[0%] hidden' : 'w-[100%]' } h-full bg-gradient-to-r from-[#24cfa713] to-[#0c0c0c] sm:flex sm:flex-col sm:flex-shrink-0 sm:w-[20%] sm:h-full sm:border-r-[2px] sm:border-zinc-400`}>
      <Sidetopnav handleopen={handleopen}/>
      <nav className='flex flex-col gap-2 pl-5 pr-44  text-zinc-400 mt-10 sm:pl-[4.8vw] sm:pr-14'>
        <h1 className='text-zinc-200 border-b-[2px] border-[#24cfa6] font-medium text-[8vw] sm:text-[1.5vw]'>New Feeds</h1>
        <Link to="/trending" className='px-3 py-2 gap-2 mt-5 flex font-semibold items-center rounded-md duration-300 text-lg hover:text-white hover:bg-[#24cfa6] text-[#24cfa6] sm:text-zinc-400'><span><FaFire /></span>Trending</Link>
        <Link to="/popular" className='px-3 py-2 gap-2 flex  font-semibold items-center rounded-md duration-300 text-lg hover:text-white hover:bg-[#24cfa6] text-[#24cfa6] sm:text-zinc-400'><span><FaStar /></span>Popular</Link>
        <Link to="/movie" className='px-3 py-2 gap-2 flex font-semibold items-center rounded-md duration-300 text-lg hover:text-white hover:bg-[#24cfa6] text-[#24cfa6] sm:text-zinc-400'><span><RiMovie2Fill /></span>Movies</Link>
        <Link to="/tv" className='px-3 py-2 gap-2 flex  font-semibold items-center rounded-md duration-300 text-lg hover:text-white hover:bg-[#24cfa6] text-[#24cfa6] sm:text-zinc-400'><span><FaTv /></span>Tv Shows</Link>
        <Link to="/person" className='px-3 py-2 gap-2 flex  font-semibold items-center rounded-md duration-300 text-lg hover:text-white hover:bg-[#24cfa6] text-[#24cfa6] sm:text-zinc-400'><span><IoPeopleSharp /></span>People</Link>
        <h1 className='text-zinc-200  mt-2 border-b-[2px] border-[#24cfa6] font-medium text-[8vw] sm:text-[1.5vw] sm:mt-8'>Infomation</h1>
        <Link to="/about" className='px-3 py-2 gap-2 mt-5 flex font-semibold items-center rounded-md duration-300 text-lg hover:text-white hover:bg-[#24cfa6] text-[#24cfa6] sm:text-zinc-400'><span><IoIosInformationCircle /></span>About</Link>
        <Link to="/contact" className='px-3 py-2 gap-2 flex  font-semibold items-center rounded-md duration-300 text-lg hover:text-white hover:bg-[#24cfa6] text-[#24cfa6] sm:text-zinc-400'><span><FaPhoneAlt /></span>Contact Us</Link>
        
      </nav>
    </div>
  )
}

export default Sidenav;
