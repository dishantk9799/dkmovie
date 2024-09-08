import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";
import Tvshowcard from './partial/Tvshowcard';
import Tvshownav from './partial/Tvshownav';

function Tvshow() {
    document.title = 'Dkmovie - TV Show';
    const [category, setcategory] = useState("airing_today");
    const [tvshow, settvshow] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const GetTvshow = async () => {
        try {
          const lowercaseCategory = category.toLowerCase();
          const { data } = await axios.get(`/tv/${lowercaseCategory}?page=${page}`);
          if (data.results.length > 0) {
            settvshow((prev) => [...prev, ...data.results]); 
            setpage((prevPage) => prevPage + 1); 
          } else {
            setHasMore(false); 
          }
        } catch (err) {
          console.log(err);
        }
      };
      useEffect(() => {
        settvshow([]); 
        setpage(1); 
        setHasMore(true); 
        GetTvshow(); 
      }, [category]);
  return tvshow.length > 0 ? (
    <>
    <div className='w-full overflow-hidden bg-gradient-to-r from-[#0c0c0c] from-20% to-[#0c4c3d] to-120%'>
        <Tvshownav category={setcategory}/>
        <InfiniteScroll
          dataLength={tvshow.length}
          next={GetTvshow}
          hasMore={hasMore}
          loader={<Loading/>}
        >
            <Tvshowcard data={tvshow} title="tv"/>
        </InfiniteScroll>
    </div>
    </>
  ) : (<Loading />);
}

export default Tvshow;
