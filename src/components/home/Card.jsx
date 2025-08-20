import React from 'react'

const Card = ({num, cont_1, cont_2, cont_3}) => {
  return (
    <div className='w-50%'>
        <div className=' w-[100%] h-[2px] bg-amber-800'>
            <div className=' w-[30%] hover:w-[100%] bg-amber-950 h-[2px]'></div>
        </div>
        <div className='flex space-x-1 items-center'><span className='text-sm'>Cahpter -</span><span className='text-2xl'>{num}</span></div>
        <div className='text-2xl'>{cont_1}</div>
        <div className='text-2xl'>{cont_2}</div>
        <div className='flex justify-between mt-5'><span>{cont_3}</span><span className='text-lg'>logo</span></div>
    </div>
  )
}

export default Card