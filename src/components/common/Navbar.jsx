import React from 'react'
import HighlightText from './HighlightText';
import logo from "../../Assests/Images/Logo2-removebg.png"

const Navbar = () => {
  return (
    <div className='flex justify-center items-center w-full h-24 bg-sky-400 rounded-lg ' >
        <div className='w-10/12 flex items-center justify-center gap-x-10 h-full '> 
            {/* Nijeder Image ta ekhane ekta img tag kore add kore dis */}
            <img src={logo} className='h-20 w-30'>
            </img>
            {/* <HighlightText fontsize={"text-[55px] "} text={"Island Explorer"}/> */}
        </div>
    </div>
  )
}

export default Navbar