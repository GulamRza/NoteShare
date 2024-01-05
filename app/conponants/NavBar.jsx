"use client";
import React from 'react'
import { useSession } from 'next-auth/react';
import { BiSearch } from 'react-icons/bi';

function NavBar() {

  const {data : session} = useSession();

  return (
    <div className='w-full flex items-center justify-between p-3 px-10 border-b-[0.5px] border-gray-600'>
        <div><a href='/'>NoteShare</a></div>
        <div>
        {session ? (
          <div className='flex gap-x-5 flex items-center'>
            <div className='flex items-center px-3 bg-gray-800 text-gray-300 rounded-2xl'>
                <BiSearch />
              <input type="text" className='p-1 bg-transparent focus:outline-none' />
            </div>
            <a href="/create-note">Create</a>
            <a href="/api/auth/signout">Signout</a>
          </div>
        ) : (
          <div className='flex gap-x-5'>
            <div>
            </div>
            <a href="/api/auth/signin">Signin</a>
            <a href="/register">Register</a>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar