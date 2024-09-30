import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncloadtv, removetv } from '../store/actions/tvAction';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import Loading from './Loading';
import rent from '/rent.png';
import watching from '/watching.png';
import cart from '/cart.png';
import noimage from '/noimage.jpg';
function Tvdetails() {
  document.title = 'Dkmovie - TV Show Details';
  const { pathname } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.tv);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv());
    }
  }, [id])
  return info ? (
    <>
      <div style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8) ),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

      }} className='relative overflow-hidden w-full min-h-screen text-white pt-2 pb-2 px-6 sm:pt-10 sm:px-40'>
        {/* nav */}
        <div className='nav text-base gap-3 w-full h-8 flex items-center justify-start sm:text-lg sm:gap-10 sm:h-10'>
          <Link onClick={() => navigate(-1)} className='sm:hover:text-[#24cfa6] duration-300'><FaArrowLeft /></Link>
          <a target='_blank' className='text-lg sm:text-xl sm:hover:text-[#24cfa6] duration-300' href={info.detail.homepage}><RiExternalLinkFill /></a>
          <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`} className='sm:hover:text-[#24cfa6] duration-300'><FaEarthAmericas /></a>
          <a target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`} className='sm:hover:text-[#24cfa6] duration-300'>IMDB</a>
        </div>
        {/* top */}
        <div className='mt-2 gap-1 w-full flex items-start justify-start border-b-[2px] pb-2 border-[#24cfa6] sm:border-white sm:mt-4 sm:gap-5'>
          {/* topleftpart */}
          <div className='topleftpart flex flex-col items-start justify-center'>
            <img className='object-cover mt-1 w-[34vw] h-[48vw] rounded-md  bg-zinc-800 shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] sm:mt-3 sm:w-[14.5vw] sm:h-[20vw]' src={info.detail.poster_path || info.detail.backdrop_path ? `https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}` : noimage} alt="" />
            <div className='w-auto mt-2 gap-1 text-sm font-semibold flex flex-col justify-center items-start sm:text-base sm:gap-3'>

              {info.watchproviders && info.watchproviders.flatrate && (
                <div className='w-auto flex justify-center items-center gap-1 sm:gap-2'>
                  <h1 className='hidden sm:block'>Streaming :&nbsp;</h1>
                  <img className='w-5 h-5 mb-0.5 object-fill text-white sm:hidden' src={watching} alt="" /><span className='sm:hidden'>:</span>
                  {info.watchproviders.flatrate.slice(0, 3).map((w, i) => (
                    <img key={i} className='w-5 h-5 object-fill rounded-sm sm:w-9 sm:h-9 sm:rounded-md' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />
                  ))}
                </div>
              )}
              {info.watchproviders && info.watchproviders.rent && (
                <div className='w-auto flex justify-center items-center gap-1 sm:gap-2'>
                  <h1 className='hidden sm:block'>Rent :</h1>
                  <img className='w-5 h-5 object-fill text-white sm:hidden' src={rent} alt="" /><span className='sm:hidden'>:</span>
                  {info.watchproviders.rent.slice(0, 4).map((w, i) => (
                    <img key={i} className='w-5 h-5 object-fill rounded-sm sm:w-9 sm:h-9 sm:rounded-md' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />
                  ))}
                </div>
              )}
              {info.watchproviders && info.watchproviders.buy && (
                <div className='w-auto flex justify-center items-center gap-1 sm:gap-2'>
                  <h1 className='hidden sm:block'>Buy :&nbsp; </h1>
                  <img className='w-5 h-5 object-fill text-white sm:hidden' src={cart} alt="" /><span className='sm:hidden'>:</span>
                  {info.watchproviders.buy.slice(0, 4).map((w, i) => (
                    <img key={i} className='w-5 h-5 object-fill rounded-sm sm:w-9 sm:h-9 sm:rounded-md' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* toprightpart */}
          <div className='toprightpart w-[60%] h-auto flex flex-col justify-start items-start sm:w-[81%]'>
            <div className='flex justify-star  items-start w-full h-auto'>
              <h1 className='text-[6vw] leading-snug overflow-hidden text-ellipsis line-clamp-2  font-semibold sm:text-[3vw] sm:line-clamp-1'>{info.detail.name || info.detail.title || info.detail.original_name || info.detail.original_title} <span className='text-sm text-zinc-200 sm:text-2xl'>({info.detail.first_air_date.split("-")[0]})</span></h1>
            </div>
            <div className='score text-zinc-100 gap-3 flex justify-star items-center w-full h-auto sm:gap-8'>
              <div className='flex justify-center items-center gap-1 sm:gap-2'>
                <div className=' relative flex justify-center items-center h-6 w-6 rounded-full bg-[#24cfa6] text-white sm:h-10 sm:w-10 '>
                  <h1 className='font-semibold flex text-xs sm:text-base'>{(info.detail.vote_average * 10).toFixed()}</h1><h1 className='absolute top-[20%] left-[75%] text-[1vw] sm:left-[70%] sm:text-[.5vw]'>%</h1>
                </div>
                <h1 className=' text-sm font-medium sm:text-2xl'>Score</h1>
              </div>
              <small className='hidden sm:block sm:text-lg sm:mt-1'>{info.detail.first_air_date}</small>
              <h1 className='hidden sm:block sm:text-lg sm:mt-1'>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            </div>
            <div className='time text-zinc-100 gap-2 flex justify-star items-end w-full h-auto sm:hidden'>
              <small className='text-sm font-medium sm:hidden'>{info.detail.first_air_date}</small>
            </div>
            <div className='genres text-zinc-100 flex justify-star items-end w-full h-auto sm:hidden'>
              <h1 className=' text-sm font-medium  overflow-hidden text-ellipsis line-clamp-1'>{info.detail.genres.map((g) => g.name).slice(0, 3).join(",")}</h1>
            </div>
            <div className='tagline mb-1 text-zinc-200 flex justify-star items-end w-full h-auto sm:hidden'>
              <h1 className=' text-sm font-normal italic overflow-hidden text-ellipsis line-clamp-2'>{info.detail.tagline}</h1>
            </div>
            <div className='info hidden sm:w-full sm:flex sm:flex-col sm:justify-start items-start'>
              <h1 className='tagline text-zinc-200 text-xl font-bold italic overflow-hidden text-ellipsis line-clamp-1'>{info.detail.tagline}</h1>
              <div className='overview w-full flex flex-col items-start justify-start'>
                <h1 className=' mt-1 text-xl font-bold'>Overview</h1>
                <h2 className='text-zinc-200 overflow-hidden text-ellipsis line-clamp-4'>{info.detail.overview}</h2>
              </div>
              <div className='movietranslation w-full overflow-hidden flex flex-col items-start justify-start'>
                <h1 className=' mt-1 text-xl font-bold'>Move Translation</h1>
                <h2 className='text-zinc-200 overflow-hidden text-ellipsis line-clamp-4'>{info.translations.join(', ')}</h2>
              </div>
            </div>
            <Link to={`${pathname}/trailer`} className=' bg-[#24cfa6] duration-200 sm:hover:bg-[#136451] hover:text-zinc-400 w-24 flex justify-center items-center p-2 mt-2 text-[3vw] font-semibold rounded-md gap-1 sm:text-[1vw] sm:w-32 sm:mt-5'><span className='text-[2vw] sm:text-sm'><FaPlay /></span><h1 className=''>Watch Trailer</h1></Link>
          </div>
        </div>
        {/* bottom overview */}
        <div className=' gap-1 mt-5 w-full flex flex-col items-start justify-start pb-2 border-b-[2px] border-[#24cfa6] sm:border-white sm:hidden'>
          <h1 className=' text-2xl font-bold'>Overview</h1>
          <h2 className='text-zinc-200 text-xs overflow-hidden text-ellipsis line-clamp-4 mb-2'>{info.detail.overview}</h2>
        </div>
        {/* seasons */}
        <div className='h-[75vw] gap-3 mt-5 w-full flex flex-col items-start justify-start pb-2 border-b-[2px] border-[#24cfa6] sm:border-white sm:mt-4 sm:h-[22vw] sm:gap-5'>
          <h1 className='text-2xl font-bold'>Seasons</h1>
          <div className='cardmainnav  w-[100%] flex gap-10 overflow-x-auto sm:gap-16'>
            {info.detail.seasons.length > 0 ? info.detail.seasons.map((s, i) => (
              <div key={i} className='flex flex-col gap-1 flex-shrink-0 sm:gap-0 mb-2'>
                <img className='w-32 h-44 rounded-md sm:w-36 sm:h-56 object-cover shadow-md' src={s.poster_path ? `https://image.tmdb.org/t/p/original/${s.poster_path}` : noimage} alt="" />
                <h1 className='text-lg font-semibold w-32 sm:w-36 overflow-hidden text-ellipsis line-clamp-1 text-zinc-200'>{s.name}</h1>
              </div>
            )) : <h1 className='w-full h-full flex items-center font-semibold text-2xl justify-center'>Not Available</h1>
            }
          </div>
        </div>

        {/* recommandation */}
        <div className=' h-[75vw] mt-5 w-full flex flex-col items-start justify-start pb-2 sm:mt-4 sm:h-[19vw]'>
          <h1 className='hidden sm:text-2xl sm:font-bold sm:block'>Recommandations & Similar Stuff</h1>
          <h1 className=' text-2xl font-bold sm:hidden'>Similar Stuff</h1>
          <div className='cardmainnav w-full h-full gap-2 overflow-x-auto flex-wrap flex-col flex justify-start items-start sm:gap-11 '>
            {info.recommendations.length > 0 ? (
              info.recommendations.map((item, index) => (
                <Link to={`/${item.media_type || 'tv'}/details/${item.id}`} key={index} className='cardnav w-40 h-52 bg-zinc-800 mt-5 overflow-x-auto rounded-md shadow-md flex flex-col justify-start items-start p-2'>
                  <img className='w-full h-1/2 object-cover rounded-sm' src={item.backdrop_path || item.poster_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path}`: noimage} alt="" />
                  <div className='w-full h-1/2'>
                    <h1 className='overflow-hidden text-ellipsis line-clamp-2 mt-1 text-lg font-medium text-white'>{item.name || item.original_title || item.title || item.original_name}</h1>
                    <p className='text-white text-[3vw] sm:text-[.8vw]'>{item.overview.slice(0, 40)}<Link to={`/${item.media_type || 'tv'}/details/${item.id}`} className='text-blue-400'>...more</Link></p>
                  </div>
                </Link>
              ))
            ) : info.similar.length > 0 ? (
              info.similar.map((item, index) => (
                <Link to={`/${item.media_type || 'tv'}/details/${item.id}`} key={index} className='cardnav w-40 h-52 bg-zinc-800 mt-5 overflow-x-auto rounded-md shadow-md flex flex-col justify-start items-start p-2'>
                  <img className='w-full h-1/2 object-cover rounded-sm' src={item.backdrop_path || item.poster_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path}`: noimage} alt="" />
                  <div className='w-full h-1/2'>
                    <h1 className='overflow-hidden text-ellipsis line-clamp-2 mt-1 text-lg font-medium text-white'>{item.name || item.original_title || item.title || item.original_name}</h1>
                    <p className='text-white text-[3vw] sm:text-[.8vw]'>{item.overview.slice(0, 40)}<Link to={`/${item.media_type || 'tv'}/details/${item.id}`} className='text-blue-400'>...more</Link></p>
                  </div>
                </Link>
              ))
            ) : (
              <h1 className='w-full h-full flex justify-center items-center text-2xl font-semibold'>Not Available</h1>
            )}

          </div>
        </div>
        <Outlet />
      </div>
    </>
  ) : (<Loading />);
}

export default Tvdetails;

