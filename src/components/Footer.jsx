import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaDiscord, FaFacebook, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:flex-row gap-5 items-center justify-between lg:px-32 px-5 bg-white p-5'>
            <div className='flex gap-5'>
                <BsInstagram size={32} className=' hover:text-brightColor transition-all cursor-pointer'/>
                <FaFacebook size={32} className=' hover:text-brightColor transition-all cursor-pointer'/>
                <FaLinkedin size={32} className=' hover:text-brightColor transition-all cursor-pointer'/>
                <FaDiscord size={32} className=' hover:text-brightColor transition-all cursor-pointer'/>
            </div>

            <h1 className='capitalize text-3xl font-semibold'>Shyam Khadka</h1>
        </div>
    </div>
  )
}

export default Footer