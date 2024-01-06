"use client";
import NavBar from '@/app/conponants/NavBar'
import React, { useEffect, useState } from 'react'

function page({ params }) {

  const [note, setNote] = useState({});
  
  async function fetchNotes(){
    const res = await fetch(`api/note?id=${params.id}`);
    if(res.status == 201){
      const data = await res.json();
      setNotes(data.notes);
    }
  }
  
  useEffect(() => {
    fetchNotes();
  }, [])


  return (
    <>
        <NavBar />
        <div className='min-h-screen p-5'>
            <div className='flex items-center justify-between px-5'>
                <div className='text-[40px]'>{note.title}</div>
                <ul className='flex gap-5'>
                    <li>A</li>
                    <li>A</li>
                    <li>A</li>
                    <li>A</li>
                </ul>
            </div>
            <div className='page-break'></div>
            <div className='text-gray-300 px-5'>{note.content}</div>
            <div className='p-10 flex justify-center gap-5'>
                <button>Did you find it useful?</button>
            </div>
        </div>
    </>
  )
}

export default page