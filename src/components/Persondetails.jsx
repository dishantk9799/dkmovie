import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncloadperson, removeperson } from '../store/actions/personAction';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import Dropdown from './partial/Dropdown';
import { FaArrowLeft } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Loading from './Loading';
import noimage from '/noimage.jpg';

function Persondetails() {
  document.title = 'Dkmovie - Person Details';
  const { pathname } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();
  const [category,setcategory] = useState("movie");
  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    }
  }, [id])
  return info ? (
    <>
      <div className='relative bg-gradient-to-r from-[#0c0c0c] to-[#24cfa724] overflow-hidden w-full h-auto text-white pt-2 pb-2 px-6 sm:pt-10 sm:px-40 sm:bg-black'>
        {/* nav */}
        <div className='nav text-base w-full h-8 flex items-center justify-start sm:text-lg sm:h-2'>
          <Link onClick={() => navigate(-1)} className='sm:hover:text-[#24cfa6] duration-300'><FaArrowLeft /></Link>
        </div>
        {/* main*/}
        <div className='mt-2 gap-1 w-full flex items-start justify-start  pb-2 sm:mt-4 sm:gap-5'>
          {/*leftpart */}
          <div className='topleftpart w-[35vw] flex flex-col items-start justify-center sm:w-[12vw]'>
            <img className='object-cover mt-1 w-[35vw] h-[50vw] rounded-md  bg-zinc-800 shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] sm:mt-3 sm:w-[12vw] sm:h-[35vh]' src={info.detail.profile_path ? `https://image.tmdb.org/t/p/original/${info.detail.profile_path}` : noimage} alt="" />
            {/* socialmedia */}
            <div className='w-full h-auto mt-1 gap-3 px-2 py-1 text-lg  font-semibold flex justify-center items-center border-t-[3px] border-[#24cfa6] sm:text-2xl sm:gap-5'>
              <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`} className='sm:hover:text-[#24cfa6] duration-300 '><FaEarthAmericas /></a>
              <a target='_blank' href={`https://www.instagram.com/${info.externalid.instagram_id}`} className='sm:hover:text-[#24cfa6] duration-300 '><FaInstagram /></a>
              <a target='_blank' href={`https://www.twitter.com/${info.externalid.twitter_id}`} className='sm:hover:text-[#24cfa6] duration-300 '><FaXTwitter /></a>
              <a target='_blank' href={`https://www.facebook.com/${info.externalid.facebook_id}`} className='sm:hover:text-[#24cfa6] duration-300 '><FaFacebook /></a>
            </div>
            {/* personinfo */}
            <div className='w-full h-auto mt-1 flex flex-col justify-start items-start'>
              <h1 className='font-semibold text-lg sm:text-2xl'>Personal Info</h1>
              <div className='personalinfo flex flex-col overflow-y-auto gap-3 justify-start items-start w-full h-[20vh] sm:h-[42vh]'>
                <div className='w-full font-medium h-auto flex flex-col justify-start items-start'>
                  <h1 className='text-zinc-200 text-sm sm:text-xl'>Profession</h1>
                  <h1 className='text-[#24cfa6] text-xs sm:text-base'>{info.detail.known_for_department}</h1>
                </div>
                <div className='w-full font-medium h-auto flex flex-col justify-start items-start'>
                  <h1 className='text-zinc-200 text-sm sm:text-xl'>Gender</h1>
                  <h1 className='text-[#24cfa6] text-xs sm:text-base'>{info.detail.gender == 2 ? "Male" : "Female"}</h1>
                </div>
                <div className='w-full font-medium h-auto flex flex-col justify-start items-start'>
                  <h1 className='text-zinc-200 text-sm sm:text-xl'>Birthday</h1>
                  <h1 className='text-[#24cfa6] text-xs sm:text-base'>{info.detail.birthday}</h1>
                </div>
                <div className='w-full font-medium h-auto flex flex-col justify-start items-start'>
                  <h1 className='text-zinc-200 text-sm sm:text-xl'>Deathday</h1>
                  <h1 className='text-[#24cfa6] text-xs sm:text-base'>{info.detail.deathday ? info.detail.deathday : "Still Alive"}</h1>
                </div>
                <div className='w-full font-medium h-auto flex flex-col justify-start items-start'>
                  <h1 className='text-zinc-200 text-sm sm:text-xl'>Place Of Birth</h1>
                  <h1 className='text-[#24cfa6] text-xs sm:text-base'>{info.detail.place_of_birth}</h1>
                </div>
                <div className='w-full font-medium h-auto flex flex-col justify-start items-start'>
                  <h1 className='text-zinc-200 text-sm sm:text-xl'>Also Known as</h1>
                  <h1 className='text-[#24cfa6] text-xs sm:text-base'>{info.detail.also_known_as.join(", ")}</h1>
                </div>
              </div>
            </div>
          </div>
          {/* rightpart */}
          <div className='w-[48vw] h-auto flex flex-col justify-start items-start gap-6 ml-2  mt-1 sm:gap-9 sm:mt-3 sm:w-[65vw] '>
            <div className='w-full h-[30vh] flex flex-col justify-start items-start gap-1 sm:gap-7 sm:h-[36vh]'>
              <h1 className='text-3xl font-semibold overflow-hidden text-ellipsis line-clamp-2 text-wrap sm:hidden'>{info.detail.name}</h1>
              <h1 className='hidden sm:font-semibold sm:text-6xl sm:block'>{info.detail.name}</h1>
              <div className='flex flex-col justify-start items-start'>
                <h1 className='font-semibold sm:text-2xl text-zinc-200'>Biography</h1>
                <p className='hidden sm:overflow-hidden sm:text-ellipsis sm:line-clamp-6 sm:text-wrap sm:text-base sm:text-[#24cfa6]'>{info.detail.biography}</p>
                <p className='overflow-hidden text-[#24cfa6] text-ellipsis line-clamp-6 text-wrap text-xs sm:hidden'>{info.detail.biography}</p>
              </div>
            </div>
            <div className='w-full  h-[44vw] flex flex-col items-start justify-start sm:h-[22vw]'>
              <h1 className='font-medium text-lg sm:text-2xl'>Known for</h1>
              <div className='known w-full h-full gap-2 overflow-x-auto flex-wrap flex-col flex justify-start items-start sm:gap-11 '>
                {info.combinedCredits.cast.map((item, index) => (
                    <Link to={`/${item.media_type || 'tv'}/details/${item.id}`} key={index} className='cardnav w-[28vw] h-32 sm:w-44 sm:h-60 bg-zinc-800 mt-1 sm:mt-8 overflow-x-auto rounded-md shadow-md flex flex-col justify-start items-start p-2'>
                      <img className='w-full h-1/2 object-cover rounded-sm' src={item.backdrop_path || item.poster_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path}` : noimage} alt="" />
                      <div className='w-full h-1/2'>
                        <h1 className='overflow-hidden text-ellipsis line-clamp-2 mt-1 text-xs font-medium text-white sm:text-lg'>{item.name || item.original_title || item.title || item.original_name}</h1>
                        <p className='text-white text-[2vw] sm:text-[.8vw]'>{item.overview.slice(0, 40)}<Link to={`/${item.media_type || 'tv'}/details/${item.id}`} className='text-blue-400'>...more</Link></p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className='w-full h-auto gap-2 flex flex-col justify-start items-start mt-5 sm:mt-10 sm:gap-8'>
          <div className='w-full h-auto flex justify-between items-center'>
                    <h1 className='font-semibold text-xl sm:text-3xl'>Work</h1>
                    <Dropdown title="Category" option={["tv","movie"]} onchange={(e)=> setcategory(e.target.value)}/>
          </div>
          <div className='h-[40vw] list-none px-5 py-4 overflow-x-hidden rounded-md overflow-y-auto w-full bg-zinc-800 sm:h-[40vw] sm:mb-5'>
            {info[category + "Credits"].cast.map((c,i)=>(
              <h1 key={i} className='text-sm  duration-200 cursor-pointer sm:text-base'>
              <Link to={`/${category}/details/${c.id}`}>
              <span className='text-[#24cfa6] overflow-hidden text-ellipsis line-clamp-1'><span className='text-white'>{category==="movie" ? "• Movie:" : "• Tvshow:"}</span> {c.name || c.original_title || c.title || c.original_name}</span>
              <span className='block mb-2 ml-2 text-[#24cfa6] overflow-hidden text-ellipsis line-clamp-1 sm:ml-3 sm:mb-4'><span className='text-white'>{c.character ? "Character:" : ""}</span> {c.character}</span>
              </Link>
            </h1>
            ))}
            
          </div>
        </div>
      </div>
    </>
  ) : (<Loading />);
}

export default Persondetails;
