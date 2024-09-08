import React, { useEffect, useState } from 'react'
import Nav from './Nav';
import Header from './Header';
import axios from '../../utils/axios';
import Cards from './Cards';
import Middle from './Middle';
import Loading from '../Loading';

function Main({handleopen,isvisible}) {
  const [wallpaper,setwallpaper] = useState(null);
  const [trending ,settrending] = useState(null);
  const [category,setcategory] = useState("all");
  const handleWallpaper = async ()=>{
    try{
        const {data} = await axios.get(`/trending/all/day`);
        let randomdata = data.results[(Math.random()*data.results.length).toFixed()];
        setwallpaper(randomdata);
    }
    catch(err){
      console.log(err);
    }
  }
  const GetTrending = async ()=>{
    try{
        const lowercaseCategory = category.toLowerCase();
        const {data} = await axios.get(`/trending/${lowercaseCategory}/day`);
        settrending(data.results);
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{ !wallpaper && handleWallpaper(); GetTrending(); },[category])
  return wallpaper && trending ? (
    <>
    <div className={`${isvisible ? 'w-[100%]' : 'w-[0%] hidden'} overflow-hidden h-full bg-gradient-to-r from-[#0c0c0c] to-[#24cfa724] sm:w-[80%] sm:h-full`}>
        <Nav handleopen={handleopen}/>
        <Header data={wallpaper}/>
        <Middle category={setcategory}/>
        <Cards tdata={trending} title={category}/>
    </div>
    </>
  ) : <Loading/>
}

export default Main;
