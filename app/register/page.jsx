"use client";
import React, { useState } from 'react'
import { useRouter } from "next/navigation"

function page() {

  const [ email, setEmail ] = useState("");
  const [ name, setName ] = useState("");
  const [ password, setPassword ] = useState("");
  const router = useRouter();

  async function handleSubmit(e){

    e.preventDefault();


    const res = await fetch("/api/register", {
      body : JSON.stringify({ email, name, password }),
      method : "POST",
      headers : { "Content-Type": "application/json"}
    });

    if(res.status == 201){
      const resData = await res.json();
      alert("User Created Successfully");
      router.push("/api/auth/signin");
      
    }else{
      alert("something went wrong");
    }
    
  }

  return (
    <div className='bg-gray-900 w-screen h-screen flex flex-col justify-center items-center'>
        <form action="/api/register" method='POST'
            className='p-8 w-[400px] bg-slate-950 rounded-3xl flex flex-col' >
            <label htmlFor="Email">Email</label>
            <input className="form-input" type="email" name='email' required value={email} onChange={(e) => {setEmail(e.target.value)}} />
            
            <label htmlFor="name">Name</label>
            <input className='form-input' type="text" name="name" required value={name} onChange={(e) => {setName(e.target.value)}} />
            
            <label htmlFor="passoword">Password</label>
            <input className='form-input' type="password" name="password" required value={password} onChange={(e) => {setPassword(e.target.value)}} />

            <button onClick={(e) => {handleSubmit(e)}} className='bg-slate-700'>Register</button>
            <button><a href="/api/auth/signin">Sign In</a></button>
        </form>
    </div>
  )
}

export default page