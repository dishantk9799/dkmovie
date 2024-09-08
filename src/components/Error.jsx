import React from 'react'
import error from "/dk404.gif"
function Error() {
  return (
    <div className='bg-[#020000] overflow-hidden w-full h-full flex justify-center items-center'>
    <img className='w-[40vw] h-[40vw] sm:w-[20vw] sm:h-[20vw]' src={error} alt="" />
    </div>
  )
}

export default Error;
