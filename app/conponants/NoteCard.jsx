"use client";
import React, { useState } from 'react'
import parse from 'html-react-parser';
import { BiUpvote, BiDownvote, BiShare, BiComment, BiSave } from "react-icons/bi";

function NoteCard({ note }) {
  const [ cNote, setCNote ] = useState(note);

  async function upvote(e){
    const res = await fetch(`/api/note/upvote?id=${note.id}`, {
      method : "POST"
    });
    setCNote({...cNote, upvotes : cNote.upvotes + 1});
  }
  async function devote(e){
    e.preventDefault();
    const res = await fetch(`/api/note/devote?id=${note.id}`, {
      method : "POST"
    });
    setCNote({...cNote, downvotes : cNote.downvotes + 1});
  }


  return (
    <div className="p-5 rounded-lg bg-gray-900 mb-3">
      <div className='flex justify-between items-end'>
        <h1 className="text-3xl"><a href={`/note/${note.id}`}>{cNote.title}</a></h1>
        <p className='text-gray-500'>by {cNote.writer.username}</p>
      </div>
      <div className='h-[0.5px] w-full bg-gray-700 my-2'></div>
      <div className='text-sm'>
        {parse(cNote.content)}
      </div>
      <div className='page-break'></div>
      <div className='flex justify-between text-gray-400'>
        <div className='flex gap-6'>
          <div className='flex items-center gap-2'>
            <a onClick={upvote}><BiUpvote /></a> {cNote.upvotes}
          </div>
          <div className='flex items-center gap-2'>
          <a onClick={devote}><BiDownvote /></a> {cNote.downvotes}
          </div>
          <div className='flex items-center gap-2'>
          <a><BiShare /></a> {cNote.shareCount}
          </div>
        </div>
        <div className='flex gap-6'>
          <div className='flex items-center gap-2'>
            <a><BiComment /></a> {cNote.shareCount}
          </div>
          <div className='flex items-center gap-2'>
            <a><BiSave /></a> {cNote.shareCount}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteCard