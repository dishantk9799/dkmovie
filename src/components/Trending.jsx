import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import Trendingnav from './partial/Trendingnav';
import Trendingcard from './partial/Trendingcard';
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";

function Trending() {
  document.title = 'Dkmovie - Trending';
  const [category, setcategory] = useState("all");
  const [trending, settrending] = useState([]);
  const [duration, setduration] = useState("day");
  const [page, setpage] = useState(1);
  const [hasMore, setHasMore] = useState(true); 
  const GetTrending = async () => {
    try {
      const lowercaseCategory = category.toLowerCase();
      const lowercaseduration = duration.toLowerCase();
      const { data } = await axios.get(`/trending/${lowercaseCategory}/${lowercaseduration}?page=${page}`);
      if (data.results.length > 0) {
        settrending((prev) => [...prev, ...data.results]); 
        setpage((prevPage) => prevPage + 1); 
      } else {
        setHasMore(false); 
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    settrending([]); 
    setpage(1); 
    setHasMore(true); 
    GetTrending(); 
  }, [category, duration]);

  return trending.length > 0 ? (
    <>
      <div className='w-full overflow-hidden bg-gradient-to-r from-[#0c0c0c] from-20% to-[#0c4c3d] to-120%'>
        <Trendingnav category={setcategory} duration={setduration} />
        <InfiniteScroll
          dataLength={trending.length}
          next={GetTrending}
          hasMore={hasMore}
          loader={<h1 className='text-white font-semibold ml-2 mt-2'>Loading...</h1>}
        >
          <Trendingcard data={trending} title={category}/>
        </InfiniteScroll>
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Trending;
