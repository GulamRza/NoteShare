"use client";
import React, { useState } from 'react'
import { useSession } from 'next-auth/react';
import { BiSearch } from 'react-icons/bi';
import { useRouter } from "next/navigation"


function NavBar() {

  const {data : session} = useSession();
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  function handleSearch(e){
    e.preventDefault();
    router.push(`/note/search?text=${searchText}`);
  }

  return (
    <div className='flex items-center justify-between p-3 px-10 border-b-[0.5px] border-gray-600'>
        <div><a href='/'>NoteShare</a></div>
        <div>
        {session ? (
          <div className='flex gap-x-5 items-center'>
            <form onSubmit={handleSearch} className='hidden lg:flex items-center px-3 bg-gray-800 text-gray-300 rounded-2xl '>
                <a><BiSearch /></a>
              <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} className='p-1 bg-transparent focus:outline-none' />
            </form>
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