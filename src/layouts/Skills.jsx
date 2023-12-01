import React from 'react'

const Skills = (props) => {
  return (
    <div>
        <h3 className='text-xl mt-3'>{props.title}</h3>
        <div>
            <h3 className='text-[18px] mb-1 text-end'>{props.val}</h3>
            <div className=' bg-slate-300 rounded-full '>
                <div className={`${props.width} h-2 rounded-full bg-brightColor`}></div>
            </div>
        </div>
    </div>
  )
}

export default Skills