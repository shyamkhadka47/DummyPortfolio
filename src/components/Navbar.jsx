import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt1 } from "react-icons/hi";



const Navbar = () => {
    const [menu, setMenu]=useState(false)
  return (
    <div className='fixed w-full z-10 '>
        <div className='flex justify-between items-center bg-white shadow-[0_3px_5px_rgb(0,0,0,0.2)] p-5 sm:px-32 px-5'> 
            <div><h1 className='text-3xl font-bold'>Logo.</h1></div>
            <div className='hidden lg:flex items-center text-lg font-medium  gap-5'>
                <Link to='home' spy={true} smooth={true} duration={500}  className=' cursor-pointer hover:text-brightColor transition-all'>Home</Link>
                <Link to='about' spy={true} smooth={true} duration={500} className=' cursor-pointer hover:text-brightColor transition-all'>About Me</Link>
                <Link to='services' spy={true} smooth={true} duration={500} className=' cursor-pointer hover:text-brightColor transition-all'>Services</Link>
                <Link to='education' spy={true} smooth={true} duration={500} className=' cursor-pointer hover:text-brightColor transition-all'>Education</Link>

            </div>

            <div className='lg:hidden'>{
                menu ? <AiOutlineClose size={28} onClick={()=>{setMenu(false)}} /> : <HiOutlineMenuAlt1 size={28} onClick={()=>{setMenu(true)}} />


                }</div>
            </div>
                <div >
                    {menu? <> <div className={`${menu ? " translate-x-0" :"-translate-x-full"} flex w-full h-fit lg:hidden flex-col items-center font-medium py-5 bg-black text-white  gap-5 text-2xl transition-all duration-300 ease-in-out `}>
                <Link to='home' spy={true} smooth={true} onClick={()=>{setMenu(false)}} duration={500} className=' cursor-pointer hover:text-brightColor transition-all'>Home</Link>
                <Link to='about' spy={true} smooth={true} onClick={()=>{setMenu(false)}} duration={500} className=' cursor-pointer hover:text-brightColor transition-all'>About Me</Link>
                <Link to='services' spy={true} smooth={true} onClick={()=>{setMenu(false)}} duration={500} className=' cursor-pointer hover:text-brightColor transition-all'>Services</Link>
                <Link to='education' spy={true} smooth={true} onClick={()=>{setMenu(false)}} duration={500} className=' cursor-pointer hover:text-brightColor transition-all'>Education</Link>

              
                    </div></>: null}
                </div>
    </div>
  )
}

export default Navbar