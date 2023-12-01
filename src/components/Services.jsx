import React from 'react'
import ServiceCard from '../layouts/ServiceCard'
import { BiCodeAlt } from "react-icons/bi";
const Services = () => {
  const icon=<BiCodeAlt size={55} className=' text-brightColor' />
  return (
    <div className='min-h-screen  flex flex-col bg-backgroundColor'>
      <div className='  lg:px-32 px-5 my-20'>
        <h1 className='capitalize text-center text-4xl font-bold underline underline-offset-[15px] '>my Services</h1>


     
      </div>
      <div className='lg:px-32 px-5 flex flex-wrap justify-center items-center gap-10  pb-10'>
      <ServiceCard icon={icon} title={"web development"}/>
      <ServiceCard icon={icon} title={"web development"}/>
      <ServiceCard icon={icon} title={"web development"}/>
      <ServiceCard icon={icon} title={"web development"}/>
      <ServiceCard icon={icon} title={"web development"}/>
      <ServiceCard icon={icon} title={"web development"}/>
      <ServiceCard icon={icon} title={"web development"}/>
      <ServiceCard icon={icon} title={"web development"}/>
      <ServiceCard icon={icon} title={"web development"}/>
      <ServiceCard icon={icon} title={"web development"}/>
      </div>
    </div>
  )
}

export default Services