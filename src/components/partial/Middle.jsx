import React, { useState } from 'react'
import Dropdown from './Dropdown';

function Middle({category}) {
  
  return (
    
    <>
    <div className='w-full h-[10%] text-[6vw] flex justify-between items-center px-5 text-zinc-400 font-medium sm:text-[2vw] sm:h-[8%] sm:px-8'>
        <h1>Trending</h1>
        <Dropdown title="Filter" option={["TV","Movie","ALL"]} onchange={(e)=> category(e.target.value)}/>
    </div>
    </>
  )
}

export default Middle;
