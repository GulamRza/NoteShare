"use client";
import React, { use, useState } from 'react'
import { BiCommentEdit } from "react-icons/bi";
import { useSession } from 'next-auth/react';


function Comment({ data, id }) {

  const [replies, setReplies] = useState([]);
  const [replying, setReplying] = useState(false);
  const [replyInput, setReplyInput] = useState("");
  const { data : session } = useSession();

  async function loadReplies() {
    const res = await fetch(`/api/comment?parentId=${id || ""}`);
    if(res.status == 201){
      const data = await res.json();
      setReplies([...data.comments]);
    }else{
      alert("something went wrong while fetching comments!!")
    }
  }

  async function submitReply() {
    const commentObj = {
      value : replyInput,
      writtenBy : session?.user?.name || "anonymus",
      parentId : id,
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
        setReplies([resData.comment, ...replies])
      }
    }else{
      alert("something went wrong");
    }

    setReplying(false);
  }


  return (
    <div className='pl-5'>
      <div className='flex items-center gap-2'>
        <p className='text-gray-500'>{data.writtenBy} </p>
        <span onClick={loadReplies} className='cursor-pointer'>{data._count.replies}</span>
        <span onClick={() => { setReplying(!replying) }}><BiCommentEdit /></span>

      </div>
      <p className='pl-5'>{data.value}</p>
      <br />

      {/* Show the input field only when user want to reply */}
      {replying && <>
        <input type="text" className='bg-transparent border' name='reply-input' value={replyInput} onChange={(e) => { setReplyInput(e.target.value) }} />
        <button onClick={submitReply}>Reply</button>
      </>}

      {/*  */}
      {replies.length > 0 && replies.map(reply => (
        <div key={reply.id} className='pl-5'>
          <Comment id={reply.id} data={reply} />
        </div>
      ))}
    </div>
  )
}

export default Comment