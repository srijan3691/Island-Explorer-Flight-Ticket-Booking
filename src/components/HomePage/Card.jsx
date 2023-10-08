import React from 'react'
import { Link } from 'react-router-dom/dist'

const Card = ({site,key}) => {
  return (
    <Link to={site.link} target='_blank'>
    <div className='flex flex-col w-[320px]   justify-center items-center h-[300px] gap-y-4 border-solid border-[1px] border-blue-25 rounded-lg bg-richblack-5 shadow-2xl drop-shadow-xl'>
        <img className='h-[60%] w-[85%]' src={site.image}></img>
        <div className='mt-2 border-solid border-t-[2px] border-richblack-300 w-full '></div>
          <p className='text-center text-2xl font-bold font-inter '>{site.name}</p>
        
        
    </div></Link>
  )
}

export default Card


// h-32 w-56