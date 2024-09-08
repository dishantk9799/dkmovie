import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";
import Peoplenav from './partial/Peoplenav';
import Peoplecard from './partial/Peoplecard';

function People() {
    document.title = 'Dkmovie - Person';
    const [category, setcategory] = useState("person");
    const [people, setpeople] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const GetPeople = async () => {
        try {
          const lowercaseCategory = category.toLowerCase();
          const { data } = await axios.get(`/${lowercaseCategory}/popular?page=${page}`);
          if (data.results.length > 0) {
            setpeople((prev) => [...prev, ...data.results]); 
            setpage((prevPage) => prevPage + 1); 
          } else {
            setHasMore(false); 
          }
        } catch (err) {
          console.log(err);
        }
      };
      useEffect(() => {
        setpeople([]); 
        setpage(1); 
        setHasMore(true); 
        GetPeople(); 
      }, [category]);
  return people.length > 0 ? (
    <>
    <div className='w-full overflow-hidden bg-gradient-to-r from-[#0c0c0c] from-20% to-[#0c4c3d] to-120%'>
        <Peoplenav/>
        <InfiniteScroll
          dataLength={people.length}
          next={GetPeople}
          hasMore={hasMore}
          loader={<Loading/>}
        >
            <Peoplecard data={people} title="person"/>
        </InfiniteScroll>
    </div>
    </>
  ) : (<Loading />);
}

export default People;
