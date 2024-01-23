"use client";
import NavBar from '@/app/conponants/NavBar'
import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser';
import Comment from '@/app/conponants/Comment';
import { useSession } from 'next-auth/react';


function page({ params }) {

  const [note, setNote] = useState({});
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const { data : session } = useSession();

  
  async function fetchNote(){
    const res = await fetch(`/api/note/${params.id}`);
    if(res.status == 201){
      const data = await res.json();
      setNote(data.note);
      fetchComments(data.note.id);
    }
  }

  async function fetchComments(parentId){
    const res = await fetch(`/api/comment?parentId=${parentId}`);
    if(res.status == 201){
      const data = await res.json();
      setComments([...comments, ...data.comments]);
    }else{
      alert("something went wrong while fetching comments!!")
    }
  }

  async function submitComment(){

    const commentObj = {
      value : commentInput,
      writtenBy : session?.user?.name || "anonymus",
      parentId : note.id,
    }

    const res = await fetch('/api/comment', {
      method : "POST",
      body : JSON.stringify(commentObj),
      headers : {
        "Content-Type" : "application/json"
      }
    })

    if(res.status == 201){
      const resData = await res.json();
      if(resData.comment){
        setComments([resData.comment, ...comments])      
      }
    }else{
      alert("something went wrong");
    }
  }
  
  useEffect(() => {
    fetchNote();
  }, [])


  return (
    <>
        <NavBar />
        <div className='min-h-screen p-5'>
            <div className='flex flex-col lg:flex-row justify-between px-5'>
                <div className='text-[40px]'>{note.title}</div>
                <ul className='flex gap-5'>
                    <li>A</li>
                    <li>A</li>
                    <li>A</li>
                    <li>A</li>
                </ul>
            </div>
            <div className='page-break'></div>
            <div className='text-gray-300 px-5'>{parse(note.content || "")}</div>
            <div className='page-break'></div>
            <div>
              Comments <p className='text-gray-700 inline px-2'>{34}</p>
              <div>
                <input type="text" name="comment-input" value={commentInput} onChange={(e) => {setCommentInput(e.target.value)}} className='bg-transparent rounded border border-gray-300' />
                <button onClick={submitComment}>Comment</button>
              </div>
              {comments.map(comment => (
                <Comment key={comment.id} id={comment.id} data={comment} />
              ))}
            </div>
            <div className='p-10 flex justify-center gap-5'>
                <button>Did you find it useful?</button>
            </div>
        </div>
    </>
  )
}

export default page