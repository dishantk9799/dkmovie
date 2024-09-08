import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";
import Moviescard from './partial/Moviescard';
import Moviesnav from './partial/Moviesnav';

function Movies() {
    document.title = 'Dkmovie - Movies';
    const [category, setcategory] = useState("now_playing");
    const [movies, setmovies] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const GetMovies = async () => {
        try {
          const lowercaseCategory = category.toLowerCase();
          const { data } = await axios.get(`/movie/${lowercaseCategory}?page=${page}`);
          if (data.results.length > 0) {
            setmovies((prev) => [...prev, ...data.results]); 
            setpage((prevPage) => prevPage + 1); 
          } else {
            setHasMore(false); 
          }
        } catch (err) {
          console.log(err);
        }
      };
      useEffect(() => {
        setmovies([]); 
        setpage(1); 
        setHasMore(true); 
        GetMovies(); 
      }, [category]);
  return movies.length > 0 ? (
    <>
    <div className='w-full overflow-hidden bg-gradient-to-r from-[#0c0c0c] from-20% to-[#0c4c3d] to-120%'>
        <Moviesnav category={setcategory}/>
        <InfiniteScroll
          dataLength={movies.length}
          next={GetMovies}
          hasMore={hasMore}
          loader={<Loading/>}
        >
            <Moviescard data={movies} title="movie"/>
        </InfiniteScroll>
    </div>
    </>
  ) : (<Loading />);
}

export default Movies;
