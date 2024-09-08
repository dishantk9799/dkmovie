import React, { useEffect, useState } from 'react'
import Sidenav from './partial/Sidenav';
import Main from './partial/Main';
import Loading from './Loading';
import axios from '../utils/axios';
function Home() {
    document.title = 'Dkmovie - Home';
    const [menus,setmenus] = useState([false]);
    const [load,setload] = useState(null);
    
    const handleload = async ()=>{
      try{
          const {data} = await axios.get(`/trending/all/day`);
          setload(data.results);
      }
      catch(err){
        console.log(err);
      }
    }
      useEffect(()=>{ !load && handleload();},[]);
    const handleopen = () => {
      setmenus(!menus);}; 
  return load ? (
    <>
    <div className='overflow-hidden w-full h-full relative flex sm:flex'>
      <Sidenav isvisible={menus} handleopen={handleopen}/>
      <Main isvisible={menus} handleopen={handleopen}/>
    </div>
    </>
  ) : <Loading/>
}

export default Home;
