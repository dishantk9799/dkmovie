import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";
import Popularnav from './partial/Popularnav';
import Popularcard from './partial/Popularcard';
function Popular() {
    document.title = 'Dkmovie - Popular';
    const [category, setcategory] = useState("movie");
    const [popular, setpopular] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const GetPopular = async () => {
        try {
          const lowercaseCategory = category.toLowerCase();
          const { data } = await axios.get(`/${lowercaseCategory}/popular?page=${page}`);
          if (data.results.length > 0) {
            setpopular((prev) => [...prev, ...data.results]); 
            setpage((prevPage) => prevPage + 1); 
          } else {
            setHasMore(false); 
          }
        } catch (err) {
          console.log(err);
        }
      };
      useEffect(() => {
        setpopular([]); 
        setpage(1); 
        setHasMore(true); 
        GetPopular(); 
      }, [category]);
  return popular.length > 0 ? (
    <>
    <div className='w-full overflow-hidden bg-gradient-to-r from-[#0c0c0c] from-20% to-[#0c4c3d] to-120%'>
        <Popularnav category={setcategory}/>
        <InfiniteScroll
          dataLength={popular.length}
          next={GetPopular}
          hasMore={hasMore}
          loader={<h1 className='text-white font-semibold ml-2 mt-2'>Loading...</h1>}
        >
            <Popularcard data={popular} title={category}/>
        </InfiniteScroll>
    </div>
    </>
  ) : (
    <Loading/>
  );
}

export default Popular;
