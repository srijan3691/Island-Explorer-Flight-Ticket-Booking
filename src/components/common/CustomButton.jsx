import React from 'react'
import { Link } from 'react-router-dom'

const CustomButton = ({children ,active ,onClick }) => {
  return (
  
    <button onClick={onClick} className={`w-[300px] text-center text-[28px] px-6 py-3 rounded-md font-bold ${active ? 'bg-yellow-50 text-black':'text-richblack-5 bg-richblack-800'}
    transition-all duration-200
    hover:scale-95`}>
        {children}
    </button>

  )
}

export default CustomButton
