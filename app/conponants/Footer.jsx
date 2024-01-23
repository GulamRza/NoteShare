import React from 'react'
import { BiLogoInstagram, BiLogoGithub, BiLogoLinkedinSquare, BiSolidNetworkChart, BiNetworkChart } from "react-icons/bi";


function Footer() {
  return (
    <div className='w-full flex flex-col lg:flex-row justify-between p-4 px-10 gap-4 border-t-[0.5px] border-gray-800 '>
        <div className=' flex flex-col gap-4 text-gray-600'>
            <a href='/' className='text-3xl font-bold '>NoteShare</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quod dicta delectus cupiditate placeat, non aperiam est eius adipisci quos?</p>
            <p>Here's What you can do</p>
            <ul>
                <li>Create Note</li>
                <li>Explore Other's Note</li>
                <li>Discuss Your Views</li>
            </ul>
        </div>        
        <div className=''>

        </div>        
        <div className='flex flex-col gap-4'>
            <a href='/about-dev' className='text-3xl font-bold text-gray-600'>About Dev</a>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quod dicta delectus cupiditate placeat, non aperiam est eius adipisci quos?</p>
            <ul className='text-gray-600'>
                <li> - Gulam Raza</li>
                <li> - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, expedita?</li>
                <li className='flex w-full justify-center gap-3 p-3 '>
                    <a href="" className='text-2xl p-2 bg-gray-800 rounded-full'><BiLogoGithub /></a>
                    <a href="" className='p-2 text-2xl bg-gray-800 rounded-full'><BiLogoInstagram /></a>
                    <a href="" className='p-2 text-2xl bg-gray-800 rounded-full'><BiLogoLinkedinSquare /></a>
                    <a href="" className='p-2 text-2xl bg-gray-800 rounded-full'><BiNetworkChart /></a>
                </li>
            </ul>
        </div>        
    </div>
  )
}

export default Footer