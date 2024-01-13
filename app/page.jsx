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
  const [noMoreNotes, setNoMoreNotes] = useState(false);

  async function fetchNotes(){
    const res = await fetch("/api/note");
    if(res.status == 201){
      const data = await res.json();
      setNotes(data.notes);
    }
  }

  async function loadMoreNotes(){
    const res = await fetch(`/api/note?skip=${notes.length}&take=${5}`);
    if(res.status == 201){
      const data = await res.json();
      console.log(data.notes);
      setNotes([...notes, ...data.notes]);
      if(data.notes.length < 5){
        setNoMoreNotes(true);
      }
    }
  }
  
  useEffect(() => {
    fetchNotes();
  }, [])

  return (
    <>
      <NavBar />
      { session ? (
      <div className="min-h-screen">
        <div className="flex gap-2 lg:p-4">
          <div className="bg-gray-800 rounded-lg hidden lg:flex lg:w-[30%]">

          </div>
          <div className="lg:w-[70%] p-2 lg:py-0">
            {notes.map( note => (
              <NoteCard key={note.id} note={note} />
            ))}
            { !noMoreNotes && <button onClick={loadMoreNotes}>Load More</button>}
          </div>
          <div className="p-2 w-14 bg-gray-800 rounded-lg hidden lg:flex flex-col gap-2">
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
