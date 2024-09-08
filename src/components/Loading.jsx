import React from 'react'
import loader from "/dkloader.gif"
function Loading() {
  return (
    <div className='bg-[#020000] overflow-hidden w-full h-full flex justify-center items-center'>
      <img className='w-[40vw] h-[40vw] sm:w-[20vw] sm:h-[20vw]' src={loader} alt="" />
    </div>
  )
}

export default Loading;
