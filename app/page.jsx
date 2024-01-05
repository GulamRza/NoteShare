"use client";
import { useSession } from "next-auth/react"
import NavBar from "./conponants/NavBar";
import { useEffect, useState } from "react";
import NoteCard from "./conponants/NoteCard";
import LandingPage from "./conponants/LandingPage";
import Footer from "./conponants/Footer";


export default function Home() {

  const { data : session } = useSession();

  const [notes, setNotes] = useState([]);

  async function fetchNotes(){
    const res = await fetch("api/note");
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
      { session ? (
      <div className="p-3 min-h-screen">
        <div>
          
        </div>
        <div className="flex">
          <div className="w-[30%] bg-gray-900 m-2 rounded-lg">

          </div>
          <div className="w-[70%] min-w-[600px]">
            {notes.map( note => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
          <div className="p-2 w-14 bg-gray-800 m-2 rounded-lg flex flex-col gap-2">
            <div className="p-4 bg-gray-900 rounded"></div>
            <div className="p-4 bg-gray-900 rounded"></div>
            <div className="p-4 bg-gray-900 rounded"></div>
            <div className="p-4 bg-gray-900 rounded"></div>
          </div>      
        </div>
      </div>) : (
        <LandingPage />
      ) }
      <Footer />
    </>
  )
}
