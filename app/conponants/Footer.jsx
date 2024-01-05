import React from 'react'


function Footer() {
  return (
    <div className='w-full h-[350px] p-4 flex justify-between p-3 px-10 border-t-[0.5px] border-gray-600'>
        <div className='border-r-[0.5px] border-gray-800 p-4 w-[30%] flex flex-col gap-4 text-gray-600'>
            <a href='/' className='text-3xl font-bold '>NoteShare</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quod dicta delectus cupiditate placeat, non aperiam est eius adipisci quos?</p>
            <p>Here's What you can do</p>
            <ul>
                <li>Create Note</li>
                <li>Explore Other's Note</li>
                <li>Discuss Your Views</li>
            </ul>
        </div>        
        <div className='border-r-[0.5px] border-gray-800 p-4 w-[30%]'>

        </div>        
        <div className='p-4 w-[30%] flex flex-col gap-4'>
            <a href='/about-dev' className='text-3xl font-bold text-gray-600'>About Dev</a>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quod dicta delectus cupiditate placeat, non aperiam est eius adipisci quos?</p>
            <ul className='text-gray-600'>
                <li> - Gulam Raza</li>
                <li> - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, expedita?</li>
                <li className='flex w-full justify-around p-3 '>
                    <a href="" className='p-2 px-4 bg-gray-800 rounded-full'>A</a>
                    <a href="" className='p-2 px-4 bg-gray-800 rounded-full'>B</a>
                    <a href="" className='p-2 px-4 bg-gray-800 rounded-full'>C</a>
                    <a href="" className='p-2 px-4 bg-gray-800 rounded-full'>D</a>
                </li>
            </ul>
        </div>        
    </div>
  )
}

export default Footer