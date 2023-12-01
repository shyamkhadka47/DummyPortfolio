import React from 'react'
import EducationCard from '../layouts/EducationCard'

const Education = () => {
  return (
    <div className='min-h-screen bg-backgroundColor lg:px-32 mx-auto  '>
      <div className=''> 
       <div className='text-center text-4xl font-semibold underline underline-offset-[20px] mb-20 '> <h1 className='pt-10' >Education</h1></div>
      <EducationCard title={"Programming Course"}/>
      <EducationCard title={"Web Developer Course"}/>
      </div>
    </div>
  )
}

export default Education