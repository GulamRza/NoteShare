"use client";
import React, { useState } from 'react'
import NavBar from '../conponants/NavBar'
import { useSession } from 'next-auth/react';

import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false, loading: () => <p>Loading...</p> });
import 'react-quill/dist/quill.snow.css';

function page() {

  const [value, setValue] = useState('');
  const { data : session } = useSession();
  const [title, setTitle] = useState("");

  async function handleSubmit(){
    const res = await fetch('/api/note', {
      method : "POST",
      body : JSON.stringify({
        title: title,
        content: value,
        email : session?.user?.email
      }),
      headers : {
        "Content-Type" : "application/json"
      }
    })

    if(res.status === 201){
      const data = res.json();
      alert(`Notes Submitted Successfully! noteid : ${data.id}`)
    }else{
      alert("something went wrong!")
    }
  }

  return (
    <>
      { session ? (
        <div className='min-h-screen'>
          <NavBar />
          <div className='p-5'>
            <input className='w-full form-input' type="text" placeholder='Title' value={title} onChange={(e) => {setTitle(e.target.value)}} />
            <ReactQuill value={value} onChange={setValue}/>
            <button onClick={handleSubmit}>Share</button>
          </div>
        </div>

      ) : (
        <>
          You are not logged in!!
        </>
      )}
    </>
    
  )
}

export default page
