import React from 'react'

function Dropdown({title,option,onchange}) {
  return (
    <>
    <div className="select w-28 h-8 rounded-md sm:h-9 sm:w-48 ">
      <select onChange={onchange} className='w-full h-full bg-[#272720] text-base font-normal p-1 rounded-md' defaultValue="0" name="format" id="format">
        <option value="">{title}</option>
        {option.map((item,index)=>(
          <option key={index} value={item}>{item}</option>
        ))}

      </select>
        
    </div>
    </>
  )
}

export default Dropdown;
