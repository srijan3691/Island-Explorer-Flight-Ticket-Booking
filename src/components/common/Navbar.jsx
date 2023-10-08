import React from 'react'
import HighlightText from './HighlightText';
import logo from "../../Assests/Images/Logo2-removebg.png"

const Navbar = () => {
  return (
    <div className='flex justify-center items-center border-b-4 border-sky-700  w-full h-28  bg-sky-200 rounded-lg position: sticky' >
        <div className='w-10/12 flex items-center justify-center gap-x-10 h-full '> 
            {/* Nijeder Image ta ekhane ekta img tag kore add kore dis */}
            <img src={logo} className='items-center h-24 w-5/12 p-1'>
            </img>
            {/* <HighlightText fontsize={"text-[55px] "} text={"Island Explorer"}/> */}
        </div>
    </div>
  )
}

export default Navbar