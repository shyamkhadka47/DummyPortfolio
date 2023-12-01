import React from 'react'

const ServiceCard = (props) => {
  return (
    <div>
    <div className='flex flex-col bg-white hover:bg-black hover:text-white transistion-all hover:-translate-y-2 w-[200px] h-full rounded-md duration-300 cursor-pointer mt-20 gap-4 p-5 text-center  shadow'>
      <div className='flex mx-auto'><span> {props.icon}</span></div>
      <h2 className='text-xl font-semibold capitalize'>{props.title}</h2>
      <p className=''>Blog-Ecommerce</p>
  
    </div>
  </div>
  )
}

export default ServiceCard